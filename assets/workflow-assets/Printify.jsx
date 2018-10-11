/*

This is a sctipt that can be run inside Adobe Illustrator. To access it inside Illustrator save it to Applications/{Adobe Illustrator Application Folder}/Presets/{Language Folder}/{Script Folder}/Printify.jsx

WHAT IS THIS SCRIPT DOING?
 - It duplicates all the layers of the currently selected artboard and inserts them in the PRINT artboard (required, see list below). 
 - In a dialog the script asks for the desired amount of columns for print defining PRINT IS final width. 
 - Once confirmed, the duplicated content is downscaled proportionally to fit into PRINT's width. 
 - PRINT's height is automatically calculated in respect of print's baselines and the heights of the scaled content, the head line above and the foot line below the content. 
 - The dialog allows to provide title, sources and/or author line and replaces those texts in the PRINT artboard. 
 - As a further dialog option, all text elements inside the duplicated content can be converted to the print's default font style.

WHY IS THIS SCRIPT USEFUL?
Following the 'online first' approach, normally two versions of a graphic are produced: One for mobile and one for desktop. 
To avoid the production of a totally different third version for print, either the desktop or the mobile version should serve 
as the blue print. By running this script, many steps for the print adaption are done automatically for you: 
- Down-scaling of the graphic into correct size (pixel to millimeters)
- Conversion of the graphic's fonts 
- Adding of text lines needed in head and foot line
If applied successfully, the script finally offers you a almost-ready PRINT artboard – or at least a comfortable starting point for the graphic's print version.   

WHAT ELEMENTS ARE REQUIRED IN THE ILLUSTATOR FILE I RUN THE SCRIPT? 
If these requirements are not fulfilled, the script will be interrupted:
- A artboard named "PRINT" is needed.
- A (top-level) layer named "PRINT" is needed.
- The PRINT layer needs to consist of three group items (not layer items!) named:
  - "Kopf"
  - "Grafik"
  - "Fuss"
- Group item "Kopf" needs one text frame item (for the title).
- Group item "Fuss" needs two text frame item (one for sources and one for the author line).

*/

// Get main references
var doc = app.activeDocument,
  selection = doc.selection,
  artboard = doc.artboards[ doc.artboards.getActiveArtboardIndex() ],
  artboardBounds = getArtboardBounds(artboard);


// Get PRINT artboard
var printArtboard = doc.artboards.getByName("PRINT");
if (printArtboard === artboard) {
  alert("Please select another artboard – the selected one seems to be the print artboard already");
  exit();
}

// Get PRINT layer and three sub-group references
var printLayer = doc.layers.getByName("PRINT");
if (printLayer === undefined) {
  alert("PRINT Layer not found");
  exit();
}
if (printLayer.groupItems.length !== 3) {
  alert("Please check the group items of the print layer – it should only consist of the 3 groups Kopf, Grafik and Fuss (found groups: " + printLayer.groupItems.length + ")");
  alert(printLayer.groupItems[0].name)
  exit();
}
var printHeaderGroup = printLayer.groupItems.getByName("Kopf");
var printGraphicGroup = printLayer.groupItems.getByName("Grafik");
var printFooterGroup = printLayer.groupItems.getByName("Fuss");


// Recreate Grafik Group to empty its content when (re-)running the script 
printGraphicGroup.remove();
printGraphicGroup = printLayer.groupItems.add();
printGraphicGroup.name = "Grafik";
printGraphicGroup.move(printFooterGroup, ElementPlacement.PLACEAFTER)


// Get text three frame references
if (printHeaderGroup.textFrames.length !== 1 || printFooterGroup.textFrames.length !== 2) {
  alert("Check the print layers groups: the Kopf group should contain one and the Fuss group two text fields");
  exit();
}
var titleTextFrame = printHeaderGroup.textFrames[0];    // title text element reference
var sourcesTextFrame = printFooterGroup.textFrames[0];  // source text element reference
var authorTextFrame = printFooterGroup.textFrames[1];   // author text element reference


// Set constants
var mmInPixel = 2.83464566929,        // millimeter-to-pixel factor 
  baselineHeight = 3.7 * mmInPixel,   // baseline height in pixels
  columnMmWidths = [54.2, 113.4, 172.6, 231.8, 291, 350.2, 409.4, 468.6, 527.8, 587];   // width of 1 to 10 columns in millimeters

//
// getArtboardBounds() 
// => make the boundings of an artboard more readable
//
function getArtboardBounds(artboard) {
  var bounds = artboard.artboardRect,
      left = bounds[0],
      top = bounds[1],
      right = bounds[2],
      bottom = bounds[3],
      width = right - left,
      height = top - bottom;
  return {
    left: left,
    top: top,
    width: width,
    height: height
  };
}

//
// setArtboardBounds() 
// => set the boundings of an artboard by applying the readable format (see above)
//
function setArtboardBounds(artboard, bounds) {
  var rect = [
    bounds.left,
    bounds.top,
    bounds.left + bounds.width,
    bounds.top - bounds.height
  ];
  artboard.artboardRect = rect;
}

//
// duplicateToPrintArtboard()
// => duplicate objects of active artboard to PRINT artboard
//
function duplicateToPrintArtboard(printColumns) {

  // move online artboard elements to print artboard
  var printArtboardBounds = getArtboardBounds(printArtboard)
  var xTranslation = printArtboardBounds.left - artboardBounds.left;
  var yTranslation = printArtboardBounds.top - artboardBounds.top;
  app.activeDocument.selectObjectsOnActiveArtboard();
  for (var i = selection.length - 1; i >= 0; i--) {
    var duplicatedItem = selection[i].duplicate(printGraphicGroup); 
    duplicatedItem.selected = false;
    duplicatedItem.translate(xTranslation, yTranslation, true, true, true, true)
  };
  

  // set print artboard's width
  var targetPrintWidth = columnMmWidths[printColumns - 1] * mmInPixel; 
  printArtboardBounds.width = targetPrintWidth;  
  
  
  // scale layer group to fit inside print artboard
  var scaleFactor = targetPrintWidth / artboardBounds.width;
  printGraphicGroup.resize(scaleFactor * 100, scaleFactor * 100, true, true, true, true, true, Transformation.DOCUMENTORIGIN);


  // adapt source text frame alignment and rectangle widths according to new width
  authorTextFrame.left = targetPrintWidth - authorTextFrame.width;
  for (var i=0, len=printHeaderGroup.pathItems.length; i < len; i++) {
    printHeaderGroup.pathItems[i].width = targetPrintWidth;
  };
  for (var i=0, len=printFooterGroup.pathItems.length; i < len; i++) {
    printFooterGroup.pathItems[i].width = targetPrintWidth;
  };


  // set height for print artboard and place graphic's and footer's vertical position
  printGraphicGroup.top -= printHeaderGroup.height;
  var numBaselines = Math.ceil((artboardBounds.height * scaleFactor) / baselineHeight);
  printArtboardBounds.height = printHeaderGroup.height + (numBaselines * baselineHeight) + printFooterGroup.height;
  printFooterGroup.top = (printHeaderGroup.height + (numBaselines * baselineHeight)) * -1;
  setArtboardBounds(printArtboard, printArtboardBounds);  

  // deselect duplicated group and artboard
  printGraphicGroup.selected = false;
  printArtboard.selected = false;

}

function convertPrintTextFramesToUnivers(group, convertFontsToBlack, convertCount) {
  var textFont = textFonts.getByName("UniversLTStd-LightCn");
  for (var i = 0; i < group.textFrames.length; i++) {
    var item = group.textFrames[i];
    if (item.textRange && item.textRange.characterAttributes) {
      item.textRange.characterAttributes.size = 8;
      item.textRange.characterAttributes.textFont = textFont;  
      if (convertFontsToBlack === true) {
        item.textRange.characterAttributes.fillColor = new RGBColor();
      }
    }
  }
  convertCount += group.textFrames.length;
  for (i = 0; i < group.groupItems.length; i++) {
    convertCount = convertPrintTextFramesToUnivers(group.groupItems[i], convertFontsToBlack, convertCount);      
  }
  return convertCount;
}

function updatePrintTextFrames(title, sources, author) {
  // update title, source and authors
  titleTextFrame.contents = title;
  sourcesTextFrame.contents = sources;
  authorTextFrame.contents = author;
}

//
// showDialog() 
// => construct and show dialog to kick-off things
//
function showDialog() {
  
  // create dialog
  var dialogWindow = new Window('dialog', 'Auf PRINT-Artboard kopieren');  


  // choose number of columns for print
  dialogWindow.add('statictext', undefined, "Spaltenanzahl");
  dialogWindow.columnSelect = dialogWindow.add('dropdownlist', undefined, [1,2,3,4]);
  dialogWindow.columnSelect.selection = 0;


  // choose title, source, author 
  dialogWindow.headerFooterBar = dialogWindow.add("panel", undefined, "Kopf- und Fusszeile");
  dialogWindow.headerFooterBar.add('statictext', undefined, "Titel");
  dialogWindow.headerFooterBar.title = dialogWindow.headerFooterBar.add("edittext", { x: 0, y: 0, width: 200, height: 20 }, titleTextFrame.contents);
  dialogWindow.headerFooterBar.add('statictext', undefined, "Quellen");
  dialogWindow.headerFooterBar.sources = dialogWindow.headerFooterBar.add("edittext", { x: 0, y: 0, width: 200, height: 20 }, sourcesTextFrame.contents);
  dialogWindow.headerFooterBar.add('statictext', undefined, "Kürzel");
  dialogWindow.headerFooterBar.author = dialogWindow.headerFooterBar.add("edittext", { x: 0, y: 0, width: 200, height: 20 }, authorTextFrame.contents);

  // choose font conversion
  dialogWindow.convertFonts = dialogWindow.add('checkbox', undefined, "Alle enthaltenen Schriftelemente zu Univers Condensed/8pt konvertieren");
  dialogWindow.convertFontsToBlack = dialogWindow.add('checkbox', undefined, "Schriftelemente zusätzlich schwarz einfärben");

  // add okay button and add listener
  dialogWindow.button = dialogWindow.add('button', undefined, "Import for Print");
  dialogWindow.button.onClick = importForPrint;
  dialogWindow.show();  
  function importForPrint() {
    var numColumns = dialogWindow.columnSelect.selection + 1;
    var title = dialogWindow.headerFooterBar.title.text;
    var sources = dialogWindow.headerFooterBar.sources.text;
    var author = dialogWindow.headerFooterBar.author.text;
    var convertFonts = dialogWindow.convertFonts.value;
    var convertFontsToBlack = dialogWindow.convertFontsToBlack.value;
    dialogWindow.close();

    updatePrintTextFrames(title, sources, author);
    duplicateToPrintArtboard(numColumns);
    if (convertFonts === true) {
      convertCount = convertPrintTextFramesToUnivers(printGraphicGroup, convertFontsToBlack, 0);
      alert(convertCount + " Schriftelemente wurden in der Grafik gefunden und zu Univers Condensed/8pt konvertiert.")
    }
    alert("Grafik wurde erfolgreich auf dem PRINT-Artboard eingefügt")
  }

}

showDialog(); // initial function call


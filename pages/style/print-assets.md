```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

# Print

## Grafik-Template 2019

This is the current template for all graphics. In the template, you will find 3 artboards sized by the devices that Q supports as well as the an artboard for print graphics with the grid. Settings are in pixels and in RGB. 

```download
title: Grafik-Template (.ait)
subtitle: 172 KB
url: assets/print-assets/Grafik_2019.ait
```

## Q-to-Print-Template 2019

This is the current template for all graphics. In the template, you will find an artboard for print graphics with the grid. Settings are in millimeters and CMYK. 

```download
title: Grafik-Template (.ait)
subtitle: 172 KB
url: assets/print-assets/Q-to-Print_2019.ait
```

## Karten-Template 2019

This is the current template for all maps. In the template, you will find an artboard for print graphics with the grid. Settings are in millimeters and CMYK. 

```download
title: Karten-Template (.ait)
subtitle: 494 KB
url: assets/print-assets/Karte_2019.ait
```

## Panorama-Template

This is the current template used for laying out graphics that span across a Panorama with 10 columns. Settings are in millimeters and CMYK. 

```download
title: Karte Template (.ait)
subtitle: 228 KB
url: assets/print-assets/Panorama.ait
```

## 'Online First' Workflow: RGB-Template + Script

Following the 'online first' approach, normally two versions of a graphic are produced: One for mobile and one for desktop. To avoid the production of a totally different third version for print, either the desktop or the mobile version should serve as the blue print. By using the template below and running the script, many steps for the print adaption are done automatically for you:

- Down-scaling of the graphic into correct size (pixel to millimeters)
- Conversion of the graphic's fonts to print style
- Adding of text lines needed in head and foot line

If applied successfully, the script finally offers an almost-ready PRINT artboard – or at least a comfortable starting point for the graphic's print version.
[Here's a flow diagram of the script](assets/workflow-assets/script-flowdiagram.pdf) that's also a cheat sheet to quickly evaluate a size for print, if this information is needed a bit earlier.

```download
title: RGBWorkflowTemplate (.ait)
subtitle: RGB template that fulfills the structural requirements of the script
url: assets/workflow-assets/VorlageRGBWorkflow.ait
```

```download
title: Printify (.jsx)
subtitle: "Install the script here: Applications/{Adobe Illustrator Application Folder}/Presets/{Language Folder}/{Script Folder}/Printify.jsx – run it in Illustrator like that: Datei > Skripten > Prinify "
url: assets/workflow-assets/Printify.jsx
```

In detail, this is what the scipt does, when you run it in Adobe Illustrator:

- It duplicates all the layers of the currently selected artboard and inserts them in the PRINT artboard.
- In a dialog the script asks for the desired amount of columns for print defining PRINT's final width.
- Once confirmed, the duplicated content is down-scaled proportionally to fit into PRINT's width.
- PRINT's height is automatically calculated in respect of print's baselines and the heights of the scaled content, the head line above and the foot line below the content.
- The dialog allows to provide title, sources and/or author line and replaces those texts in the PRINT artboard.
- As a further dialog option, all text elements inside the duplicated content can be converted to the print's default font style.

For further infos, read the description in the script's head or see the flow diagram above.

```html|span-1,no-source,plain
<div class="stabilityIndex experimental">Experimental</div>
```

The templates for print maps can be found on the [assets page](assets).

## Main Map
Simple pointer maps are made in Q. We do maps by hand when we have more complex information. We are simple and clear, means we don’t show everything (all the streets, rivers, lakes, regionborders) but we focus on the main message of the map. 

```image
plain: true
span: 6
src: "/assets/guidelines/Karte@1x.png 1x, /assets/guidelines/Karte@2x.png 2x" 
```

## Map Colors (also listed in Colors)
 colors:
  - {name: "Rivers, lakes - primary", value: "#add8e6"}
  - {name: "Oceans – primary", value: "#CEE9F2"}
  - {name: "Forests, national parks, etc. – primary", value: "rgba(29,133,52,0.30)"}
  - {name: "main country", value: "#ffffff"}
  - {name: "secondary country", value: "#ececf0"}
  - {name: "Region 1", value: "#fad250"}
  - {name: "Region 2", value: "#dbd8bf"}
  
  ## Map Typo
  - Main country: GT Amercica Black, 13 pt
  - Secondary country: GT America Bold, 13 pt, #b6b6be 
  - Capital: GT Amercica Bold, 13 pt
  - City: GT America Regular, 13 pt
  - Region 1: GT America Light, 13 pt, #d4a91e
  - Region 2: GT America Light, 13 pt, #6e6e7e
  - Lake, river: GT America Light, 13 pt, #0093bf
  
## Mini-Map
The Minimap helps to show the position of the main map. To make that clear we use the same colors as in the main map. We leave out details such as water, regions, roads etc. as long as the main information still is visible. The focus should lie on the section we show on the Main map.
We always have to question if a minimap is needed or if the positioning is already clear in the main map.

## Annotations
Annotations in maps can help to tell the story. A way to make clear where the annotation belongs and to increase readability is to put the text into a coloured box. 




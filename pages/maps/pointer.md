```html|span-1,no-source,plain
<div class="stabilityIndex experimental">Experimental</div>
```

The templates for print maps can be found on the [assets page](assets). Color definitions for maps can be found on the [color page](https://nzzdev.github.io/Storytelling-Styleguide/#/colors?a=maps-colors)

## Main Map

Simple pointer maps are made in Q. We do maps by hand when we have more complex information. We are simple and clear, means we don’t show everything (all the streets, rivers, lakes, region borders) but we focus on the main message of the map.


## Map Colors (also listed in Colors)

```color-palette
colors:
  - {name: "Rivers, lakes - primary", value: "#add8e6"}
  - {name: "Oceans – primary", value: "#CEE9F2"}
  - {name: "Forests, national parks, etc. – primary", value: "rgba(29,133,52,0.30)"}
  - {name: "main country", value: "#ffffff"}
  - {name: "secondary country", value: "#ececf0"}
  - {name: "Region 1", value: "#fad250"}
  - {name: "Region 2", value: "#dbd8bf"}
```

## Map Typo

```type
{
  kern: true,
  "headings": [
    { "label": "MAIN COUNTRY", "value": 13 },
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#05032d",
  weight: 500
}
```

```type
{
  kern: true,
  "headings": [
    { "label": "Capital", "value": 13 }
  ],
  weight: 500, color: "#05032d",
  font: "nzz-sans-serif, sans-serif",
}
```

```type
{
  kern: true,
  "headings": [
    { "label": "City", "value": 13 },
    { "label": "REGION", "value": 13 }
  ],
  weight: 300, color: "#05032d",
  font: "nzz-sans-serif, sans-serif",
}
```

```type
{
  kern: true,
  "headings": [
    { "label": "SECONDARY COUNTRY", "value": 13 }
  ],
  weight: 300,
  color: "#b6b6be",
  font: "nzz-sans-serif, sans-serif",
}
```

```type
{
  kern: true,
  "headings": [
    { "label": "Region 1", "value": 13 }

  ],
  weight: 300, color: "#d4a91e",
  font: "nzz-sans-serif, sans-serif",
}
```

```type
{
  kern: true,
  "headings": [
    { "label": "Region 2", "value": 13 }

  ],
  weight: 300, color: "#6e6e7e",
  font: "nzz-sans-serif, sans-serif",
}
```

```type
{
  kern: true,
  "headings": [
    { "label": "Lake, River", "value": 13 }

  ],
  weight: 300, color: "#0093bf",
  font: "nzz-sans-serif, sans-serif",
}
```

## Mini-Map

The Minimap helps to show the position of the main map. To make that clear we use the same colors as in the main map. We leave out details such as water, regions, roads etc. as long as the main information still is visible. The focus should lie on the section we show on the Main map.
We always have to question if a minimap is needed or if the positioning is already clear in the main map.

## Annotations

Annotations in maps can help to tell the story. A way to make clear where the annotation belongs and to increase readability is to put the text into a coloured box.

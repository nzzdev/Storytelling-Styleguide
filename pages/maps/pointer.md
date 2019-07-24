```html|span-1,no-source,plain
<div class="stabilityIndex experimental">Experimental</div>
```

The templates for print maps can be found on the [assets page](assets). Color definitions for maps can be found on the [color page](https://nzzdev.github.io/Storytelling-Styleguide/#/colors?a=maps-colors)

## Simple Maps

Simple pointer maps are made in Q. These maps are typically used for simple localization.

```image
plain: true
span: 6
src: "assets/maps/pointer-maps_regular@1x.png 1x, assets/maps/pointer-maps_regular@1x.png 2x"
```

Slightly more complex maps can be done using geoJSON and using the geoJSON Feature/Feature Collection field in the Q Map tool. These can be used for hiking trails, race courses, tram lines or to highlight street work. GeoJSON maps that color entire areas should calculated carefully or be produced with geoJSON from a trusted source (example IHS Conflict Monitor).

```image
plain: true
span: 6
src: "assets/maps/pointer-maps_geojson@1x.png 1x, assets/maps/pointer-maps_geojson@1x.png 2x"
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

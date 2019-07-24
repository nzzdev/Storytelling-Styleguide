```html|span-1,no-source,plain
<div class="stabilityIndex experimental">Experimental</div>
```

The templates for print maps can be found on the [assets page](assets). Color definitions for maps can be found on the [color page](https://nzzdev.github.io/Storytelling-Styleguide/#/colors?a=maps-colors)

## Simple Maps

Simple pointer maps are made in Q. These maps are typically used for simple localization.

```image
plain: true
span: 4
src: "assets/maps/pointer-maps_regular@1x.png 1x, assets/maps/pointer-maps_regular@1x.png 2x"
```

Slightly more complex maps can be done using geoJSON and using the geoJSON Feature/Feature Collection field in the Q Map tool. These can be used for hiking trails, race courses, tram lines or to highlight street work. GeoJSON maps that color entire areas should calculated carefully or be produced with geoJSON from a trusted source (example IHS Conflict Monitor).

[Go here](http://geojson.io/) to create simple geoJSON Features for Q.

```image
plain: true
span: 4
src: "assets/maps/pointer-maps_geojson@1x.png 1x, assets/maps/pointer-maps_geojson@1x.png 2x"
```

## Mini-Map

The minimap helps to show the position of the main map. To make that clear we use the same colors as in the main map. We leave out details such as water, regions, roads etc. as long as the main information still is visible. The focus should lie on the section we show on the Main map.
We always have to question if a minimap is needed or if the positioning is already clear in the main map.

## Annotations

Annotations in maps can help to tell the story. A way to make clear where the annotation belongs and to increase readability is to put the text into a colored box.


## Map Type Definitions

### Mobile
```type
{
  kern: true,
  "headings": [
    { "label": "main country, state", "value": 14 },
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#6e6e7e",
  weight: 200,
  tracking: 60
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "capital city", "value": 16 }
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#6e6e7e",
  weight: 500
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "city", "value": 15 }
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#05032d",
  weight: 300
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "scale", "value": 13 }
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#05032d",
  weight: 300
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "secondary region", "value": 13 }
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
    { "label": "region 1", "value": 14 }

  ],
  weight: 300, color: "#d4a91e",
  font: "nzz-sans-serif, sans-serif",
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "region 2", "value": 13 }

  ],
  weight: 300, color: "#6e6e7e",
  font: "nzz-sans-serif, sans-serif",
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "waterways", "value": 13 }

  ],
  weight: 300, color: "#0093bf",
  font: "nzz-sans-serif, sans-serif",
}
```

## Content Width +
```type
{
  kern: true,
  "headings": [
    { "label": "main country, state", "value": 15 },
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#6e6e7e",
  weight: 200,
  tracking: 60
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "capital city", "value": 17 }
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#6e6e7e",
  weight: 500
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "city", "value": 14 }
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#05032d",
  weight: 300
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "scale", "value": 13 }
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#05032d",
  weight: 300
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "secondary region", "value": 13 }
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
    { "label": "region 1", "value": 14 }

  ],
  weight: 300, color: "#d4a91e",
  font: "nzz-sans-serif, sans-serif",
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "region 2", "value": 13 }

  ],
  weight: 300, color: "#6e6e7e",
  font: "nzz-sans-serif, sans-serif",
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "waterways", "value": 13 }

  ],
  weight: 300, color: "#0093bf",
  font: "nzz-sans-serif, sans-serif",
}
```

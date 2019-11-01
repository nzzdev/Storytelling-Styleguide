```html|span-1,no-source,plain
<div class="stabilityIndex experimental">Experimental</div>
```

The templates for print maps can be found on the [assets page](assets). Color definitions for maps can be found on the [color page](https://nzzdev.github.io/Storytelling-Styleguide/#/colors?a=maps-colors)

## Simple Maps

Simple pointer maps are made in Q. These maps are typically used for simple localization.

```image
plain: true
span: 5
src: "assets/maps/pointer-maps_regular@1x.png 1x, assets/maps/pointer-maps_regular@2x.png 2x"
```

## geoJSON

Slightly more complex maps can be done using geoJSON and using the geoJSON Feature/Feature Collection field in the Q Map tool. These can be used for hiking trails, race courses, tram lines or to highlight street work. GeoJSON maps that color entire areas should calculated carefully or be produced with geoJSON from a trusted source (example IHS Conflict Monitor).

[Go here](http://geojson.io/) to create simple geoJSON Features for Q.

```image
plain: true
span: 5
src: "assets/maps/pointer-maps_geojson@1x.png 1x, assets/maps/pointer-maps_geojson@2x.png 2x"
```

## Mini-Map
The minimap helps to show the position of the main map.
#### Do
- consider whether a minimap is really necessary
- use the same colors for regions in the minimap as they are defined in the main map
- leave away details such as water, forested areas and roads

## Map Type Definitions

Depending on the circumstance, we may have decided that a map needs to be created by hand as opposed to in Q. For these cases, use the following type definitions:

```image
plain: true
span: 6
src: "assets/maps/pointer-maps_from-hand@2x.png 1x, assets/maps/pointer-maps_from-hand@2x.png 2x"
```

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
  tracking: 6
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

## Content Width +
```type
{
  kern: true,
  "headings": [
    { "label": "country, state", "value": 14 },
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#6e6e7e",
  halo color: "#ececf0",
  weight: 50
  line heigh: 1.2
  Transform: None
  Zoom: 0/10, 3/12, 4/14
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "capital city", "value": 12 }
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#92929e",
  weight: 500
}
```
```type
{
  kern: true,
  "headings": [
    { "label": "city", "value": 12 }
  ],
  font: "nzz-sans-serif, sans-serif",
  color: "#92929e",
  weight: 100
}
```

### Shared definitions

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
    { "label": "region", "value": 12 }
  ],
  weight: 300,
  color: "#b6b6be",
  font: "nzz-sans-serif, sans-serif", Uppercase
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

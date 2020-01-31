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
## Simple Maps

Simple pointer maps are made in Q. These maps are typically used for simple localization. We use four different templates.

## Standard Maps

This template should be used for most of the maps.

```image
plain: true
span: 3
src: "assets/maps/Standardmap@1x.png 1x, assets/maps/Standardmap@2x.png 2x"
```

## Maps colors

### Standard Map

```color-palette|span-1
colors:
 - {name: "countries basemap", value: "#f0f0f2"}
 - {name: "main country", value: "#ffffff"}
 - {name: "highlighted region", value: "#d7cddc"}
 - {name: "water – primary", value: "#CEE9F2"}
 - {name: "forested areas – primary", value: "#99c7a3"}
```

```color-palette|span-1
colors:
 - {name: "streets - primary", value: "#DFE0E5"}
 - {name: "railways - primary", value: "#D8D9DB"}
 - {name: "Ländergrenzen", value: "#A88EA8"}
 - {name: "Regionsgrenzen", value: "#C9C4E0"}
 - {name: "Gemeindegrenzen", value: "#D4C1EE"}
```

```color-palette|span-1
colors:
 - {name: "buildings - primary", value: "#e3e3e8"}
 - {name: "text color, countries, cities", value: "#92929E"}
```


## Minimal Maps

Minimal Maps are used if the map underneath is not the most important information. Use this template if you for example want to show complexe geojson routes.

```image
plain: true
span: 5
src: "assets/maps/Minimalmap@1x.png 1x, assets/maps/Minimalmap@2x.png 2x"
```

## Natural Maps

Use the Natural Maps template if the context in which the map will be placed is about nature. This can be all from mountains to national parks or forested areas.

```image
plain: true
span: 5
src: "assets/maps/Naturalmap@1x.png 1x, assets/maps/Naturalmap@2x.png 2x"
```

## Mini-Map
The minimap helps to show the position of the main map.
#### Do
- consider whether a minimap is really necessary
- use the same colors for regions in the minimap as they are defined in the main map
- leave away details such as water, forested areas and roads

## Map-scale (Massstab)
#### Online
- GT America Regular (font-weight: 100)
- Size: 11 px
- Line Heigh: 12 px
- color: #6e6e7e, halo color: like basemap, halo with: 2 px

- Line: 1,5 px
- color: #6e6e7e, halo color: #FFFFFF

#### Print
- Univers LT Std 47 Light Condensed 
- Size: 6 px
- color: #000000, halo color: #FFFFFF

- Line: 1 px
- color: #6e6e7e, halo color: #FFFFFF, halo with: 1 px


## Map Type Definitions
### Online Maps

#### Marker City
- GT America Medium (font-weight: 500)
- Size: 14 px
- color: #05032D, halo color: #FFFFFF, halo with: 2 px
- Line Heigh: 16 px
- Icon Size: 12 x 12 px, Icon Color: #05032D, halo color: #FFFFFF, halo with: 1 px

#### country 
- GT America Light (font-weight: 50)
- Size: 14 px (Zoomstufen: 0/10, 3/12, 4/16)
- color: #6e6e7e, halo color: like basemap, halo with: 2 px
- Line Heigh: 16 px

#### capital
- GT America Medium (font-weight: 500)
- Size 15 px
- color: #92929e, halo color: like basemap, halo with: 2 px
- Line Heigh: 17 px
- Icon Size: 12 x 12 px, Icon Color: #92929e, no halo

#### city / town/ village / suburb / big city
- GT America Regular (font-weight: 100)
- Size 13 px
- color: #92929e, halo color: like basemap, halo with: 2 px
- Line Heigh: 15 px
- Icon Size: 6 x 6 px, Icon Color: #92929e, no halo

#### Regions
- GT America Light (font-weight: 50)
- Size: 13 px
- color: #92929e, halo color: like basemap, halo with: 2 px
- Transform: Uppercase
- Line Heigh: 15 px
- Letter-spacing: 6

#### Water - lakes, rivers, Oceans
- Pensum Pro Italic (font-weight: 100)
- Size 13 px
- color: #0093bf, halo color: #CEE9F2, halo with: 2 px
- Line Heigh: 15 px


### Print Maps

#### Marker City
- Univers LT Std 47 Light Condensed 
- Size: 9 px
- color: #000000, halo color: #FFFFFF, halo with: 2 px
- Line Heigh: 12 px
- Icon Size: 6 x 6 px, Icon Color: #000000, halo color: #FFFFFF, halo with: 0,5 px

#### main country 
- Univers LT Std 47 Light Condensed 
- Size: 8 px
- Line Heigh: 10 px
- Transform: Uppercase
- color: #000000, halo color: like basemap, halo with: 1 px

#### secondary country (used only if the map is done by hand)
- Univers LT Std 47 Light Condensed 
- Size: 8 px
- Line Heigh: 10 px
- Transform: Uppercase
- color: #808080, halo color: like basemap, halo with: 1 px

#### capital
- Univers Next Pro Medium Condensed
- Size: 8 px
- Line Heigh: 10 px
- color: #000000, halo color: like basemap, halo with: 1 px
- Icon Size: 6 x 6 px, Icon Color: #000000, no halo

#### city / town/ village / suburb / big city
- Univers LT Std 47 Light Condensed
- Size: 8 px
- Line Heigh: 10 px
- color: #000000, halo color: like basemap, halo with: 1 px
- Icon Size: 4 x 4 px, Icon Color: #000000, no halo

#### Regions
- Univers LT Std 47 Light Condensed 
- Size: 7.5 px
- Line Heigh: 10 px
- Transform: Uppercase
- color: #000000, halo color: like basemap, halo with: 1 px
- Letter-spacing: 60

#### Oceans
- Univers LT Std 47 Light Condensed
- Size: 8 px
- Line Heigh: 10 px
- Transform: Uppercase
- color: #0093BF, halo color: #CEE9F2, halo with: 1 px

#### Water - lakes, rivers
- Univers LT Std 47 Light Condensed
- Size: 7.5 px
- Line Heigh: 10 px
- color: #0093BF, halo color: like basemap, halo with: 1 px
- Letter-spacing: 60

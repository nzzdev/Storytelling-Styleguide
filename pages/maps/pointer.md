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

This template should be used for most of the maps. Left the online Version, right the Print Version.

```image
plain: true
span: 3
src: "assets/maps/KarteNormal.PNG 1x, assets/maps/KarteNormal.PNG.png 2x"
```

```image
plain: true
span: 3
src: "assets/maps/KarteNormalPrint.PNG 1x, assets/maps/KarteNormalPrint.PNG 2x"
```

### Standard Map colors

```color-palette|span-1
colors:
 - {name: "countries basemap", value: "#f0f0f2"}
 - {name: "main country", value: "#ffffff"}
 - {name: "highlighted region", value: "#d7cddc"}
 - {name: "water", value: "#d0e2ec"}
 - {name: "forested areas", value: "#99c7a3"}
```

```color-palette|span-1
colors:
 - {name: "streets", value: "#DFE0E5"}
 - {name: "railways", value: "#D8D9DB"}
 - {name: "Ländergrenzen", value: "#A88EA8"}
 - {name: "Regionsgrenzen", value: "#C9C4E0"}
 - {name: "Gemeindegrenzen", value: "#D4C1EE"}
```

```color-palette|span-1
colors:
 - {name: "buildings - primary", value: "#e3e3e8"}
 - {name: "text color, countries, cities", value: "#92929E"}
```

```color-palette|span-1
colors:
 - {name: "water print", value: "#BED3DF"}
```

## Minimal Maps

Minimal Maps are used if the map underneath is not the most important information. Use this template if you for example want to show complexe geojson routes. Left the online Version, right the Print Version.

```image
plain: true
span: 3
src: "assets/maps/KarteMinimal.PNG 1x, assets/maps/KarteMinimal.PNG 2x"
```

```image
plain: true
span: 3
src: "assets/maps/KarteMinimalPrint.PNG 1x, assets/maps/KarteMinimalPrint.PNG 2x"
```

### Minimal Map colors

```color-palette|span-1
colors:
 - {name: "countries basemap", value: "#f0f0f2"}
 - {name: "highlighted region", value: "#d7cddc"}
 - {name: "region border color", value: "#ffffff"}
 - {name: "water", value: "#cee1e6"}
 - {name: "buildings", value: "#CBCBCB"}
```

```color-palette|span-1
colors:
 - {name: "borders", value: "#b6b6be"}
 - {name: "streets", value: "#ffffff"}
 - {name: "railways", value: "#dcdce2"}
 - {name: "text color, countries, cities", value: "#92929E"}
```

## Natural Maps

Use the Natural Maps template if the context in which the map will be placed is about nature. This can be all from mountains to national parks or forested areas. Left the online Version, right the Print Version.

```image
plain: true
span: 3
src: "assets/maps/KarteNature.PNG 1x, assets/maps/KarteNature.PNG 2x"
```

```image
plain: true
span: 3
src: "assets/maps/KarteNaturePrint.PNG 1x, assets/maps/KarteNaturePrint.PNG 2x"
```

### Natural Map colors

```color-palette|span-1
colors:
 - {name: "countries basemap", value: "#EDECE1"}
 - {name: "main country", value: "#ffffff"}
 - {name: "highlighted region", value: "#d7cddc"}
 - {name: "water", value: "#d0e2ec"}
 - {name: "forested areas", value: "#99c7a3"}
```

```color-palette|span-1
colors:
 - {name: "streets", value: "#DBDAD1"}
 - {name: "railways", value: "#d9d9d9"}
 - {name: "Ländergrenzen", value: "#b6b6be"}
 - {name: "buildings", value: "#DBDAD1"}
 - {name: "text color, countries, cities", value: "#92929E"}
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
- color: #428cb3, halo color: #d0e2ec, halo with: 2 px
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
- color: #3c546c, halo color: #BED3DF, halo with: 1 px

#### Water - lakes, rivers
- Univers LT Std 47 Light Condensed
- Size: 7.5 px
- Line Heigh: 10 px
- color: #3c546c, halo color: like basemap, halo with: 1 px
- Letter-spacing: 60

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

## Map-scale (Massstab)
- GT America Regular (font-weight: 100)
- Size: 13 px
- color: #6e6e7e, halo color: #FFFFFF

- Line: 1,5 px
- color: #6e6e7e, halo color: #FFFFFF

## Map Type Definitions

These are the type definitions for our online and print maps. Use these when a map needs to be created by hand. 

```image
plain: true
span: 6
src: "assets/maps/pointer-maps_from-hand@2x.png 1x, assets/maps/pointer-maps_from-hand@2x.png 2x"
```

## Map Type Definitions
### Online Maps

#### Marker City
- GT America Medium (font-weight: 500)
- Size: 14 px
- color: #05032D, halo color: #FFFFFF
- Line Heigh: 16 px

#### country 
- GT America Light (font-weight: 50)
- Size: 14 px (Zoomstufen: 0/10, 3/12, 4/16)
- color: #6e6e7e, halo color: like basemap
- Line Heigh: 16 px

#### secondary country (used only if the map is done by hand)
- GT America Light (font-weight: 50)
- Size: 14 px
- color: #e9e9ee, halo color: like basemap
- Line Heigh: 16 px

#### capital
- GT America Medium (font-weight: 500)
- Size 15 px
- color: #92929e, halo color: like basemap
- Line Heigh: 17 px

#### city / town/ village / suburb / big city
- GT America Regular (font-weight: 100)
- Size 13 px
- color: #92929e, halo color: like basemap
- Line Heigh: 15 px

#### Regions
- GT America Light (font-weight: 50)
- Size: 13 px
- color: #92929e, halo color: like basemap
- Transform: Uppercase
- Line Heigh: 15 px
- Letter-spacing: 6

#### Oceans
- Pensum Pro Italic (font-weight: 100)
- Size 13 px
- color: #ffffff, halo color: #CEE9F2
- Line Heigh: 15 px

#### Water - lakes, rivers
- Pensum Pro Italic (font-weight: 100) 
- Size 13 px
- color: #0093bf, halo color: #CEE9F2
- Line Heigh: 15 px


### Print Maps

#### main country 
- Univers LT Std 57 Medium Condensed 
- Size: 9 px
- Line Heigh: 11 px
- Transform: Uppercase
- color: #000000, halo color: like basemap

#### secondary country (used only if the map is done by hand)
- Univers LT Std 47 Light Condensed 
- Size: 9 px
- Line Heigh: 11 px
- Transform: Uppercase
- color: #808080, halo color: like basemap

#### capital
- Univers LT Std 57 Medium Condensed
- Size: 9 px
- Line Heigh: 11 px
- color: #000000, halo color: like basemap

#### city / town/ village / suburb / big city
- Univers LT Std 47 Light Condensed
- Size: 9 px
- Line Heigh: 11 px
- color: #000000, halo color: like basemap

#### Regions
- Univers LT Std 47 Light Condensed 
- Size: 9 px
- Line Heigh: 11 px
- Transform: Uppercase
- color: #000000, halo color: like basemap
- Letter-spacing: 60

#### Oceans
- Univers LT Std 47 Light Condensed
- Size: 9 px
- Line Heigh: 11 px
- Transform: Uppercase
- color: #0093BF, halo color: #CEE9F2

#### Water - lakes, rivers
- Univers LT Std 47 Light Condensed
- Size: 9 px
- Line Heigh: 11 px
- color: #0093BF, halo color: like basemap
- Letter-spacing: 60

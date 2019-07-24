```html|span-1,no-source,plain
<div class="stabilityIndex unstable">Unstable</div>
```

## Digital First
All maps are produced for our digital platform first. Simple maps should be produced in Q and later adapted for print if necessary. Maps that are more complex and require manual work are produced in Sketch/Illustrator.

## Purpose
What's the map for? If its sole purpose is give localization for the reader, keep the map as simple as possible. If the map tells a more complex story (often maps with encoded geo data), invest extra effort in visualizing the main message as clear as possible.

## Clarity
We show what needs to be shown and remove what's not relevant. Consider whether waterways or relief is necessary. For some maps, it may not be necessary to label all neighboring countries or capitals. Be efficient and precise with the amount of data plotted on a map.

## Projections
We always need to be considerate which map projection is best suited for what the map needs to communicate. **We avoid the Mercator projection** and use equal area or equidistant projections whenever possible (sometimes a globe works fine, too).

#### 1. World Maps
For world maps that don’t focus on a specific country, we use the **Robinson projection**. The distortion is relatively low, but it is neither equal of angle nor true to area. So it is only useful for world maps.
In QGIS the KBS is called „World_Robinson / +proj=robin +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs / EPSG:54030“.

```image
plain: true
span: 6
src: "assets/World_Robinson@1x.png 1x, assets/World_Robinson@2x.png 2x"
```

#### 2. Switzerland
For maps of Switzerland, we use **CH1903+ / LV95**.


## Use of Geo Data
When drawing lines or shapes on maps, we use geo data from reliable sources. We don't draw maps by hand unless we can be absolutely sure that accuracy won't be an issue (e.g. highlighting a football stadium on a city map by drawing a polygon around it is fine). Please refer to [the No Data, No Chart guidelines](https://nzzdev.github.io/Storytelling-Styleguide/#/charts-guidelines?a=no-data-no-chart) for further clarification.

```html|span-1,no-source,plain
<div class="stabilityIndex experimental">Experimental</div>
```

### Choroplethic Maps

Choroplethic Maps aim to visualize data on a map by expressing values in colors and applying them to a set of entities. A color scale fading from bright to dark seperates low and high values into color buckets and therefore gives a holisitic impression of the interplay between values and regions.

```image
plain: true
span: 3
src: "assets/maps/choropleth-Num-Seq.png 2x"
```

```image
plain: true
span: 3
src: "assets/maps/choropleth-Num-Div.png 2x"
```

### Clustered Maps

Clustered maps are similiar to Choroplethic Maps but organize data in a more categorical way. Based on the same templates, the map's entities are filled with qualitive colors resulting from its (usually non-numeric) values.

```image
plain: true
span: 3
src: "assets/maps/choropleth-Str.png 2x"
```

```image
plain: true
span: 3
src: "https://q-server.st-cdn.nzz.ch/screenshot/91536091deb9363261a383616df252d4.png?target=nzz_ch&dpr=2&padding=10px&wait=300&background=white&width=400 2x"
```

```image
plain: true
span: 3
src: "https://q-server.st-cdn.nzz.ch/screenshot/77e6ecd2303564671936e9316c60a57f.png?target=nzz_ch&dpr=2&padding=10px&wait=300&background=white&width=400 2x"
```

## Map Template

In most cases, maps are the reader's friend because countries and continents are easily recognizable as geographic patterns. By coloring the map's entities the reader can quickly compare the entity values with each other in a spational context. But the resulting image is misleading when the entities sizes are not equal to what they actually "weight". In Switzerland's case, for example, you need to be careful using geographically correct areas because

- small entities (.i.e. Kanton Genf) can become hardly visible even though equally (or more) important
- or large entities can appear more important than they are because may be less people live there (.i.e. Kanton Graubünden)

If the entities voices are weighted equally, use a more schematic template to represent your data. Those templates ideally are geographical abstractions like the Hexagon Map we use to visualize values for the Swiss cantons – as entities with (almost!) equal voices:

```image
plain: true
span: 5
src: "https://q-server.st-cdn.nzz.ch/screenshot/0f9e91c30c93e29b943c6f9895045036.png?target=nzz_ch&dpr=2&padding=10px&wait=300&background=white&width=400 2x"
```

Ask yourself these two questions when deciding for a template:

- Are geographic patterns (still) recognizable?
- Are the entities weights represented in an unmisleading way?

In many cases compromisses are unavoidable. For exmpale it's a difficult task to visualize Switzerland's communes or cantons by respecting the popular weight of the different entities. The uninhabitated mountain areas would shrink, i.e. cantons like Graubünden, and result in a unrecognizable pattern of the country. In contrast, United Kingdom's communes can be visualized more easily in a schematic way while still being recognizable as the island.

## Data Classification

Depending on how you decide to define your intervals, different patterns can appear in your visualization. Our methodology is to first think about how the values would be optimally structured and then decide on a technique for displaying them visually. For larger projects, we first generate a histogram to see how our data is distributed and make sure the interval for our maps will reflect that on best.

```image
plain: true
span: 5
src: "assets/maps/choropleth-histogram.png 2x"
```

Typically, as we have established in our color scales, a reader can differentiate between 4 to 6 color categories. Using that as a rule of thumb, we try to define a low number of buckets for our choropleth maps. Often this is a compromise between accurately reflecting the distribution of the data and providing a graphic with easy readability.

In most cases Natural Classification is the most unmisleading way to separate data into buckets: An alghorithm decides where to set the borders based on a given amount. This results in (often) unequal intervals but represents the most human-like approach in separating data points into groups. It's recommended to experiment with different amounts of buckets based on how the data's histogram is shaped.

Only if it brings more value to your data visualization, chose an alternative way of bucketing:

- Quantiles: Equal amount of values per bucket – unequal bucket size
- Nice & uniform Intervals: Equal bucket size – unequal amount of values per bucket
- Manual Borders: Custom borders

## Legend Design

As the top element, the legend aims to guide the reader. The following aspects need to be taken into account:

- **Color Scale**: introduce the color buckets
- **Extents**: label the minimum value, maximum value and – if necessary – the diverging break
- **Bucket Sizes**: show the bucket's proportions and make a notice if the intervals are irregular
- **Average/Median**: optionally mark the value's average or median value
- **Extended Legend**: if needed, explain the meaning of additional colors in a extended legend (i.e. "no data available")

If the intervals are not in the first glance clear to the reader, we make the effort to provide an extra annotation for them. This annotation gives a better understanding of how we created the intervals and also aids in our effort to increase the data literacy of our audience.

To avoid too much distraction, we only label the legend's extents and do not label the breaks. Especially on mobile size, legends with too many labels may cause overlapping resulting in an unneccessary information overflow. In case irregular intervals are being used, the break values may be mentioned in the extra annotation as an indepth information.

```image
plain: true
span: 5
src: "assets/maps/choropleth-legends.png 2x"
```

As a proposed interactive solution, a notice about the usage of irregular intervals could be toggled. Once activated by the information icon, it appears inside an overlay positioned below the legend and at the same time labeling the breaks.

```image
plain: true
span: 5
src: "assets/maps/choropleth-overlay.png 2x"
```

## Colors

For Choroplethic Maps we have defined sequential and diverging scales, three for each kind. Sequential scales support up to 7 and diverging up to 14 steps. Depending on the subject, you should use the special scales like sequential scales for Swiss Parties and a diverging scale to juxtapose the genders.

### Sequential Scales

Use a sequential scale to compare values between each other in terms of "less" and "more".

```image
plain: true
span: 5
src: "assets/sequential-1@1x.png 1x, assets/sequential-1@2x.png 2x"
```

### Diverging Scales

If a certain break needs to be taken into account, you better apply a diverging scale. In most cases, the usage of both negative and positive values indicates the need of a diverging scale. Also in case there's something like a "50%" mark separating the values into two "regions" a diverging scale is the better solution.

```image
plain: true
span: 5
src: "assets/election-map-diverging-a@1x.png 1x, assets/election-map-diverging-a@2x.png 2x"
```

```html|span-1,no-source,plain
<div class="stabilityIndex experimental">Experimental</div>
```
## Data Classification

Visualizing data on a map is complex. Specificially in the case of choropleth maps, the decision on how to classify the data is particularly challenging. Depending on how you decide to define your intervals, different patterns can appear in your visualization. These visualizations can create a range a statements for your reader. Obviously this can be dangerous and lead to - knowingly or unknowingly – the production of a map that reflects the thesis of the author *best* but perhaps doesn't tell the full story.
Our methodology is to first think about how the values would be optimally structured and then decide on a technique for displaying them visually. For larger projects, we first generate a histogram to see how our data is distributed and make sure the interval for our maps will reflect that on best.
Typically, as we have established in our color scales, a reader can differentiate between 4 to 6 color categories. Using that as a rule of thumb, we try to define a low number of buckets for our choropleth maps. Often this is a compromise between accurately reflecting the distribution of the data and providing a graphic with easy readability.

## Guidance for the Reader
If the intervals are not in the first glance clear to the reader, we make the effort to provide an extra annotation for them. This annotation gives them a better understanding of how we created the intervals and also aids in our effort to increase the data literacy of our audience.  


```image
plain: true
span: 5
src: "assets/sequential-1@1x.png 1x, assets/sequential-1@2x.png 2x"
```

```image
plain: true
span: 5
src: "assets/election-map-diverging-a@1x.png 1x, assets/election-map-diverging-a@2x.png 2x"
```

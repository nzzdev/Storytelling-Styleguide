```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

## Pie Charts
Pie charts are popular and often requested by editors. They are, however, rarely the best chart type to visualize what we want to communicate. We use pie charts with caution and whenever we think about using one, we pause to think: Is this really what makes most sense?

#### Rule of thumb:
If I combine all segments except for the most important one to "others" – does the chart still make sense?
No? Then don't use a pie chart.

#### Do not

We don't use pie charts to compare the size of various parts of a whole.

```image
plain: true
span: 6
src: "assets/guidelines/guidelines-pie_1@1x.png 1x, assets/guidelines/guidelines-pie_1@2x.png 2x"
```

We don't use pie charts to compare the parts of two or more

```image
plain: true
span: 6
src: "assets/guidelines/guidelines-pie_2@1x.png 1x, assets/guidelines/guidelines-pie_2@2x.png 2x"
```

#### Do

We use pie charts to highlights how small or how large one part of a whole is.
In this case:
- We never show more than 5 segments. Combine to "others" if necessary.
- The segment starts at the top and goes clockwise.

```image
plain: true
span: 6
src: "assets/guidelines/guidelines-pie_3@1x.png 1x, assets/guidelines/guidelines-pie_3@2x.png 2x"
```

See also: [What to consider when creating pie charts (Datawrapper Academy)](https://academy.datawrapper.de/article/127-what-to-consider-when-creating-a-pie-chart)

## Non-zero Y-Axis

Cutting the y-axis so it doesn't extend to 0 is a common way to dramatize a chart, but sometimes it's necessary to show subtle, yet significant changes.

#### Rule of thumb

If the point the chart is supposed to make is visible with the axis extended to 0, don't cut it.

#### Do not

Never cut the y-axis is the chart uses areas to visually encode values (bars, columns, area charts, etc.).

Don't cut the y-axis to make a trend appear more dramatic than it is.
```image
plain: true
span: 6
src: "assets/guidelines/yaxis-dont.png"
```

Don't cut the y-axis very close to 0.
```image
plain: true
span: 6
src: "assets/guidelines/yaxis-dont2.png"
```

#### Do

Cut the y-axis to show subtle, yet significant changes, that wouldn't be visible when the y-axis is extended to zero.

In this case:
- Cut sensibly: Leave space above the highest data point and below the lowest data point.

```image
plain: true
span: 6
src: "assets/guidelines/yaxis-do.png"
```

Cut the y-axis when extending it to zero doesn't make sense (there are no football players who are 0 metres tall)
```image
plain: true
span: 6
src: "assets/guidelines/yaxis-do2.png"
```


See also: [It’s OK not to start your y-axis at zero (QZ)](https://qz.com/418083/its-ok-not-to-start-your-y-axis-at-zero/)

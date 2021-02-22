```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

#### Our team's color palette consists of a qualitative scale, three sequential scales and three diverging scales.

```image
plain: true
span: 5
src: "assets/teaser-color@1x.png 1x, assets/teaser-color@2x.png 2x"
```

Our colors are used in both the online and print graphics that we produce. We aim to comply with [AA standard contrast ratios](https://www.w3.org/TR/WCAG/). We have also proofed our colors with the most common forms of color blindness. These steps ensure sufficient color contrast between elements so that our readers with low vision can read and understand our graphics.

The concept of our color palette is that all colors are scales are derived out of the original twelve qualitative color. This is one way that we can secure a consistent visual appearance in all of our graphics.

_Each of these colors receives a classname that can be called within Q (i.e. s-viz-color-one-7)._ Each classname is listed below along with the hex color code.

## Semantically resonant colors

Where adequate we use colors that are intuitive for what they present. [Empirical research by Lin et al.](http://vis.stanford.edu/papers/semantically-resonant-colors) shows that they slightly improve the speed of identification. 

### Ausnahme: Ethnien

Im Falle von Ethnien verzichten wir bewusst darauf, «semantische» Farben zu verwenden. Wir verwenden die in Q definierten Standardfarben, und ersetzen problematische Farb-Kategorie-Kombinationen.

```image
plain: true
span: 3
src: "assets/colors/ethnic-colors@1x.png 1x, assets/colors/ethnic-colors@2x.png 2x"
```

## Qualitative Color Scale: Primary

Our primary qualitative colors are the most used colors in our color palette. These colors should be used _in order_ for different or "unrelated" categories within a dataset. Such a dataset could be countries, religions, or breeds of dogs. We use them in the order listed below.

```color-palette|span-1
colors:
  - {name: "s-viz-color-one-7", value: "#2E41BF"}
  - {name: "s-viz-color-two-7", value: "#D4A91E"}
  - {name: "s-viz-color-three-7", value: "#099E85"}
  - {name: "s-viz-color-four-7", value: "#D64113"}
  - {name: "s-viz-color-five-7", value: "#873A86"}
  - {name: "other, rest, diverse", value: "#cfcfd6"}
```

```color-palette|span-1
colors:
  - {name: "s-viz-color-one-5", value: "#3952EE"}
  - {name: "s-viz-color-two-5", value: "#EBBD22"}
  - {name: "s-viz-color-three-5", value: "#24B39C"}
  - {name: "s-viz-color-four-5", value: "#E66E4A"}
  - {name: "s-viz-color-five-5", value: "#AD4BAC"}
```

```color-palette|span-1
colors:
  - {name: "s-viz-color-one-3", value: "#7385FF"}
  - {name: "s-viz-color-two-3", value: "#FAD250"}
  - {name: "s-viz-color-three-3", value: "#7DD1C3"}
  - {name: "s-viz-color-four-3", value: "#F2997E"}
  - {name: "s-viz-color-five-3", value: "#D182CE"}
```

```color-palette|span-1
colors:
  - {name: "s-viz-color-one-1", value: "#D6DCFF"}
  - {name: "s-viz-color-two-1", value: "#FFF0BF"}
  - {name: "s-viz-color-three-1", value: "#C7F0E9"}
  - {name: "s-viz-color-four-1", value: "#FFDCD1"}
  - {name: "s-viz-color-five-1", value: "#FCDCFC"}
```

## Qualitative Color Scale: Choice

Our choice colors are less often used in our basic daily business. They are most often included in one-off graphics or illustrations, as well as part of a custom color concept in an article.

```color-palette|span-1
colors:
  - {name: "s-viz-color-six-7", value: "#1D8534"}
  - {name: "s-viz-color-seven-7", value: "#C73530"}
  - {name: "s-viz-color-eight-7", value: "#0093BF"}
  - {name: "s-viz-color-nine-7", value: "#5425B3"}
  - {name: "s-viz-color-ten-7", value: "#A7BA13"}
  - {name: "s-viz-color-eleven-7", value: "#8F4D17"}
  - {name: "s-viz-color-twelve-7", value: "#ABA776"}
```

```color-palette|span-1
colors:
  - {name: "s-viz-color-six-5", value: "#38A650"}
  - {name: "s-viz-color-seven-5", value: "#D64B47"}
  - {name: "s-viz-color-eight-5", value: "#0BA9D9"}
  - {name: "s-viz-color-nine-5", value: "#6C43C0"}
  - {name: "s-viz-color-ten-5", value: "#BBD215"}
  - {name: "s-viz-color-eleven-5", value: "#B3611D"}
  - {name: "s-viz-color-twelve-5", value: "#C5C294"}
```

```color-palette|span-1
colors:
  - {name: "s-viz-color-six-3", value: "#5EBD73"}
  - {name: "s-viz-color-seven-3", value: "#ED6D68"}
  - {name: "s-viz-color-eight-3", value: "#85CFE6"}
  - {name: "s-viz-color-nine-3", value: "#AA90DE"}
  - {name: "s-viz-color-ten-3", value: "#D2E640"}
  - {name: "s-viz-color-eleven-3", value: "#E0904F"}
  - {name: "s-viz-color-twelve-3", value: "#DBD8BF"}
```

```color-palette|span-1
colors:
  - {name: "s-viz-color-six-1", value: "#C9F5D2"}
  - {name: "s-viz-color-seven-1", value: "#FFD3D1"}
  - {name: "s-viz-color-eight-1", value: "#CEE9F2"}
  - {name: "s-viz-color-nine-1", value: "#E2DAF2"}
  - {name: "s-viz-color-ten-1", value: "#F3FABB"}
  - {name: "s-viz-color-eleven-1", value: "#FFE9D6"}
  - {name: "s-viz-color-twelve-1", value: "#EDECE1"}
```

## Gray Scale

Our gray scale palette is based off of the gray tones found on NZZ.ch (background: s-color-gray-1, author: s-color-gray-7, text: s-color-gray-9) . It's used for all text and annotations in graphics as well as axis labels and lines. The gray scale can be used flexibly based on need.

```color-palette|horizontal
colors:
   - {name: "s-color-gray-1", value: "#f0f0f2"}
   - {name: "s-color-gray-2", value: "#e3e4e9"}
   - {name: "s-color-gray-3", value: "#d4d6dd"}
   - {name: "s-color-gray-4", value: "#c3c2ca"}
   - {name: "s-color-gray-5", value: "#b6b6be"}
   - {name: "s-color-gray-6", value: "#92929e"}
   - {name: "s-color-gray-7", value: "#6e6e7e"}
   - {name: "s-color-gray-8", value: "#393855"}
   - {name: "s-color-gray-9", value: "#05032d"}
```

## Gender Colors

```color-palette|span-2
colors:
  - {name: "male - primary", value: "#24B39C"}
  - {name: "female – primary", value: "#6C43C0"}
```

```color-palette|span-2
colors:
  - {name: "male - light", value: "#7dd1c3"}
  - {name: "female – light", value: "#aa90de"}
```


## Corona Colors

```color-palette|span-2
colors:
  - {name: "infections", value: "#e66e4a"}
  - {name: "hospitalisations", value: "#24b39c"}
  - {name: "vaccinations", value: "#0ba9d9"}
```

```color-palette|span-2
colors:
  - {name: "fatalities", value: "#05032d"}
  - {name: "recovered", value: "#6c43c0"}
  - {name: "tests", value: "#3952ee"}
```


## Sequential and Diverging Scales

Color scales are a powerful way to encode data. The use of the color dimension is common in Heatmaps and [Choropleth Maps](choropleth-maps).

There is a simple rule how we usually encode data with color: the darker the color, the larger an entities value. Visualize such cases with one of our sequential scales. Whenever there's a relevant break in the scale, you should probably consider a diverging scale. For both type of scales we defined variants – check out which one fits best with your scenario.

Our sequential and diverging scales have a maximum of seven buckets. This allows our readers to differentiate shades of a hue from one another and let them accurately read the data encoding in our charts and maps.

### Sequential Scales

**Sequential-one** is the most used scale and bases on our first primary color.
**Sequential-two** is the scale used in cases our primary qualitative color is encoded with a specific category already and should not be confused with the category this scale is representing. It's based on another primary and a bright choice color.
**Sequential-three** is the scale used in cases we are displaying data that's negatively associated. Examples of such data would be the path of a hurricane or the amount of deaths in school shootings over time. It's based on two choice colors.
**Sequential-male** is the scale used for displaying the amount of male representation. It's based on the male color.
**Sequential-female** is the scale used for displaying the amount of female representation. It's based on the female color.

### Sequential-one

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-2-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-3-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-3-2", value: "#919cf2"}
  - {name: "s-viz-color-sequential-one-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-4-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-4-2", value: "#7684f2"}
  - {name: "s-viz-color-sequential-one-4-3", value: "#abb4f0"}
  - {name: "s-viz-color-sequential-one-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-5-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-5-2", value: "#6878f2"}
  - {name: "s-viz-color-sequential-one-5-3", value: "#919cf2"}
  - {name: "s-viz-color-sequential-one-5-4", value: "#b9c0ef"}
  - {name: "s-viz-color-sequential-one-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-6-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-6-2", value: "#6070f1"}
  - {name: "s-viz-color-sequential-one-6-3", value: "#818ef2"}
  - {name: "s-viz-color-sequential-one-6-4", value: "#a1abf1"}
  - {name: "s-viz-color-sequential-one-6-5", value: "#c1c8ee"}
  - {name: "s-viz-color-sequential-one-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-7-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-7-2", value: "#5a6bf1"}
  - {name: "s-viz-color-sequential-one-7-3", value: "#7684f2"}
  - {name: "s-viz-color-sequential-one-7-4", value: "#919cf2"}
  - {name: "s-viz-color-sequential-one-7-5", value: "#abb4f0"}
  - {name: "s-viz-color-sequential-one-7-6", value: "#c7cced"}
  - {name: "s-viz-color-sequential-one-7-7", value: "#e3e4e9"}
```

### Sequential-two

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-2-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-2-2", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-3-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-3-2", value: "#abcea9"}
  - {name: "s-viz-color-sequential-two-3-3", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-4-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-4-2", value: "#8bc5a0"}
  - {name: "s-viz-color-sequential-two-4-3", value: "#c6d7b8"}
  - {name: "s-viz-color-sequential-two-4-4", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-5-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-5-2", value: "#79c19d"}
  - {name: "s-viz-color-sequential-two-5-3", value: "#abcea9"}
  - {name: "s-viz-color-sequential-two-5-4", value: "#d2dcc1"}
  - {name: "s-viz-color-sequential-two-5-5", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-6-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-6-2", value: "#6dbe9c"}
  - {name: "s-viz-color-sequential-two-6-3", value: "#99c9a3"}
  - {name: "s-viz-color-sequential-two-6-4", value: "#bcd4b2"}
  - {name: "s-viz-color-sequential-two-6-5", value: "#d8dfc7"}
  - {name: "s-viz-color-sequential-two-6-6", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-7-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-7-2", value: "#64bc9b"}
  - {name: "s-viz-color-sequential-two-7-3", value: "#8bc5a0"}
  - {name: "s-viz-color-sequential-two-7-4", value: "#abcea9"}
  - {name: "s-viz-color-sequential-two-7-5", value: "#c6d7b8"}
  - {name: "s-viz-color-sequential-two-7-6", value: "#dce1cb"}
  - {name: "s-viz-color-sequential-two-7-7", value: "#edece1"}
```

### Sequential-three

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-2-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-2-2", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-3-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-3-2", value: "#daa878"}
  - {name: "s-viz-color-sequential-three-3-3", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-4-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-4-2", value: "#da8d5f"}
  - {name: "s-viz-color-sequential-three-4-3", value: "#ddc197"}
  - {name: "s-viz-color-sequential-three-4-4", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-5-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-5-2", value: "#d97e55"}
  - {name: "s-viz-color-sequential-three-5-3", value: "#daa878"}
  - {name: "s-viz-color-sequential-three-5-4", value: "#dfcca9"}
  - {name: "s-viz-color-sequential-three-5-5", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-6-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-6-2", value: "#d97551"}
  - {name: "s-viz-color-sequential-three-6-3", value: "#da9868"}
  - {name: "s-viz-color-sequential-three-6-4", value: "#dbb78a"}
  - {name: "s-viz-color-sequential-three-6-5", value: "#e0d3b4"}
  - {name: "s-viz-color-sequential-three-6-6", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-7-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-7-2", value: "#d96f4e"}
  - {name: "s-viz-color-sequential-three-7-3", value: "#da8d5f"}
  - {name: "s-viz-color-sequential-three-7-4", value: "#daa878"}
  - {name: "s-viz-color-sequential-three-7-5", value: "#ddc197"}
  - {name: "s-viz-color-sequential-three-7-6", value: "#e2d7bb"}
  - {name: "s-viz-color-sequential-three-7-7", value: "#edece1"}
```

### Sequential-male

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-2-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-3-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-3-2", value: "#94ccc2"}
  - {name: "s-viz-color-sequential-male-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-4-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-4-2", value: "#77c4b5"}
  - {name: "s-viz-color-sequential-male-4-3", value: "#afd4cf"}
  - {name: "s-viz-color-sequential-male-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-5-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-5-2", value: "#67c0af"}
  - {name: "s-viz-color-sequential-male-5-3", value: "#94ccc2"}
  - {name: "s-viz-color-sequential-male-5-4", value: "#bcd8d5"}
  - {name: "s-viz-color-sequential-male-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-6-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-6-2", value: "#5cbdab"}
  - {name: "s-viz-color-sequential-male-6-3", value: "#83c8ba"}
  - {name: "s-viz-color-sequential-male-6-4", value: "#a4d1ca"}
  - {name: "s-viz-color-sequential-male-6-5", value: "#c4dbd9"}
  - {name: "s-viz-color-sequential-male-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-7-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-7-2", value: "#55bca8"}
  - {name: "s-viz-color-sequential-male-7-3", value: "#77c4b5"}
  - {name: "s-viz-color-sequential-male-7-4", value: "#94ccc2"}
  - {name: "s-viz-color-sequential-male-7-5", value: "#afd4cf"}
  - {name: "s-viz-color-sequential-male-7-6", value: "#c9dcdc"}
  - {name: "s-viz-color-sequential-male-7-7", value: "#e3e4e9"}
```

### Sequential-female

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-2-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-3-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-3-2", value: "#ac92d6"}
  - {name: "s-viz-color-sequential-female-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-4-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-4-2", value: "#9878cf"}
  - {name: "s-viz-color-sequential-female-4-3", value: "#bfaddc"}
  - {name: "s-viz-color-sequential-female-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-5-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-5-2", value: "#8e6acb"}
  - {name: "s-viz-color-sequential-female-5-3", value: "#ac92d6"}
  - {name: "s-viz-color-sequential-female-5-4", value: "#c8bbe0"}
  - {name: "s-viz-color-sequential-female-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-6-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-6-2", value: "#8763c9"}
  - {name: "s-viz-color-sequential-female-6-3", value: "#a082d2"}
  - {name: "s-viz-color-sequential-female-6-4", value: "#b8a2da"}
  - {name: "s-viz-color-sequential-female-6-5", value: "#cec3e2"}
  - {name: "s-viz-color-sequential-female-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-7-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-7-2", value: "#835dc7"}
  - {name: "s-viz-color-sequential-female-7-3", value: "#9878cf"}
  - {name: "s-viz-color-sequential-female-7-4", value: "#ac92d6"}
  - {name: "s-viz-color-sequential-female-7-5", value: "#bfaddc"}
  - {name: "s-viz-color-sequential-female-7-6", value: "#d1c8e3"}
  - {name: "s-viz-color-sequential-female-7-7", value: "#e3e4e9"}
```

### Diverging Scales

**Diverging-one** is used in cases we are comparing opposites that can be associated with positive and negative attitudes. An example could be an election maps where voters approved or denied an initiative.
**Diverging-two** is used in cases we are comparing opposites, but we would like to avoid negative or positive associations. An example is the comparing of communities whose average age is either younger or older compared to twenty years ago. This scale is created using the first two primary colors in our qualitative scale. This lends the scale to be used in stories where there are two data points which are directly compared throughout the story.
**Diverging-three** is used in cases we are comparing opposites with negative and/or positive connotation. This scale is comprised of two choice colors, so as not to overlap with any of the primary colors which might already be encoded in the story.
**Diverging-gender** is used to display female and male representations. It's based on our gender colors.

### Diverging-one

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-2-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-2-2", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-3-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-3-2", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-3-3", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-4-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-4-2", value: "#ecbdb2"}
  - {name: "s-viz-color-diverging-one-4-3", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-one-4-4", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-5-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-5-2", value: "#edaa97"}
  - {name: "s-viz-color-diverging-one-5-3", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-5-4", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-one-5-5", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-6-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-6-2", value: "#ed9e87"}
  - {name: "s-viz-color-diverging-one-6-3", value: "#eacdc8"}
  - {name: "s-viz-color-diverging-one-6-4", value: "#cec3e2"}
  - {name: "s-viz-color-diverging-one-6-5", value: "#a082d2"}
  - {name: "s-viz-color-diverging-one-6-6", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-7-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-7-2", value: "#ec967d"}
  - {name: "s-viz-color-diverging-one-7-3", value: "#ecbdb2"}
  - {name: "s-viz-color-diverging-one-7-4", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-7-5", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-one-7-6", value: "#9878cf"}
  - {name: "s-viz-color-diverging-one-7-7", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-8-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-8-2", value: "#ec9176"}
  - {name: "s-viz-color-diverging-one-8-3", value: "#edb2a3"}
  - {name: "s-viz-color-diverging-one-8-4", value: "#e8d3d1"}
  - {name: "s-viz-color-diverging-one-8-5", value: "#d4cce4"}
  - {name: "s-viz-color-diverging-one-8-6", value: "#b49ed9"}
  - {name: "s-viz-color-diverging-one-8-7", value: "#9270cd"}
  - {name: "s-viz-color-diverging-one-8-8", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-9-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-9-2", value: "#eb8d70"}
  - {name: "s-viz-color-diverging-one-9-3", value: "#edaa97"}
  - {name: "s-viz-color-diverging-one-9-4", value: "#ebc7bf"}
  - {name: "s-viz-color-diverging-one-9-5", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-9-6", value: "#c8bbe0"}
  - {name: "s-viz-color-diverging-one-9-7", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-one-9-8", value: "#8e6acb"}
  - {name: "s-viz-color-diverging-one-9-9", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-10-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-10-2", value: "#eb896c"}
  - {name: "s-viz-color-diverging-one-10-3", value: "#eda48e"}
  - {name: "s-viz-color-diverging-one-10-4", value: "#ecbdb2"}
  - {name: "s-viz-color-diverging-one-10-5", value: "#e7d7d6"}
  - {name: "s-viz-color-diverging-one-10-6", value: "#d7d1e5"}
  - {name: "s-viz-color-diverging-one-10-7", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-one-10-8", value: "#a689d3"}
  - {name: "s-viz-color-diverging-one-10-9", value: "#8a66ca"}
  - {name: "s-viz-color-diverging-one-10-10", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-11-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-11-2", value: "#eb8768"}
  - {name: "s-viz-color-diverging-one-11-3", value: "#ed9e87"}
  - {name: "s-viz-color-diverging-one-11-4", value: "#edb6a7"}
  - {name: "s-viz-color-diverging-one-11-5", value: "#eacdc8"}
  - {name: "s-viz-color-diverging-one-11-6", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-11-7", value: "#cec3e2"}
  - {name: "s-viz-color-diverging-one-11-8", value: "#b8a2da"}
  - {name: "s-viz-color-diverging-one-11-9", value: "#a082d2"}
  - {name: "s-viz-color-diverging-one-11-10", value: "#8763c9"}
  - {name: "s-viz-color-diverging-one-11-11", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-12-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-12-2", value: "#ea8466"}
  - {name: "s-viz-color-diverging-one-12-3", value: "#ed9a82"}
  - {name: "s-viz-color-diverging-one-12-4", value: "#edaf9e"}
  - {name: "s-viz-color-diverging-one-12-5", value: "#ebc4bc"}
  - {name: "s-viz-color-diverging-one-12-6", value: "#e7d9da"}
  - {name: "s-viz-color-diverging-one-12-7", value: "#d9d5e6"}
  - {name: "s-viz-color-diverging-one-12-8", value: "#c6b7df"}
  - {name: "s-viz-color-diverging-one-12-9", value: "#b199d8"}
  - {name: "s-viz-color-diverging-one-12-10", value: "#9c7cd0"}
  - {name: "s-viz-color-diverging-one-12-11", value: "#8560c8"}
  - {name: "s-viz-color-diverging-one-12-12", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-13-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-13-2", value: "#ea8363"}
  - {name: "s-viz-color-diverging-one-13-3", value: "#ec967d"}
  - {name: "s-viz-color-diverging-one-13-4", value: "#edaa97"}
  - {name: "s-viz-color-diverging-one-13-5", value: "#ecbdb2"}
  - {name: "s-viz-color-diverging-one-13-6", value: "#e9d1cd"}
  - {name: "s-viz-color-diverging-one-13-7", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-13-8", value: "#d1c8e3"}
  - {name: "s-viz-color-diverging-one-13-9", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-one-13-10", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-one-13-11", value: "#9878cf"}
  - {name: "s-viz-color-diverging-one-13-12", value: "#835dc7"}
  - {name: "s-viz-color-diverging-one-13-13", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-14-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-14-2", value: "#ea8161"}
  - {name: "s-viz-color-diverging-one-14-3", value: "#ec9379"}
  - {name: "s-viz-color-diverging-one-14-4", value: "#eda691"}
  - {name: "s-viz-color-diverging-one-14-5", value: "#edb7aa"}
  - {name: "s-viz-color-diverging-one-14-6", value: "#eac9c3"}
  - {name: "s-viz-color-diverging-one-14-7", value: "#e6dbdc"}
  - {name: "s-viz-color-diverging-one-14-8", value: "#dbd7e6"}
  - {name: "s-viz-color-diverging-one-14-9", value: "#cabee0"}
  - {name: "s-viz-color-diverging-one-14-10", value: "#b9a5da"}
  - {name: "s-viz-color-diverging-one-14-11", value: "#a88cd4"}
  - {name: "s-viz-color-diverging-one-14-12", value: "#9574ce"}
  - {name: "s-viz-color-diverging-one-14-13", value: "#815bc7"}
  - {name: "s-viz-color-diverging-one-14-14", value: "#6c43c0"}
```

### Diverging-two

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-2-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-2-2", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-3-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-3-2", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-3-3", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-4-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-4-2", value: "#b9b1ec"}
  - {name: "s-viz-color-diverging-two-4-3", value: "#edd6ad"}
  - {name: "s-viz-color-diverging-two-4-4", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-5-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-5-2", value: "#a298ed"}
  - {name: "s-viz-color-diverging-two-5-3", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-5-4", value: "#eed08e"}
  - {name: "s-viz-color-diverging-two-5-5", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-6-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-6-2", value: "#928aee"}
  - {name: "s-viz-color-diverging-two-6-3", value: "#cbc5eb"}
  - {name: "s-viz-color-diverging-two-6-4", value: "#eadcc5"}
  - {name: "s-viz-color-diverging-two-6-5", value: "#efcc7c"}
  - {name: "s-viz-color-diverging-two-6-6", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-7-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-7-2", value: "#8780ee"}
  - {name: "s-viz-color-diverging-two-7-3", value: "#b9b1ec"}
  - {name: "s-viz-color-diverging-two-7-4", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-7-5", value: "#edd6ad"}
  - {name: "s-viz-color-diverging-two-7-6", value: "#efc96f"}
  - {name: "s-viz-color-diverging-two-7-7", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-8-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-8-2", value: "#7f79ee"}
  - {name: "s-viz-color-diverging-two-8-3", value: "#aca3ed"}
  - {name: "s-viz-color-diverging-two-8-4", value: "#d2ceeb"}
  - {name: "s-viz-color-diverging-two-8-5", value: "#e8decf"}
  - {name: "s-viz-color-diverging-two-8-6", value: "#eed39b"}
  - {name: "s-viz-color-diverging-two-8-7", value: "#eec866"}
  - {name: "s-viz-color-diverging-two-8-8", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-9-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-9-2", value: "#7874ee"}
  - {name: "s-viz-color-diverging-two-9-3", value: "#a298ed"}
  - {name: "s-viz-color-diverging-two-9-4", value: "#c4beec"}
  - {name: "s-viz-color-diverging-two-9-5", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-9-6", value: "#ebdabc"}
  - {name: "s-viz-color-diverging-two-9-7", value: "#eed08e"}
  - {name: "s-viz-color-diverging-two-9-8", value: "#eec65f"}
  - {name: "s-viz-color-diverging-two-9-9", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-10-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-10-2", value: "#7370ee"}
  - {name: "s-viz-color-diverging-two-10-3", value: "#9990ee"}
  - {name: "s-viz-color-diverging-two-10-4", value: "#b9b1ec"}
  - {name: "s-viz-color-diverging-two-10-5", value: "#d6d3ea"}
  - {name: "s-viz-color-diverging-two-10-6", value: "#e7dfd5"}
  - {name: "s-viz-color-diverging-two-10-7", value: "#edd6ad"}
  - {name: "s-viz-color-diverging-two-10-8", value: "#efce84"}
  - {name: "s-viz-color-diverging-two-10-9", value: "#eec55a"}
  - {name: "s-viz-color-diverging-two-10-10", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-11-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-11-2", value: "#6f6dee"}
  - {name: "s-viz-color-diverging-two-11-3", value: "#928aee"}
  - {name: "s-viz-color-diverging-two-11-4", value: "#b0a7ed"}
  - {name: "s-viz-color-diverging-two-11-5", value: "#cbc5eb"}
  - {name: "s-viz-color-diverging-two-11-6", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-11-7", value: "#eadcc5"}
  - {name: "s-viz-color-diverging-two-11-8", value: "#eed4a1"}
  - {name: "s-viz-color-diverging-two-11-9", value: "#efcc7c"}
  - {name: "s-viz-color-diverging-two-11-10", value: "#eec455"}
  - {name: "s-viz-color-diverging-two-11-11", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-12-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-12-2", value: "#6b6bee"}
  - {name: "s-viz-color-diverging-two-12-3", value: "#8c84ee"}
  - {name: "s-viz-color-diverging-two-12-4", value: "#a89fed"}
  - {name: "s-viz-color-diverging-two-12-5", value: "#c1baec"}
  - {name: "s-viz-color-diverging-two-12-6", value: "#d8d6ea"}
  - {name: "s-viz-color-diverging-two-12-7", value: "#e7e0d9"}
  - {name: "s-viz-color-diverging-two-12-8", value: "#ecd9b8"}
  - {name: "s-viz-color-diverging-two-12-9", value: "#eed297"}
  - {name: "s-viz-color-diverging-two-12-10", value: "#efcb75"}
  - {name: "s-viz-color-diverging-two-12-11", value: "#eec451"}
  - {name: "s-viz-color-diverging-two-12-12", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-13-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-13-2", value: "#6869ee"}
  - {name: "s-viz-color-diverging-two-13-3", value: "#8780ee"}
  - {name: "s-viz-color-diverging-two-13-4", value: "#a298ed"}
  - {name: "s-viz-color-diverging-two-13-5", value: "#b9b1ec"}
  - {name: "s-viz-color-diverging-two-13-6", value: "#cfcaeb"}
  - {name: "s-viz-color-diverging-two-13-7", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-13-8", value: "#e9ddcb"}
  - {name: "s-viz-color-diverging-two-13-9", value: "#edd6ad"}
  - {name: "s-viz-color-diverging-two-13-10", value: "#eed08e"}
  - {name: "s-viz-color-diverging-two-13-11", value: "#efc96f"}
  - {name: "s-viz-color-diverging-two-13-12", value: "#edc34e"}
  - {name: "s-viz-color-diverging-two-13-13", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-14-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-14-2", value: "#6567ee"}
  - {name: "s-viz-color-diverging-two-14-3", value: "#837cee"}
  - {name: "s-viz-color-diverging-two-14-4", value: "#9c93ee"}
  - {name: "s-viz-color-diverging-two-14-5", value: "#b2a9ed"}
  - {name: "s-viz-color-diverging-two-14-6", value: "#c7c0ec"}
  - {name: "s-viz-color-diverging-two-14-7", value: "#dad8ea"}
  - {name: "s-viz-color-diverging-two-14-8", value: "#e6e1db"}
  - {name: "s-viz-color-diverging-two-14-9", value: "#ebdabf"}
  - {name: "s-viz-color-diverging-two-14-10", value: "#edd4a3"}
  - {name: "s-viz-color-diverging-two-14-11", value: "#efce87"}
  - {name: "s-viz-color-diverging-two-14-12", value: "#efc86b"}
  - {name: "s-viz-color-diverging-two-14-13", value: "#edc34b"}
  - {name: "s-viz-color-diverging-two-14-14", value: "#ebbd22"}
```

### Diverging-three

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-2-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-2-2", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-3-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-3-2", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-3-3", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-4-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-4-2", value: "#b1d0e4"}
  - {name: "s-viz-color-diverging-three-4-3", value: "#dbdeac"}
  - {name: "s-viz-color-diverging-three-4-4", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-5-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-5-2", value: "#97c6e1"}
  - {name: "s-viz-color-diverging-three-5-3", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-5-4", value: "#d5db8e"}
  - {name: "s-viz-color-diverging-three-5-5", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-6-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-6-2", value: "#85c0e0"}
  - {name: "s-viz-color-diverging-three-6-3", value: "#c6d8e6"}
  - {name: "s-viz-color-diverging-three-6-4", value: "#dfe0c5"}
  - {name: "s-viz-color-diverging-three-6-5", value: "#d1d97b"}
  - {name: "s-viz-color-diverging-three-6-6", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-7-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-7-2", value: "#79bcdf"}
  - {name: "s-viz-color-diverging-three-7-3", value: "#b1d0e4"}
  - {name: "s-viz-color-diverging-three-7-4", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-7-5", value: "#dbdeac"}
  - {name: "s-viz-color-diverging-three-7-6", value: "#ced86e"}
  - {name: "s-viz-color-diverging-three-7-7", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-8-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-8-2", value: "#6fbade"}
  - {name: "s-viz-color-diverging-three-8-3", value: "#a2cbe2"}
  - {name: "s-viz-color-diverging-three-8-4", value: "#cedbe7"}
  - {name: "s-viz-color-diverging-three-8-5", value: "#e0e1cf"}
  - {name: "s-viz-color-diverging-three-8-6", value: "#d8dc9b"}
  - {name: "s-viz-color-diverging-three-8-7", value: "#cbd764"}
  - {name: "s-viz-color-diverging-three-8-8", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-9-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-9-2", value: "#68b8dd"}
  - {name: "s-viz-color-diverging-three-9-3", value: "#97c6e1"}
  - {name: "s-viz-color-diverging-three-9-4", value: "#bed5e5"}
  - {name: "s-viz-color-diverging-three-9-5", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-9-6", value: "#dedfbb"}
  - {name: "s-viz-color-diverging-three-9-7", value: "#d5db8e"}
  - {name: "s-viz-color-diverging-three-9-8", value: "#c9d65d"}
  - {name: "s-viz-color-diverging-three-9-9", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-10-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-10-2", value: "#62b6dd"}
  - {name: "s-viz-color-diverging-three-10-3", value: "#8dc3e0"}
  - {name: "s-viz-color-diverging-three-10-4", value: "#b1d0e4"}
  - {name: "s-viz-color-diverging-three-10-5", value: "#d3dde7"}
  - {name: "s-viz-color-diverging-three-10-6", value: "#e1e2d5"}
  - {name: "s-viz-color-diverging-three-10-7", value: "#dbdeac"}
  - {name: "s-viz-color-diverging-three-10-8", value: "#d3da83"}
  - {name: "s-viz-color-diverging-three-10-9", value: "#c8d657"}
  - {name: "s-viz-color-diverging-three-10-10", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-11-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-11-2", value: "#5cb5dc"}
  - {name: "s-viz-color-diverging-three-11-3", value: "#85c0e0"}
  - {name: "s-viz-color-diverging-three-11-4", value: "#a7cce3"}
  - {name: "s-viz-color-diverging-three-11-5", value: "#c6d8e6"}
  - {name: "s-viz-color-diverging-three-11-6", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-11-7", value: "#dfe0c5"}
  - {name: "s-viz-color-diverging-three-11-8", value: "#d9dda0"}
  - {name: "s-viz-color-diverging-three-11-9", value: "#d1d97b"}
  - {name: "s-viz-color-diverging-three-11-10", value: "#c7d652"}
  - {name: "s-viz-color-diverging-three-11-11", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-12-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-12-2", value: "#58b4dc"}
  - {name: "s-viz-color-diverging-three-12-3", value: "#7ebedf"}
  - {name: "s-viz-color-diverging-three-12-4", value: "#9ec9e2"}
  - {name: "s-viz-color-diverging-three-12-5", value: "#bbd4e5"}
  - {name: "s-viz-color-diverging-three-12-6", value: "#d6dfe8"}
  - {name: "s-viz-color-diverging-three-12-7", value: "#e1e2d8"}
  - {name: "s-viz-color-diverging-three-12-8", value: "#dddfb7"}
  - {name: "s-viz-color-diverging-three-12-9", value: "#d7dc96"}
  - {name: "s-viz-color-diverging-three-12-10", value: "#cfd874"}
  - {name: "s-viz-color-diverging-three-12-11", value: "#c6d54e"}
  - {name: "s-viz-color-diverging-three-12-12", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-13-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-13-2", value: "#54b3dc"}
  - {name: "s-viz-color-diverging-three-13-3", value: "#79bcdf"}
  - {name: "s-viz-color-diverging-three-13-4", value: "#97c6e1"}
  - {name: "s-viz-color-diverging-three-13-5", value: "#b1d0e4"}
  - {name: "s-viz-color-diverging-three-13-6", value: "#cbdae6"}
  - {name: "s-viz-color-diverging-three-13-7", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-13-8", value: "#e0e1cb"}
  - {name: "s-viz-color-diverging-three-13-9", value: "#dbdeac"}
  - {name: "s-viz-color-diverging-three-13-10", value: "#d5db8e"}
  - {name: "s-viz-color-diverging-three-13-11", value: "#ced86e"}
  - {name: "s-viz-color-diverging-three-13-12", value: "#c5d54a"}
  - {name: "s-viz-color-diverging-three-13-13", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-14-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-14-2", value: "#51b2dc"}
  - {name: "s-viz-color-diverging-three-14-3", value: "#74bbde"}
  - {name: "s-viz-color-diverging-three-14-4", value: "#90c4e1"}
  - {name: "s-viz-color-diverging-three-14-5", value: "#a9cde3"}
  - {name: "s-viz-color-diverging-three-14-6", value: "#c1d6e6"}
  - {name: "s-viz-color-diverging-three-14-7", value: "#d8dfe8"}
  - {name: "s-viz-color-diverging-three-14-8", value: "#e2e3db"}
  - {name: "s-viz-color-diverging-three-14-9", value: "#dee0bf"}
  - {name: "s-viz-color-diverging-three-14-10", value: "#d9dda3"}
  - {name: "s-viz-color-diverging-three-14-11", value: "#d3da86"}
  - {name: "s-viz-color-diverging-three-14-12", value: "#ccd769"}
  - {name: "s-viz-color-diverging-three-14-13", value: "#c4d547"}
  - {name: "s-viz-color-diverging-three-14-14", value: "#bbd215"}
```

### Diverging-gender

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-2-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-2-2", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-3-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-3-2", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-3-3", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-4-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-4-2", value: "#afd4cf"}
  - {name: "s-viz-color-diverging-gender-4-3", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-gender-4-4", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-5-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-5-2", value: "#94ccc2"}
  - {name: "s-viz-color-diverging-gender-5-3", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-5-4", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-gender-5-5", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-6-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-6-2", value: "#83c8ba"}
  - {name: "s-viz-color-diverging-gender-6-3", value: "#c4dbd9"}
  - {name: "s-viz-color-diverging-gender-6-4", value: "#cec3e2"}
  - {name: "s-viz-color-diverging-gender-6-5", value: "#a082d2"}
  - {name: "s-viz-color-diverging-gender-6-6", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-7-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-7-2", value: "#77c4b5"}
  - {name: "s-viz-color-diverging-gender-7-3", value: "#afd4cf"}
  - {name: "s-viz-color-diverging-gender-7-4", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-7-5", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-gender-7-6", value: "#9878cf"}
  - {name: "s-viz-color-diverging-gender-7-7", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-8-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-8-2", value: "#6ec2b1"}
  - {name: "s-viz-color-diverging-gender-8-3", value: "#a0d0c7"}
  - {name: "s-viz-color-diverging-gender-8-4", value: "#cdddde"}
  - {name: "s-viz-color-diverging-gender-8-5", value: "#d4cce4"}
  - {name: "s-viz-color-diverging-gender-8-6", value: "#b49ed9"}
  - {name: "s-viz-color-diverging-gender-8-7", value: "#9270cd"}
  - {name: "s-viz-color-diverging-gender-8-8", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-9-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-9-2", value: "#67c0af"}
  - {name: "s-viz-color-diverging-gender-9-3", value: "#94ccc2"}
  - {name: "s-viz-color-diverging-gender-9-4", value: "#bcd8d5"}
  - {name: "s-viz-color-diverging-gender-9-5", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-9-6", value: "#c8bbe0"}
  - {name: "s-viz-color-diverging-gender-9-7", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-gender-9-8", value: "#8e6acb"}
  - {name: "s-viz-color-diverging-gender-9-9", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-10-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-10-2", value: "#61bfad"}
  - {name: "s-viz-color-diverging-gender-10-3", value: "#8acabd"}
  - {name: "s-viz-color-diverging-gender-10-4", value: "#afd4cf"}
  - {name: "s-viz-color-diverging-gender-10-5", value: "#d2dfe0"}
  - {name: "s-viz-color-diverging-gender-10-6", value: "#d7d1e5"}
  - {name: "s-viz-color-diverging-gender-10-7", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-gender-10-8", value: "#a689d3"}
  - {name: "s-viz-color-diverging-gender-10-9", value: "#8a66ca"}
  - {name: "s-viz-color-diverging-gender-10-10", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-11-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-11-2", value: "#5cbdab"}
  - {name: "s-viz-color-diverging-gender-11-3", value: "#83c8ba"}
  - {name: "s-viz-color-diverging-gender-11-4", value: "#a4d1ca"}
  - {name: "s-viz-color-diverging-gender-11-5", value: "#c4dbd9"}
  - {name: "s-viz-color-diverging-gender-11-6", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-11-7", value: "#cec3e2"}
  - {name: "s-viz-color-diverging-gender-11-8", value: "#b8a2da"}
  - {name: "s-viz-color-diverging-gender-11-9", value: "#a082d2"}
  - {name: "s-viz-color-diverging-gender-11-10", value: "#8763c9"}
  - {name: "s-viz-color-diverging-gender-11-11", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-12-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-12-2", value: "#59bcaa"}
  - {name: "s-viz-color-diverging-gender-12-3", value: "#7cc6b7"}
  - {name: "s-viz-color-diverging-gender-12-4", value: "#9bcfc5"}
  - {name: "s-viz-color-diverging-gender-12-5", value: "#b9d7d3"}
  - {name: "s-viz-color-diverging-gender-12-6", value: "#d5e0e2"}
  - {name: "s-viz-color-diverging-gender-12-7", value: "#d9d5e6"}
  - {name: "s-viz-color-diverging-gender-12-8", value: "#c6b7df"}
  - {name: "s-viz-color-diverging-gender-12-9", value: "#b199d8"}
  - {name: "s-viz-color-diverging-gender-12-10", value: "#9c7cd0"}
  - {name: "s-viz-color-diverging-gender-12-11", value: "#8560c8"}
  - {name: "s-viz-color-diverging-gender-12-12", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-13-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-13-2", value: "#55bca8"}
  - {name: "s-viz-color-diverging-gender-13-3", value: "#77c4b5"}
  - {name: "s-viz-color-diverging-gender-13-4", value: "#94ccc2"}
  - {name: "s-viz-color-diverging-gender-13-5", value: "#afd4cf"}
  - {name: "s-viz-color-diverging-gender-13-6", value: "#c9dcdc"}
  - {name: "s-viz-color-diverging-gender-13-7", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-13-8", value: "#d1c8e3"}
  - {name: "s-viz-color-diverging-gender-13-9", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-gender-13-10", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-gender-13-11", value: "#9878cf"}
  - {name: "s-viz-color-diverging-gender-13-12", value: "#835dc7"}
  - {name: "s-viz-color-diverging-gender-13-13", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-14-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-14-2", value: "#52bba7"}
  - {name: "s-viz-color-diverging-gender-14-3", value: "#72c3b3"}
  - {name: "s-viz-color-diverging-gender-14-4", value: "#8dcbbf"}
  - {name: "s-viz-color-diverging-gender-14-5", value: "#a7d2cb"}
  - {name: "s-viz-color-diverging-gender-14-6", value: "#bfd9d7"}
  - {name: "s-viz-color-diverging-gender-14-7", value: "#d7e0e3"}
  - {name: "s-viz-color-diverging-gender-14-8", value: "#dbd7e6"}
  - {name: "s-viz-color-diverging-gender-14-9", value: "#cabee0"}
  - {name: "s-viz-color-diverging-gender-14-10", value: "#b9a5da"}
  - {name: "s-viz-color-diverging-gender-14-11", value: "#a88cd4"}
  - {name: "s-viz-color-diverging-gender-14-12", value: "#9574ce"}
  - {name: "s-viz-color-diverging-gender-14-13", value: "#815bc7"}
  - {name: "s-viz-color-diverging-gender-14-14", value: "#6c43c0"}
```

## Political Party Colors

We have predefined colors for a number of countries, including Switzerland, France, Germany, Netherlands, United Kingdom and the United States. When other colors are needed for a country that is not part of the predefined list, please do the research to find out what color the party identifies with and then choose from a similar color already defined. For example, if the People's Party in Spain identifies with a lighter blue, you could take the blue currently defined for the Democratic party in the United States. Please try to remain consistent by asking others in the team or checking Q for charts already addressing elections in the country in question.

## How to generate "light" versions of party colors

We use [Chroma.js](https://gka.github.io/palettes) to interpolate between the regular party color and white. Chroma.js can calculate any number of steps between two colors so that they are visually at equal distance. To get the light color of the Spanish "Más País" then, we would input `#54ba00, #ffffff` and set the number of colors to `3` to get the middle value: `#b2dd90`.

### Switzerland

```color-palette|span-1
colors:
  - {name: "SVP - primary", value: "#408b3d"}
  - {name: "SP", value: "#c31906"}
  - {name: "FDP", value: "#0084c7"}
  - {name: "CVP", value: "#d28b00"}
  - {name: "GPS", value: "#54ba00"}
  - {name: "GLP", value: "#a9cf00"}
  - {name: "BDP", value: "#d1cc00"}
```

```color-palette|span-1
colors:
  - {name: "SVP - light", value: "#b2d0b1"}
  - {name: "SP", value: "#eaaea8"}
  - {name: "FDP", value: "#9ed0e9"}
  - {name: "CVP", value: "#edd29c"}
  - {name: "GPS", value: "#bae399"}
  - {name: "GLP", value: "#dceb99"}
  - {name: "BDP", value: "#edeca0"}
```

```color-palette|span-1
colors:
  - {name: "EVP - primary", value: "#bda700"}
  - {name: "LEGA", value: "#ac5038"}
  - {name: "MCR", value: "#716e48"}
  - {name: "AL", value: "#da467d"}
  - {name: "EDU", value: "#8440a3"}
  - {name: "SD", value: "#4e36d7"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "EVP - light", value: "#e5dc9b"}
  - {name: "LEGA", value: "#ddb9af"}
  - {name: "MCR", value: "#c3c2b2"}
  - {name: "AL", value: "#f1bace"}
  - {name: "EDU", value: "#cdb1d9"}
  - {name: "SD", value: "#b8aeef"}
  - {name: "default", value: "#bcbcbc"}
```

#### Sophie Implementation of Swiss Party Colors

##### AL

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-al-1", value: "#f8dce7"}
  - {name: "s-viz-color-party-al-2", value: "#f2bace"}
  - {name: "s-viz-color-party-al-3", value: "#ea97b6"}
  - {name: "s-viz-color-party-al-4", value: "#e37199"}
  - {name: "s-viz-color-party-al-5", value: "#da467d"}
  - {name: "s-viz-color-party-al-7", value: "#82294a"}
```

##### SP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-sp-1", value: "#f3d1cd"}
  - {name: "s-viz-color-party-sp-2", value: "#eaa39a"}
  - {name: "s-viz-color-party-sp-3", value: "#db756a"}
  - {name: "s-viz-color-party-sp-4", value: "#d14e3b"}
  - {name: "s-viz-color-party-sp-5", value: "#c31906"}
  - {name: "s-viz-color-party-sp-7", value: "#750f04"}
```

##### GPS

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-gps-1", value: "#dcf1cc"}
  - {name: "s-viz-color-party-gps-2", value: "#bbe399"}
  - {name: "s-viz-color-party-gps-3", value: "#98d566"}
  - {name: "s-viz-color-party-gps-4", value: "#78c840"}
  - {name: "s-viz-color-party-gps-5", value: "#54ba00"}
  - {name: "s-viz-color-party-gps-7", value: "#326f00"}
```

##### GLP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-glp-1", value: "#edf5cc"}
  - {name: "s-viz-color-party-glp-2", value: "#ddeb9a"}
  - {name: "s-viz-color-party-glp-3", value: "#cbe266"}
  - {name: "s-viz-color-party-glp-4", value: "#bad842"}
  - {name: "s-viz-color-party-glp-5", value: "#a9cf00"}
  - {name: "s-viz-color-party-glp-7", value: "#657c00"}
```

##### EVP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-evp-1", value: "#f2edcc"}
  - {name: "s-viz-color-party-evp-2", value: "#e6db99"}
  - {name: "s-viz-color-party-evp-3", value: "#d7ca66"}
  - {name: "s-viz-color-party-evp-4", value: "#cbb83f"}
  - {name: "s-viz-color-party-evp-5", value: "#bda700"}
  - {name: "s-viz-color-party-evp-7", value: "#716400"}
```

##### CVP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-cvp-1", value: "#f6e8cc"}
  - {name: "s-viz-color-party-cvp-2", value: "#efd099"}
  - {name: "s-viz-color-party-cvp-3", value: "#e4b966"}
  - {name: "s-viz-color-party-cvp-4", value: "#dca23e"}
  - {name: "s-viz-color-party-cvp-5", value: "#d28b00"}
  - {name: "s-viz-color-party-cvp-7", value: "#7e5300"}
```

##### BDP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-bdp-1", value: "#f6f5cc"}
  - {name: "s-viz-color-party-bdp-2", value: "#eeea9a"}
  - {name: "s-viz-color-party-bdp-3", value: "#e3e066"}
  - {name: "s-viz-color-party-bdp-4", value: "#dad542"}
  - {name: "s-viz-color-party-bdp-5", value: "#d1cb00"}
  - {name: "s-viz-color-party-bdp-7", value: "#7d7a00"}
```

##### FDP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-fdp-1", value: "#cce6f4"}
  - {name: "s-viz-color-party-fdp-2", value: "#9ccde9"}
  - {name: "s-viz-color-party-fdp-3", value: "#66b5dd"}
  - {name: "s-viz-color-party-fdp-4", value: "#449cd2"}
  - {name: "s-viz-color-party-fdp-5", value: "#0084c7"}
  - {name: "s-viz-color-party-fdp-7", value: "#004f77"}
```

##### SVP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-svp-1", value: "#d8e7d8"}
  - {name: "s-viz-color-party-svp-2", value: "#b2d0b0"}
  - {name: "s-viz-color-party-svp-3", value: "#8cb98a"}
  - {name: "s-viz-color-party-svp-4", value: "#67a263"}
  - {name: "s-viz-color-party-svp-5", value: "#408b3d"}
  - {name: "s-viz-color-party-svp-7", value: "#265324"}
```

##### LEGA

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-lega-1", value: "#e8e3dd"}
  - {name: "s-viz-color-party-lega-2", value: "#d8cec4"}
  - {name: "s-viz-color-party-lega-3", value: "#c7b8ab"}
  - {name: "s-viz-color-party-lega-4", value: "#b6a392"}
  - {name: "s-viz-color-party-lega-5", value: "#a58e79"}
  - {name: "s-viz-color-party-lega-7", value: "#826b57"}
```

##### MCR

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-mcr-1", value: "#e3e2da"}
  - {name: "s-viz-color-party-mcr-2", value: "#c6c5b5"}
  - {name: "s-viz-color-party-mcr-3", value: "#aaa891"}
  - {name: "s-viz-color-party-mcr-4", value: "#8d8a6c"}
  - {name: "s-viz-color-party-mcr-5", value: "#716e48"}
  - {name: "s-viz-color-party-mcr-7", value: "#44422b"}
```

##### EDU

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-edu-1", value: "#e5d8ec"}
  - {name: "s-viz-color-party-edu-2", value: "#cdb2da"}
  - {name: "s-viz-color-party-edu-3", value: "#b58cc7"}
  - {name: "s-viz-color-party-edu-4", value: "#9d66b5"}
  - {name: "s-viz-color-party-edu-5", value: "#8440a3"}
  - {name: "s-viz-color-party-edu-7", value: "#502763"}
```

##### SD

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-sd-1", value: "#eedcd7"}
  - {name: "s-viz-color-party-sd-2", value: "#deb9af"}
  - {name: "s-viz-color-party-sd-3", value: "#cd9688"}
  - {name: "s-viz-color-party-sd-4", value: "#be735f"}
  - {name: "s-viz-color-party-sd-5", value: "#ac5038"}
  - {name: "s-viz-color-party-sd-7", value: "#673022"}
```

##### PDA

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-pda-1", value: "#f3e0e3"}
  - {name: "s-viz-color-party-pda-2", value: "#e2b4bb"}
  - {name: "s-viz-color-party-pda-3", value: "#d08993"}
  - {name: "s-viz-color-party-pda-4", value: "#bf5d6b"}
  - {name: "s-viz-color-party-pda-5", value: "#ae3143"}
  - {name: "s-viz-color-party-pda-7", value: "#5e2b3c"}
```

##### CSP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-csp-1", value: "#fff0d1"}
  - {name: "s-viz-color-party-csp-2", value: "#ffe1a3"}
  - {name: "s-viz-color-party-csp-3", value: "#ffd175"}
  - {name: "s-viz-color-party-csp-4", value: "#ffc247"}
  - {name: "s-viz-color-party-csp-5", value: "#ffb319"}
  - {name: "s-viz-color-party-csp-7", value: "#a86c14"}
```

##### Liberale

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-liberale-1", value: "#dbd6f7"}
  - {name: "s-viz-color-party-liberale-2", value: "#b9adef"}
  - {name: "s-viz-color-party-liberale-3", value: "#9486e7"}
  - {name: "s-viz-color-party-liberale-4", value: "#765fdf"}
  - {name: "s-viz-color-party-liberale-5", value: "#4e36d7"}
  - {name: "s-viz-color-party-liberale-7", value: "#2e2081"}
```

##### Andere

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-default-1", value: "#e7e7e7"}
  - {name: "s-viz-color-party-default-2", value: "#cacaca"}
  - {name: "s-viz-color-party-default-3", value: "#adadad"}
  - {name: "s-viz-color-party-default-4", value: "#909090"}
  - {name: "s-viz-color-party-default-5", value: "#737373"}
  - {name: "s-viz-color-party-default-7", value: "#565656"}
```

### Austria

```color-palette|span-1
colors:
  - {name: "ÖVP - primary", value: "#0A0A0A"}
  - {name: "SPÖ", value: "#c31906"}
  - {name: "FPO", value: "#0084c7"}
  - {name: "Grüne", value: "#54ba00"}
```

```color-palette|span-1
colors:
  - {name: "ÖVP - light", value: "#939393"}
  - {name: "SPÖ", value: "#eaaea8"}
  - {name: "FPO", value: "#9ed0e9"}
  - {name: "Grüne", value: "#bae399"}
```

```color-palette|span-1
colors:
  - {name: "NEOS - primary", value: "#da467d"}
  - {name: "Liste Pilz", value: "#22a682"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "NEOS - light", value: "#f1bace"}
  - {name: "Liste Pilz", value: "#aadccf"}
  - {name: "default", value: "#bcbcbc"}
```

### Brasil

```color-palette|span-1
colors:
  - {name: "PSL - primary", value: "#D1CC00"}
  - {name: "PT", value: "#c31906"}
  - {name: "PDT", value: "#d28b00"}
  - {name: "PSDB", value: "#0084c7"}
  - {name: "Rede", value: "#66a622"}
```

```color-palette|span-1
colors:
  - {name: "PSL - light", value: "#edeca0"}
  - {name: "PT", value: "#eaaea8"}
  - {name: "PDT", value: "#edd29c"}
  - {name: "PSDB", value: "#9ed0e9"}
  - {name: "Rede", value: "#c2dba7"}
```

### Canada

```color-palette|span-2
colors:
  - {name: "Liberals", value: "#d71920"}
  - {name: "Conservative Party of Canada (CDC)", value: "#0b2643"}
  - {name: "New Democratic Party (NDP)", value: "#f89920"}
  - {name: "Bloc Québécois", value: "#093c71"}
  - {name: "Green Party", value: "#66a622"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "Liberals – light", value: "#f19b9e"}
  - {name: "Conservative Party of Canada (CDC)", value: "#5d82ab"}
  - {name: "New Democratic Party (NDP)", value: "#ffe0b8"}
  - {name: "Bloc Québécois", value: "#83a7cc"}
  - {name: "Green Party", value: "#c2dba7"}
  - {name: "default", value: "#bcbcbc"}
```

### Denmark

```color-palette|span-1
colors:
  - {name: "Sozialdemokraten – primary", value: "#c31906"}
  - {name: "Det Konservative Folkeparti - primary", value: "#408b3d"}
  - {name: "Venstre", value: "#0084c7"}
  - {name: "Det Radikale Venstre", value: "#da467d"}
  - {name: "Dänische Volkspartei", value: "#FDD200"}
  - {name: "Christdemokraten", value: "#616161"}
  - {name: "Stram Kurs", value: "#ac5038"}
```

```color-palette|span-1
colors:
  - {name: "Sozialdemokraten – light", value: "#eaaea8"}
  - {name: "Det Konservative Folkeparti", value: "#b2d0b1"}
  - {name: "Venstre", value: "#9ed0e9"}
  - {name: "Det Radikale Venstre", value: "#f8dce7"}
  - {name: "Dänische Volkspartei", value: "#faeb9e"}
  - {name: "Christdemokraten", value: "#bcbcbc"}
  - {name: "Stram Kurs", value: "#ddb9af"}
```

```color-palette|span-1
colors:
  - {name: "Liberal Alliance - primary", value: "#01b1c0"}
  - {name: "Socialistik Volkeparti", value: "#D64B47"}
  - {name: "Enhedslisten", value: "#d28b00"}
  - {name: "Alternativet", value: "#54ba00"}
  - {name: "Nye Borgerlige", value: "#22A682"}
```

```color-palette|span-1
colors:
  - {name: "Liberal Alliance - light", value: "#d2f1f3"}
  - {name: "Socialistik Volkeparti", value: "#FFD3D1"}
  - {name: "Enhedslisten", value: "#edd29c"}
  - {name: "Alternativet", value: "#bae399"}
  - {name: "Nye Borgerlige", value: "#aadccf"}
```

### Finland

```color-palette|span-1
colors:
  - {name: "Linksbündnis - primary", value: "#C31906"}
  - {name: "Grüne", value: "#66A622"}
  - {name: "Sozialdemokraten", value: "#DA467D"}
  - {name: "Konservative", value: "#00A0C6"}
  - {name: "Finnenpartei", value: "#005EA1"}
```

```color-palette|span-1
colors:
  - {name: "Linksbündnis - light", value: "#eaaea8"}
  - {name: "Grüne", value: "#c2dba7"}
  - {name: "Sozialdemokraten", value: "#f1bace"}
  - {name: "Konservative", value: "#a0deee"}
  - {name: "Finnenpartei", value: "#a3d3f5"}
```

```color-palette|span-1
colors:
  - {name: "Zentrum – primary", value: "#08783E"}
  - {name: "Schwedische Volkspartei", value: "#FDD200"}
  - {name: "Christlichdemokraten", value: "#8440a3"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "Zentrum – light", value: "#b3e6cb"}
  - {name: "Schwedische Volkspartei", value: "#faeb9e"}
  - {name: "Christlichdemokraten", value: "#cdb1d9"}
  - {name: "default", value: "#bcbcbc"}
```

### France

```color-palette|span-2
colors:
  - {name: "SOC, RDG, DVG - primary", value: "#c31906"}
  - {name: "LR, UDI, DVD", value: "#0084c7"}
  - {name: "FN", value: "#0a0a0a"}
  - {name: "REM, MDM", value: "#da467d"}
  - {name: "FI", value: "#01b1c0"}
  - {name: "ECO, COM, DLF, EXT, DIV, EXD", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "SOC, RDG, DVG - light", value: "#f4d7d3"}
  - {name: "LR, UDI, DVD", value: "#cee7f4"}
  - {name: "FN", value: "#c7c7c7"}
  - {name: "REM, MDM", value: "#f8dce7"}
  - {name: "FI", value: "#d2f1f3"}
  - {name: "ECO, COM, DLF, EXT, DIV, EXD", value: "#dddddd"}
```

### Germany

```color-palette|span-1
colors:
  - {name: "SDP - primary", value: "#c31906"}
  - {name: "Union", value: "#0a0a0a"}
  - {name: "FDP", value: "#d1cc00"}
  - {name: "Grüne", value: "#66a622"}
  - {name: "AfD", value: "#0084c7"}
```

```color-palette|span-1
colors:
  - {name: "SDP - light", value: "#eaaea8"}
  - {name: "Union", value: "#939393"}
  - {name: "FDP", value: "#edeca0"}
  - {name: "Grüne", value: "#c2dba7"}
  - {name: "AfD", value: "#9ed0e9"}
```

```color-palette|span-1
colors:
  - {name: "Linke - primary", value: "#8440a3"}
  - {name: "Piraten", value: "#d28b00"}
  - {name: "Freie Wähler", value: "#ac5038"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "Linke - light", value: "#cdb1d9"}
  - {name: "Piraten", value: "#edd29c"}
  - {name: "Freie Wähler", value: "#ddb9af"}
  - {name: "default", value: "#bcbcbc"}
```

### India

```color-palette|span-2
colors:
  - {name: "Kongresspartei - primary", value: "#0084c7"}
  - {name: "BJP (Bharatiya Janata Party)", value: "#d28b00"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "Kongresspartei - light", value: "#9ed0e9"}
  - {name: "BJP (Bharatiya Janata Party)", value: "#edd29c"}
  - {name: "default", value: "#bcbcbc"}
```

### Ireland

```color-palette|span-2
colors:
  - {name: "Sinn Fein - primary", value: "#0a0a0a"}
  - {name: "Fianna Fail", value: "#408b3c"}
  - {name: "Fine Gael", value: "#0083c7"}
  - {name: "default", value: "#616161"}
  - {name: "Grüne", value: "#54ba00"}
  - {name: "Labour", value: "#c31906"}
```

```color-palette|span-2
colors:
  - {name: "Sinn Fein - light", value: "#939393"}
  - {name: "Fianna Fail", value: "#b2d0b1"}
  - {name: "Fine Gael", value: "#9ed0e9"}
  - {name: "default", value: "#bcbcbc"}
  - {name: "Grüne", value: "#c2dba7"}
  - {name: "Labour", value: "#eaaea8"}
```

### Italy

```color-palette|span-2
colors:
  - {name: "Partito Democratico - primary", value: "#F1242B"}
  - {name: "Cinque Stelle", value: "#FDD200"}
  - {name: "Rechtsallianz", value: "#0084c7"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "Partito Democratico - light", value: "#f9a7aa"}
  - {name: "Cinque Stelle", value: "#faeb9e"}
  - {name: "Rechtsallianz", value: "#9ed0e9"}
  - {name: "default", value: "#bcbcbc"}
```

### Netherlands

```color-palette|span-1
colors:
  - {name: "SP - primary", value: "#8440a3"}
  - {name: "PvdA", value: "#c31906"}
  - {name: "Groen Links", value: "#66a622"}
  - {name: "D66", value: "#22a682"}
  - {name: "ChristenUnie_", value: "#0084c7"}
```

```color-palette|span-1
colors:
  - {name: "SP - light", value: "#cdb1d9"}
  - {name: "PvdA", value: "#eaaea8"}
  - {name: "Groen Links", value: "#c2dba7"}
  - {name: "D66", value: "#aadccf"}
  - {name: "ChristenUnie_", value: "#9ed0e9"}
```

```color-palette|span-1
colors:
  - {name: "CDA - primary", value: "#01b1c0"}
  - {name: "VVD", value: "#d28b00"}
  - {name: "PVV", value: "#0a0a0a"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "CDA - light", value: "#a4e3e8"}
  - {name: "VVD", value: "#edd29c"}
  - {name: "PVV", value: "#939393"}
  - {name: "default", value: "#bcbcbc"}
```

### Poland

```color-palette|span-2
colors:
  - {name: "PiS - primary", value: "#005EA1"}
  - {name: "KO", value: "#d1cc00"}
  - {name: "Lewica", value: "#c31906"}
  - {name: "KP", value: "#66a622"}
  - {name: "Konf", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "PiS - light", value: "#a3d3f5"}
  - {name: "KO", value: "#edeca0"}
  - {name: "Lewica", value: "#eaaea8"}
  - {name: "KP", value: "#c2dba7"}
  - {name: "Konf", value: "#bcbcbc"}
```

### Portugal

```color-palette|span-2
colors:
  - {name: "CDU Kommunisten und Grüne - primary", value: "#C31906"}
  - {name: "PAN - Menschen Tiere Natur", value: "#003645"}
  - {name: "Livre", value: "#A3C760"}
  - {name: "BE - Linksblock", value: "#8440A3"}
  - {name: "PS Sozialisten", value: "#DA467D"}
  - {name: "PSD Bürgerlich", value: "#D28B01"}
  - {name: "Iniciativa Liberal", value: "#FFEF00"}
  - {name: "CDS-PP Konservativ", value: "#008CD7"}
  - {name: "Chega Partido", value: "#093c71"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "CDU Kommunisten und Grüne - light", value: "#eaaea8"}
  - {name: "PAN - Menschen Tiere Natur", value: "#5a7d87"}
  - {name: "Livre", value: "#bfcaaa"}
  - {name: "BE - Linksblock", value: "#aa99b2"}
  - {name: "PS Sozialisten", value: "#EC9EBA"}
  - {name: "PSD Bürgerlich", value: "#d9c191"}
  - {name: "Iniciativa Liberal", value: "#d9d48c"}
  - {name: "CDS-PP Konservativ", value: "#94CCEE"}
  - {name: "Chega Partido", value: "#83a7cc"}
  - {name: "default", value: "#bcbcbc"}
```

### South Africa

```color-palette|span-2
colors:
  - {name: "African National Congress (ANC) - primary", value: "#38A650"}
  - {name: "Democratic Alliance (DA)", value: "#3952EE"}
  - {name: "Economic Freedom Fighters (EFF)", value: "#D64B47"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "African National Congress (ANC) - light", value: "#C9F5D2"}
  - {name: "Democratic Alliance (DA)", value: "#D6DCFF"}
  - {name: "Economic Freedom Fighters (EFF)", value: "#FFD3D1"}
  - {name: "default", value: "#bcbcbc"}
```

### Spain

```color-palette|span-2
colors:
  - {name: "Sozialisten - primary", value: "#C31906"}
  - {name: "Partido Popular", value: "#0084C7"}
  - {name: "Ciudadanos", value: "#D28B00"}
  - {name: "Podemos", value: "#8440A3"}
  - {name: "Vox", value: "#54BA00"}
  - {name: "Más País", value: "#22a682"}
  - {name: "ERC Katalanische Linksrepublikaner", value: "#d64b47"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "Sozialisten - light", value: "#eaaea8"}
  - {name: "Partido Popular - light", value: "#9ed0e9"}
  - {name: "Ciudadanos - light", value: "#edd29c"}
  - {name: "Podemos - light", value: "#cdb1d9"}
  - {name: "Vox - light", value: "#bae399"}
  - {name: "Más País - light", value: "#9dd3bf"}
  - {name: "ERC Katalanische Linksrepublikaner - light", value: "#f4a79e"}
  - {name: "default - light", value: "#bcbcbc"}
```

### Sweden

```color-palette|span-1
colors:
  - {name: "Sozialdemokraten", value: "#c31906"}
  - {name: "Grüne", value: "#66a622"}
  - {name: "Linkspartei", value: "#8440a3"}
  - {name: "Moderate", value: "#4fbfe8"}
```

```color-palette|span-1
colors:
  - {name: "Sozialdemokraten - light", value: "#eaaea8"}
  - {name: "Grüne", value: "#c2dba7"}
  - {name: "Linkspartei", value: "#cdb1d9"}
  - {name: "Moderate", value: "#a8ddf0"}
```

```color-palette|span-1
colors:
  - {name: "Zentrumspartei", value: "#08783E"}
  - {name: "Liberale", value: "#00a0c6"}
  - {name: "Christdemokraten", value: "#005EA1"}
  - {name: "Schwedendemokraten", value: "#FDD200"}
```

```color-palette|span-1
colors:
  - {name: "Zentrumspartei - light", value: "#b3e6cb"}
  - {name: "Liberale - light", value: "#a0deee"}
  - {name: "Christdemokraten - highlight", value: "#a3d3f5"}
  - {name: "Schwedendemokraten - highlight", value: "#faeb9e"}
```

### United Kingdom

```color-palette|span-1
colors:
  - {name: "Konservative", value: "#0084c7"}
  - {name: "Labour", value: "#c31906"}
  - {name: "Green Party", value: "#66a622"}
  - {name: "SNP", value: "#D1CC00"}
  - {name: "Brexit Party", value: "#24B39C"}
```

```color-palette|span-1
colors:
  - {name: "Konservative - light", value: "#9ed0e9"}
  - {name: "Labour", value: "#eaaea8"}
  - {name: "Green Party", value: "#c2dba7"}
  - {name: "SNP", value: "#f5f3a3"}
  - {name: "Brexit Party", value: "#7DD1C3"}
```

```color-palette|span-1
colors:
  - {name: "Liberaldemokraten", value: "#d28b00"}
  - {name: "UKIP", value: "#8440a3"}
  - {name: "DUP", value: "#DA467D"}
  - {name: "Plaid Cymru", value: "#ac5038"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "Liberaldemokraten - light", value: "#edd29c"}
  - {name: "UKIP", value: "#cdb1d9"}
  - {name: "DUP", value: "#f1bace"}
  - {name: "Plaid Cymru", value: "#ddb9af"}
  - {name: "default", value: "#bcbcbc"}
```

### United States

```color-palette|span-2
colors:
  - {name: "Republikaner Flächen - primary", value: "#ff7a64"}
  - {name: "Demokraten Flächen", value: "#81a8db"}
  - {name: "default Flächen", value: "#d7d7d7"}
```

```color-palette|span-2
colors:
  - {name: "Republikaner - light", value: "#ffafa2"}
  - {name: "Demokraten - light", value: "#b4c7e3"}
```

```color-palette|span-2
colors:
  - {name: "Republikaner Kurven - primary", value: "#ce6661"}
  - {name: "Demokraten Kurven", value: "#618ec0"}
  - {name: "default Kurven", value: "#7b7b7c"}
```


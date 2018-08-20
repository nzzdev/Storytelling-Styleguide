```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

#### Our team's color palette consists of a qualitative scale, two sequential scales and two diverging scales.

```image
plain: true
span: 5
src: "assets/teaser-color@1x.png 1x, assets/teaser-color@2x.png 2x"
```

We aim to comply with [AA standard contrast ratios](https://www.w3.org/TR/WCAG/). We have also proofed our colors with the most common forms of color blindness. These steps ensure sufficient color contrast between elements so that our readers with low vision can read and understand our graphics.

The concept of our color palette is that all colors are scales are derived out of the original twelve qualitative color. This is one way that we can secure a consistent visual appearance in all of our graphics.

*Each of these colors receives a classname that can be called within Q (i.e. s-viz-color-one-7).* Each classname is listed below along with the hex color code.

## Qualitative Color Scale: Primary
Our primary qualitative colors are the most used colors in our color palette. These colors should be used *in order* for different or "unrelated" categories within a dataset. Such a dataset could be countries, religions, or breeds of dogs. We use them in the order listed below.

```color-palette|span-1
colors:
  - {name: "s-viz-color-one-7", value: "#2E41BF"}
  - {name: "s-viz-color-two-7", value: "#D4A91E"}
  - {name: "s-viz-color-three-7", value: "#099E85"}
  - {name: "s-viz-color-four-7", value: "#D64113"}
  - {name: "s-viz-color-five-7", value: "#873A86"}
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

## Sequential and Diverging Scales
All of our sequential scales and diverging scales are limited to seven buckets. This way we ensure that our readers can differentiate shades of a hue from one another in order to accurate ready our charts and maps.

### Sequential Scale 1
This sequential scale is the most often used. It is structured based on our first primary qualitative color.
```color-palette|horizontal
colors:
   - {value: "#ECECF0"}
   - {value: "#d2d2f2"}
   - {value: "#b8b8f3"}
   - {value: "#9e9ef4"}
   - {value: "#8285f3"}
   - {value: "#636bf1"}
   - {value: "#3952ee"}
```
```image
plain: true
span: 5
src: "assets/sequential-1@1x.png 1x, assets/sequential-1@2x.png 2x"
```

### Sequential Scale 2
This is an alternative sequential scale that is available in the case that our primary qualitative color is encoded with a specific category and should not be confused with the category this scale is representing. This scale is created from a choice color and a primary color in our qualitative scale.
```color-palette|horizontal
colors:
   - {value: "#EDECE1"}
   - {value: "#dce1cb"}
   - {value: "#c6d7b8"}
   - {value: "#abcea9"}
   - {value: "#8bc5a0"}
   - {value: "#64bc9b"}
   - {value: "#24b39c"}
```
```image
plain: true
span: 5
src: "assets/sequential-2@1x.png 1x, assets/sequential-2@2x.png 2x"
```

### Sequential Scale 3
This scale is used in the case where we are displaying data that could be negatively associated. Examples of such data would be the path of a hurricane or the amount of deaths in school shootings over time. This scale is created from two choice colors in our qualitative scale.
```color-palette|horizontal
colors:
   - {value: "#EDECE1"}
   - {value: "#e2d7bb"}
   - {value: "#ddc197"}
   - {value: "#daa878"}
   - {value: "#da8d5f"}
   - {value: "#d96f4e"}
   - {value: "#d64b47"}
```
```image
plain: true
span: 5
src: "assets/sequential-3@1x.png 1x, assets/sequential-3@2x.png 2x"
```

### Diverging Scale 1
This diverging scale should be used in any case where we are comparing opposites that are positively and negatively connotated. Such an example would be election maps where voters had to approve/deny an initiative.
```color-palette|horizontal
colors:
   - {value: "#e66e4a"}
   - {value: "#ef997f"}
   - {value: "#f2c3b6"}
   - {value: "#ececf0"}
   - {value: "#c5b2e1"}
   - {value: "#9b7ad1"}
   - {value: "#6c43c0"}
```

```image
plain: true
span: 5
src: "assets/election-map-diverging-a@1x.png 1x, assets/election-map-diverging-a@2x.png 2x"
```

### Diverging Scale 2
This scale should be used in any case where are comparing opposites, but we would like to avoid negative or positive association. Such an example would be comparing communities whose average age is either younger or older compared to twenty years ago. This scale is creating using the first two primary colors in our qualitative scale. This lends the scale to be used in stories where there are two data points which are directly compared throughout the story.
```color-palette|horizontal
colors:
   - {value: "#3952ee"}
   - {value: "#8b82f0"}
   - {value: "#bfb6f1"}
   - {value: "#ececf0"}
   - {value: "#f3dcb1"}
   - {value: "#f2cc72"}
   - {value: "#ebbd22"}
```

```image
plain: true
span: 5
src: "assets/election-map-diverging-b@1x.png 1x, assets/election-map-diverging-b@2x.png 2x"
```

### Diverging Scale 3
An alternative scale for comparing opposites with negative and/or positive connotation. This scale is comprised of two choice colors, so as not to overlap with any of the primary colors which might already be encoded in the story.
```color-palette|horizontal
colors:
   - {value: "#0ba9d9"}
   - {value: "#7cbfe1"}
   - {value: "#b7d5e9"}
   - {value: "#ececf0"}
   - {value: "#e1e3b1"}
   - {value: "#d0db70"}
   - {value: "#bbd215"}
```

```image
plain: true
span: 5
src: "assets/election-map-diverging-c@1x.png 1x, assets/election-map-diverging-c@2x.png 2x"
```

## Political Party Colors
We have predefined colors for Switzerland, France, Ecuador, Germany, Netherlands, United Kingdom and the United States. When other colors are needed for a country that is not part of the predefined list, please do the research to find out what color the party identifies with and then choose from a similar color already defined. For example, if the People's Party in Spain identifies with a lighter blue, you could take the blue currently defined for the Democratic party in the United States. Please try to remain consistent by asking others in the team or checking Q for charts already addressing elections in the country in question.

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
  - {name: "SVP - highlight", value: "#b2d0b1"}
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
  - {name: "EVP - highlight", value: "#e5dc9b"}
  - {name: "LEGA", value: "#ddb9af"}
  - {name: "MCR", value: "#c3c2b2"}
  - {name: "AL", value: "#f1bace"}
  - {name: "EDU", value: "#cdb1d9"}
  - {name: "SD", value: "#b8aeef"}
  - {name: "default", value: "#bcbcbc"}
```

### France
The following parties* take **gray** (#616161) as their party color: ECO, COM, DLF, EXT, DIV and EXD.

```color-palette|span-2
colors:
  - {name: "SOC, RDG, DVG - primary", value: "#c31906"}
  - {name: "LR, UDI, DVD", value: "#0084c7"}
  - {name: "FN", value: "#0a0a0a"}
  - {name: "REM, MDM", value: "#da467d"}
  - {name: "FI", value: "#01b1c0"}
  - {name: "ECO*", value: "#616161"}
```
```color-palette|span-2
colors:
  - {name: "SOC, RDG, DVG - primary", value: "#f4d7d3"}
  - {name: "LR, UDI, DVD", value: "#cee7f4"}
  - {name: "FN", value: "#c7c7c7"}
  - {name: "REM, MDM", value: "#f8dce7"}
  - {name: "FI", value: "#d2f1f3"}
  - {name: "ECO*", value: "#dddddd"}
```

### Ecuador
```color-palette|span-1
colors:
  - {name: "SVP - primary", value: "#66a622"}
  - {name: "SP", value: "#0084c7"}
  - {name: "FDP", value: "#d1cc00"}
  - {name: "CVP", value: "#d28b00"}
  - {name: "GPS", value: "#c31906"}
```
```color-palette|span-1
colors:
  - {name: "SVP - highlight", value: "#c2dba7"}
  - {name: "SP", value: "#9ed0e9"}
  - {name: "FDP", value: "#edeca0"}
  - {name: "CVP", value: "#edd29c"}
  - {name: "GPS", value: "#eaaea8"}
```
```color-palette|span-1
colors:
  - {name: "EVP - primary", value: "#01b1c0"}
  - {name: "LEGA", value: "#22a682"}
  - {name: "MCR", value: "#ac5038"}
  - {name: "AL", value: "#616161"}
```
```color-palette|span-1
colors:
  - {name: "EVP - highlight", value: "#a4e3e8"}
  - {name: "LEGA", value: "#aadccf"}
  - {name: "MCR", value: "#ddb9af"}
  - {name: "AL", value: "#bcbcbc"}
```

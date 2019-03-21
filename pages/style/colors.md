```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

#### Our team's color palette consists of a qualitative scale, two sequential scales and two diverging scales.

```image
plain: true
span: 5
src: "assets/teaser-color@1x.png 1x, assets/teaser-color@2x.png 2x"
```

Our colors are used in both the online and print graphics that we produce. We aim to comply with [AA standard contrast ratios](https://www.w3.org/TR/WCAG/). We have also proofed our colors with the most common forms of color blindness. These steps ensure sufficient color contrast between elements so that our readers with low vision can read and understand our graphics.

The concept of our color palette is that all colors are scales are derived out of the original twelve qualitative color. This is one way that we can secure a consistent visual appearance in all of our graphics.

_Each of these colors receives a classname that can be called within Q (i.e. s-viz-color-one-7)._ Each classname is listed below along with the hex color code.

## Qualitative Color Scale: Primary

Our primary qualitative colors are the most used colors in our color palette. These colors should be used _in order_ for different or "unrelated" categories within a dataset. Such a dataset could be countries, religions, or breeds of dogs. We use them in the order listed below.

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

## Gray Scale

Our gray scale palette is based off of the gray tones found on NZZ.ch. It's used for all text and annotations in graphics as well as axis labels and lines. The gray scale can be used flexibly based on need.

```color-palette|horizontal
colors:
   - {value: "#f0f0f2"}
   - {value: "#ececf0"}
   - {value: "#e9e9ee"}
   - {value: "#cfcfd6"}
   - {value: "#b6b6be"}
   - {value: "#92929e"}
   - {value: "#6e6e7e"}
   - {value: "#393855"}
   - {value: "#05032d"}
```

## Gender Colors
```color-palette|span-2
colors:
  - {name: "Male - primary", value: "#24B39C"}
  - {name: "Female – primary", value: "#6C43C0"}
```

## Handmade Maps for print
```color-palette|span-2
colors:
  - {name: "Rivers - primary", value: "#0093BF"}
  - {name: "Oceans – primary", value: "#CEE9F2"}
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

```table
span: 6
rows:
  - Steps: 3
    HEX: ECECF0, 9E9EF4, 3952EE
  - Steps: 4
    HEX: ECECF0, B8B8F3, 8285F3, 3952EE
  - Steps: 5
    HEX: ECECF0, C5C5F3, 9E9EF4, 7378F2, 3952EE
  - Steps: 6
    HEX: ECECF0, CDCDF3, AEAEF4, 8D8FF3, 6970F1, 3952EE
```


```html
span: 6
---
<style type="text/css">
.row > .color-rect {
    height: 30px;
    fill: currentColor;
}
</style>
<svg id="sequential-scale-one" width="900px" height="350px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g class="row" transform="translate(0,50)">
    <text dy="-4" class="s-font-note">2 Steps</text>
    <rect class="s-viz-color-sequential-one-2-1 color-rect" width="calc(100% / 2)"></rect>
    <rect class="s-viz-color-sequential-one-2-2 color-rect" width="calc(100% / 2)" x="calc(100% / 2)"></rect>
</g>
<g class="row" transform="translate(0,100)">
    <text dy="-4" class="s-font-note">3 Steps</text>
    <rect class="s-viz-color-sequential-one-3-1 color-rect" width="calc(100% / 3)"></rect>
    <rect class="s-viz-color-sequential-one-3-2 color-rect" width="calc(100% / 3)" x="calc(1 * calc(100% / 3))"></rect>
    <rect class="s-viz-color-sequential-one-3-3 color-rect" width="calc(100% / 3)" x="calc(2 * calc(100% / 3))"></rect>
</g>
<g class="row" transform="translate(0,150)">
    <text dy="-4" class="s-font-note">4 Steps</text>
    <rect class="s-viz-color-sequential-one-4-1 color-rect" width="calc(100% / 4)"></rect>
    <rect class="s-viz-color-sequential-one-4-2 color-rect" width="calc(100% / 4)" x="calc(1 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-sequential-one-4-3 color-rect" width="calc(100% / 4)" x="calc(2 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-sequential-one-4-4 color-rect" width="calc(100% / 4)" x="calc(3 * calc(100% / 4))"></rect>
</g>
<g class="row" transform="translate(0,200)">
    <text dy="-4" class="s-font-note">5 Steps</text>
    <rect class="s-viz-color-sequential-one-5-1 color-rect" width="calc(100% / 5)"></rect>
    <rect class="s-viz-color-sequential-one-5-2 color-rect" width="calc(100% / 5)" x="calc(1 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-sequential-one-5-3 color-rect" width="calc(100% / 5)" x="calc(2 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-sequential-one-5-4 color-rect" width="calc(100% / 5)" x="calc(3 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-sequential-one-5-5 color-rect" width="calc(100% / 5)" x="calc(4 * calc(100% / 5))"></rect>
</g>
<g class="row" transform="translate(0,250)">
    <text dy="-4" class="s-font-note">6 Steps</text>
    <rect class="s-viz-color-sequential-one-6-1 color-rect" width="calc(100% / 6)"></rect>
    <rect class="s-viz-color-sequential-one-6-2 color-rect" width="calc(100% / 6)" x="calc(1 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-one-6-3 color-rect" width="calc(100% / 6)" x="calc(2 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-one-6-4 color-rect" width="calc(100% / 6)" x="calc(3 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-one-6-5 color-rect" width="calc(100% / 6)" x="calc(4 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-one-6-6 color-rect" width="calc(100% / 6)" x="calc(5 * 100% / 6)"></rect>
</g>
<g class="row" transform="translate(0,300)">
    <text dy="-4" class="s-font-note">7 Steps</text>
    <rect class="s-viz-color-sequential-one-7-1 color-rect" width="calc(100% / 7)"></rect>
    <rect class="s-viz-color-sequential-one-7-2 color-rect" width="calc(100% / 7)" x="calc(1 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-one-7-3 color-rect" width="calc(100% / 7)" x="calc(2 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-one-7-4 color-rect" width="calc(100% / 7)" x="calc(3 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-one-7-5 color-rect" width="calc(100% / 7)" x="calc(4 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-one-7-6 color-rect" width="calc(100% / 7)" x="calc(5 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-one-7-7 color-rect" width="calc(100% / 7)" x="calc(6 * calc(100% / 7))"></rect>
</g>
</svg>
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

```table
span: 6
rows:
  - Steps: 3
    HEX: EDECE1, ABCEA9, 24B39C
  - Steps: 4
    HEX: EDECE1, C6D7B8, 8BC5A0, 24B39C
  - Steps: 5
    HEX: EDECE1, D2DCC1, ABCEA9, 79C19D, 24B39C
  - Steps: 6
    HEX: EDECE1, D8DFC7, BCD4B2, 99C9A3, 6DBE9C, 24B39C
```


```html
span: 6
---
<svg id="sequential-scale-two" width="100%" height="350px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g class="row" transform="translate(0,50)">
    <text dy="-4" class="s-font-note">2 Steps</text>
    <rect class="s-viz-color-sequential-two-2-1 color-rect" width="calc(100% / 2)"></rect>
    <rect class="s-viz-color-sequential-two-2-2 color-rect" width="calc(100% / 2)" x="calc(100% / 2)"></rect>
</g>
<g class="row" transform="translate(0,100)">
    <text dy="-4" class="s-font-note">3 Steps</text>
    <rect class="s-viz-color-sequential-two-3-1 color-rect" width="calc(100% / 3)"></rect>
    <rect class="s-viz-color-sequential-two-3-2 color-rect" width="calc(100% / 3)" x="calc(1 * calc(100% / 3))"></rect>
    <rect class="s-viz-color-sequential-two-3-3 color-rect" width="calc(100% / 3)" x="calc(2 * calc(100% / 3))"></rect>
</g>
<g class="row" transform="translate(0,150)">
    <text dy="-4" class="s-font-note">4 Steps</text>
    <rect class="s-viz-color-sequential-two-4-1 color-rect" width="calc(100% / 4)"></rect>
    <rect class="s-viz-color-sequential-two-4-2 color-rect" width="calc(100% / 4)" x="calc(1 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-sequential-two-4-3 color-rect" width="calc(100% / 4)" x="calc(2 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-sequential-two-4-4 color-rect" width="calc(100% / 4)" x="calc(3 * calc(100% / 4))"></rect>
</g>
<g class="row" transform="translate(0,200)">
    <text dy="-4" class="s-font-note">5 Steps</text>
    <rect class="s-viz-color-sequential-two-5-1 color-rect" width="calc(100% / 5)"></rect>
    <rect class="s-viz-color-sequential-two-5-2 color-rect" width="calc(100% / 5)" x="calc(1 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-sequential-two-5-3 color-rect" width="calc(100% / 5)" x="calc(2 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-sequential-two-5-4 color-rect" width="calc(100% / 5)" x="calc(3 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-sequential-two-5-5 color-rect" width="calc(100% / 5)" x="calc(4 * calc(100% / 5))"></rect>
</g>
<g class="row" transform="translate(0,250)">
    <text dy="-4" class="s-font-note">6 Steps</text>
    <rect class="s-viz-color-sequential-two-6-1 color-rect" width="calc(100% / 6)"></rect>
    <rect class="s-viz-color-sequential-two-6-2 color-rect" width="calc(100% / 6)" x="calc(1 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-two-6-3 color-rect" width="calc(100% / 6)" x="calc(2 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-two-6-4 color-rect" width="calc(100% / 6)" x="calc(3 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-two-6-5 color-rect" width="calc(100% / 6)" x="calc(4 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-two-6-6 color-rect" width="calc(100% / 6)" x="calc(5 * 100% / 6)"></rect>
</g>
<g class="row" transform="translate(0,300)">
    <text dy="-4" class="s-font-note">7 Steps</text>
    <rect class="s-viz-color-sequential-two-7-1 color-rect" width="calc(100% / 7)"></rect>
    <rect class="s-viz-color-sequential-two-7-2 color-rect" width="calc(100% / 7)" x="calc(1 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-two-7-3 color-rect" width="calc(100% / 7)" x="calc(2 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-two-7-4 color-rect" width="calc(100% / 7)" x="calc(3 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-two-7-5 color-rect" width="calc(100% / 7)" x="calc(4 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-two-7-6 color-rect" width="calc(100% / 7)" x="calc(5 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-two-7-7 color-rect" width="calc(100% / 7)" x="calc(6 * calc(100% / 7))"></rect>
</g>
</svg>
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

```table
span: 6
rows:
  - Steps: 3
    HEX: EDECE1, DAA878, D64B47
  - Steps: 4
    HEX: EDECE1, DDC197, DA8D5F, D64B47
  - Steps: 5
    HEX: EDECE1, DFCCA9, DAA878, D97E55, D64B47
  - Steps: 6
    HEX: EDECE1, E0D3B4, DBB78A, DA9868, D97551, D64B47
```

```html
span: 6
---

<svg id="sequential-scale-three" width="100%" height="350px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g class="row" transform="translate(0,50)">
    <text dy="-4" class="s-font-note">2 Steps</text>
    <rect class="s-viz-color-sequential-three-2-1 color-rect" width="calc(100% / 2)"></rect>
    <rect class="s-viz-color-sequential-three-2-2 color-rect" width="calc(100% / 2)" x="calc(100% / 2)"></rect>
</g>
<g class="row" transform="translate(0,100)">
    <text dy="-4" class="s-font-note">3 Steps</text>
    <rect class="s-viz-color-sequential-three-3-1 color-rect" width="calc(100% / 3)"></rect>
    <rect class="s-viz-color-sequential-three-3-2 color-rect" width="calc(100% / 3)" x="calc(1 * calc(100% / 3))"></rect>
    <rect class="s-viz-color-sequential-three-3-3 color-rect" width="calc(100% / 3)" x="calc(2 * calc(100% / 3))"></rect>
</g>
<g class="row" transform="translate(0,150)">
    <text dy="-4" class="s-font-note">4 Steps</text>
    <rect class="s-viz-color-sequential-three-4-1 color-rect" width="calc(100% / 4)"></rect>
    <rect class="s-viz-color-sequential-three-4-2 color-rect" width="calc(100% / 4)" x="calc(1 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-sequential-three-4-3 color-rect" width="calc(100% / 4)" x="calc(2 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-sequential-three-4-4 color-rect" width="calc(100% / 4)" x="calc(3 * calc(100% / 4))"></rect>
</g>
<g class="row" transform="translate(0,200)">
    <text dy="-4" class="s-font-note">5 Steps</text>
    <rect class="s-viz-color-sequential-three-5-1 color-rect" width="calc(100% / 5)"></rect>
    <rect class="s-viz-color-sequential-three-5-2 color-rect" width="calc(100% / 5)" x="calc(1 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-sequential-three-5-3 color-rect" width="calc(100% / 5)" x="calc(2 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-sequential-three-5-4 color-rect" width="calc(100% / 5)" x="calc(3 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-sequential-three-5-5 color-rect" width="calc(100% / 5)" x="calc(4 * calc(100% / 5))"></rect>
</g>
<g class="row" transform="translate(0,250)">
    <text dy="-4" class="s-font-note">6 Steps</text>
    <rect class="s-viz-color-sequential-three-6-1 color-rect" width="calc(100% / 6)"></rect>
    <rect class="s-viz-color-sequential-three-6-2 color-rect" width="calc(100% / 6)" x="calc(1 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-three-6-3 color-rect" width="calc(100% / 6)" x="calc(2 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-three-6-4 color-rect" width="calc(100% / 6)" x="calc(3 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-three-6-5 color-rect" width="calc(100% / 6)" x="calc(4 * 100% / 6)"></rect>
    <rect class="s-viz-color-sequential-three-6-6 color-rect" width="calc(100% / 6)" x="calc(5 * 100% / 6)"></rect>
</g>
<g class="row" transform="translate(0,300)">
    <text dy="-4" class="s-font-note">7 Steps</text>
    <rect class="s-viz-color-sequential-three-7-1 color-rect" width="calc(100% / 7)"></rect>
    <rect class="s-viz-color-sequential-three-7-2 color-rect" width="calc(100% / 7)" x="calc(1 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-three-7-3 color-rect" width="calc(100% / 7)" x="calc(2 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-three-7-4 color-rect" width="calc(100% / 7)" x="calc(3 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-three-7-5 color-rect" width="calc(100% / 7)" x="calc(4 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-three-7-6 color-rect" width="calc(100% / 7)" x="calc(5 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-sequential-three-7-7 color-rect" width="calc(100% / 7)" x="calc(6 * calc(100% / 7))"></rect>
</g>
</svg>
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

```html
span: 6
---
<svg id="diverging-scale-one" width="900px" height="700px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g class="row" transform="translate(0,50)">
    <text dy="-4" class="s-font-note">2 Steps</text>
    <rect class="s-viz-color-diverging-one-2-1 color-rect" width="calc(100% / 2)"></rect>
    <rect class="s-viz-color-diverging-one-2-2 color-rect" width="calc(100% / 2)" x="calc(100% / 2)"></rect>
</g>
<g class="row" transform="translate(0,100)">
    <text dy="-4" class="s-font-note">3 Steps</text>
    <rect class="s-viz-color-diverging-one-3-1 color-rect" width="calc(100% / 3)"></rect>
    <rect class="s-viz-color-diverging-one-3-2 color-rect" width="calc(100% / 3)" x="calc(1 * calc(100% / 3))"></rect>
    <rect class="s-viz-color-diverging-one-3-3 color-rect" width="calc(100% / 3)" x="calc(2 * calc(100% / 3))"></rect>
</g>
<g class="row" transform="translate(0,150)">
    <text dy="-4" class="s-font-note">4 Steps</text>
    <rect class="s-viz-color-diverging-one-4-1 color-rect" width="calc(100% / 4)"></rect>
    <rect class="s-viz-color-diverging-one-4-2 color-rect" width="calc(100% / 4)" x="calc(1 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-diverging-one-4-3 color-rect" width="calc(100% / 4)" x="calc(2 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-diverging-one-4-4 color-rect" width="calc(100% / 4)" x="calc(3 * calc(100% / 4))"></rect>
</g>
<g class="row" transform="translate(0,200)">
    <text dy="-4" class="s-font-note">5 Steps</text>
    <rect class="s-viz-color-diverging-one-5-1 color-rect" width="calc(100% / 5)"></rect>
    <rect class="s-viz-color-diverging-one-5-2 color-rect" width="calc(100% / 5)" x="calc(1 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-diverging-one-5-3 color-rect" width="calc(100% / 5)" x="calc(2 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-diverging-one-5-4 color-rect" width="calc(100% / 5)" x="calc(3 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-diverging-one-5-5 color-rect" width="calc(100% / 5)" x="calc(4 * calc(100% / 5))"></rect>
</g>
<g class="row" transform="translate(0,250)">
    <text dy="-4" class="s-font-note">6 Steps</text>
    <rect class="s-viz-color-diverging-one-6-1 color-rect" width="calc(100% / 6)"></rect>
    <rect class="s-viz-color-diverging-one-6-2 color-rect" width="calc(100% / 6)" x="calc(1 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-one-6-3 color-rect" width="calc(100% / 6)" x="calc(2 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-one-6-4 color-rect" width="calc(100% / 6)" x="calc(3 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-one-6-5 color-rect" width="calc(100% / 6)" x="calc(4 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-one-6-6 color-rect" width="calc(100% / 6)" x="calc(5 * 100% / 6)"></rect>
</g>
<g class="row" transform="translate(0,300)">
    <text dy="-4" class="s-font-note">7 Steps</text>
    <rect class="s-viz-color-diverging-one-7-1 color-rect" width="calc(100% / 7)"></rect>
    <rect class="s-viz-color-diverging-one-7-2 color-rect" width="calc(100% / 7)" x="calc(1 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-one-7-3 color-rect" width="calc(100% / 7)" x="calc(2 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-one-7-4 color-rect" width="calc(100% / 7)" x="calc(3 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-one-7-5 color-rect" width="calc(100% / 7)" x="calc(4 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-one-7-6 color-rect" width="calc(100% / 7)" x="calc(5 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-one-7-7 color-rect" width="calc(100% / 7)" x="calc(6 * calc(100% / 7))"></rect>
</g>
<g class="row" transform="translate(0,350)">
    <text dy="-4" class="s-font-note">8 Steps</text>
    <rect class="s-viz-color-diverging-one-8-1 color-rect" width="calc(100% / 8)"></rect>
    <rect class="s-viz-color-diverging-one-8-2 color-rect" width="calc(100% / 8)" x="calc(1 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-one-8-3 color-rect" width="calc(100% / 8)" x="calc(2 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-one-8-4 color-rect" width="calc(100% / 8)" x="calc(3 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-one-8-5 color-rect" width="calc(100% / 8)" x="calc(4 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-one-8-6 color-rect" width="calc(100% / 8)" x="calc(5 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-one-8-7 color-rect" width="calc(100% / 8)" x="calc(6 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-one-8-8 color-rect" width="calc(100% / 8)" x="calc(7 * calc(100% / 8))"></rect>
</g>
<g class="row" transform="translate(0,400)">
    <text dy="-4" class="s-font-note">9 Steps</text>
    <rect class="s-viz-color-diverging-one-9-1 color-rect" width="calc(100% / 9)"></rect>
    <rect class="s-viz-color-diverging-one-9-2 color-rect" width="calc(100% / 9)" x="calc(1 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-one-9-3 color-rect" width="calc(100% / 9)" x="calc(2 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-one-9-4 color-rect" width="calc(100% / 9)" x="calc(3 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-one-9-5 color-rect" width="calc(100% / 9)" x="calc(4 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-one-9-6 color-rect" width="calc(100% / 9)" x="calc(5 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-one-9-7 color-rect" width="calc(100% / 9)" x="calc(6 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-one-9-8 color-rect" width="calc(100% / 9)" x="calc(7 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-one-9-9 color-rect" width="calc(100% / 9)" x="calc(8 * calc(100% / 9))"></rect>
</g>
<g class="row" transform="translate(0,450)">
    <text dy="-4" class="s-font-note">10 Steps</text>
    <rect class="s-viz-color-diverging-one-10-1 color-rect" width="calc(100% / 10)"></rect>
    <rect class="s-viz-color-diverging-one-10-2 color-rect" width="calc(100% / 10)" x="calc(1 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-one-10-3 color-rect" width="calc(100% / 10)" x="calc(2 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-one-10-4 color-rect" width="calc(100% / 10)" x="calc(3 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-one-10-5 color-rect" width="calc(100% / 10)" x="calc(4 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-one-10-6 color-rect" width="calc(100% / 10)" x="calc(5 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-one-10-7 color-rect" width="calc(100% / 10)" x="calc(6 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-one-10-8 color-rect" width="calc(100% / 10)" x="calc(7 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-one-10-9 color-rect" width="calc(100% / 10)" x="calc(8 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-one-10-10 color-rect" width="calc(100% / 10)" x="calc(9 * calc(100% / 10))"></rect>
</g>
<g class="row" transform="translate(0,500)">
    <text dy="-4" class="s-font-note">11 Steps</text>
    <rect class="s-viz-color-diverging-one-11-1 color-rect" width="calc(100% / 11)"></rect>
    <rect class="s-viz-color-diverging-one-11-2 color-rect" width="calc(100% / 11)" x="calc(1 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-one-11-3 color-rect" width="calc(100% / 11)" x="calc(2 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-one-11-4 color-rect" width="calc(100% / 11)" x="calc(3 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-one-11-5 color-rect" width="calc(100% / 11)" x="calc(4 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-one-11-6 color-rect" width="calc(100% / 11)" x="calc(5 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-one-11-7 color-rect" width="calc(100% / 11)" x="calc(6 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-one-11-8 color-rect" width="calc(100% / 11)" x="calc(7 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-one-11-9 color-rect" width="calc(100% / 11)" x="calc(8 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-one-11-10 color-rect" width="calc(100% / 11)" x="calc(9 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-one-11-11 color-rect" width="calc(100% / 11)" x="calc(10 * calc(100% / 11))"></rect>
</g>
<g class="row" transform="translate(0,550)">
    <text dy="-4" class="s-font-note">12 Steps</text>
    <rect class="s-viz-color-diverging-one-12-1 color-rect" width="calc(100% / 12)"></rect>
    <rect class="s-viz-color-diverging-one-12-2 color-rect" width="calc(100% / 12)" x="calc(1 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-one-12-3 color-rect" width="calc(100% / 12)" x="calc(2 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-one-12-4 color-rect" width="calc(100% / 12)" x="calc(3 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-one-12-5 color-rect" width="calc(100% / 12)" x="calc(4 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-one-12-6 color-rect" width="calc(100% / 12)" x="calc(5 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-one-12-7 color-rect" width="calc(100% / 12)" x="calc(6 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-one-12-9 color-rect" width="calc(100% / 12)" x="calc(7 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-one-12-8 color-rect" width="calc(100% / 12)" x="calc(8 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-one-12-10 color-rect" width="calc(100% / 12)" x="calc(9 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-one-12-11 color-rect" width="calc(100% / 12)" x="calc(10 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-one-12-12 color-rect" width="calc(100% / 12)" x="calc(11 * calc(100% / 12))"></rect>
</g>
<g class="row" transform="translate(0,600)">
    <text dy="-4" class="s-font-note">13 Steps</text>
    <rect class="s-viz-color-diverging-one-13-1 color-rect" width="calc(100% / 13)"></rect>
    <rect class="s-viz-color-diverging-one-13-2 color-rect" width="calc(100% / 13)" x="calc(1 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-3 color-rect" width="calc(100% / 13)" x="calc(2 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-4 color-rect" width="calc(100% / 13)" x="calc(3 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-5 color-rect" width="calc(100% / 13)" x="calc(4 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-6 color-rect" width="calc(100% / 13)" x="calc(5 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-7 color-rect" width="calc(100% / 13)" x="calc(6 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-8 color-rect" width="calc(100% / 13)" x="calc(7 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-9 color-rect" width="calc(100% / 13)" x="calc(8 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-10 color-rect" width="calc(100% / 13)" x="calc(9 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-11 color-rect" width="calc(100% / 13)" x="calc(10 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-12 color-rect" width="calc(100% / 13)" x="calc(11 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-one-13-13 color-rect" width="calc(100% / 13)" x="calc(12 * calc(100% / 13))"></rect>
</g>
<g class="row" transform="translate(0,650)">
    <text dy="-4" class="s-font-note">14 Steps</text>
    <rect class="s-viz-color-diverging-one-14-1 color-rect" width="calc(100% / 14)"></rect>
    <rect class="s-viz-color-diverging-one-14-2 color-rect" width="calc(100% / 14)" x="calc(1 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-3 color-rect" width="calc(100% / 14)" x="calc(2 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-4 color-rect" width="calc(100% / 14)" x="calc(3 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-5 color-rect" width="calc(100% / 14)" x="calc(4 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-6 color-rect" width="calc(100% / 14)" x="calc(5 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-7 color-rect" width="calc(100% / 14)" x="calc(6 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-8 color-rect" width="calc(100% / 14)" x="calc(7 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-9 color-rect" width="calc(100% / 14)" x="calc(8 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-10 color-rect" width="calc(100% / 14)" x="calc(9 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-11 color-rect" width="calc(100% / 14)" x="calc(10 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-12 color-rect" width="calc(100% / 14)" x="calc(11 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-13 color-rect" width="calc(100% / 14)" x="calc(12 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-one-14-14 color-rect" width="calc(100% / 14)" x="calc(13 * calc(100% / 14))"></rect>
</g>
</svg>
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

```html
span: 6
---
<svg id="diverging-scale-two" width="900px" height="700px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g class="row" transform="translate(0,50)">
    <text dy="-4" class="s-font-note">2 Steps</text>
    <rect class="s-viz-color-diverging-two-2-1 color-rect" width="calc(100% / 2)"></rect>
    <rect class="s-viz-color-diverging-two-2-2 color-rect" width="calc(100% / 2)" x="calc(100% / 2)"></rect>
</g>
<g class="row" transform="translate(0,100)">
    <text dy="-4" class="s-font-note">3 Steps</text>
    <rect class="s-viz-color-diverging-two-3-1 color-rect" width="calc(100% / 3)"></rect>
    <rect class="s-viz-color-diverging-two-3-2 color-rect" width="calc(100% / 3)" x="calc(1 * calc(100% / 3))"></rect>
    <rect class="s-viz-color-diverging-two-3-3 color-rect" width="calc(100% / 3)" x="calc(2 * calc(100% / 3))"></rect>
</g>
<g class="row" transform="translate(0,150)">
    <text dy="-4" class="s-font-note">4 Steps</text>
    <rect class="s-viz-color-diverging-two-4-1 color-rect" width="calc(100% / 4)"></rect>
    <rect class="s-viz-color-diverging-two-4-2 color-rect" width="calc(100% / 4)" x="calc(1 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-diverging-two-4-3 color-rect" width="calc(100% / 4)" x="calc(2 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-diverging-two-4-4 color-rect" width="calc(100% / 4)" x="calc(3 * calc(100% / 4))"></rect>
</g>
<g class="row" transform="translate(0,200)">
    <text dy="-4" class="s-font-note">5 Steps</text>
    <rect class="s-viz-color-diverging-two-5-1 color-rect" width="calc(100% / 5)"></rect>
    <rect class="s-viz-color-diverging-two-5-2 color-rect" width="calc(100% / 5)" x="calc(1 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-diverging-two-5-3 color-rect" width="calc(100% / 5)" x="calc(2 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-diverging-two-5-4 color-rect" width="calc(100% / 5)" x="calc(3 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-diverging-two-5-5 color-rect" width="calc(100% / 5)" x="calc(4 * calc(100% / 5))"></rect>
</g>
<g class="row" transform="translate(0,250)">
    <text dy="-4" class="s-font-note">6 Steps</text>
    <rect class="s-viz-color-diverging-two-6-1 color-rect" width="calc(100% / 6)"></rect>
    <rect class="s-viz-color-diverging-two-6-2 color-rect" width="calc(100% / 6)" x="calc(1 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-two-6-3 color-rect" width="calc(100% / 6)" x="calc(2 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-two-6-4 color-rect" width="calc(100% / 6)" x="calc(3 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-two-6-5 color-rect" width="calc(100% / 6)" x="calc(4 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-two-6-6 color-rect" width="calc(100% / 6)" x="calc(5 * 100% / 6)"></rect>
</g>
<g class="row" transform="translate(0,300)">
    <text dy="-4" class="s-font-note">7 Steps</text>
    <rect class="s-viz-color-diverging-two-7-1 color-rect" width="calc(100% / 7)"></rect>
    <rect class="s-viz-color-diverging-two-7-2 color-rect" width="calc(100% / 7)" x="calc(1 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-two-7-3 color-rect" width="calc(100% / 7)" x="calc(2 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-two-7-4 color-rect" width="calc(100% / 7)" x="calc(3 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-two-7-5 color-rect" width="calc(100% / 7)" x="calc(4 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-two-7-6 color-rect" width="calc(100% / 7)" x="calc(5 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-two-7-7 color-rect" width="calc(100% / 7)" x="calc(6 * calc(100% / 7))"></rect>
</g>
<g class="row" transform="translate(0,350)">
    <text dy="-4" class="s-font-note">8 Steps</text>
    <rect class="s-viz-color-diverging-two-8-1 color-rect" width="calc(100% / 8)"></rect>
    <rect class="s-viz-color-diverging-two-8-2 color-rect" width="calc(100% / 8)" x="calc(1 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-two-8-3 color-rect" width="calc(100% / 8)" x="calc(2 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-two-8-4 color-rect" width="calc(100% / 8)" x="calc(3 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-two-8-5 color-rect" width="calc(100% / 8)" x="calc(4 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-two-8-6 color-rect" width="calc(100% / 8)" x="calc(5 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-two-8-7 color-rect" width="calc(100% / 8)" x="calc(6 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-two-8-8 color-rect" width="calc(100% / 8)" x="calc(7 * calc(100% / 8))"></rect>
</g>
<g class="row" transform="translate(0,400)">
    <text dy="-4" class="s-font-note">9 Steps</text>
    <rect class="s-viz-color-diverging-two-9-1 color-rect" width="calc(100% / 9)"></rect>
    <rect class="s-viz-color-diverging-two-9-2 color-rect" width="calc(100% / 9)" x="calc(1 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-two-9-3 color-rect" width="calc(100% / 9)" x="calc(2 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-two-9-4 color-rect" width="calc(100% / 9)" x="calc(3 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-two-9-5 color-rect" width="calc(100% / 9)" x="calc(4 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-two-9-6 color-rect" width="calc(100% / 9)" x="calc(5 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-two-9-7 color-rect" width="calc(100% / 9)" x="calc(6 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-two-9-8 color-rect" width="calc(100% / 9)" x="calc(7 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-two-9-9 color-rect" width="calc(100% / 9)" x="calc(8 * calc(100% / 9))"></rect>
</g>
<g class="row" transform="translate(0,450)">
    <text dy="-4" class="s-font-note">10 Steps</text>
    <rect class="s-viz-color-diverging-two-10-1 color-rect" width="calc(100% / 10)"></rect>
    <rect class="s-viz-color-diverging-two-10-2 color-rect" width="calc(100% / 10)" x="calc(1 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-two-10-3 color-rect" width="calc(100% / 10)" x="calc(2 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-two-10-4 color-rect" width="calc(100% / 10)" x="calc(3 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-two-10-5 color-rect" width="calc(100% / 10)" x="calc(4 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-two-10-6 color-rect" width="calc(100% / 10)" x="calc(5 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-two-10-7 color-rect" width="calc(100% / 10)" x="calc(6 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-two-10-8 color-rect" width="calc(100% / 10)" x="calc(7 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-two-10-9 color-rect" width="calc(100% / 10)" x="calc(8 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-two-10-10 color-rect" width="calc(100% / 10)" x="calc(9 * calc(100% / 10))"></rect>
</g>
<g class="row" transform="translate(0,500)">
    <text dy="-4" class="s-font-note">11 Steps</text>
    <rect class="s-viz-color-diverging-two-11-1 color-rect" width="calc(100% / 11)"></rect>
    <rect class="s-viz-color-diverging-two-11-2 color-rect" width="calc(100% / 11)" x="calc(1 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-two-11-3 color-rect" width="calc(100% / 11)" x="calc(2 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-two-11-4 color-rect" width="calc(100% / 11)" x="calc(3 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-two-11-5 color-rect" width="calc(100% / 11)" x="calc(4 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-two-11-6 color-rect" width="calc(100% / 11)" x="calc(5 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-two-11-7 color-rect" width="calc(100% / 11)" x="calc(6 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-two-11-8 color-rect" width="calc(100% / 11)" x="calc(7 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-two-11-9 color-rect" width="calc(100% / 11)" x="calc(8 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-two-11-10 color-rect" width="calc(100% / 11)" x="calc(9 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-two-11-11 color-rect" width="calc(100% / 11)" x="calc(10 * calc(100% / 11))"></rect>
</g>
<g class="row" transform="translate(0,550)">
    <text dy="-4" class="s-font-note">12 Steps</text>
    <rect class="s-viz-color-diverging-two-12-1 color-rect" width="calc(100% / 12)"></rect>
    <rect class="s-viz-color-diverging-two-12-2 color-rect" width="calc(100% / 12)" x="calc(1 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-two-12-3 color-rect" width="calc(100% / 12)" x="calc(2 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-two-12-4 color-rect" width="calc(100% / 12)" x="calc(3 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-two-12-5 color-rect" width="calc(100% / 12)" x="calc(4 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-two-12-6 color-rect" width="calc(100% / 12)" x="calc(5 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-two-12-7 color-rect" width="calc(100% / 12)" x="calc(6 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-two-12-9 color-rect" width="calc(100% / 12)" x="calc(7 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-two-12-8 color-rect" width="calc(100% / 12)" x="calc(8 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-two-12-10 color-rect" width="calc(100% / 12)" x="calc(9 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-two-12-11 color-rect" width="calc(100% / 12)" x="calc(10 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-two-12-12 color-rect" width="calc(100% / 12)" x="calc(11 * calc(100% / 12))"></rect>
</g>
<g class="row" transform="translate(0,600)">
    <text dy="-4" class="s-font-note">13 Steps</text>
    <rect class="s-viz-color-diverging-two-13-1 color-rect" width="calc(100% / 13)"></rect>
    <rect class="s-viz-color-diverging-two-13-2 color-rect" width="calc(100% / 13)" x="calc(1 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-3 color-rect" width="calc(100% / 13)" x="calc(2 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-4 color-rect" width="calc(100% / 13)" x="calc(3 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-5 color-rect" width="calc(100% / 13)" x="calc(4 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-6 color-rect" width="calc(100% / 13)" x="calc(5 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-7 color-rect" width="calc(100% / 13)" x="calc(6 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-8 color-rect" width="calc(100% / 13)" x="calc(7 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-9 color-rect" width="calc(100% / 13)" x="calc(8 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-10 color-rect" width="calc(100% / 13)" x="calc(9 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-11 color-rect" width="calc(100% / 13)" x="calc(10 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-12 color-rect" width="calc(100% / 13)" x="calc(11 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-two-13-13 color-rect" width="calc(100% / 13)" x="calc(12 * calc(100% / 13))"></rect>
</g>
<g class="row" transform="translate(0,650)">
    <text dy="-4" class="s-font-note">14 Steps</text>
    <rect class="s-viz-color-diverging-two-14-1 color-rect" width="calc(100% / 14)"></rect>
    <rect class="s-viz-color-diverging-two-14-2 color-rect" width="calc(100% / 14)" x="calc(1 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-3 color-rect" width="calc(100% / 14)" x="calc(2 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-4 color-rect" width="calc(100% / 14)" x="calc(3 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-5 color-rect" width="calc(100% / 14)" x="calc(4 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-6 color-rect" width="calc(100% / 14)" x="calc(5 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-7 color-rect" width="calc(100% / 14)" x="calc(6 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-8 color-rect" width="calc(100% / 14)" x="calc(7 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-9 color-rect" width="calc(100% / 14)" x="calc(8 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-10 color-rect" width="calc(100% / 14)" x="calc(9 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-11 color-rect" width="calc(100% / 14)" x="calc(10 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-12 color-rect" width="calc(100% / 14)" x="calc(11 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-13 color-rect" width="calc(100% / 14)" x="calc(12 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-two-14-14 color-rect" width="calc(100% / 14)" x="calc(13 * calc(100% / 14))"></rect>
</g>
</svg>
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

```html
span: 6
---
<svg id="diverging-scale-three" width="900px" height="700px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g class="row" transform="translate(0,50)">
    <text dy="-4" class="s-font-note">2 Steps</text>
    <rect class="s-viz-color-diverging-three-2-1 color-rect" width="calc(100% / 2)"></rect>
    <rect class="s-viz-color-diverging-three-2-2 color-rect" width="calc(100% / 2)" x="calc(100% / 2)"></rect>
</g>
<g class="row" transform="translate(0,100)">
    <text dy="-4" class="s-font-note">3 Steps</text>
    <rect class="s-viz-color-diverging-three-3-1 color-rect" width="calc(100% / 3)"></rect>
    <rect class="s-viz-color-diverging-three-3-2 color-rect" width="calc(100% / 3)" x="calc(1 * calc(100% / 3))"></rect>
    <rect class="s-viz-color-diverging-three-3-3 color-rect" width="calc(100% / 3)" x="calc(2 * calc(100% / 3))"></rect>
</g>
<g class="row" transform="translate(0,150)">
    <text dy="-4" class="s-font-note">4 Steps</text>
    <rect class="s-viz-color-diverging-three-4-1 color-rect" width="calc(100% / 4)"></rect>
    <rect class="s-viz-color-diverging-three-4-2 color-rect" width="calc(100% / 4)" x="calc(1 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-diverging-three-4-3 color-rect" width="calc(100% / 4)" x="calc(2 * calc(100% / 4))"></rect>
    <rect class="s-viz-color-diverging-three-4-4 color-rect" width="calc(100% / 4)" x="calc(3 * calc(100% / 4))"></rect>
</g>
<g class="row" transform="translate(0,200)">
    <text dy="-4" class="s-font-note">5 Steps</text>
    <rect class="s-viz-color-diverging-three-5-1 color-rect" width="calc(100% / 5)"></rect>
    <rect class="s-viz-color-diverging-three-5-2 color-rect" width="calc(100% / 5)" x="calc(1 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-diverging-three-5-3 color-rect" width="calc(100% / 5)" x="calc(2 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-diverging-three-5-4 color-rect" width="calc(100% / 5)" x="calc(3 * calc(100% / 5))"></rect>
    <rect class="s-viz-color-diverging-three-5-5 color-rect" width="calc(100% / 5)" x="calc(4 * calc(100% / 5))"></rect>
</g>
<g class="row" transform="translate(0,250)">
    <text dy="-4" class="s-font-note">6 Steps</text>
    <rect class="s-viz-color-diverging-three-6-1 color-rect" width="calc(100% / 6)"></rect>
    <rect class="s-viz-color-diverging-three-6-2 color-rect" width="calc(100% / 6)" x="calc(1 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-three-6-3 color-rect" width="calc(100% / 6)" x="calc(2 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-three-6-4 color-rect" width="calc(100% / 6)" x="calc(3 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-three-6-5 color-rect" width="calc(100% / 6)" x="calc(4 * 100% / 6)"></rect>
    <rect class="s-viz-color-diverging-three-6-6 color-rect" width="calc(100% / 6)" x="calc(5 * 100% / 6)"></rect>
</g>
<g class="row" transform="translate(0,300)">
    <text dy="-4" class="s-font-note">7 Steps</text>
    <rect class="s-viz-color-diverging-three-7-1 color-rect" width="calc(100% / 7)"></rect>
    <rect class="s-viz-color-diverging-three-7-2 color-rect" width="calc(100% / 7)" x="calc(1 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-three-7-3 color-rect" width="calc(100% / 7)" x="calc(2 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-three-7-4 color-rect" width="calc(100% / 7)" x="calc(3 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-three-7-5 color-rect" width="calc(100% / 7)" x="calc(4 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-three-7-6 color-rect" width="calc(100% / 7)" x="calc(5 * calc(100% / 7))"></rect>
    <rect class="s-viz-color-diverging-three-7-7 color-rect" width="calc(100% / 7)" x="calc(6 * calc(100% / 7))"></rect>
</g>
<g class="row" transform="translate(0,350)">
    <text dy="-4" class="s-font-note">8 Steps</text>
    <rect class="s-viz-color-diverging-three-8-1 color-rect" width="calc(100% / 8)"></rect>
    <rect class="s-viz-color-diverging-three-8-2 color-rect" width="calc(100% / 8)" x="calc(1 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-three-8-3 color-rect" width="calc(100% / 8)" x="calc(2 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-three-8-4 color-rect" width="calc(100% / 8)" x="calc(3 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-three-8-5 color-rect" width="calc(100% / 8)" x="calc(4 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-three-8-6 color-rect" width="calc(100% / 8)" x="calc(5 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-three-8-7 color-rect" width="calc(100% / 8)" x="calc(6 * calc(100% / 8))"></rect>
    <rect class="s-viz-color-diverging-three-8-8 color-rect" width="calc(100% / 8)" x="calc(7 * calc(100% / 8))"></rect>
</g>
<g class="row" transform="translate(0,400)">
    <text dy="-4" class="s-font-note">9 Steps</text>
    <rect class="s-viz-color-diverging-three-9-1 color-rect" width="calc(100% / 9)"></rect>
    <rect class="s-viz-color-diverging-three-9-2 color-rect" width="calc(100% / 9)" x="calc(1 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-three-9-3 color-rect" width="calc(100% / 9)" x="calc(2 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-three-9-4 color-rect" width="calc(100% / 9)" x="calc(3 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-three-9-5 color-rect" width="calc(100% / 9)" x="calc(4 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-three-9-6 color-rect" width="calc(100% / 9)" x="calc(5 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-three-9-7 color-rect" width="calc(100% / 9)" x="calc(6 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-three-9-8 color-rect" width="calc(100% / 9)" x="calc(7 * calc(100% / 9))"></rect>
    <rect class="s-viz-color-diverging-three-9-9 color-rect" width="calc(100% / 9)" x="calc(8 * calc(100% / 9))"></rect>
</g>
<g class="row" transform="translate(0,450)">
    <text dy="-4" class="s-font-note">10 Steps</text>
    <rect class="s-viz-color-diverging-three-10-1 color-rect" width="calc(100% / 10)"></rect>
    <rect class="s-viz-color-diverging-three-10-2 color-rect" width="calc(100% / 10)" x="calc(1 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-three-10-3 color-rect" width="calc(100% / 10)" x="calc(2 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-three-10-4 color-rect" width="calc(100% / 10)" x="calc(3 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-three-10-5 color-rect" width="calc(100% / 10)" x="calc(4 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-three-10-6 color-rect" width="calc(100% / 10)" x="calc(5 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-three-10-7 color-rect" width="calc(100% / 10)" x="calc(6 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-three-10-8 color-rect" width="calc(100% / 10)" x="calc(7 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-three-10-9 color-rect" width="calc(100% / 10)" x="calc(8 * calc(100% / 10))"></rect>
    <rect class="s-viz-color-diverging-three-10-10 color-rect" width="calc(100% / 10)" x="calc(9 * calc(100% / 10))"></rect>
</g>
<g class="row" transform="translate(0,500)">
    <text dy="-4" class="s-font-note">11 Steps</text>
    <rect class="s-viz-color-diverging-three-11-1 color-rect" width="calc(100% / 11)"></rect>
    <rect class="s-viz-color-diverging-three-11-2 color-rect" width="calc(100% / 11)" x="calc(1 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-three-11-3 color-rect" width="calc(100% / 11)" x="calc(2 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-three-11-4 color-rect" width="calc(100% / 11)" x="calc(3 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-three-11-5 color-rect" width="calc(100% / 11)" x="calc(4 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-three-11-6 color-rect" width="calc(100% / 11)" x="calc(5 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-three-11-7 color-rect" width="calc(100% / 11)" x="calc(6 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-three-11-8 color-rect" width="calc(100% / 11)" x="calc(7 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-three-11-9 color-rect" width="calc(100% / 11)" x="calc(8 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-three-11-10 color-rect" width="calc(100% / 11)" x="calc(9 * calc(100% / 11))"></rect>
    <rect class="s-viz-color-diverging-three-11-11 color-rect" width="calc(100% / 11)" x="calc(10 * calc(100% / 11))"></rect>
</g>
<g class="row" transform="translate(0,550)">
    <text dy="-4" class="s-font-note">12 Steps</text>
    <rect class="s-viz-color-diverging-three-12-1 color-rect" width="calc(100% / 12)"></rect>
    <rect class="s-viz-color-diverging-three-12-2 color-rect" width="calc(100% / 12)" x="calc(1 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-three-12-3 color-rect" width="calc(100% / 12)" x="calc(2 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-three-12-4 color-rect" width="calc(100% / 12)" x="calc(3 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-three-12-5 color-rect" width="calc(100% / 12)" x="calc(4 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-three-12-6 color-rect" width="calc(100% / 12)" x="calc(5 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-three-12-7 color-rect" width="calc(100% / 12)" x="calc(6 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-three-12-9 color-rect" width="calc(100% / 12)" x="calc(7 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-three-12-8 color-rect" width="calc(100% / 12)" x="calc(8 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-three-12-10 color-rect" width="calc(100% / 12)" x="calc(9 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-three-12-11 color-rect" width="calc(100% / 12)" x="calc(10 * calc(100% / 12))"></rect>
    <rect class="s-viz-color-diverging-three-12-12 color-rect" width="calc(100% / 12)" x="calc(11 * calc(100% / 12))"></rect>
</g>
<g class="row" transform="translate(0,600)">
    <text dy="-4" class="s-font-note">13 Steps</text>
    <rect class="s-viz-color-diverging-three-13-1 color-rect" width="calc(100% / 13)"></rect>
    <rect class="s-viz-color-diverging-three-13-2 color-rect" width="calc(100% / 13)" x="calc(1 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-3 color-rect" width="calc(100% / 13)" x="calc(2 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-4 color-rect" width="calc(100% / 13)" x="calc(3 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-5 color-rect" width="calc(100% / 13)" x="calc(4 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-6 color-rect" width="calc(100% / 13)" x="calc(5 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-7 color-rect" width="calc(100% / 13)" x="calc(6 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-8 color-rect" width="calc(100% / 13)" x="calc(7 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-9 color-rect" width="calc(100% / 13)" x="calc(8 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-10 color-rect" width="calc(100% / 13)" x="calc(9 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-11 color-rect" width="calc(100% / 13)" x="calc(10 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-12 color-rect" width="calc(100% / 13)" x="calc(11 * calc(100% / 13))"></rect>
    <rect class="s-viz-color-diverging-three-13-13 color-rect" width="calc(100% / 13)" x="calc(12 * calc(100% / 13))"></rect>
</g>
<g class="row" transform="translate(0,650)">
    <text dy="-4" class="s-font-note">14 Steps</text>
    <rect class="s-viz-color-diverging-three-14-1 color-rect" width="calc(100% / 14)"></rect>
    <rect class="s-viz-color-diverging-three-14-2 color-rect" width="calc(100% / 14)" x="calc(1 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-3 color-rect" width="calc(100% / 14)" x="calc(2 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-4 color-rect" width="calc(100% / 14)" x="calc(3 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-5 color-rect" width="calc(100% / 14)" x="calc(4 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-6 color-rect" width="calc(100% / 14)" x="calc(5 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-7 color-rect" width="calc(100% / 14)" x="calc(6 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-8 color-rect" width="calc(100% / 14)" x="calc(7 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-9 color-rect" width="calc(100% / 14)" x="calc(8 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-10 color-rect" width="calc(100% / 14)" x="calc(9 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-11 color-rect" width="calc(100% / 14)" x="calc(10 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-12 color-rect" width="calc(100% / 14)" x="calc(11 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-13 color-rect" width="calc(100% / 14)" x="calc(12 * calc(100% / 14))"></rect>
    <rect class="s-viz-color-diverging-three-14-14 color-rect" width="calc(100% / 14)" x="calc(13 * calc(100% / 14))"></rect>
</g>
</svg>
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
  - {name: "SVP - light", value: "#c2dba7"}
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
  - {name: "EVP - light", value: "#a4e3e8"}
  - {name: "LEGA", value: "#aadccf"}
  - {name: "MCR", value: "#ddb9af"}
  - {name: "AL", value: "#bcbcbc"}
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
```

```color-palette|span-1
colors:
  - {name: "Konservative - light", value: "#9ed0e9"}
  - {name: "Labour", value: "#eaaea8"}
  - {name: "Green Party", value: "#c2dba7"}
  - {name: "SNP", value: "#f5f3a3"}
```

```color-palette|span-1
colors:
  - {name: "Liberaldemokraten", value: "#d28b00"}
  - {name: "UKIP", value: "#8440a3"}
  - {name: "DUP", value: "#DA467D"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "Liberaldemokraten - light", value: "#edd29c"}
  - {name: "UKIP", value: "#cdb1d9"}
  - {name: "DUP", value: "#f1bace"}
  - {name: "default", value: "#bcbcbc"}
```

### United States

```color-palette|span-2
colors:
  - {name: "Republikaner - primary", value: "#f1242b"}
  - {name: "Demokrat", value: "#00aef3"}
  - {name: "Independent", value: "#eada14"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "Republikaner - light", value: "#f9a7aa"}
  - {name: "Demokrat", value: "#99defa"}
  - {name: "Independent", value: "#f6f0a1"}
  - {name: "default", value: "#bcbcbc"}
```

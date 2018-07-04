```html|span-1,no-source,plain
<div class="stabilityIndex unstable">Unstable</div>
```

Our team's color palette consists of a qualitative scale, two sequential scales and two diverging scales.

We aim to comply with [AA standard contrast ratios](https://www.w3.org/TR/WCAG/). We have also proofed our colors with the most common forms of color blindness. These steps ensure sufficient color contrast between elements so that our readers with low vision can read and understand our graphics.
All of our sequential and diverging scales have seven buckets. We like to keep the number of buckets low so that our readers have an easier time perceiving the distinction between ranges in our scales.

The concept of our color palette is that all colors are scales are derived out of the original twelve qualitative color. This is one way that we can secure a consistent visual appearance in all of our graphics.

## Qualitative Color Scale: Primary
Our primary qualitative colors are the most used colors in our scale. Outside of a specifically defined color concept, these colors should be used, in order, for different categories within a dataset.

```color-palette|span-1
colors:
  - {name: "Viz one-7", value: "#2E41BF"}
  - {name: "Viz two-7", value: "#D4A91E"}
  - {name: "Viz three-7", value: "#099E85"}
  - {name: "Viz four-7", value: "#D64113"}
  - {name: "Viz five-7", value: "#873A86"}
```
```color-palette|span-1
colors:
  - {name: "Viz one-5", value: "#3952EE"}
  - {name: "Viz two-5", value: "#EBBD22"}
  - {name: "Viz three-5", value: "#24B39C"}
  - {name: "Viz four-5", value: "#E66E4A"}
  - {name: "Viz five-5", value: "#AD4BAC"}
```
```color-palette|span-1
colors:
  - {name: "Viz one-3", value: "#7385FF"}
  - {name: "Viz two-3", value: "#FAD250"}
  - {name: "Viz three-3", value: "#7DD1C3"}
  - {name: "Viz four-3", value: "#F2997E"}
  - {name: "Viz five-3", value: "#D182CE"}
```
```color-palette|span-1
colors:
  - {name: "Viz one-1", value: "#D6DCFF"}
  - {name: "Viz two-1", value: "#FFF0BF"}
  - {name: "Viz three-1", value: "#C7F0E9"}
  - {name: "Viz four-1", value: "#FFDCD1"}
  - {name: "Viz five-1", value: "#FCDCFC"}
```


## Qualitative Color Scale: Choice
Our choice colors are less often used in the traditional visualization order. Rather, they are more often chosen as custom colors when creating more open graphics or custom color concepts for an article.

```color-palette|span-1
colors:
  - {name: "Viz 6-1", value: "#1D8534"}
  - {name: "Viz 7-1", value: "#C73530"}
  - {name: "Viz 8-1", value: "#0093BF"}
  - {name: "Viz 9-1", value: "#5425B3"}
  - {name: "Viz 10-1", value: "#A7BA13"}
  - {name: "Viz 11-1", value: "#8F4D17"}
  - {name: "Viz 12-1", value: "#ABA776"}
```
```color-palette|span-1
colors:
  - {name: "Viz 6-2", value: "#38A650"}
  - {name: "Viz 7-2", value: "#D64B47"}
  - {name: "Viz 8-2", value: "#0BA9D9"}
  - {name: "Viz 9-2", value: "#6C43C0"}
  - {name: "Viz 10-2", value: "#BBD215"}
  - {name: "Viz 11-2", value: "#B3611D"}
  - {name: "Viz 12-2", value: "#C1BD99"}
```
```color-palette|span-1
colors:
  - {name: "Viz 6-3", value: "#5EBD73"}
  - {name: "Viz 7-3", value: "#ED6D68"}
  - {name: "Viz 8-3", value: "#85CFE6"}
  - {name: "Viz 9-3", value: "#AA90DE"}
  - {name: "Viz 10-3", value: "#D2E640"}
  - {name: "Viz 11-3", value: "#E0904F"}
  - {name: "Viz 12-3", value: "#DBD8BF"}
```
```color-palette|span-1
colors:
  - {name: "Viz 6-3", value: "#C9F5D2"}
  - {name: "Viz 7-3", value: "#FFD3D1"}
  - {name: "Viz 8-3", value: "#CEE9F2"}
  - {name: "Viz 9-3", value: "#E2DAF2"}
  - {name: "Viz 10-3", value: "#F3FABB"}
  - {name: "Viz 11-3", value: "#FFE9D6"}
  - {name: "Viz 12-3", value: "#EDECE1"}
```

## Sequential Scale 1
This sequential scale is the most often used. It is structured based on our first primary qualitative color.
```color-palette|horizontal
colors:
   - {value: "#ECECF0"}
   - {value: "#D7DBE8"}
   - {value: "#B8C1DE"}
   - {value: "#96A7D3"}
   - {value: "#7790C9"}
   - {value: "#5078BE"}
   - {value: "#1262B3"}
```
```image
plain: true
span: 5
src: "/assets/sequential-1@1x.png 1x, /assets/sequential-1@2x.png 2x"
```

## Sequential Scale 2
This is an alternative sequential scale that is available in the case that our primary qualitative color is encoded with a specific category and should not be confused with the category this scale is representing. This scale is created from a choice color and a primary color in our qualitative scale.
```color-palette|horizontal
colors:
   - {value: "#EDECE1"}
   - {value: "#D4E0D3"}
   - {value: "#B5D1C3"}
   - {value: "#92C1B0"}
   - {value: "#72B3A0"}
   - {value: "#50A591"}
   - {value: "#1E9682"}
```
```image
plain: true
span: 5
src: "/assets/sequential-2@1x.png 1x, /assets/sequential-2@2x.png 2x"
```

## Sequential Scale 3
This scale is used in the case where we are displaying data that could be negatively associated. Examples of such data would be the path of a hurricane or the amount of deaths in school shootings over time. This scale is created from two choice colors in our qualitative scale.
```color-palette|horizontal
colors:
   - {value: "#EDECE1"}
   - {value: "#E3DABE"}
   - {value: "#DDC49A"}
   - {value: "#DCB381"}
   - {value: "#DB8E59"}
   - {value: "#DB7147"}
   - {value: "#D9493D"}
```
```image
plain: true
span: 5
src: "/assets/sequential-3@1x.png 1x, /assets/sequential-3@2x.png 2x"
```

## Diverging Scale A
This diverging scale should be used in any case where we are comparing opposites that are positively and negatively connotated. Such an example would be election maps where voters had to approve/deny an initiative.
```color-palette|horizontal
colors:
   - {value: "#D95C23"}
   - {value: "#E68D64"}
   - {value: "#EBBDA5"}
   - {value: "#ECECF0"}
   - {value: "#BFB1DC"}
   - {value: "#987ACE"}
   - {value: "#6A43BF"}
```

```image
plain: true
span: 5
src: "/assets/election-map-diverging-a@1x.png 1x, election-map-diverging-a@2x.png 2x"
```

## Diverging Scale B
This scale should be used in any case where are comparing opposites, but we would like to avoid negative or positive association. Such an example would be comparing communities whose average age is either younger or older compared to twenty years ago.
```color-palette|horizontal
colors:
   - {value: "#D4AB0B"}
   - {value: "#E2BF67"}
   - {value: "#EBD5A9"}
   - {value: "#ECECF0"}
   - {value: "#B0BAD9"}
   - {value: "#728DC7"}
   - {value: "#1262B3"}
```

```image
plain: true
span: 5
src: "/assets/election-map-diverging-b@1x.png 1x, election-map-diverging-b@2x.png 2x"
```

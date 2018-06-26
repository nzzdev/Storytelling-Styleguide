```html|span-1,no-source,plain
<div class="stabilityIndex unstable">Unstable</div>
```

Our team's color palette consists of a qualitative scale, two sequential scales and two diverging scales.

We aim to comply with [AA standard contrast ratios](https://www.w3.org/TR/WCAG/). We have also proofed our colors with the most common forms of color blindness. These steps ensure sufficient color contrast between elements so that our readers with low vision can read and understand our graphics.
All of our sequential and diverging scales have seven buckets. We like to keep the number of buckets low so that our readers have an easier time perceiving the distinction between ranges in our scales.

The concept of our color palette is that all colors are scales are derived out of the original twelve qualitative color. This is one way that we can secure a consistent visual appearance in all of our graphics.

## Qualitative Color Scale: Primary
Our primary qualitative colors are the most used colors in our scale. Outside of a specifically defined color concept, these colors should be used, in order, for different categories within a dataset.

```color-palette|span-2
colors:
  - {name: "Viz one-3", value: "#1262B3"}
  - {name: "Viz two-3", value: "#E0BA22"}
  - {name: "Viz three-3", value: "#24B39B"}
  - {name: "Viz four-3", value: "#E67039"}
  - {name: "Viz five-3", value: "#B33D83"}
```
```color-palette|span-2
colors:
  - {name: "Viz one-2", value: "#6D9ED6"}
  - {name: "Viz two-2", value: "#ECD47B"}
  - {name: "Viz three-2", value: "#7DD1CB"}
  - {name: "Viz four-2", value: "#F3A37E"}
  - {name: "Viz five-2", value: "#D892BA"}
```
```color-palette|span-2
colors:
  - {name: "Viz one-1", value: "#C3E0FA"}
  - {name: "Viz two-1", value: "#F7EDC6"}
  - {name: "Viz three-1", value: "#C7EEF0"}
  - {name: "Viz four-1", value: "#F7D5C6"}
  - {name: "Viz five-1", value: "#FAE1F0"}
```


## Qualitative Color Scale: Choice
Our choice colors are less often used in the traditional visualization order. Rather, they are more often chosen as custom colors when creating more open graphics or custom color concepts for an article.

```color-palette|span-2
colors:
  - {name: "Viz 6-1", value: "#6A43BF"}
  - {name: "Viz 7-1", value: "#32A662"}
  - {name: "Viz 8-1", value: "#0BA9D9"}
  - {name: "Viz 9-1", value: "#C8D115"}
  - {name: "Viz 10-1", value: "#D9493D"}
  - {name: "Viz 11-1", value: "#B3621B"}
  - {name: "Viz 12-1", value: "#B3AF86"}
```
```color-palette|span-2
colors:
  - {name: "Viz 6-2", value: "#AA91DE"}
  - {name: "Viz 7-2", value: "#88CEA4"}
  - {name: "Viz 8-2", value: "#85CBE5"}
  - {name: "Viz 9-2", value: "#DFE380"}
  - {name: "Viz 10-2", value: "#F29489"}
  - {name: "Viz 11-2", value: "#D8A679"}
  - {name: "Viz 12-2", value: "#D0CDB3"}
```
```color-palette|span-2
colors:
  - {name: "Viz 6-3", value: "#E9E1FA"}
  - {name: "Viz 7-3", value: "#D7F5E4"}
  - {name: "Viz 8-3", value: "#D0EDF5"}
  - {name: "Viz 9-3", value: "#F4F5D0"}
  - {name: "Viz 10-3", value: "#FCDAD7"}
  - {name: "Viz 11-3", value: "#F7EBDF"}
  - {name: "Viz 12-3", value: "#EDECE1"}
```

## Sequential Scale A
This sequential scale is the most often used. It is structured based on our first primary qualitative color.

```color-palette|span-6
colors:
  - {name: "sequential 7-1", value: "#F0F0F0"}
  - {name: "sequential 7-2", value: "#D7DBE8"}
  - {name: "sequential 7-3", value: "#B8C1DE"}
  - {name: "sequential 7-4", value: "#96A7D3"}
  - {name: "sequential 7-5", value: "#7790C9"}
  - {name: "sequential 7-6", value: "#5078BE"}
  - {name: "sequential 7-7", value: "#1262B3"}
```

## Sequential Scale B
This scale is used in the case where we are displaying data that could be negatively associated. Examples of such data would be the path of a hurricane or the amount of deaths in school shootings over time. This scale is created from two choice colors in our qualitative scale.

```color-palette|span-6
colors:
  - {name: "sequential 7-1", value: "#EDECE1"}
  - {name: "sequential 7-1", value: "#E3DABE"}
  - {name: "sequential 7-1", value: "#DDC49A"}
  - {name: "sequential 7-1", value: "#DCB381"}
  - {name: "sequential 7-1", value: "#DB8E59"}
  - {name: "sequential 7-1", value: "#DB7147"}
  - {name: "sequential 7-1", value: "#D9493D"}
```

## Sequential Scale C
This is an alternative sequential scale that is available in the case that our primary qualitative color is encoded with a specific category and should not be confused with the category this scale is representing. This scale is created from a choice color and a primary color in our qualitative scale.

```color-palette|span-6
colors:
  - {name: "sequential 7-1", value: "#EDECE1"}
  - {name: "sequential 7-1", value: "#D4E0D3"}
  - {name: "sequential 7-1", value: "#B5D1C3"}
  - {name: "sequential 7-1", value: "#92C1B0"}
  - {name: "sequential 7-1", value: "#72B3A0"}
  - {name: "sequential 7-1", value: "#50A591"}
  - {name: "sequential 7-1", value: "#1E9682"}
```

## Diverging Scale A
This diverging scale should be used in any case where we are comparing opposites that are positively and negatively konnotiert. Such an example would be election maps where voters had to approve/deny an iniative.

```color-palette|span-6
colors:
  - {name: "diverging 7-1", value: "#D95C23"}
  - {name: "diverging 7-2", value: "#E68D64"}
  - {name: "diverging 7-3", value: "#EBBDA5"}
  - {name: "diverging 7-4", value: "#E4EBE9"}
  - {name: "diverging 7-5", value: "#BFB1DC"}
  - {name: "diverging 7-6", value: "#987ACE"}
  - {name: "diverging 7-7", value: "#6A43BF"}
```

## Diverging Scale B
This scale should be used in any case where are comparing opposites, but we would like to avoid negative or positive association. Such an example would be comparing communities whose average age is either younger or older compared to twenty years ago.

```color-palette|span-6
colors:
  - {name: "diverging 7-1", value: "#D4AB0B"}
  - {name: "diverging 7-1", value: "#E2BF67"}
  - {name: "diverging 7-1", value: "#EBD5A9"}
  - {name: "diverging 7-1", value: "#EBEBEB"}
  - {name: "diverging 7-1", value: "#B0BAD9"}
  - {name: "diverging 7-1", value: "#728DC7"}
  - {name: "diverging 7-1", value: "#1262B3"}
```

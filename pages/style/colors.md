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
span: 5
rows:
  - Steps: 2  
    HEX: ECECF0, 3952EE
  - Steps: 3
    HEX: ECECF0, 9E9EF4, 3952EE
  - Steps: 4
    HEX: ECECF0, B8B8F3, 8285F3, 3952EE
  - Steps: 5
    HEX: ECECF0, C5C5F3, 9E9EF4, 7378F2, 3952EE
  - Steps: 6
    HEX: ECECF0, CDCDF3, AEAEF4, 8D8FF3, 6970F1, 3952EE
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
span: 5
rows:
  - Steps: 2
    HEX: EDECE1, 24B39C
  - Steps: 3
    HEX: EDECE1, ABCEA9, 24B39C
  - Steps: 4
    HEX: EDECE1, C6D7B8, 8BC5A0, 24B39C
  - Steps: 5
    HEX: EDECE1, D2DCC1, ABCEA9, 79C19D, 24B39C
  - Steps: 6
    HEX: EDECE1, D8DFC7, BCD4B2, 99C9A3, 6DBE9C, 24B39C
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
span: 5
rows:
  - Steps: 2
    HEX: #EDECE1, #D64B47
  - Steps: 3
    HEX: #EDECE1, #DAA878, #D64B47
  - Steps: 4
    HEX: #EDECE1, #DDC197, #DA8D5F, #D64B47
  - Steps: 5
    HEX: #EDECE1, #DFCCA9, #DAA878, #D97E55, #D64B47
  - Steps: 6
    HEX: #EDECE1, #E0D3B4, #DBB78A, #DA9868, #D97551, #D64B47
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

```table
span: 5
rows:
  - Steps: 2
    HEX: E66E4A, 6C43C0
  - Steps: 3
    HEX: E66E4A, ececf0, 6C43C0
  - Steps: 4
    HEX: E66E4A, f2c3b6, c5b2e1, 6C43C0
  - Steps: 5
    HEX: E66E4A, f2ae9a, ececf0, b196d9, 6c43c0
  - Steps: 6
    HEX: E66E4A, f1a18a, f1d3cd, d5c9e7, a485d4, 6C43C0
  - Steps: 7
    HEX: E66E4A, ef997f, f2c3b6, ececf0, c5b2e1, 9b7ad1, 6C43C0
  - Steps: 8
    HEX: E66E4A, ee9377, f2b7a6, f0dad7, dcd3ea, b9a2dd, 9572cf, 6C43C0
  - Steps: 9
    HEX: E66E4A, ee8e72, f2ae9a, f1cdc4, ececf0, cfc0e5, b196d9, 906ccd, 6C43C0
  - Steps: 10
    HEX: E66E4A, ed8b6d, f1a791, f2c3b6, efdedc, dfd8eb, c5b2e1, aa8cd6, 8c68cb, 6C43C0
  - Steps: 11
    HEX: E66E4A, ec886a, f1a18a, f2baab, f1d3cd, ececf0, d5c9e7, bda7de, a485d4, 8964ca, 6C43C0
  - Steps: 12
    HEX: E66E4A, ec8667, f09d84, f2b3a2, f2cac1, efe1e0, e2dcec, ccbce4, b69ddb, 9f7fd3, 8761c9, 6C43C0
  - Steps: 13
    HEX: E66E4A, eb8464, ef997f, f2ae9a, f2c3b6, f0d7d3, ececf0, d9cfe9, c5b2e1, b196d9, 9b7ad1, 855fc9, 6C43C0
  - Steps: 14
    HEX: E66E4A, eb8262, ef967b, f1a994, f2bcae, f1cfc8, eee2e2, e3deed, d1c4e6, bfa9df, ac8fd7, 9876d0, 835cc8, 6C43C0
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
```table
span: 5
rows:
  - Steps: 2
    HEX: 3952EE, EBBD22
  - Steps: 3
    HEX: 3952EE, ECECF0, EBBD22
  - Steps: 4
    HEX: 3952EE, bfb6f1, f3dcb1, EBBD22
  - Steps: 5
    HEX: 3952EE, a69cf1, ECECF0, f3d492, EBBD22
  - Steps: 6
    HEX: 3952EE, 968df1, d2cbf1, f1e2ca, f2cf7f, EBBD22
  - Steps: 7
    HEX: 3952EE, 8b82f0, bfb6f1, ECECF0, f3dcb1, f2cc72, EBBD22
  - Steps: 8
    HEX: 3952EE, 827bf0, b1a7f1, d9d5f1, f0e5d5, f3d79f, f1ca68, EBBD22
  - Steps: 9
    HEX: 3952EE, 7b76f0, a69cf1, cbc3f1, ECECF0, f2e0c1, f3d492, f0c861, EBBD22
  - Steps: 10
    HEX: 3952EE, 7572f0, 9d93f1, bfb6f1, dedaf1, efe6db, f3dcb1, f3d187, f0c75b, EBBD22
  - Steps: 11
    HEX: 3952EE, 716ff0, 968df1, b5abf1, d2cbf1, ECECF0, f1e2ca, f3d8a5, f2cf7f, f0c656, EBBD22
  - Steps: 12
    HEX: 3952EE, 6d6cef, 9087f0, ada3f1, c8c0f1, e0ddf1, efe7df, f2dfbd, f3d69a, f2cd77, efc552, EBBD22
  - Steps: 13
    HEX: 3952EE, 696aef, 8b82f0, a69cf1, bfb6f1, d6d1f1, ECECF0, f0e4d0, f3dcb1, f3d492, f2cc72, efc44f, EBBD22
  - Steps: 14
    HEX: 3952EE, 6668ef, 867ff0, a096f1, b8aef1, cec6f1, e2dff0, eee8e1, f1e1c4, f3d9a7, f3d28a, f1cb6c, efc44c, EBBD22
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

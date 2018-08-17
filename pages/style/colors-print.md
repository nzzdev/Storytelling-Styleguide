```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

#### Our print team's color palette consists of a qualitative scale and a range of choice colors.

```image
plain: true
span: 5
src: "assets/teaser-color@1x.png 1x, assets/teaser-color@2x.png 2x"
```

...Some text here about how the colors were developed. Leann should be responsible for providing the content for this page.


## Qualitative Color Scale: Primary
Our qualitative colors for daily business are the most used colors in our color palette. These colors should be used *in order* for different or "unrelated" categories within a dataset. Such a dataset could be countries, religions, or breeds of dogs. We use them in the order listed below.

```color
span: 1
name: "Blue"
value: "#083069"
```
```color
span: 1
name: "Yellow"
value: "#F0B517"
```
```color
span: 1
name: "Orange"
value: "#D93E0D"
```
```color
span: 1
name: "Turquoise"
value: "#7CC0AE"
```
```color
span: 1
name: "Pink"
value: "#E87D92"
```
```color
span: 1
name: "Gray"
value: "#908B84"
```


## Qualitative Color Scale: Choice
Our choice colors are less often used in our basic daily business. They are most often included in graphics larger than 2 columns or a part of a running series.

```color
span: 1
name: "Gold"
value: "#AC8E46"
```
```color
span: 1
name: "Green-gray"
value: "#65776F"
```
```color
span: 1
name: "Red"
value: "#E11832"
```
```color
span: 1
name: "Dark Red"
value: "#7C1C23"
```

## Karten
We have a specific color palette for maps.

```color
span: 1
name: "Oceans"
value: "#C6D6D8"
``````color
span: 1
name: "Rivers"
value: "#87A2A9"
``````color
span: 1
name: "Forests"
value: "#99CA7C"
```
```color
span: 1
name: "Highlighted Areas"
value: "#F0B517"
```

--

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

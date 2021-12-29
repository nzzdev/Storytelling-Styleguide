```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

## Sequential and Diverging Scales

Color scales are a powerful way to encode data. The use of the color dimension
is common in Heatmaps and [Choropleth Maps](choropleth-maps).

There is a simple rule how we usually encode data with color: the darker the
color, the larger an entities value. Visualize such cases with one of our
sequential scales. Whenever there's a relevant break in the scale, you should
probably consider a diverging scale. For both type of scales we defined variants
– check out which one fits best with your scenario.

Our sequential and diverging scales have a maximum of seven buckets. This allows
our readers to differentiate shades of a hue from one another and let them
accurately read the data encoding in our charts and maps.

### Sequential Scales

**Sequential-one** is the most used scale and bases on our first primary color.
**Sequential-two** is the scale used in cases our primary qualitative color is
encoded with a specific category already and should not be confused with the
category this scale is representing. It's based on another primary and a bright
choice color. **Sequential-three** is the scale used in cases we are displaying
data that's negatively associated. Examples of such data would be the path of a
hurricane or the amount of deaths in school shootings over time. It's based on
two choice colors. **Sequential-male** is the scale used for displaying the
amount of male representation. It's based on the male color.
**Sequential-female** is the scale used for displaying the amount of female
representation. It's based on the female color.

### Sequential-one

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-one-2-1", value: "#374e8e"}
	- {name: "s-viz-color-sequential-one-2-2", value: "#cad8d4"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-one-3-1", value: "#374e8e"}
	- {name: "s-viz-color-sequential-one-3-2", value: "#689aab"}
	- {name: "s-viz-color-sequential-one-3-3", value: "#cad8d4"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-one-4-1", value: "#374e8e"}
	- {name: "s-viz-color-sequential-one-4-2", value: "#5182a1"}
	- {name: "s-viz-color-sequential-one-4-3", value: "#85b0b6"}
	- {name: "s-viz-color-sequential-one-4-4", value: "#cad8d4"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-one-5-1", value: "#374e8e"}
	- {name: "s-viz-color-sequential-one-5-2", value: "#47769c"}
	- {name: "s-viz-color-sequential-one-5-3", value: "#689aab"}
	- {name: "s-viz-color-sequential-one-5-4", value: "#95bbbc"}
	- {name: "s-viz-color-sequential-one-5-5", value: "#cad8d4"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-one-6-1", value: "#374e8e"}
	- {name: "s-viz-color-sequential-one-6-2", value: "#426e99"}
	- {name: "s-viz-color-sequential-one-6-3", value: "#598ca5"}
	- {name: "s-viz-color-sequential-one-6-4", value: "#78a7b2"}
	- {name: "s-viz-color-sequential-one-6-5", value: "#a0c1c0"}
	- {name: "s-viz-color-sequential-one-6-6", value: "#cad8d4"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-one-7-1", value: "#374d8e"}
	- {name: "s-viz-color-sequential-one-7-2", value: "#3f6998"}
	- {name: "s-viz-color-sequential-one-7-3", value: "#5082a1"}
	- {name: "s-viz-color-sequential-one-7-4", value: "#6899ab"}
	- {name: "s-viz-color-sequential-one-7-5", value: "#84b0b6"}
	- {name: "s-viz-color-sequential-one-7-6", value: "#a7c5c3"}
	- {name: "s-viz-color-sequential-one-7-7", value: "#cad8d4"}
```

### Sequential-two

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-two-2-1", value: "#478c5b"}
	- {name: "s-viz-color-sequential-two-2-2", value: "#ded4b8"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-two-3-1", value: "#478c5b"}
	- {name: "s-viz-color-sequential-two-3-2", value: "#9eb06d"}
	- {name: "s-viz-color-sequential-two-3-3", value: "#ded4b8"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-two-4-1", value: "#478c5b"}
	- {name: "s-viz-color-sequential-two-4-2", value: "#80a55f"}
	- {name: "s-viz-color-sequential-two-4-3", value: "#b7bb81"}
	- {name: "s-viz-color-sequential-two-4-4", value: "#ded4b8"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-two-5-1", value: "#488d5b"}
	- {name: "s-viz-color-sequential-two-5-2", value: "#72a05c"}
	- {name: "s-viz-color-sequential-two-5-3", value: "#9eb06d"}
	- {name: "s-viz-color-sequential-two-5-4", value: "#c3c18d"}
	- {name: "s-viz-color-sequential-two-5-5", value: "#ded4b8"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-two-6-1", value: "#31755c"}
	- {name: "s-viz-color-sequential-two-6-2", value: "#488d5b"}
	- {name: "s-viz-color-sequential-two-6-3", value: "#72a05c"}
	- {name: "s-viz-color-sequential-two-6-4", value: "#9eb06d"}
	- {name: "s-viz-color-sequential-two-6-5", value: "#c3c18d"}
	- {name: "s-viz-color-sequential-two-6-6", value: "#ded4b8"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-two-7-1", value: "#225d54"}
	- {name: "s-viz-color-sequential-two-7-2", value: "#31755c"}
	- {name: "s-viz-color-sequential-two-7-3", value: "#488d5b"}
	- {name: "s-viz-color-sequential-two-7-4", value: "#72a05c"}
	- {name: "s-viz-color-sequential-two-7-5", value: "#9eb06d"}
	- {name: "s-viz-color-sequential-two-7-6", value: "#c3c18d"}
	- {name: "s-viz-color-sequential-two-7-7", value: "#ded4b8"}
```

### Sequential-three

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-three-2-1", value: "#ce4631"}
	- {name: "s-viz-color-sequential-three-2-2", value: "#e0d4b1"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-three-3-1", value: "#ce4631"}
	- {name: "s-viz-color-sequential-three-3-2", value: "#d8975c"}
	- {name: "s-viz-color-sequential-three-3-3", value: "#e0d4b1"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-three-4-1", value: "#ce4631"}
	- {name: "s-viz-color-sequential-three-4-2", value: "#d57f48"}
	- {name: "s-viz-color-sequential-three-4-3", value: "#daad75"}
	- {name: "s-viz-color-sequential-three-4-4", value: "#e0d4b1"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-three-5-1", value: "#ce4731"}
	- {name: "s-viz-color-sequential-three-5-2", value: "#d47340"}
	- {name: "s-viz-color-sequential-three-5-3", value: "#d8975d"}
	- {name: "s-viz-color-sequential-three-5-4", value: "#dbb783"}
	- {name: "s-viz-color-sequential-three-5-5", value: "#e0d4b1"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-three-6-1", value: "#b52740"}
	- {name: "s-viz-color-sequential-three-6-2", value: "#ce4731"}
	- {name: "s-viz-color-sequential-three-6-3", value: "#d47340"}
	- {name: "s-viz-color-sequential-three-6-4", value: "#d8975d"}
	- {name: "s-viz-color-sequential-three-6-5", value: "#dbb783"}
	- {name: "s-viz-color-sequential-three-6-6", value: "#e0d4b1"}
```

```color-palette|horizontal
colors:
	- {name: "s-viz-color-sequential-three-7-1", value: "#93144b"}
	- {name: "s-viz-color-sequential-three-7-2", value: "#b52740"}
	- {name: "s-viz-color-sequential-three-7-3", value: "#ce4731"}
	- {name: "s-viz-color-sequential-three-7-4", value: "#d47340"}
	- {name: "s-viz-color-sequential-three-7-5", value: "#d8975d"}
	- {name: "s-viz-color-sequential-three-7-6", value: "#dbb783"}
	- {name: "s-viz-color-sequential-three-7-7", value: "#e0d4b1"}
```

### Sequential-male

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-male-2-1", value: "#24b39c"}
        - {name: "s-viz-color-sequential-male-2-2", value: "#b9e0c9"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-male-3-1", value: "#40bfa2"}
        - {name: "s-viz-color-sequential-male-3-2", value: "#7cd2b0"}
        - {name: "s-viz-color-sequential-male-3-3", value: "#b9e0c9"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-male-4-1", value: "#20a796"}
        - {name: "s-viz-color-sequential-male-4-2", value: "#40bfa2"}
        - {name: "s-viz-color-sequential-male-4-3", value: "#7cd2b0"}
        - {name: "s-viz-color-sequential-male-4-4", value: "#b9e0c9"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-male-5-1", value: "#198d87"}
        - {name: "s-viz-color-sequential-male-5-2", value: "#20a796"}
        - {name: "s-viz-color-sequential-male-5-3", value: "#40bfa2"}
        - {name: "s-viz-color-sequential-male-5-4", value: "#7cd2b0"}
        - {name: "s-viz-color-sequential-male-5-5", value: "#b9e0c9"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-male-6-1", value: "#127577"}
        - {name: "s-viz-color-sequential-male-6-2", value: "#198d87"}
        - {name: "s-viz-color-sequential-male-6-3", value: "#20a796"}
        - {name: "s-viz-color-sequential-male-6-4", value: "#40bfa2"}
        - {name: "s-viz-color-sequential-male-6-5", value: "#7cd2b0"}
        - {name: "s-viz-color-sequential-male-6-6", value: "#b9e0c9"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-male-7-1", value: "#0c5d64"}
        - {name: "s-viz-color-sequential-male-7-2", value: "#127577"}
        - {name: "s-viz-color-sequential-male-7-3", value: "#198d87"}
        - {name: "s-viz-color-sequential-male-7-4", value: "#20a796"}
        - {name: "s-viz-color-sequential-male-7-5", value: "#40bfa2"}
        - {name: "s-viz-color-sequential-male-7-6", value: "#7cd2b0"}
        - {name: "s-viz-color-sequential-male-7-7", value: "#b9e0c9"}
```

### Sequential-female

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-female-2-1", value: "#6c43c0"}
        - {name: "s-viz-color-sequential-female-2-2", value: "#e1cde1"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-female-3-1", value: "#6c43c0"}
        - {name: "s-viz-color-sequential-female-3-2", value: "#b085d1"}
        - {name: "s-viz-color-sequential-female-3-3", value: "#e1cde1"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-female-4-1", value: "#6c43c0"}
        - {name: "s-viz-color-sequential-female-4-2", value: "#9b6ece"}
        - {name: "s-viz-color-sequential-female-4-3", value: "#c39dd4"}
        - {name: "s-viz-color-sequential-female-4-4", value: "#e1cde1"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-female-5-1", value: "#6c43c0"}
        - {name: "s-viz-color-sequential-female-5-2", value: "#9063cc"}
        - {name: "s-viz-color-sequential-female-5-3", value: "#b085d1"}
        - {name: "s-viz-color-sequential-female-5-4", value: "#cba9d6"}
        - {name: "s-viz-color-sequential-female-5-5", value: "#e1cde1"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-female-6-1", value: "#5238a7"}
        - {name: "s-viz-color-sequential-female-6-2", value: "#764bc5"}
        - {name: "s-viz-color-sequential-female-6-3", value: "#976acd"}
        - {name: "s-viz-color-sequential-female-6-4", value: "#b48ad1"}
        - {name: "s-viz-color-sequential-female-6-5", value: "#cdabd7"}
        - {name: "s-viz-color-sequential-female-6-6", value: "#e1cde1"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-sequential-female-7-1", value: "#312a7d"}
        - {name: "s-viz-color-sequential-female-7-2", value: "#5238a7"}
        - {name: "s-viz-color-sequential-female-7-3", value: "#764bc5"}
        - {name: "s-viz-color-sequential-female-7-4", value: "#976acd"}
        - {name: "s-viz-color-sequential-female-7-5", value: "#b48ad1"}
        - {name: "s-viz-color-sequential-female-7-6", value: "#cdabd7"}
        - {name: "s-viz-color-sequential-female-7-7", value: "#e1cde1"}
```

### Diverging Scales

**Diverging-one** is used in cases we are comparing opposites that can be
associated with positive and negative attitudes. An example could be an election
maps where voters approved or denied an initiative. **Diverging-two** is used in
cases we are comparing opposites, but we would like to avoid negative or
positive associations. An example is the comparing of communities whose average
age is either younger or older compared to twenty years ago. This scale is
created using the first two primary colors in our qualitative scale. This lends
the scale to be used in stories where there are two data points which are
directly compared throughout the story. **Diverging-three** is used in cases we
are comparing opposites with negative and/or positive connotation. This scale is
comprised of two choice colors, so as not to overlap with any of the primary
colors which might already be encoded in the story. **Diverging-gender** is used
to display female and male representations. It's based on our gender colors.

### Diverging-one

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-2-1", value: "#ce4631"}
        - {name: "s-viz-color-diverging-one-2-2", value: "#374e8e"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-3-1", value: "#ce4631"}
        - {name: "s-viz-color-diverging-one-3-2", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-one-3-3", value: "#374e8e"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-4-1", value: "#ce4631"}
        - {name: "s-viz-color-diverging-one-4-2", value: "#e98977"}
        - {name: "s-viz-color-diverging-one-4-3", value: "#768fcd"}
        - {name: "s-viz-color-diverging-one-4-4", value: "#374e8e"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-5-1", value: "#ce4631"}
        - {name: "s-viz-color-diverging-one-5-2", value: "#cc8e82"}
        - {name: "s-viz-color-diverging-one-5-3", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-one-5-4", value: "#7b8aae"}
        - {name: "s-viz-color-diverging-one-5-5", value: "#374e8e"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-6-1", value: "#ce4631"}
        - {name: "s-viz-color-diverging-one-6-2", value: "#e98977"}
        - {name: "s-viz-color-diverging-one-6-3", value: "#f1cbc3"}
        - {name: "s-viz-color-diverging-one-6-4", value: "#cad5ec"}
        - {name: "s-viz-color-diverging-one-6-5", value: "#768fcd"}
        - {name: "s-viz-color-diverging-one-6-6", value: "#374e8e"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-7-1", value: "#8e2a1b"}
        - {name: "s-viz-color-diverging-one-7-2", value: "#ce4732"}
        - {name: "s-viz-color-diverging-one-7-3", value: "#cc8e82"}
        - {name: "s-viz-color-diverging-one-7-4", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-one-7-5", value: "#949eb5"}
        - {name: "s-viz-color-diverging-one-7-6", value: "#6276a6"}
        - {name: "s-viz-color-diverging-one-7-7", value: "#374e8d"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-8-1", value: "#8e2a1b"}
        - {name: "s-viz-color-diverging-one-8-2", value: "#ce4732"}
        - {name: "s-viz-color-diverging-one-8-3", value: "#e98977"}
        - {name: "s-viz-color-diverging-one-8-4", value: "#f1cbc3"}
        - {name: "s-viz-color-diverging-one-8-5", value: "#cad5ec"}
        - {name: "s-viz-color-diverging-one-8-6", value: "#91a6d9"}
        - {name: "s-viz-color-diverging-one-8-7", value: "#5e78bd"}
        - {name: "s-viz-color-diverging-one-8-8", value: "#374e8d"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-9-1", value: "#8e2a1b"}
        - {name: "s-viz-color-diverging-one-9-2", value: "#bf3e2b"}
        - {name: "s-viz-color-diverging-one-9-3", value: "#d16c5a"}
        - {name: "s-viz-color-diverging-one-9-4", value: "#ca9e95"}
        - {name: "s-viz-color-diverging-one-9-5", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-one-9-6", value: "#a1a8b8"}
        - {name: "s-viz-color-diverging-one-9-7", value: "#7b8aae"}
        - {name: "s-viz-color-diverging-one-9-8", value: "#566ca2"}
        - {name: "s-viz-color-diverging-one-9-9", value: "#374e8d"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-10-1", value: "#8e2a1b"}
        - {name: "s-viz-color-diverging-one-10-2", value: "#bf3e2b"}
        - {name: "s-viz-color-diverging-one-10-3", value: "#e16550"}
        - {name: "s-viz-color-diverging-one-10-4", value: "#eb9a8b"}
        - {name: "s-viz-color-diverging-one-10-5", value: "#f1cbc3"}
        - {name: "s-viz-color-diverging-one-10-6", value: "#cad5ec"}
        - {name: "s-viz-color-diverging-one-10-7", value: "#9fb2de"}
        - {name: "s-viz-color-diverging-one-10-8", value: "#768fcd"}
        - {name: "s-viz-color-diverging-one-10-9", value: "#536db3"}
        - {name: "s-viz-color-diverging-one-10-10", value: "#374e8d"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-11-1", value: "#8e2a1b"}
        - {name: "s-viz-color-diverging-one-11-2", value: "#b53a27"}
        - {name: "s-viz-color-diverging-one-11-3", value: "#d05642"}
        - {name: "s-viz-color-diverging-one-11-4", value: "#ce8173"}
        - {name: "s-viz-color-diverging-one-11-5", value: "#c8a6a0"}
        - {name: "s-viz-color-diverging-one-11-6", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-one-11-7", value: "#a9aebb"}
        - {name: "s-viz-color-diverging-one-11-8", value: "#8a96b2"}
        - {name: "s-viz-color-diverging-one-11-9", value: "#6c7eaa"}
        - {name: "s-viz-color-diverging-one-11-10", value: "#4f669e"}
        - {name: "s-viz-color-diverging-one-11-11", value: "#374e8d"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-12-1", value: "#8e2a1b"}
        - {name: "s-viz-color-diverging-one-12-2", value: "#b53a27"}
        - {name: "s-viz-color-diverging-one-12-3", value: "#d7523d"}
        - {name: "s-viz-color-diverging-one-12-4", value: "#e67b67"}
        - {name: "s-viz-color-diverging-one-12-5", value: "#eca496"}
        - {name: "s-viz-color-diverging-one-12-6", value: "#f1cbc3"}
        - {name: "s-viz-color-diverging-one-12-7", value: "#cad5ec"}
        - {name: "s-viz-color-diverging-one-12-8", value: "#a7b9e1"}
        - {name: "s-viz-color-diverging-one-12-9", value: "#869dd4"}
        - {name: "s-viz-color-diverging-one-12-10", value: "#6781c4"}
        - {name: "s-viz-color-diverging-one-12-11", value: "#4d67ac"}
        - {name: "s-viz-color-diverging-one-12-12", value: "#374e8d"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-13-1", value: "#8e2a1b"}
        - {name: "s-viz-color-diverging-one-13-2", value: "#af3725"}
        - {name: "s-viz-color-diverging-one-13-3", value: "#ce4732"}
        - {name: "s-viz-color-diverging-one-13-4", value: "#d16c5a"}
        - {name: "s-viz-color-diverging-one-13-5", value: "#cc8e82"}
        - {name: "s-viz-color-diverging-one-13-6", value: "#c8aca6"}
        - {name: "s-viz-color-diverging-one-13-7", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-one-13-8", value: "#aeb2bc"}
        - {name: "s-viz-color-diverging-one-13-9", value: "#949eb5"}
        - {name: "s-viz-color-diverging-one-13-10", value: "#7b8aae"}
        - {name: "s-viz-color-diverging-one-13-11", value: "#6276a6"}
        - {name: "s-viz-color-diverging-one-13-12", value: "#4b619c"}
        - {name: "s-viz-color-diverging-one-13-13", value: "#374e8d"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-one-14-1", value: "#8e2a1b"}
        - {name: "s-viz-color-diverging-one-14-2", value: "#af3725"}
        - {name: "s-viz-color-diverging-one-14-3", value: "#ce4732"}
        - {name: "s-viz-color-diverging-one-14-4", value: "#e16550"}
        - {name: "s-viz-color-diverging-one-14-5", value: "#e98977"}
        - {name: "s-viz-color-diverging-one-14-6", value: "#edab9e"}
        - {name: "s-viz-color-diverging-one-14-7", value: "#f1cbc3"}
        - {name: "s-viz-color-diverging-one-14-8", value: "#cad5ec"}
        - {name: "s-viz-color-diverging-one-14-9", value: "#adbde3"}
        - {name: "s-viz-color-diverging-one-14-10", value: "#91a6d9"}
        - {name: "s-viz-color-diverging-one-14-11", value: "#768fcd"}
        - {name: "s-viz-color-diverging-one-14-12", value: "#5e78bd"}
        - {name: "s-viz-color-diverging-one-14-13", value: "#4962a7"}
        - {name: "s-viz-color-diverging-one-14-14", value: "#374e8d"}
```

### Diverging-two

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-2-1", value: "#1b87aa"}
        - {name: "s-viz-color-diverging-two-2-2", value: "#93a345"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-3-1", value: "#1b87aa"}
        - {name: "s-viz-color-diverging-two-3-2", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-two-3-3", value: "#93a345"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-4-1", value: "#1b87aa"}
        - {name: "s-viz-color-diverging-two-4-2", value: "#53b4d9"}
        - {name: "s-viz-color-diverging-two-4-3", value: "#b0c069"}
        - {name: "s-viz-color-diverging-two-4-4", value: "#93a345"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-5-1", value: "#1b87aa"}
        - {name: "s-viz-color-diverging-two-5-2", value: "#70a9c1"}
        - {name: "s-viz-color-diverging-two-5-3", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-two-5-4", value: "#acb58a"}
        - {name: "s-viz-color-diverging-two-5-5", value: "#93a345"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-6-1", value: "#1b87aa"}
        - {name: "s-viz-color-diverging-two-6-2", value: "#53b4d9"}
        - {name: "s-viz-color-diverging-two-6-3", value: "#b1dcef"}
        - {name: "s-viz-color-diverging-two-6-4", value: "#cfdd9d"}
        - {name: "s-viz-color-diverging-two-6-5", value: "#b0c069"}
        - {name: "s-viz-color-diverging-two-6-6", value: "#93a345"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-7-1", value: "#0e5a73"}
        - {name: "s-viz-color-diverging-two-7-2", value: "#1c87aa"}
        - {name: "s-viz-color-diverging-two-7-3", value: "#70aac1"}
        - {name: "s-viz-color-diverging-two-7-4", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-two-7-5", value: "#9eac66"}
        - {name: "s-viz-color-diverging-two-7-6", value: "#768334"}
        - {name: "s-viz-color-diverging-two-7-7", value: "#4e581f"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-8-1", value: "#0e5a73"}
        - {name: "s-viz-color-diverging-two-8-2", value: "#1b87aa"}
        - {name: "s-viz-color-diverging-two-8-3", value: "#53b4d9"}
        - {name: "s-viz-color-diverging-two-8-4", value: "#b1dcef"}
        - {name: "s-viz-color-diverging-two-8-5", value: "#cfdd9d"}
        - {name: "s-viz-color-diverging-two-8-6", value: "#a1b154"}
        - {name: "s-viz-color-diverging-two-8-7", value: "#768334"}
        - {name: "s-viz-color-diverging-two-8-8", value: "#4e581f"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-9-1", value: "#0e5a73"}
        - {name: "s-viz-color-diverging-two-9-2", value: "#187c9c"}
        - {name: "s-viz-color-diverging-two-9-3", value: "#4599b9"}
        - {name: "s-viz-color-diverging-two-9-4", value: "#87b1c3"}
        - {name: "s-viz-color-diverging-two-9-5", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-two-9-6", value: "#a8b380"}
        - {name: "s-viz-color-diverging-two-9-7", value: "#8b9a40"}
        - {name: "s-viz-color-diverging-two-9-8", value: "#6c782e"}
        - {name: "s-viz-color-diverging-two-9-9", value: "#4e581f"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-10-1", value: "#0e5a73"}
        - {name: "s-viz-color-diverging-two-10-2", value: "#187c9c"}
        - {name: "s-viz-color-diverging-two-10-3", value: "#339ec4"}
        - {name: "s-viz-color-diverging-two-10-4", value: "#67bfe2"}
        - {name: "s-viz-color-diverging-two-10-5", value: "#b1dcef"}
        - {name: "s-viz-color-diverging-two-10-6", value: "#cfdd9d"}
        - {name: "s-viz-color-diverging-two-10-7", value: "#acbc62"}
        - {name: "s-viz-color-diverging-two-10-8", value: "#8b9a40"}
        - {name: "s-viz-color-diverging-two-10-9", value: "#6c782e"}
        - {name: "s-viz-color-diverging-two-10-10", value: "#4e581f"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-11-1", value: "#0e5a73"}
        - {name: "s-viz-color-diverging-two-11-2", value: "#167594"}
        - {name: "s-viz-color-diverging-two-11-3", value: "#2c8fb1"}
        - {name: "s-viz-color-diverging-two-11-4", value: "#5fa3bf"}
        - {name: "s-viz-color-diverging-two-11-5", value: "#95b5c3"}
        - {name: "s-viz-color-diverging-two-11-6", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-two-11-7", value: "#aeb78f"}
        - {name: "s-viz-color-diverging-two-11-8", value: "#97a651"}
        - {name: "s-viz-color-diverging-two-11-9", value: "#7e8c39"}
        - {name: "s-viz-color-diverging-two-11-10", value: "#66722b"}
        - {name: "s-viz-color-diverging-two-11-11", value: "#4e581f"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-12-1", value: "#0e5a73"}
        - {name: "s-viz-color-diverging-two-12-2", value: "#167594"}
        - {name: "s-viz-color-diverging-two-12-3", value: "#2490b5"}
        - {name: "s-viz-color-diverging-two-12-4", value: "#45acd1"}
        - {name: "s-viz-color-diverging-two-12-5", value: "#75c5e6"}
        - {name: "s-viz-color-diverging-two-12-6", value: "#b1dcef"}
        - {name: "s-viz-color-diverging-two-12-7", value: "#cfdd9d"}
        - {name: "s-viz-color-diverging-two-12-8", value: "#b3c36c"}
        - {name: "s-viz-color-diverging-two-12-9", value: "#98a84a"}
        - {name: "s-viz-color-diverging-two-12-10", value: "#7e8c39"}
        - {name: "s-viz-color-diverging-two-12-11", value: "#66722b"}
        - {name: "s-viz-color-diverging-two-12-12", value: "#4e581f"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-13-1", value: "#0e5a73"}
        - {name: "s-viz-color-diverging-two-13-2", value: "#14708e"}
        - {name: "s-viz-color-diverging-two-13-3", value: "#1c87aa"}
        - {name: "s-viz-color-diverging-two-13-4", value: "#4599b9"}
        - {name: "s-viz-color-diverging-two-13-5", value: "#70aac1"}
        - {name: "s-viz-color-diverging-two-13-6", value: "#9eb8c4"}
        - {name: "s-viz-color-diverging-two-13-7", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-two-13-8", value: "#b2b99a"}
        - {name: "s-viz-color-diverging-two-13-9", value: "#9eac66"}
        - {name: "s-viz-color-diverging-two-13-10", value: "#8b9a40"}
        - {name: "s-viz-color-diverging-two-13-11", value: "#768334"}
        - {name: "s-viz-color-diverging-two-13-12", value: "#626d29"}
        - {name: "s-viz-color-diverging-two-13-13", value: "#4e581f"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-two-14-1", value: "#0e5a73"}
        - {name: "s-viz-color-diverging-two-14-2", value: "#14708e"}
        - {name: "s-viz-color-diverging-two-14-3", value: "#1b87aa"}
        - {name: "s-viz-color-diverging-two-14-4", value: "#339ec4"}
        - {name: "s-viz-color-diverging-two-14-5", value: "#53b4d9"}
        - {name: "s-viz-color-diverging-two-14-6", value: "#7fc9e8"}
        - {name: "s-viz-color-diverging-two-14-7", value: "#b1dcef"}
        - {name: "s-viz-color-diverging-two-14-8", value: "#cfdd9d"}
        - {name: "s-viz-color-diverging-two-14-9", value: "#b7c773"}
        - {name: "s-viz-color-diverging-two-14-10", value: "#a1b154"}
        - {name: "s-viz-color-diverging-two-14-11", value: "#8b9a40"}
        - {name: "s-viz-color-diverging-two-14-12", value: "#768334"}
        - {name: "s-viz-color-diverging-two-14-13", value: "#626d29"}
        - {name: "s-viz-color-diverging-two-14-14", value: "#4e581f"}
```

### Diverging-three

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-2-1", value: "#006d64"}
        - {name: "s-viz-color-diverging-three-2-2", value: "#ae49a2"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-3-1", value: "#006d64"}
        - {name: "s-viz-color-diverging-three-3-2", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-three-3-3", value: "#ae49a2"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-4-1", value: "#006d64"}
        - {name: "s-viz-color-diverging-three-4-2", value: "#39ac9f"}
        - {name: "s-viz-color-diverging-three-4-3", value: "#d485c8"}
        - {name: "s-viz-color-diverging-three-4-4", value: "#ae49a2"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-5-1", value: "#006d64"}
        - {name: "s-viz-color-diverging-three-5-2", value: "#599f96"}
        - {name: "s-viz-color-diverging-three-5-3", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-three-5-4", value: "#b88fb1"}
        - {name: "s-viz-color-diverging-three-5-5", value: "#ae49a2"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-6-1", value: "#006d64"}
        - {name: "s-viz-color-diverging-three-6-2", value: "#39ac9f"}
        - {name: "s-viz-color-diverging-three-6-3", value: "#9fe4db"}
        - {name: "s-viz-color-diverging-three-6-4", value: "#eac9e4"}
        - {name: "s-viz-color-diverging-three-6-5", value: "#d485c8"}
        - {name: "s-viz-color-diverging-three-6-6", value: "#ae49a2"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-7-1", value: "#005f57"}
        - {name: "s-viz-color-diverging-three-7-2", value: "#2f887e"}
        - {name: "s-viz-color-diverging-three-7-3", value: "#75aba3"}
        - {name: "s-viz-color-diverging-three-7-4", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-three-7-5", value: "#b991b2"}
        - {name: "s-viz-color-diverging-three-7-6", value: "#af50a4"}
        - {name: "s-viz-color-diverging-three-7-7", value: "#7c2d73"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-8-1", value: "#005f57"}
        - {name: "s-viz-color-diverging-three-8-2", value: "#1e8d83"}
        - {name: "s-viz-color-diverging-three-8-3", value: "#4cbcaf"}
        - {name: "s-viz-color-diverging-three-8-4", value: "#9fe4db"}
        - {name: "s-viz-color-diverging-three-8-5", value: "#eac9e4"}
        - {name: "s-viz-color-diverging-three-8-6", value: "#d588c9"}
        - {name: "s-viz-color-diverging-three-8-7", value: "#b34ea6"}
        - {name: "s-viz-color-diverging-three-8-8", value: "#7c2d73"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-9-1", value: "#005f57"}
        - {name: "s-viz-color-diverging-three-9-2", value: "#217f75"}
        - {name: "s-viz-color-diverging-three-9-3", value: "#4f9a91"}
        - {name: "s-viz-color-diverging-three-9-4", value: "#89b2ac"}
        - {name: "s-viz-color-diverging-three-9-5", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-three-9-6", value: "#bba0b6"}
        - {name: "s-viz-color-diverging-three-9-7", value: "#b573ab"}
        - {name: "s-viz-color-diverging-three-9-8", value: "#a6439a"}
        - {name: "s-viz-color-diverging-three-9-9", value: "#7c2d73"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-10-1", value: "#005f57"}
        - {name: "s-viz-color-diverging-three-10-2", value: "#148278"}
        - {name: "s-viz-color-diverging-three-10-3", value: "#32a599"}
        - {name: "s-viz-color-diverging-three-10-4", value: "#5cc7ba"}
        - {name: "s-viz-color-diverging-three-10-5", value: "#9fe4db"}
        - {name: "s-viz-color-diverging-three-10-6", value: "#eac9e4"}
        - {name: "s-viz-color-diverging-three-10-7", value: "#da99d0"}
        - {name: "s-viz-color-diverging-three-10-8", value: "#c769ba"}
        - {name: "s-viz-color-diverging-three-10-9", value: "#a6439a"}
        - {name: "s-viz-color-diverging-three-10-10", value: "#7c2d73"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-11-1", value: "#005f57"}
        - {name: "s-viz-color-diverging-three-11-2", value: "#18796f"}
        - {name: "s-viz-color-diverging-three-11-3", value: "#3b9086"}
        - {name: "s-viz-color-diverging-three-11-4", value: "#65a49c"}
        - {name: "s-viz-color-diverging-three-11-5", value: "#96b6b1"}
        - {name: "s-viz-color-diverging-three-11-6", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-three-11-7", value: "#bda8b9"}
        - {name: "s-viz-color-diverging-three-11-8", value: "#b785af"}
        - {name: "s-viz-color-diverging-three-11-9", value: "#b25fa7"}
        - {name: "s-viz-color-diverging-three-11-10", value: "#9e3e93"}
        - {name: "s-viz-color-diverging-three-11-11", value: "#7c2d73"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-12-1", value: "#005f57"}
        - {name: "s-viz-color-diverging-three-12-2", value: "#0d7b71"}
        - {name: "s-viz-color-diverging-three-12-3", value: "#26978b"}
        - {name: "s-viz-color-diverging-three-12-4", value: "#41b3a6"}
        - {name: "s-viz-color-diverging-three-12-5", value: "#67cec1"}
        - {name: "s-viz-color-diverging-three-12-6", value: "#9fe4db"}
        - {name: "s-viz-color-diverging-three-12-7", value: "#eac9e4"}
        - {name: "s-viz-color-diverging-three-12-8", value: "#dda3d4"}
        - {name: "s-viz-color-diverging-three-12-9", value: "#d07bc4"}
        - {name: "s-viz-color-diverging-three-12-10", value: "#bb58af"}
        - {name: "s-viz-color-diverging-three-12-11", value: "#9e3e93"}
        - {name: "s-viz-color-diverging-three-12-12", value: "#7c2d73"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-13-1", value: "#005f57"}
        - {name: "s-viz-color-diverging-three-13-2", value: "#11756c"}
        - {name: "s-viz-color-diverging-three-13-3", value: "#2f887e"}
        - {name: "s-viz-color-diverging-three-13-4", value: "#4f9a91"}
        - {name: "s-viz-color-diverging-three-13-5", value: "#75aba3"}
        - {name: "s-viz-color-diverging-three-13-6", value: "#9fb9b5"}
        - {name: "s-viz-color-diverging-three-13-7", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-three-13-8", value: "#beadbb"}
        - {name: "s-viz-color-diverging-three-13-9", value: "#b991b2"}
        - {name: "s-viz-color-diverging-three-13-10", value: "#b573ab"}
        - {name: "s-viz-color-diverging-three-13-11", value: "#af50a4"}
        - {name: "s-viz-color-diverging-three-13-12", value: "#983b8d"}
        - {name: "s-viz-color-diverging-three-13-13", value: "#7c2d73"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-three-14-1", value: "#005f57"}
        - {name: "s-viz-color-diverging-three-14-2", value: "#08766d"}
        - {name: "s-viz-color-diverging-three-14-3", value: "#1e8d83"}
        - {name: "s-viz-color-diverging-three-14-4", value: "#32a599"}
        - {name: "s-viz-color-diverging-three-14-5", value: "#4cbcaf"}
        - {name: "s-viz-color-diverging-three-14-6", value: "#6fd2c5"}
        - {name: "s-viz-color-diverging-three-14-7", value: "#9fe4db"}
        - {name: "s-viz-color-diverging-three-14-8", value: "#eac9e4"}
        - {name: "s-viz-color-diverging-three-14-9", value: "#dfa9d6"}
        - {name: "s-viz-color-diverging-three-14-10", value: "#d588c9"}
        - {name: "s-viz-color-diverging-three-14-11", value: "#c769ba"}
        - {name: "s-viz-color-diverging-three-14-12", value: "#b34ea6"}
        - {name: "s-viz-color-diverging-three-14-13", value: "#983b8d"}
        - {name: "s-viz-color-diverging-three-14-14", value: "#7c2d73"}
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
        - {name: "s-viz-color-diverging-gender-3-2", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-gender-3-3", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-4-1", value: "#29b69f"}
        - {name: "s-viz-color-diverging-gender-4-2", value: "#5cd0ba"}
        - {name: "s-viz-color-diverging-gender-4-3", value: "#9e89e2"}
        - {name: "s-viz-color-diverging-gender-4-4", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-5-1", value: "#2eb59e"}
        - {name: "s-viz-color-diverging-gender-5-2", value: "#83c0b2"}
        - {name: "s-viz-color-diverging-gender-5-3", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-gender-5-4", value: "#958bbe"}
        - {name: "s-viz-color-diverging-gender-5-5", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-6-1", value: "#29b69f"}
        - {name: "s-viz-color-diverging-gender-6-2", value: "#5cd0ba"}
        - {name: "s-viz-color-diverging-gender-6-3", value: "#a0e5d5"}
        - {name: "s-viz-color-diverging-gender-6-4", value: "#d5cff1"}
        - {name: "s-viz-color-diverging-gender-6-5", value: "#9e89e2"}
        - {name: "s-viz-color-diverging-gender-6-6", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-7-1", value: "#09443a"}
        - {name: "s-viz-color-diverging-gender-7-2", value: "#187b6b"}
        - {name: "s-viz-color-diverging-gender-7-3", value: "#2eb59e"}
        - {name: "s-viz-color-diverging-gender-7-4", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-gender-7-5", value: "#998fbe"}
        - {name: "s-viz-color-diverging-gender-7-6", value: "#714ec1"}
        - {name: "s-viz-color-diverging-gender-7-7", value: "#402379"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-8-1", value: "#09443a"}
        - {name: "s-viz-color-diverging-gender-8-2", value: "#187b6b"}
        - {name: "s-viz-color-diverging-gender-8-3", value: "#29b69f"}
        - {name: "s-viz-color-diverging-gender-8-4", value: "#a0e5d5"}
        - {name: "s-viz-color-diverging-gender-8-5", value: "#d5cff1"}
        - {name: "s-viz-color-diverging-gender-8-6", value: "#a28ee3"}
        - {name: "s-viz-color-diverging-gender-8-7", value: "#734cc8"}
        - {name: "s-viz-color-diverging-gender-8-8", value: "#402379"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-9-1", value: "#09443a"}
        - {name: "s-viz-color-diverging-gender-9-2", value: "#146d5e"}
        - {name: "s-viz-color-diverging-gender-9-3", value: "#1e9884"}
        - {name: "s-viz-color-diverging-gender-9-4", value: "#5bbca8"}
        - {name: "s-viz-color-diverging-gender-9-5", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-gender-9-6", value: "#a49ebe"}
        - {name: "s-viz-color-diverging-gender-9-7", value: "#8471c0"}
        - {name: "s-viz-color-diverging-gender-9-8", value: "#673fb8"}
        - {name: "s-viz-color-diverging-gender-9-9", value: "#402379"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-10-1", value: "#09443a"}
        - {name: "s-viz-color-diverging-gender-10-2", value: "#146d5e"}
        - {name: "s-viz-color-diverging-gender-10-3", value: "#1e9884"}
        - {name: "s-viz-color-diverging-gender-10-4", value: "#40c4ac"}
        - {name: "s-viz-color-diverging-gender-10-5", value: "#a0e5d5"}
        - {name: "s-viz-color-diverging-gender-10-6", value: "#d5cff1"}
        - {name: "s-viz-color-diverging-gender-10-7", value: "#ae9fe7"}
        - {name: "s-viz-color-diverging-gender-10-8", value: "#8a6cda"}
        - {name: "s-viz-color-diverging-gender-10-9", value: "#673fb8"}
        - {name: "s-viz-color-diverging-gender-10-10", value: "#402379"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-11-1", value: "#09443a"}
        - {name: "s-viz-color-diverging-gender-11-2", value: "#126557"}
        - {name: "s-viz-color-diverging-gender-11-3", value: "#1a8775"}
        - {name: "s-viz-color-diverging-gender-11-4", value: "#22aa94"}
        - {name: "s-viz-color-diverging-gender-11-5", value: "#73bfae"}
        - {name: "s-viz-color-diverging-gender-11-6", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-gender-11-7", value: "#aaa6bf"}
        - {name: "s-viz-color-diverging-gender-11-8", value: "#9083bf"}
        - {name: "s-viz-color-diverging-gender-11-9", value: "#785dc1"}
        - {name: "s-viz-color-diverging-gender-11-10", value: "#5f38ac"}
        - {name: "s-viz-color-diverging-gender-11-11", value: "#402379"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-12-1", value: "#09443a"}
        - {name: "s-viz-color-diverging-gender-12-2", value: "#126557"}
        - {name: "s-viz-color-diverging-gender-12-3", value: "#1a8775"}
        - {name: "s-viz-color-diverging-gender-12-4", value: "#22aa94"}
        - {name: "s-viz-color-diverging-gender-12-5", value: "#50cbb4"}
        - {name: "s-viz-color-diverging-gender-12-6", value: "#a0e5d5"}
        - {name: "s-viz-color-diverging-gender-12-7", value: "#d5cff1"}
        - {name: "s-viz-color-diverging-gender-12-8", value: "#b6a9e9"}
        - {name: "s-viz-color-diverging-gender-12-9", value: "#9881e0"}
        - {name: "s-viz-color-diverging-gender-12-10", value: "#7c58d1"}
        - {name: "s-viz-color-diverging-gender-12-11", value: "#5f38ac"}
        - {name: "s-viz-color-diverging-gender-12-12", value: "#402379"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-13-1", value: "#09443a"}
        - {name: "s-viz-color-diverging-gender-13-2", value: "#105f52"}
        - {name: "s-viz-color-diverging-gender-13-3", value: "#187b6b"}
        - {name: "s-viz-color-diverging-gender-13-4", value: "#1e9884"}
        - {name: "s-viz-color-diverging-gender-13-5", value: "#2eb59e"}
        - {name: "s-viz-color-diverging-gender-13-6", value: "#83c0b2"}
        - {name: "s-viz-color-diverging-gender-13-7", value: "#c7c7c7"}
        - {name: "s-viz-color-diverging-gender-13-8", value: "#afabc0"}
        - {name: "s-viz-color-diverging-gender-13-9", value: "#998fbe"}
        - {name: "s-viz-color-diverging-gender-13-10", value: "#8471c0"}
        - {name: "s-viz-color-diverging-gender-13-11", value: "#714ec1"}
        - {name: "s-viz-color-diverging-gender-13-12", value: "#5a34a4"}
        - {name: "s-viz-color-diverging-gender-13-13", value: "#402379"}
```

```color-palette|horizontal
colors:
        - {name: "s-viz-color-diverging-gender-14-1", value: "#09443a"}
        - {name: "s-viz-color-diverging-gender-14-2", value: "#105f52"}
        - {name: "s-viz-color-diverging-gender-14-3", value: "#187b6b"}
        - {name: "s-viz-color-diverging-gender-14-4", value: "#1e9884"}
        - {name: "s-viz-color-diverging-gender-14-5", value: "#29b69f"}
        - {name: "s-viz-color-diverging-gender-14-6", value: "#5cd0ba"}
        - {name: "s-viz-color-diverging-gender-14-7", value: "#a0e5d5"}
        - {name: "s-viz-color-diverging-gender-14-8", value: "#d5cff1"}
        - {name: "s-viz-color-diverging-gender-14-9", value: "#bbafea"}
        - {name: "s-viz-color-diverging-gender-14-10", value: "#a28ee3"}
        - {name: "s-viz-color-diverging-gender-14-11", value: "#8a6cda"}
        - {name: "s-viz-color-diverging-gender-14-12", value: "#734cc8"}
        - {name: "s-viz-color-diverging-gender-14-13", value: "#5a34a4"}
        - {name: "s-viz-color-diverging-gender-14-14", value: "#402379"}
```

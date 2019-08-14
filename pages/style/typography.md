```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

# Basics

## Font Families

Different font families are in use for Online and Print:

- Online: `GT America Standard`, `GT America Mono` and `Pensum Pro`
- Print: `Univers Next Pro`, `Univers LT Std` and `Times Ten LT Std`

As a NZZ employee you can download and install the fonts [here](https://nzzmg.sharepoint.com/:f:/s/nzz_st/Ei3zL984DQlCrZaYaO0a-jMBYsryIHbRgq1jOMBBidNAzQ?e=bmuqO2).

## Libraries & Implementation

As font styles should align with the platform they appear in, we defined an system that works for Online and Print as well. We defined some basic typographic formats and made them easily accessible in graphic editors like Illustator and Sketch. You can find them as character formats in a [Adobe Creative Cloud Library](https://adobe.ly/33oKiEA) (request an invitation) or as text styles in [our invision DSM](https://projects.invisionapp.com/dsm/nzz/visuals/folder/typeStyles/5d4c3818ea4094927bb343ce).

Technically the typographic system is implemented as [`sophie-font`](https://github.com/nzzdev/sophie-font) and contains CSS classes that can be assigned to tags in web products. To view or embed a sophie module use the [Sophie Styleguide](https://storytelling.nzz.ch/tools/sophie-styleguide/).

# Typographic Formats for Online (left) and Print (right)

For both, Online and Print, these abstact formats have been defined:

- 3 Title Formats
- 3 Note Formats (+ modifiers)
- 2 Text Formats (+ modifier)

Let's take a closer look at all three of them.

## Title Formats

Titles usually live on the top of a graphic and serve as an entry point. The bigger your graphic, the larger its title. Further, the three different title sizes allow for a minimal hierarchical structuring, consider `Note S` if it gets more complex (see below). To fit in well on mobile, only `Title S` is recommended.

_If monospace fonts are displayed below, the corresponding fonts probably aren't installed properly on your system._

```type
{
  "span": 3,
  "kern": true,
  "font": "nzz-sans-serif, monospace",
  "weight": 500,
  "color": "#05032d",
  "headings": [
    {"label": "Title L (Desktop)", "value": 28},
    {"label": "Title", "value": 24},
    {"label": "Title S (Mobile)", "value": 20}
  ]
}
```

```type
{
  "span": 3,
  "kern": true,
  "font": "UniversNextPro-MediumCond, monospace",
  "color": "#000000",
  "headings": [
    {"label": "Title L (über 5 Spalten)", "value": 32},
    {"label": "Title (4-5 Spalten)", "value": 16},
    {"label": "Title S (1-3 Spalter)", "value": 11}
  ]
}
```

- Font families Online: `GT America Standard Medium`
- Font families Print: `Univers Next Pro Medium Condensed`
- Sophie Classes: `s-font-title-l`, `s-font-title`, `s-font-title-s`

## Note Formats

If you want to explain anything through words or values in your graphic, you should use the Note formats. The only exceptions are big titles (see title sections above) and countinous text (see text section below).

There are three sizes defined – each of them focuses on a purpose:

- Use `Note Large` to **give some sort of guidance** to the reader within a graphic.
- Use `Note` to **highlight and annotate important focal points or areas** in your graphic.
- Use `Note Small` to **enrich the graphic with detail information**.

If you need to decrease or increase the visual impact of a Note format consider the modifiers `Light` and `Strong` to either (i.e. `Note L Light` or `Note L Strong`). For Online, the display of number values is done with the `Mono` modifier which is unavailable in Print.

Even though there are many matching Use Cases, Online and Print sometimes may differ concerning their font style application. For Example scale tick values are in `Note S Mono` for Online and in `Note` for Print.

Also there is this **Print anomaly** to be aware of: In Print `Note S Light` stays black and instead shrinks to font size `6pt`.

### Notes (without modifiers)

```type
{
  "span": 3,
  "kern": true,
  "font": "nzz-sans-serif, monospace",
  "weight": 300,
  "color": "#05032d",
  "headings": [
    {"label": "Note L", "value": 16},
    {"label": "Note", "value": 14},
    {"label": "Note S", "value": 12}
  ]
}
```

```type
{
  "span": 3,
  "kern": true,
  "font": "UniversLTStd-LightCn, monospace",
  "color": "#000000",
  "headings": [
    {"label": "Note L", "value": 10},
    {"label": "Note", "value": 9},
    {"label": "Note S", "value": 7.5}
  ]
}
```

- Font families Online: `GT America Standard Regular/Medium/Light` and `GT America Mono Light`
- Font families Print: `Univers LT Std 47 Light Condensed/57 Condensed`
- Sophie Classes: `s-font-note-l`, `s-font-note`, `s-font-note-s` (modifiers: `*--strong`, `*--light`, `*--mono`)

### Notes, strong

```type
{
  "span": 3,
  "kern": true,
  "font": "nzz-sans-serif, monospace",
  "weight": 500,
  "color": "#05032d",
  "headings": [
    {"label": "Note L Strong", "value": 16},
    {"label": "Note Strong", "value": 14},
    {"label": "Note S Strong", "value": 12}
  ]
}
```

```type
{
  "span": 3,
  "kern": true,
  "font": "UniversLTStd-Cn, monospace",
  "color": "#000000",
  "headings": [
    {"label": "Note L Strong", "value": 10},
    {"label": "Note Strong", "value": 9},
    {"label": "Note S Strong", "value": 7.5}
  ]
}
```

### Notes, light

```type
{
  "span": 3,
  "kern": true,
  "font": "nzz-sans-serif, monospace",
  "weight": 100,
  "color": "#05032d",
  "headings": [
    {"label": "Note L Light", "value": 16},
    {"label": "Note Light", "value": 14},
    {"label": "Note S Light", "value": 12}
  ]
}
```

```type
{
  "span": 3,
  "kern": true,
  "font": "UniversLTStd-Cn, monospace",
  "color": "#808080",
  "headings": [
    {"label": "Note L Light", "value": 10},
    {"label": "Note Light", "value": 9},
    {"label": "Note S Light", "value": 6, "color": "#05032d"}
  ]
}
```

### Notes, mono (online only)

```type
{
  "span": 3,
  "kern": true,
  "font": "GT America Mono",
  "color": "#05032d",
  "headings": [
    {"label": "Note L Mono", "value": 15},
    {"label": "Note Mono", "value": 13},
    {"label": "Note S Mono", "value": 11}
  ]
}
```

## Text Formats

If a graphic includes large amounts of text, you should consider applying the Text format. The format aligns visually with the coutinous text of the article in both contexts, Online and Print.

### Text (without modifier)

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["20/32"],
  "font": "nzz-serif",
  "weight": 100,
  "color": "#05032d"
}
```

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["9/10.48"],
  "font": "TimesTenStd",
  "color": "#000000"
}
```

### Text, strong

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["20/32"],
  "font": "nzz-serif",
  "weight": 500,
  "color": "#05032d"
}
```

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["9/10.48"],
  "font": "TimesTenStd-Bold",
  "color": "#000000"
}
```

### Small Text (without modifier)

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["18/28"],
  "font": "nzz-serif",
  "weight": 100,
  "color": "#05032d"
}
```

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["8/10.48"],
  "font": "TimesTenStd",
  "color": "#000000"
}
```

### Small Text, strong

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["18/28"],
  "font": "nzz-serif",
  "weight": 500,
  "color": "#05032d"
}
```

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["8/10.48"],
  "font": "TimesTenStd-Bold",
  "color": "#000000"
}
```

- Font families Online: `Pensum Pro Regular/Medium`
- Font families Print: `Times Ten LT Std Roman/Bold`
- Sophie Classes: `s-font-text`, `s-font-text-s` (modifiers: `*--strong`)

```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

Different font families are in use:

- [GT America](http://www.gt-america.com/) and [PensumPro](https://www.myfonts.com/fonts/typemates/pensum-pro/) are used as the primary fonts across all of our online products. A typographic scale is used to create a limited set of type sizes that work well together, while respecting intrinsic platform standards. The font can be downloaded via the [assets page](assets). Online fonts are implemented as a sophie module and can be viewed in and embedded with the [Sophie Styleguide](https://storytelling.nzz.ch/tools/sophie-styleguide/).
- Univers and Bondoni are used as the primary fonts across all print graphics.

## Titles for Online (left) and Print (right)

```type
{
  "span": 3,
  "kern": true,
  "font": "nzz-serif, serif",
  "weight": 500,
  "color": "#05032d",
  "headings": [
    {"label": "Desktop Headline [s-font-title-xl]", "value": 42},
    {"label": "Mobile Headline [s-font-title-l]", "value": 27},
    {"label": "Desktop Subtitle [s-font-title]", "value": 24},
    {"label": "Infographic Headline [s-font-title-s]", "value": 22},
    {"label": "Mobile Infographic Headline [s-font-title-xs]", "value": 20}
  ]
}
```

```type
{
  "span": 3,
  "kern": true,
  "font": "UniversLTStd, Univers, sans-serif",
  "color": "#000000",
  "headings": [
    {"label": "Infographic Headline", "value": "8.5pt"}
  ]
}
```

## Annotations for Online (left) and Print (right)

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["13/17"],
  "font": "nzz-sans-serif, sans-serif",
  "weight": 300,
  "color": "#05032d"
}
```

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["8/10"],
  "font": "Univers LT Std, UniversLTStd-LightCn , Univers, sans-serif",
  "color": "#000000"
}
```

## Meta Information for Online (left) and Print (right)

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["11/13"],
  "font": "nzz-sans-serif, sans-serif",
  "weight": 300,
  "color": "#6e6e7e"
}
```

```type
{
  "span": 3,
  "kern": true,
  "paragraphs": ["6/7.2"],
  "font": "Univers LT Std, UniversLTStd-LightCn, Univers, sans-serif",
  "color": "#000000"
}
```

# All Online Font Styles available

As mentioned above, online font styles are implemented as a sophie module. Via a build service, sophie modules can be requested as a set of classes for styling fonts (for easier embedding please make use of the [Sophie Styleguide](https://storytelling.nzz.ch/tools/sophie-styleguide/)).

Only the most imported styles are explained above. For more options these are all the available font classes provided in the Online context:

```html
showSource: true,
span: 3
---
  <p class="s-font-serif" style="font-size: 200%">Serifen-Schrift (s-font-serif + custom styles)
  </p>
  <p class="s-font-sans" style="font-size: 200%">Sansserifen-Schrift  (s-font-sans + custom styles)
  </p>
```

```html
showSource: true,
span: 3
---
  <p class="s-font-text-s">Lorem ipsum dolor (s-font-text-s)</p>
  <p class="s-font-text-s s-font-text-s--strong">Lorem ipsum dolor (s-font-text-s)</p>
  <p class="s-font-text">Lorem ipsum dolor (s-font-text)</p>
  <p class="s-font-text s-font-text--strong">Lorem ipsum dolor (s-font-text s-font-text--strong)</p>
```

```html
showSource: true,
span: 3
---
  <p class="s-font-text-s">Lorem ipsum dolor (s-font-text-s)</p>
  <p class="s-font-text-s s-font-text-s--strong">Lorem ipsum dolor (s-font-text-s)</p>
  <p class="s-font-text">Lorem ipsum dolor (s-font-text)</p>
  <p class="s-font-text s-font-text--strong">Lorem ipsum dolor (s-font-text s-font-text--strong)</p>
```

```html
showSource: true,
span: 3
---
  <p class="s-font-title-xs">Lorem ipsum dolor (s-font-title-xs)</p>
  <p class="s-font-title-s">Lorem ipsum dolor (s-font-title-s)</p>
  <p class="s-font-title">Lorem ipsum dolor (s-font-title)</p>
  <p class="s-font-title-l">Lorem ipsum dolor (s-font-title-l)</p>
  <p class="s-font-title-l s-font-title-l--contrast">Lorem ipsum dolor (s-font-title-l s-font-title-l--contrast)</p>
  <p class="s-font-title-xl">Lorem ipsum dolor (s-font-title-xl)</p>
  <p class="s-font-title-xl s-font-title-xl--contrast">Lorem ipsum dolor (s-font-title-xl s-font-title-xl--contrast)</p>
```

```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

For online and print different font families are in use.

## Online

[GT America](http://www.gt-america.com/) and [PensumPro](https://www.myfonts.com/fonts/typemates/pensum-pro/) are used as the primary fonts across all of our online products. A typographic scale is used to create a limited set of type sizes that work well together, while respecting intrinsic platform standards. Online font styles are implemented as [a sophie module](https://github.com/nzzdev/sophie-font).

Find our online fonts here (NZZ employees only): https://nzzmg.sharepoint.com/:f:/s/nzz_st/EgLitBtfwjNKsQinaTMkFHgBoVc1Jkv9mBHpQnjo5kFFgw?e=VsP2HV

## Print

Univers and Bondoni are used as the primary fonts across all print graphics.

Find our print fonts here (NZZ employees only): https://nzzmg.sharepoint.com/:f:/s/nzz_st/Eoq1VTvpZ0hDgRo6QzKCSTUB5_IA6MwCeCUtHwVuGZQfBQ?e=AGLTVh

## Styles

For both, Online and Print, we defined the same font styles, basically constisting of two these two groups: titles and notes.
While they can be translated from Online to Print, there are certain fallbacks on the Print side. This has to do with the fact that print fonts are generally smaller and therefore less dynamic in terms of size.

The following matrix showcases the translation of Online and Print fonts which is automated in case of our "Q-to-Print" workflow:

![Typography Raster](assets/typography/typoraster.png "Typography Raster")

## Sophie Classes

For custom coded projects designers need to reference the style classes being used by naming a corresponding sophie class. Below you find a list of all the implemented font style classes provided by the [sophie font module](https://github.com/nzzdev/sophie-font):

### Font Classes

```html|span-3
<p class="s-font-serif" style="margin: 20px 0px; font-size: 200%">
  <span>Serifen-Schrift (s-font-serif + custom styles)</span>
</p>
<p class="s-font-sans" style="margin: 20px 0px; font-size: 200%">
  <span>Sansserifen-Schrift (s-font-sans + custom styles)</span>
</p>
```

### Title Classes (s-font-title\*)

```html|span-3
<p class="s-font-title-l">Lorem ipsum dolor (s-font-title-l)</p>
<p class="s-font-title">Lorem ipsum dolor (s-font-title)</p>
<p class="s-font-title-s">Lorem ipsum dolor (s-font-title-s)</p>
```

### Note Classes (s-font-note\* and s-font-note-s\*)

```html|span-3
<p class="s-font-note">Lorem ipsum dolor (s-font-note)</p>
<p class="s-font-note s-font-note--strong">
  Lorem ipsum dolor (s-font-note s-font-note--strong)
</p>
<p class="s-font-note s-font-note--light">
  Lorem ipsum dolor (s-font-note s-font-note--light)
</p>
<p class="s-font-note s-font-note--mono">
  Lorem ipsum dolor (s-font-note s-font-note--mono)
</p>
```

```html|span-3
<p class="s-font-note-s">Lorem ipsum dolor (s-font-note-s)</p>
<p class="s-font-note-s s-font-note-s--strong">
  Lorem ipsum dolor (s-font-note-s s-font-note-s--strong)
</p>
<p class="s-font-note-s s-font-note-s--light">
  Lorem ipsum dolor (s-font-note-s s-font-note-s--light)
</p>
<p class="s-font-note-s s-font-note-s--mono">
  Lorem ipsum dolor (s-font-note-s s-font-note-s--mono)
</p>
```

### Text Classes (s-font-text\*)

```html|span-3
<p class="s-font-text">Lorem ipsum dolor (s-font-text)</p>
<p class="s-font-text s-font-text--strong">
  Lorem ipsum dolor (s-font-text s-font-text--strong)
</p>
<p class="s-font-text-s">Lorem ipsum dolor (s-font-text-s)</p>
<p class="s-font-text-s s-font-text-s--strong">
  Lorem ipsum dolor (s-font-text-s s-font-text-s--strong)
</p>
```

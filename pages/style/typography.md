```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

Print und Online verwenden verschiedene Schriftfamilien, haben aber gemeinsam definierte Formatvorlagen, die zur Übersetzung von Online zu Print verwendet werden können.

Die vordefinierten Schritfgrössen basieren auf einer typografischen Skala.

## Online-Grafiken

Für Beschriftungen, Titel und kurze Beschreibungstexte in Online-Grafiken wird primär [**GT America**](http://www.gt-america.com/) verwendet.

Für längere Fliesstexte innerhalb von interaktiven Projekten wird [**PensumPro**](https://www.myfonts.com/fonts/typemates/pensum-pro/) verwendet.

Die Online-Schriften sind als [Sophie-Modul](https://github.com/nzzdev/sophie-font) implementiert.

NZZ-Mitarbeiter finden die Schriften hier: https://nzzmg.sharepoint.com/:f:/s/nzz_st/EgLitBtfwjNKsQinaTMkFHgBoVc1Jkv9mBHpQnjo5kFFgw?e=VsP2HV

### Zahlenformat

- Wir verwenden für sämtliche Zahlen **Versalziffern für Tabellen** (_Tabular Lining_ auf Englisch). 
- Wir verwenden keine durchgestrichene Null.

![Tabellensatz in Illustrator](assets/typography/tabellensatz.png "Tabellensatz in Illustrator")

Dieses Format sollte einen sinnvollen Kompromiss erlauben zwischen korrekt untereinander ausgerichteten Ziffern in Tabellen (ohne dass dafür auf GT America Mono ausgewichen werden muss) und der Verwendung der selben Ziffern innerhalb von kurzen Beschreibungen.

Die Verwendung von GT America Mono sollte nach Möglichkeit vermieden werden.

## Video

Videos verwenden dieselben Schriften wie Online-Grafiken.

## Print-Grafiken

In Print-Grafiken wird primär **Univers Condensed** verwendet. Für Grafiken normalerweise _nicht_ verwendet wird die Bodoni, die im Print-Layout für Titeleien eingesetzt wird.

NZZ-Mitarbeiter finden die Schriften hier: https://nzzmg.sharepoint.com/:f:/s/nzz_st/Eoq1VTvpZ0hDgRo6QzKCSTUB5_IA6MwCeCUtHwVuGZQfBQ?e=AGLTVh

## Styles

Sowohl für Online und Print sind dieselben Schriftstile vordefiniert. Diese Stile teilen sich in zwei Gruppen: _Titles_ und _Notes_.

Die Styles in Print sind etwas weniger ausdifferenziert, da die Schriftgrösse zu Beginn weg kleiner ist, was weniger Spielraum lässt.

Die folgende Matrix zeigt die Übersetzung von Online- zu Print-Stilen, wie sie im Q-to-Print-Workflow implementiert sind:

![Typography Raster](assets/typography/typoraster.png "Typography Raster")

## Sophie Classes

Für Custom-Code-Projekte werden die im [Sophie Font Module](https://github.com/nzzdev/sophie-font) definierten CSS-Klassen referenziert: 

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

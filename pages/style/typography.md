```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

Print und Online verwenden verschiedene Schriftfamilien, haben aber gemeinsam definierte Formatvorlagen, die zur Übersetzung von Online zu Print verwendet werden können.

Die vordefinierten Schritfgrössen basieren auf einer typografischen Skala.


## Grundlegendes

![Legende der Grafiken](assets/typography/legend.png)
![Basisschriften](assets/typography/base.png)

```html
<p class="s-font-serif" style="margin: 20px 0px; font-size: 200%">
  <span>Serifen-Schrift (s-font-serif + custom styles)</span>
</p>
<p class="s-font-sans" style="margin: 20px 0px; font-size: 200%">
  <span>Sansserifen-Schrift (s-font-sans + custom styles)</span>
</p>
```


```hint|span-3,neutral

# Online

Für Beschriftungen, Titel und kurze Beschreibungstexte in Online-Grafiken wird primär [**GT America**](http://www.gt-america.com/) verwendet.

Für längere Fliesstexte innerhalb von interaktiven Projekten wird [**Pensum Pro**](https://www.myfonts.com/fonts/typemates/pensum-pro/) verwendet.

NZZ-Mitarbeiter finden die Schriften auf [SharePoint](https://nzzmg.sharepoint.com/:f:/s/nzz_st/EgLitBtfwjNKsQinaTMkFHgBoVc1Jkv9mBHpQnjo5kFFgw?e=VsP2HV).

Die Online-Schriften sind als [Sophie Font Module](https://github.com/nzzdev/sophie-font) implementiert. Die Klassennamen entsprechen den Formatnamen, denen `s-font-` vorangestellt wird; beispielsweise `s-font-serif` oder `s-font-sans`. Variationen werden den Basisformaten angefügt, also etwas `s-font-note--strong`.

# Videos


Videos verwenden dieselben Schriften wie Online-Grafiken.

```

```hint|span-3,neutral

# Print

Für Grafiken im Print verwenden wir ausschliesslich [**Univers Next Pro Condensed**](https://www.linotype.com/de/680064/univers-next-schriftfamilie.html).

Als Textschrift wird im Print **Times Ten** verwendet. Die Verwendung dieser Schrift überlassen wir aber in der Regel ganz der Produktion und dem Layout. Ebenfalls _nicht_ verwendet wird die **Bodoni**, die im Print-Layout für Titeleien eingesetzt wird.

NZZ-Mitarbeiter finden die Schriften auf [SharePoint](https://nzzmg.sharepoint.com/:f:/s/nzz_st/Eoq1VTvpZ0hDgRo6QzKCSTUB5_IA6MwCeCUtHwVuGZQfBQ?e=AGLTVh).
```

### Zahlenformat

- Wir verwenden für sämtliche Zahlen **Versalziffern für Tabellen** (_Tabular Lining_ auf Englisch). 
- Wir verwenden keine durchgestrichene Null.

![Tabellensatz in Illustrator](assets/typography/tabellensatz.png "Tabellensatz in Illustrator")

Dieses Format sollte einen sinnvollen Kompromiss erlauben zwischen korrekt untereinander ausgerichteten Ziffern in Tabellen (ohne dass dafür auf GT America Mono ausgewichen werden muss) und der Verwendung der selben Ziffern innerhalb von kurzen Beschreibungen.

Die Verwendung von GT America Mono sollte nach Möglichkeit vermieden werden.


## Styles

Sowohl für Online und Print sind dieselben Schriftstile vordefiniert. 

Die Styles in Print sind etwas weniger ausdifferenziert, da die Schriftgrösse zu Beginn weg kleiner ist, was weniger Spielraum lässt.

### `note` Klassen

Hauptsächlich verwendeter Stil, um Grafiken zu beschriften.

![](/assets/typography/note.png)

```html|span-3
<p class="s-font-note">Lorem ipsum dolor -123,71% (s-font-note)</p>
<p class="s-font-note s-font-note--strong">
  Lorem ipsum dolor -123,71% (s-font-note s-font-note--strong)
</p>
<p class="s-font-note s-font-note--light">
  Lorem ipsum dolor -123,71% (s-font-note s-font-note--light)
</p>
<p class="s-font-note s-font-note--tabularnums">
  Lorem ipsum dolor -123,71% (s-font-note s-font-note--tabularnums)
</p>
```

```html|span-3
<p class="s-font-note-s">Lorem ipsum dolor -123,71% (s-font-note-s)</p>
<p class="s-font-note-s s-font-note-s--strong">
  Lorem ipsum dolor -123,71% (s-font-note-s s-font-note-s--strong)
</p>
<p class="s-font-note-s s-font-note-s--light">
  Lorem ipsum dolor -123,71% (s-font-note-s s-font-note-s--light)
</p>
<p class="s-font-note-s s-font-note-s--tabularnums">
  Lorem ipsum dolor -123,71% (s-font-note-s s-font-note-s--tabularnums)
</p>
```

```hint|span-3,neutral
# Grafik

Nach Möglichkeit in statischen Grafiken nur `note` (14px) verwenden. Mit der kleineren Variation wird der Text auf Mobiles sehr klein und schwierig zu lesen.
```

```hint|span-3,neutral
# Editorial Tech

`note-s` kann in responsiven Custom-Code-Projekten (spärlich) eingesetzt werden.
```



### `title` Klassen
Wird für Überschriften verwendet.
![](/assets/typography/title.png)
```html
<p class="s-font-title-l">Lorem ipsum dolor (s-font-title-l)</p>
<p class="s-font-title">Lorem ipsum dolor (s-font-title)</p>
<p class="s-font-title-s">Lorem ipsum dolor (s-font-title-s)</p>
```


```hint|span-3,neutral
# Grafik

Grafiken im Print werden mit `title` betitelt. Bei grossen Grafiken (>= 4 Spalten) kann auch `title-l` verwendet werden.

`title-s` (oder `note-s--strong`) kann für Subtitel innerhalb der Grafik verwendet werden.
```


### `text` Klassen

Brotschrift, wird für den Fliesstext von Artikeln verwendet.

![](/assets/typography/text.png)
```html
<p class="s-font-text">Lorem ipsum dolor (s-font-text)</p>
<p class="s-font-text s-font-text--strong">
  Lorem ipsum dolor (s-font-text s-font-text--strong)
</p>
<p class="s-font-text-s">Lorem ipsum dolor (s-font-text-s)</p>
<p class="s-font-text-s s-font-text-s--strong">
  Lorem ipsum dolor (s-font-text-s s-font-text-s--strong)
</p>
```

```hint|span-3,neutral
# Grafik

Die Textstile sollten im Print in aller Regel nur durch Layout und Produktion verwendet werden. Print-Infografiken sollten immer nur Univers Next Pro verwenden.
```

```hint|span-3,neutral
# Editorial Tech

Die Text-Klassen sollten immer dann eingesetzt werden, wenn in einem Custom-Code-Projekt ein längerer Text angezeigt wird, und Kontinuität mit dem umgebenden Artikeltext angestrebt wird.

Ansonsten kann auch die `ui`-Klasse verwendet werden.

```

### `ui` Klassen

In Custom-Code-Projekten wird die `ui`-Klasse für Bedienelemente und längere Beschreibungstexte verwendet.

![](/assets/typography/ui.png)

```html
<p class="s-font-ui">Lorem ipsum dolor -123,71% (s-font-ui)</p>
<p class="s-font-ui s-font-ui--strong">
  Lorem ipsum dolor -123,71% (s-font-ui s-font-ui--strong)
</p>
<p class="s-font-ui s-font-ui--light">Lorem ipsum dolor -123,71% (s-font-ui s-font-ui--light)</p>
<p class="s-font-ui s-font-ui--tabularnums">
  Lorem ipsum dolor -123,71% (s-font-ui s-font-ui--tabularnums)
</p>
```

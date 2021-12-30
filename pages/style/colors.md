```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

#### Wir verwenden für unterschiedliche Bedürfnisse unterschiedliche Farbpaletten

- Für Grafiken und Datenvisualisierungen verwenden wir eine Palette von 13, stark gesättigten Farben, die durch ihre Leuchtkraft einfach voneinander zu unterscheiden sind.
- Standardmässig in Q verwendet wird eine Auswahl der zuvor genannten Farben,  die auf Farbenblindheit optimiert wurde.
- Für Illustrationen verwenden wir eine Palette mit zusätzlichen, weniger gesättigten Farbtönen.

## Farben für Datenvisualisierungen

### Level 1: Spezifische Farben

```color-palette|span-1
colors:
- {"name":"Nacht","value":"#374e8e"}
- {"name":"Lagune","value":"#1b87aa"}
- {"name":"Aquamarin","value":"#4fbbae"}
- {"name":"Moos","value":"#006d64"}
- {"name":"Pesto","value":"#478c5b"}
- {"name":"Guacamole","value":"#93a345"}
```

```color-palette|span-1
colors:
- {"name":"Nachos","value":"#e3b13e"}
- {"name":"Mandarine","value":"#df7c18"}
- {"name":"Sugo","value":"#ce4631"}
- {"name":"Chianti","value":"#ac004f"}
- {"name":"Amethyst","value":"#ae49a2"}
- {"name":"Flieder","value":"#a07bde"}
- {"name":"Himmel","value":"#8aabfd"}
```

```color-palette|span-1
colors:
- {"name":"Schokolade","value":"#704600"}
- {"name":"Sand","value":"#a08962"}
- {"name":"Latte Macchiato","value":"#d5cdb9"}
```

```color-palette|span-1
colors:
- {"name":"Aubergine","value":"#383751"}
- {"name":"Regen","value":"#7e7e8f"}
- {"name":"Nebel","value":"#cdcdd1"}
```

```hint|neutral
# Verwendung für Editorial Tech

Klassenname: `.s-viz-color-` + Farbname ohne Leerzeichen, klein geschrieben, (z.B. `.s-viz-color-lattemacchiato`).

Farben mit einem spezifischen Namen sollten immer den gleichen Farbwert generieren.

Diese Klassen und Variablen sollten in Projekten verwendet werden, die zusammen mit statischen Grafiken ausgespielt werden, und wo es wichtig ist, dass eine Farbe von einer Visualisierung zur anderen gleich bleibt, um die Bedeutung der Kategorie über den ganzen Artikel hinweg zu erhalten.

Bei zukünftigen Anpassungen der Farbpalette sollte darauf geachtet werden, dass die neuen Farben neue Namen erhalten. Die «alten» Klassennamen bleiben erhalten, ermöglichen Rückwärtskompatibilität, sollten aber in neu erstellten Projekten nicht mehr eingesetzt werden.
```

## Semantisch sinnvolle Farben

Nach Möglichkeit verwenden wir in unseren Visualisierungen Farben, die intuitiv erkennbar machen, was sie repräsentieren. [Untersuchungen haben gezeigt](http://vis.stanford.edu/papers/semantically-resonant-colors), dass solche Grafiken schneller verstanden werden.

### Ausnahme: Ethnien

Im Falle von Ethnien verzichten wir bewusst darauf, «semantische» Farben zu verwenden. Wir verwenden die in Q definierten Standardfarben, und ersetzen problematische Farb-Kategorie-Kombinationen.

```image
plain: true
span: 3
src: "assets/colors/ethnic-colors@1x.png 1x, assets/colors/ethnic-colors@2x.png 2x"
```

### Level 2: Semantische Farben

```color-palette|span-1
colors:
- {"name":"Dark Blue","value":"#374e8e"}
- {"name":"Teal","value":"#1b87aa"}
- {"name":"Turquoise","value":"#4fbbae"}
- {"name":"Dark Green","value":"#006d64"}
- {"name":"Green","value":"#478c5b"}
- {"name":"Yellow Green","value":"#93a345"}
```

```color-palette|span-1
colors:
- {"name":"Yellow","value":"#e3b13e"}
- {"name":"Orange","value":"#df7c18"}
- {"name":"Orange Red","value":"#ce4631"}
- {"name":"Red","value":"#ac004f"}
- {"name":"Purple","value":"#ae49a2"}
- {"name":"Violet","value":"#a07bde"}
- {"name":"Light Blue","value":"#8aabfd"}
```


```color-palette|span-1
colors:
- {"name":"Brown","value":"#704600"}
- {"name":"Beige","value":"#a08962"}
- {"name":"Warm White","value":"#d5cdb9"}
```

```color-palette|span-1
colors:
- {"name":"Black","value":"#383751"}
- {"name":"Grey","value":"#7e7e8f"}
- {"name":"Cool White","value":"#cdcdd1"}
```

```hint|neutral
# Verwendung für Editorial Tech

Klassenname: `.s-viz-color-` + Farbname ohne Leerzeichen, klein geschrieben (z.B. `.s-viz-color-lightblue`)

Diese Klassen und Variablen sollten in Fällen eingesetzt werden, wo es wichtig ist, über die gewählte Farbe auch eine Bedeutung zu transportieren – aber nicht so sehr, dass ein fixer Farbwert erwartet wird. Zum Beispiel: Tomaten – Red, Gurken – Dark Green, Rüebli – Orange

Bei zukünftigen Palettenanpassungen sollte sichergestellt werden, dass den oben gelisteten Farben jeweils wieder Farben zugeordnet erhalten, die in Farbton (und u.U. Helligkeit) den bestehenden Farben ähneln.
```


## Farben für Q

Die Farben für Q setzen sich aus Farben aus dem kühl-blauen und orangen Spektrum zusammen. Sie werden in einer fixen Reihenfolge verwendet und sind darauf optimiert, genügend Farbkontrast zwischen den Kategorien zu haben, ohne unangenehm zu wirken, sowie auch für Personen mit einer Farbsehschwäche gut unterscheidbar zu sein.

Die Namen entsprechen dem CSS-Klassennamen, mit dem sie eingesetzt werden können.

### Level 3: Generische Farben

```color-palette|span-2
colors:
- {"name":"s-viz-color-one-5","value":"#374e8e"}
- {"name":"s-viz-color-two-5","value":"#4fbbae"}
- {"name":"s-viz-color-three-5","value":"#df7c18"}
- {"name":"s-viz-color-four-5","value":"#ac004f"}
- {"name":"s-viz-color-five-5","value":"#1b87aa"}
- {"name":"s-viz-color-six-5","value":"#e3b13e"}
- {"name":"s-viz-color-seven-5","value":"#ce4631"}
- {"name":"s-viz-color-eight-5","value":"#4d313c"}
- {"name":"s-viz-color-nine-5","value":"#8d7a81"}
- {"name":"s-viz-color-ten-5","value":"#d1ccce"}
- {"name":"s-viz-color-eleven-5","value":"#6d545d"}
- {"name":"s-viz-color-twelve-5","value":"#aea2a6"}
```

```color-palette|span-2
colors:
- {"name":"s-viz-color-one-1","value":"#a1aecc"}
- {"name":"s-viz-color-two-1","value":"#abd1cb"}
- {"name":"s-viz-color-three-1","value":"#e5ba9b"}
- {"name":"s-viz-color-four-1","value":"#de9dab"}
- {"name":"s-viz-color-five-1","value":"#9ec1d0"}
- {"name":"s-viz-color-six-1","value":"#e0cba3"}
- {"name":"s-viz-color-seven-1","value":"#e6aa9e"}
- {"name":"s-viz-color-eight-1","value":"#b0a1a6"}
- {"name":"s-viz-color-nine-1","value":"#c2babd"}
- {"name":"s-viz-color-ten-1","value":"#d5d3d4"}
- {"name":"s-viz-color-eleven-1","value":"#b9aeb1"}
- {"name":"s-viz-color-twelve-1","value":"#ccc6c8"}
```

Die sieben Standardfarben werden durch 5 warme Grautöne ergänzt. Diese wurden angefügt, um die Rückwärtskompatibilität zu schon bestehenden Charts zu erhalten, die alle der 12 ursprünglich definierten Farben verwenden.

```hint|warning
Nach Möglichkeit sollte in keinem publizierten Q–Chart ein Grauton als Kategorienfarbe auftauchen.

Charts mit mehr als 7 verschiedenen Kategorien sollten überdacht werden:

- Sind alle diese Kategorien wirklich nötig? Oder sind einige dieser Kategorien bloss Hintergrundinformation?
- Gibt es eine Möglichkeit, mehrere Kategorien zu einer zusammenzufassen?
- Wäre eine andere Darstellungsform sinnvoller?

Das Visuals-Team hilft im Slack–Channel `#visuals-aktuell` gerne weiter.
```

```hint|span-3
# Verwendung der aufgehellten Farben

Die aufgehellten Farben sollten nur sehr zurückhaltend eingesetzt werden. Sie sollten im Print besser reproduzierbar sein als die vorherigen Farben. Trotzdem ist es aufgrund der reduzierten Helligkeit und Farbigkeit schwieriger, diese Farben zu unterscheiden.
```

```hint|neutral,span-3
# Verwendung für Editorial Tech

Diese Klassen sollten bei Projekten eingesetzt werden, bei denen die Anzahl und die Art der zu unterscheidenden Kategorien dynamisch und nicht vorherzusehen ist.

Die Klassen sollten in der vorgegebenen Reihenfolge (_one, two, three …_) eingesetzt werden.

Der Farbwert kann bei einer Aktualisierung der Farbpalette komplett ändern, man kann sich also nicht darauf verlassen, dass man nach einem solchen Update immer noch die selbe Farbe erhält.

```


## Grautöne

Die warmen und kalten Grautöne können je nach Bedarf eingesetzt werden. 

Die neutrale Graupalette basiert auf den auf NZZ.ch eingesetzten Farbvariablen und sollte für die grundlegenden Bausteine einer Grafik verwendet werden: Text, Achsen, Label, etc.

```color-palette|span-2
colors:
- {"name":"--black","value":"#000000"}
- {"name":"--graydark","value":"#333333"}
- {"name":"--graymedium","value":"#707070"}
- {"name":"--grayultralight/--colorbackground","value":"#f5f5f5"}
- {"name":"--white/--articlebackground","value":"#ffffff"}
```

```color-palette|span-2
colors:
- {"value":"#383751"}
- {"value":"#5a5a70"}
- {"value":"#7e7e8f"}
- {"value":"#a5a5af"}
- {"value":"#cdcdd1"}

```

```color-palette|span-2
colors:
- {"value":"#4d313c"}
- {"value":"#6d545d"}
- {"value":"#8d7a81"}
- {"value":"#aea2a6"}
- {"value":"#d1ccce"}
```

## Vordefinierte Kategorienfarben

Bei wiederkehrenden Kategorien macht es Sinn, dass wir diese einigermassen konsistent einfärben, sodass sich unsere Leserinnen und Leser schnell orientieren können.

Diese Farben müssen manuell in Q-Charts eingestellt werden. Falls ein Chart mit diesen Kategorien vorliegt, bitte beim Visuals-Team melden (`#visuals-aktuell`), wir können die Farben entsprechend anpassen.

### Farben für Daten zu Geschlechtsunterschieden

```color-palette|span-2
colors:
  - {name: "male - primary", value: "#24B39C"}
  - {name: "female – primary", value: "#6C43C0"}
```

```color-palette|span-2
colors:
  - {name: "male - light", value: "#7dd1c3"}
  - {name: "female – light", value: "#aa90de"}
```

### Farben zu Corona-relevanten Themen

```color-palette|span-2
colors:
  - {name: "infections", value: "#e66e4a"}
  - {name: "hospitalisations", value: "#24b39c"}
  - {name: "vaccinations", value: "#0ba9d9"}
```

```color-palette|span-2
colors:
  - {name: "fatalities", value: "#05032d"}
  - {name: "recovered", value: "#6c43c0"}
  - {name: "tests", value: "#3952ee"}
```


### Farben für Energieträger

```color-palette|span-2
colors:
  - {name: "Kohle", value: "#383751"}
  - {name: "Öl", value: "#704600"}
  - {name: "Erdgas", value: "#D5CDB9"}
  - {name: "Kernkraft", value: "#DF7C18"}
  - {name: "Fossile", value: "#A08962"}
```

```color-palette|span-2
colors:
  - {name: "Solar", value: "#E3B13E"}
  - {name: "Biomasse", value: "#478C5B"}
  - {name: "Wind", value: "#4FBBAE"}
  - {name: "Wasserkraft (Pumpspeicher)", value: "#374E8E"}
  - {name: "(Laufwasserkraft)", value: "#7E90BD"}
  - {name: "Erneuerbar", value: "#1B87AA"}
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
  - {name: "s-viz-color-sequential-one-2-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-3-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-3-2", value: "#919cf2"}
  - {name: "s-viz-color-sequential-one-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-4-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-4-2", value: "#7684f2"}
  - {name: "s-viz-color-sequential-one-4-3", value: "#abb4f0"}
  - {name: "s-viz-color-sequential-one-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-5-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-5-2", value: "#6878f2"}
  - {name: "s-viz-color-sequential-one-5-3", value: "#919cf2"}
  - {name: "s-viz-color-sequential-one-5-4", value: "#b9c0ef"}
  - {name: "s-viz-color-sequential-one-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-6-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-6-2", value: "#6070f1"}
  - {name: "s-viz-color-sequential-one-6-3", value: "#818ef2"}
  - {name: "s-viz-color-sequential-one-6-4", value: "#a1abf1"}
  - {name: "s-viz-color-sequential-one-6-5", value: "#c1c8ee"}
  - {name: "s-viz-color-sequential-one-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-one-7-1", value: "#3952ee"}
  - {name: "s-viz-color-sequential-one-7-2", value: "#5a6bf1"}
  - {name: "s-viz-color-sequential-one-7-3", value: "#7684f2"}
  - {name: "s-viz-color-sequential-one-7-4", value: "#919cf2"}
  - {name: "s-viz-color-sequential-one-7-5", value: "#abb4f0"}
  - {name: "s-viz-color-sequential-one-7-6", value: "#c7cced"}
  - {name: "s-viz-color-sequential-one-7-7", value: "#e3e4e9"}
```

### Sequential-two

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-2-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-2-2", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-3-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-3-2", value: "#abcea9"}
  - {name: "s-viz-color-sequential-two-3-3", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-4-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-4-2", value: "#8bc5a0"}
  - {name: "s-viz-color-sequential-two-4-3", value: "#c6d7b8"}
  - {name: "s-viz-color-sequential-two-4-4", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-5-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-5-2", value: "#79c19d"}
  - {name: "s-viz-color-sequential-two-5-3", value: "#abcea9"}
  - {name: "s-viz-color-sequential-two-5-4", value: "#d2dcc1"}
  - {name: "s-viz-color-sequential-two-5-5", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-6-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-6-2", value: "#6dbe9c"}
  - {name: "s-viz-color-sequential-two-6-3", value: "#99c9a3"}
  - {name: "s-viz-color-sequential-two-6-4", value: "#bcd4b2"}
  - {name: "s-viz-color-sequential-two-6-5", value: "#d8dfc7"}
  - {name: "s-viz-color-sequential-two-6-6", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-two-7-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-two-7-2", value: "#64bc9b"}
  - {name: "s-viz-color-sequential-two-7-3", value: "#8bc5a0"}
  - {name: "s-viz-color-sequential-two-7-4", value: "#abcea9"}
  - {name: "s-viz-color-sequential-two-7-5", value: "#c6d7b8"}
  - {name: "s-viz-color-sequential-two-7-6", value: "#dce1cb"}
  - {name: "s-viz-color-sequential-two-7-7", value: "#edece1"}
```

### Sequential-three

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-2-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-2-2", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-3-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-3-2", value: "#daa878"}
  - {name: "s-viz-color-sequential-three-3-3", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-4-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-4-2", value: "#da8d5f"}
  - {name: "s-viz-color-sequential-three-4-3", value: "#ddc197"}
  - {name: "s-viz-color-sequential-three-4-4", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-5-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-5-2", value: "#d97e55"}
  - {name: "s-viz-color-sequential-three-5-3", value: "#daa878"}
  - {name: "s-viz-color-sequential-three-5-4", value: "#dfcca9"}
  - {name: "s-viz-color-sequential-three-5-5", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-6-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-6-2", value: "#d97551"}
  - {name: "s-viz-color-sequential-three-6-3", value: "#da9868"}
  - {name: "s-viz-color-sequential-three-6-4", value: "#dbb78a"}
  - {name: "s-viz-color-sequential-three-6-5", value: "#e0d3b4"}
  - {name: "s-viz-color-sequential-three-6-6", value: "#edece1"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-three-7-1", value: "#d64b47"}
  - {name: "s-viz-color-sequential-three-7-2", value: "#d96f4e"}
  - {name: "s-viz-color-sequential-three-7-3", value: "#da8d5f"}
  - {name: "s-viz-color-sequential-three-7-4", value: "#daa878"}
  - {name: "s-viz-color-sequential-three-7-5", value: "#ddc197"}
  - {name: "s-viz-color-sequential-three-7-6", value: "#e2d7bb"}
  - {name: "s-viz-color-sequential-three-7-7", value: "#edece1"}
```

### Sequential-male

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-2-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-3-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-3-2", value: "#94ccc2"}
  - {name: "s-viz-color-sequential-male-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-4-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-4-2", value: "#77c4b5"}
  - {name: "s-viz-color-sequential-male-4-3", value: "#afd4cf"}
  - {name: "s-viz-color-sequential-male-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-5-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-5-2", value: "#67c0af"}
  - {name: "s-viz-color-sequential-male-5-3", value: "#94ccc2"}
  - {name: "s-viz-color-sequential-male-5-4", value: "#bcd8d5"}
  - {name: "s-viz-color-sequential-male-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-6-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-6-2", value: "#5cbdab"}
  - {name: "s-viz-color-sequential-male-6-3", value: "#83c8ba"}
  - {name: "s-viz-color-sequential-male-6-4", value: "#a4d1ca"}
  - {name: "s-viz-color-sequential-male-6-5", value: "#c4dbd9"}
  - {name: "s-viz-color-sequential-male-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-male-7-1", value: "#24b39c"}
  - {name: "s-viz-color-sequential-male-7-2", value: "#55bca8"}
  - {name: "s-viz-color-sequential-male-7-3", value: "#77c4b5"}
  - {name: "s-viz-color-sequential-male-7-4", value: "#94ccc2"}
  - {name: "s-viz-color-sequential-male-7-5", value: "#afd4cf"}
  - {name: "s-viz-color-sequential-male-7-6", value: "#c9dcdc"}
  - {name: "s-viz-color-sequential-male-7-7", value: "#e3e4e9"}
```

### Sequential-female

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-2-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-2-2", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-3-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-3-2", value: "#ac92d6"}
  - {name: "s-viz-color-sequential-female-3-3", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-4-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-4-2", value: "#9878cf"}
  - {name: "s-viz-color-sequential-female-4-3", value: "#bfaddc"}
  - {name: "s-viz-color-sequential-female-4-4", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-5-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-5-2", value: "#8e6acb"}
  - {name: "s-viz-color-sequential-female-5-3", value: "#ac92d6"}
  - {name: "s-viz-color-sequential-female-5-4", value: "#c8bbe0"}
  - {name: "s-viz-color-sequential-female-5-5", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-6-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-6-2", value: "#8763c9"}
  - {name: "s-viz-color-sequential-female-6-3", value: "#a082d2"}
  - {name: "s-viz-color-sequential-female-6-4", value: "#b8a2da"}
  - {name: "s-viz-color-sequential-female-6-5", value: "#cec3e2"}
  - {name: "s-viz-color-sequential-female-6-6", value: "#e3e4e9"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-sequential-female-7-1", value: "#6c43c0"}
  - {name: "s-viz-color-sequential-female-7-2", value: "#835dc7"}
  - {name: "s-viz-color-sequential-female-7-3", value: "#9878cf"}
  - {name: "s-viz-color-sequential-female-7-4", value: "#ac92d6"}
  - {name: "s-viz-color-sequential-female-7-5", value: "#bfaddc"}
  - {name: "s-viz-color-sequential-female-7-6", value: "#d1c8e3"}
  - {name: "s-viz-color-sequential-female-7-7", value: "#e3e4e9"}
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
  - {name: "s-viz-color-diverging-one-2-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-2-2", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-3-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-3-2", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-3-3", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-4-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-4-2", value: "#ecbdb2"}
  - {name: "s-viz-color-diverging-one-4-3", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-one-4-4", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-5-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-5-2", value: "#edaa97"}
  - {name: "s-viz-color-diverging-one-5-3", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-5-4", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-one-5-5", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-6-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-6-2", value: "#ed9e87"}
  - {name: "s-viz-color-diverging-one-6-3", value: "#eacdc8"}
  - {name: "s-viz-color-diverging-one-6-4", value: "#cec3e2"}
  - {name: "s-viz-color-diverging-one-6-5", value: "#a082d2"}
  - {name: "s-viz-color-diverging-one-6-6", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-7-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-7-2", value: "#ec967d"}
  - {name: "s-viz-color-diverging-one-7-3", value: "#ecbdb2"}
  - {name: "s-viz-color-diverging-one-7-4", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-7-5", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-one-7-6", value: "#9878cf"}
  - {name: "s-viz-color-diverging-one-7-7", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-8-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-8-2", value: "#ec9176"}
  - {name: "s-viz-color-diverging-one-8-3", value: "#edb2a3"}
  - {name: "s-viz-color-diverging-one-8-4", value: "#e8d3d1"}
  - {name: "s-viz-color-diverging-one-8-5", value: "#d4cce4"}
  - {name: "s-viz-color-diverging-one-8-6", value: "#b49ed9"}
  - {name: "s-viz-color-diverging-one-8-7", value: "#9270cd"}
  - {name: "s-viz-color-diverging-one-8-8", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-9-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-9-2", value: "#eb8d70"}
  - {name: "s-viz-color-diverging-one-9-3", value: "#edaa97"}
  - {name: "s-viz-color-diverging-one-9-4", value: "#ebc7bf"}
  - {name: "s-viz-color-diverging-one-9-5", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-9-6", value: "#c8bbe0"}
  - {name: "s-viz-color-diverging-one-9-7", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-one-9-8", value: "#8e6acb"}
  - {name: "s-viz-color-diverging-one-9-9", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-10-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-10-2", value: "#eb896c"}
  - {name: "s-viz-color-diverging-one-10-3", value: "#eda48e"}
  - {name: "s-viz-color-diverging-one-10-4", value: "#ecbdb2"}
  - {name: "s-viz-color-diverging-one-10-5", value: "#e7d7d6"}
  - {name: "s-viz-color-diverging-one-10-6", value: "#d7d1e5"}
  - {name: "s-viz-color-diverging-one-10-7", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-one-10-8", value: "#a689d3"}
  - {name: "s-viz-color-diverging-one-10-9", value: "#8a66ca"}
  - {name: "s-viz-color-diverging-one-10-10", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-11-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-11-2", value: "#eb8768"}
  - {name: "s-viz-color-diverging-one-11-3", value: "#ed9e87"}
  - {name: "s-viz-color-diverging-one-11-4", value: "#edb6a7"}
  - {name: "s-viz-color-diverging-one-11-5", value: "#eacdc8"}
  - {name: "s-viz-color-diverging-one-11-6", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-11-7", value: "#cec3e2"}
  - {name: "s-viz-color-diverging-one-11-8", value: "#b8a2da"}
  - {name: "s-viz-color-diverging-one-11-9", value: "#a082d2"}
  - {name: "s-viz-color-diverging-one-11-10", value: "#8763c9"}
  - {name: "s-viz-color-diverging-one-11-11", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-12-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-12-2", value: "#ea8466"}
  - {name: "s-viz-color-diverging-one-12-3", value: "#ed9a82"}
  - {name: "s-viz-color-diverging-one-12-4", value: "#edaf9e"}
  - {name: "s-viz-color-diverging-one-12-5", value: "#ebc4bc"}
  - {name: "s-viz-color-diverging-one-12-6", value: "#e7d9da"}
  - {name: "s-viz-color-diverging-one-12-7", value: "#d9d5e6"}
  - {name: "s-viz-color-diverging-one-12-8", value: "#c6b7df"}
  - {name: "s-viz-color-diverging-one-12-9", value: "#b199d8"}
  - {name: "s-viz-color-diverging-one-12-10", value: "#9c7cd0"}
  - {name: "s-viz-color-diverging-one-12-11", value: "#8560c8"}
  - {name: "s-viz-color-diverging-one-12-12", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-13-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-13-2", value: "#ea8363"}
  - {name: "s-viz-color-diverging-one-13-3", value: "#ec967d"}
  - {name: "s-viz-color-diverging-one-13-4", value: "#edaa97"}
  - {name: "s-viz-color-diverging-one-13-5", value: "#ecbdb2"}
  - {name: "s-viz-color-diverging-one-13-6", value: "#e9d1cd"}
  - {name: "s-viz-color-diverging-one-13-7", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-one-13-8", value: "#d1c8e3"}
  - {name: "s-viz-color-diverging-one-13-9", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-one-13-10", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-one-13-11", value: "#9878cf"}
  - {name: "s-viz-color-diverging-one-13-12", value: "#835dc7"}
  - {name: "s-viz-color-diverging-one-13-13", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-one-14-1", value: "#e66e4a"}
  - {name: "s-viz-color-diverging-one-14-2", value: "#ea8161"}
  - {name: "s-viz-color-diverging-one-14-3", value: "#ec9379"}
  - {name: "s-viz-color-diverging-one-14-4", value: "#eda691"}
  - {name: "s-viz-color-diverging-one-14-5", value: "#edb7aa"}
  - {name: "s-viz-color-diverging-one-14-6", value: "#eac9c3"}
  - {name: "s-viz-color-diverging-one-14-7", value: "#e6dbdc"}
  - {name: "s-viz-color-diverging-one-14-8", value: "#dbd7e6"}
  - {name: "s-viz-color-diverging-one-14-9", value: "#cabee0"}
  - {name: "s-viz-color-diverging-one-14-10", value: "#b9a5da"}
  - {name: "s-viz-color-diverging-one-14-11", value: "#a88cd4"}
  - {name: "s-viz-color-diverging-one-14-12", value: "#9574ce"}
  - {name: "s-viz-color-diverging-one-14-13", value: "#815bc7"}
  - {name: "s-viz-color-diverging-one-14-14", value: "#6c43c0"}
```

### Diverging-two

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-2-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-2-2", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-3-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-3-2", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-3-3", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-4-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-4-2", value: "#b9b1ec"}
  - {name: "s-viz-color-diverging-two-4-3", value: "#edd6ad"}
  - {name: "s-viz-color-diverging-two-4-4", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-5-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-5-2", value: "#a298ed"}
  - {name: "s-viz-color-diverging-two-5-3", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-5-4", value: "#eed08e"}
  - {name: "s-viz-color-diverging-two-5-5", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-6-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-6-2", value: "#928aee"}
  - {name: "s-viz-color-diverging-two-6-3", value: "#cbc5eb"}
  - {name: "s-viz-color-diverging-two-6-4", value: "#eadcc5"}
  - {name: "s-viz-color-diverging-two-6-5", value: "#efcc7c"}
  - {name: "s-viz-color-diverging-two-6-6", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-7-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-7-2", value: "#8780ee"}
  - {name: "s-viz-color-diverging-two-7-3", value: "#b9b1ec"}
  - {name: "s-viz-color-diverging-two-7-4", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-7-5", value: "#edd6ad"}
  - {name: "s-viz-color-diverging-two-7-6", value: "#efc96f"}
  - {name: "s-viz-color-diverging-two-7-7", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-8-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-8-2", value: "#7f79ee"}
  - {name: "s-viz-color-diverging-two-8-3", value: "#aca3ed"}
  - {name: "s-viz-color-diverging-two-8-4", value: "#d2ceeb"}
  - {name: "s-viz-color-diverging-two-8-5", value: "#e8decf"}
  - {name: "s-viz-color-diverging-two-8-6", value: "#eed39b"}
  - {name: "s-viz-color-diverging-two-8-7", value: "#eec866"}
  - {name: "s-viz-color-diverging-two-8-8", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-9-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-9-2", value: "#7874ee"}
  - {name: "s-viz-color-diverging-two-9-3", value: "#a298ed"}
  - {name: "s-viz-color-diverging-two-9-4", value: "#c4beec"}
  - {name: "s-viz-color-diverging-two-9-5", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-9-6", value: "#ebdabc"}
  - {name: "s-viz-color-diverging-two-9-7", value: "#eed08e"}
  - {name: "s-viz-color-diverging-two-9-8", value: "#eec65f"}
  - {name: "s-viz-color-diverging-two-9-9", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-10-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-10-2", value: "#7370ee"}
  - {name: "s-viz-color-diverging-two-10-3", value: "#9990ee"}
  - {name: "s-viz-color-diverging-two-10-4", value: "#b9b1ec"}
  - {name: "s-viz-color-diverging-two-10-5", value: "#d6d3ea"}
  - {name: "s-viz-color-diverging-two-10-6", value: "#e7dfd5"}
  - {name: "s-viz-color-diverging-two-10-7", value: "#edd6ad"}
  - {name: "s-viz-color-diverging-two-10-8", value: "#efce84"}
  - {name: "s-viz-color-diverging-two-10-9", value: "#eec55a"}
  - {name: "s-viz-color-diverging-two-10-10", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-11-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-11-2", value: "#6f6dee"}
  - {name: "s-viz-color-diverging-two-11-3", value: "#928aee"}
  - {name: "s-viz-color-diverging-two-11-4", value: "#b0a7ed"}
  - {name: "s-viz-color-diverging-two-11-5", value: "#cbc5eb"}
  - {name: "s-viz-color-diverging-two-11-6", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-11-7", value: "#eadcc5"}
  - {name: "s-viz-color-diverging-two-11-8", value: "#eed4a1"}
  - {name: "s-viz-color-diverging-two-11-9", value: "#efcc7c"}
  - {name: "s-viz-color-diverging-two-11-10", value: "#eec455"}
  - {name: "s-viz-color-diverging-two-11-11", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-12-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-12-2", value: "#6b6bee"}
  - {name: "s-viz-color-diverging-two-12-3", value: "#8c84ee"}
  - {name: "s-viz-color-diverging-two-12-4", value: "#a89fed"}
  - {name: "s-viz-color-diverging-two-12-5", value: "#c1baec"}
  - {name: "s-viz-color-diverging-two-12-6", value: "#d8d6ea"}
  - {name: "s-viz-color-diverging-two-12-7", value: "#e7e0d9"}
  - {name: "s-viz-color-diverging-two-12-8", value: "#ecd9b8"}
  - {name: "s-viz-color-diverging-two-12-9", value: "#eed297"}
  - {name: "s-viz-color-diverging-two-12-10", value: "#efcb75"}
  - {name: "s-viz-color-diverging-two-12-11", value: "#eec451"}
  - {name: "s-viz-color-diverging-two-12-12", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-13-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-13-2", value: "#6869ee"}
  - {name: "s-viz-color-diverging-two-13-3", value: "#8780ee"}
  - {name: "s-viz-color-diverging-two-13-4", value: "#a298ed"}
  - {name: "s-viz-color-diverging-two-13-5", value: "#b9b1ec"}
  - {name: "s-viz-color-diverging-two-13-6", value: "#cfcaeb"}
  - {name: "s-viz-color-diverging-two-13-7", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-two-13-8", value: "#e9ddcb"}
  - {name: "s-viz-color-diverging-two-13-9", value: "#edd6ad"}
  - {name: "s-viz-color-diverging-two-13-10", value: "#eed08e"}
  - {name: "s-viz-color-diverging-two-13-11", value: "#efc96f"}
  - {name: "s-viz-color-diverging-two-13-12", value: "#edc34e"}
  - {name: "s-viz-color-diverging-two-13-13", value: "#ebbd22"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-two-14-1", value: "#3952ee"}
  - {name: "s-viz-color-diverging-two-14-2", value: "#6567ee"}
  - {name: "s-viz-color-diverging-two-14-3", value: "#837cee"}
  - {name: "s-viz-color-diverging-two-14-4", value: "#9c93ee"}
  - {name: "s-viz-color-diverging-two-14-5", value: "#b2a9ed"}
  - {name: "s-viz-color-diverging-two-14-6", value: "#c7c0ec"}
  - {name: "s-viz-color-diverging-two-14-7", value: "#dad8ea"}
  - {name: "s-viz-color-diverging-two-14-8", value: "#e6e1db"}
  - {name: "s-viz-color-diverging-two-14-9", value: "#ebdabf"}
  - {name: "s-viz-color-diverging-two-14-10", value: "#edd4a3"}
  - {name: "s-viz-color-diverging-two-14-11", value: "#efce87"}
  - {name: "s-viz-color-diverging-two-14-12", value: "#efc86b"}
  - {name: "s-viz-color-diverging-two-14-13", value: "#edc34b"}
  - {name: "s-viz-color-diverging-two-14-14", value: "#ebbd22"}
```

### Diverging-three

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-2-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-2-2", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-3-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-3-2", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-3-3", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-4-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-4-2", value: "#b1d0e4"}
  - {name: "s-viz-color-diverging-three-4-3", value: "#dbdeac"}
  - {name: "s-viz-color-diverging-three-4-4", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-5-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-5-2", value: "#97c6e1"}
  - {name: "s-viz-color-diverging-three-5-3", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-5-4", value: "#d5db8e"}
  - {name: "s-viz-color-diverging-three-5-5", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-6-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-6-2", value: "#85c0e0"}
  - {name: "s-viz-color-diverging-three-6-3", value: "#c6d8e6"}
  - {name: "s-viz-color-diverging-three-6-4", value: "#dfe0c5"}
  - {name: "s-viz-color-diverging-three-6-5", value: "#d1d97b"}
  - {name: "s-viz-color-diverging-three-6-6", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-7-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-7-2", value: "#79bcdf"}
  - {name: "s-viz-color-diverging-three-7-3", value: "#b1d0e4"}
  - {name: "s-viz-color-diverging-three-7-4", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-7-5", value: "#dbdeac"}
  - {name: "s-viz-color-diverging-three-7-6", value: "#ced86e"}
  - {name: "s-viz-color-diverging-three-7-7", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-8-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-8-2", value: "#6fbade"}
  - {name: "s-viz-color-diverging-three-8-3", value: "#a2cbe2"}
  - {name: "s-viz-color-diverging-three-8-4", value: "#cedbe7"}
  - {name: "s-viz-color-diverging-three-8-5", value: "#e0e1cf"}
  - {name: "s-viz-color-diverging-three-8-6", value: "#d8dc9b"}
  - {name: "s-viz-color-diverging-three-8-7", value: "#cbd764"}
  - {name: "s-viz-color-diverging-three-8-8", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-9-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-9-2", value: "#68b8dd"}
  - {name: "s-viz-color-diverging-three-9-3", value: "#97c6e1"}
  - {name: "s-viz-color-diverging-three-9-4", value: "#bed5e5"}
  - {name: "s-viz-color-diverging-three-9-5", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-9-6", value: "#dedfbb"}
  - {name: "s-viz-color-diverging-three-9-7", value: "#d5db8e"}
  - {name: "s-viz-color-diverging-three-9-8", value: "#c9d65d"}
  - {name: "s-viz-color-diverging-three-9-9", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-10-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-10-2", value: "#62b6dd"}
  - {name: "s-viz-color-diverging-three-10-3", value: "#8dc3e0"}
  - {name: "s-viz-color-diverging-three-10-4", value: "#b1d0e4"}
  - {name: "s-viz-color-diverging-three-10-5", value: "#d3dde7"}
  - {name: "s-viz-color-diverging-three-10-6", value: "#e1e2d5"}
  - {name: "s-viz-color-diverging-three-10-7", value: "#dbdeac"}
  - {name: "s-viz-color-diverging-three-10-8", value: "#d3da83"}
  - {name: "s-viz-color-diverging-three-10-9", value: "#c8d657"}
  - {name: "s-viz-color-diverging-three-10-10", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-11-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-11-2", value: "#5cb5dc"}
  - {name: "s-viz-color-diverging-three-11-3", value: "#85c0e0"}
  - {name: "s-viz-color-diverging-three-11-4", value: "#a7cce3"}
  - {name: "s-viz-color-diverging-three-11-5", value: "#c6d8e6"}
  - {name: "s-viz-color-diverging-three-11-6", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-11-7", value: "#dfe0c5"}
  - {name: "s-viz-color-diverging-three-11-8", value: "#d9dda0"}
  - {name: "s-viz-color-diverging-three-11-9", value: "#d1d97b"}
  - {name: "s-viz-color-diverging-three-11-10", value: "#c7d652"}
  - {name: "s-viz-color-diverging-three-11-11", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-12-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-12-2", value: "#58b4dc"}
  - {name: "s-viz-color-diverging-three-12-3", value: "#7ebedf"}
  - {name: "s-viz-color-diverging-three-12-4", value: "#9ec9e2"}
  - {name: "s-viz-color-diverging-three-12-5", value: "#bbd4e5"}
  - {name: "s-viz-color-diverging-three-12-6", value: "#d6dfe8"}
  - {name: "s-viz-color-diverging-three-12-7", value: "#e1e2d8"}
  - {name: "s-viz-color-diverging-three-12-8", value: "#dddfb7"}
  - {name: "s-viz-color-diverging-three-12-9", value: "#d7dc96"}
  - {name: "s-viz-color-diverging-three-12-10", value: "#cfd874"}
  - {name: "s-viz-color-diverging-three-12-11", value: "#c6d54e"}
  - {name: "s-viz-color-diverging-three-12-12", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-13-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-13-2", value: "#54b3dc"}
  - {name: "s-viz-color-diverging-three-13-3", value: "#79bcdf"}
  - {name: "s-viz-color-diverging-three-13-4", value: "#97c6e1"}
  - {name: "s-viz-color-diverging-three-13-5", value: "#b1d0e4"}
  - {name: "s-viz-color-diverging-three-13-6", value: "#cbdae6"}
  - {name: "s-viz-color-diverging-three-13-7", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-three-13-8", value: "#e0e1cb"}
  - {name: "s-viz-color-diverging-three-13-9", value: "#dbdeac"}
  - {name: "s-viz-color-diverging-three-13-10", value: "#d5db8e"}
  - {name: "s-viz-color-diverging-three-13-11", value: "#ced86e"}
  - {name: "s-viz-color-diverging-three-13-12", value: "#c5d54a"}
  - {name: "s-viz-color-diverging-three-13-13", value: "#bbd215"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-three-14-1", value: "#0ba9d9"}
  - {name: "s-viz-color-diverging-three-14-2", value: "#51b2dc"}
  - {name: "s-viz-color-diverging-three-14-3", value: "#74bbde"}
  - {name: "s-viz-color-diverging-three-14-4", value: "#90c4e1"}
  - {name: "s-viz-color-diverging-three-14-5", value: "#a9cde3"}
  - {name: "s-viz-color-diverging-three-14-6", value: "#c1d6e6"}
  - {name: "s-viz-color-diverging-three-14-7", value: "#d8dfe8"}
  - {name: "s-viz-color-diverging-three-14-8", value: "#e2e3db"}
  - {name: "s-viz-color-diverging-three-14-9", value: "#dee0bf"}
  - {name: "s-viz-color-diverging-three-14-10", value: "#d9dda3"}
  - {name: "s-viz-color-diverging-three-14-11", value: "#d3da86"}
  - {name: "s-viz-color-diverging-three-14-12", value: "#ccd769"}
  - {name: "s-viz-color-diverging-three-14-13", value: "#c4d547"}
  - {name: "s-viz-color-diverging-three-14-14", value: "#bbd215"}
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
  - {name: "s-viz-color-diverging-gender-3-2", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-3-3", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-4-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-4-2", value: "#afd4cf"}
  - {name: "s-viz-color-diverging-gender-4-3", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-gender-4-4", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-5-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-5-2", value: "#94ccc2"}
  - {name: "s-viz-color-diverging-gender-5-3", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-5-4", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-gender-5-5", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-6-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-6-2", value: "#83c8ba"}
  - {name: "s-viz-color-diverging-gender-6-3", value: "#c4dbd9"}
  - {name: "s-viz-color-diverging-gender-6-4", value: "#cec3e2"}
  - {name: "s-viz-color-diverging-gender-6-5", value: "#a082d2"}
  - {name: "s-viz-color-diverging-gender-6-6", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-7-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-7-2", value: "#77c4b5"}
  - {name: "s-viz-color-diverging-gender-7-3", value: "#afd4cf"}
  - {name: "s-viz-color-diverging-gender-7-4", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-7-5", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-gender-7-6", value: "#9878cf"}
  - {name: "s-viz-color-diverging-gender-7-7", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-8-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-8-2", value: "#6ec2b1"}
  - {name: "s-viz-color-diverging-gender-8-3", value: "#a0d0c7"}
  - {name: "s-viz-color-diverging-gender-8-4", value: "#cdddde"}
  - {name: "s-viz-color-diverging-gender-8-5", value: "#d4cce4"}
  - {name: "s-viz-color-diverging-gender-8-6", value: "#b49ed9"}
  - {name: "s-viz-color-diverging-gender-8-7", value: "#9270cd"}
  - {name: "s-viz-color-diverging-gender-8-8", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-9-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-9-2", value: "#67c0af"}
  - {name: "s-viz-color-diverging-gender-9-3", value: "#94ccc2"}
  - {name: "s-viz-color-diverging-gender-9-4", value: "#bcd8d5"}
  - {name: "s-viz-color-diverging-gender-9-5", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-9-6", value: "#c8bbe0"}
  - {name: "s-viz-color-diverging-gender-9-7", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-gender-9-8", value: "#8e6acb"}
  - {name: "s-viz-color-diverging-gender-9-9", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-10-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-10-2", value: "#61bfad"}
  - {name: "s-viz-color-diverging-gender-10-3", value: "#8acabd"}
  - {name: "s-viz-color-diverging-gender-10-4", value: "#afd4cf"}
  - {name: "s-viz-color-diverging-gender-10-5", value: "#d2dfe0"}
  - {name: "s-viz-color-diverging-gender-10-6", value: "#d7d1e5"}
  - {name: "s-viz-color-diverging-gender-10-7", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-gender-10-8", value: "#a689d3"}
  - {name: "s-viz-color-diverging-gender-10-9", value: "#8a66ca"}
  - {name: "s-viz-color-diverging-gender-10-10", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-11-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-11-2", value: "#5cbdab"}
  - {name: "s-viz-color-diverging-gender-11-3", value: "#83c8ba"}
  - {name: "s-viz-color-diverging-gender-11-4", value: "#a4d1ca"}
  - {name: "s-viz-color-diverging-gender-11-5", value: "#c4dbd9"}
  - {name: "s-viz-color-diverging-gender-11-6", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-11-7", value: "#cec3e2"}
  - {name: "s-viz-color-diverging-gender-11-8", value: "#b8a2da"}
  - {name: "s-viz-color-diverging-gender-11-9", value: "#a082d2"}
  - {name: "s-viz-color-diverging-gender-11-10", value: "#8763c9"}
  - {name: "s-viz-color-diverging-gender-11-11", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-12-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-12-2", value: "#59bcaa"}
  - {name: "s-viz-color-diverging-gender-12-3", value: "#7cc6b7"}
  - {name: "s-viz-color-diverging-gender-12-4", value: "#9bcfc5"}
  - {name: "s-viz-color-diverging-gender-12-5", value: "#b9d7d3"}
  - {name: "s-viz-color-diverging-gender-12-6", value: "#d5e0e2"}
  - {name: "s-viz-color-diverging-gender-12-7", value: "#d9d5e6"}
  - {name: "s-viz-color-diverging-gender-12-8", value: "#c6b7df"}
  - {name: "s-viz-color-diverging-gender-12-9", value: "#b199d8"}
  - {name: "s-viz-color-diverging-gender-12-10", value: "#9c7cd0"}
  - {name: "s-viz-color-diverging-gender-12-11", value: "#8560c8"}
  - {name: "s-viz-color-diverging-gender-12-12", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-13-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-13-2", value: "#55bca8"}
  - {name: "s-viz-color-diverging-gender-13-3", value: "#77c4b5"}
  - {name: "s-viz-color-diverging-gender-13-4", value: "#94ccc2"}
  - {name: "s-viz-color-diverging-gender-13-5", value: "#afd4cf"}
  - {name: "s-viz-color-diverging-gender-13-6", value: "#c9dcdc"}
  - {name: "s-viz-color-diverging-gender-13-7", value: "#e3e4e9"}
  - {name: "s-viz-color-diverging-gender-13-8", value: "#d1c8e3"}
  - {name: "s-viz-color-diverging-gender-13-9", value: "#bfaddc"}
  - {name: "s-viz-color-diverging-gender-13-10", value: "#ac92d6"}
  - {name: "s-viz-color-diverging-gender-13-11", value: "#9878cf"}
  - {name: "s-viz-color-diverging-gender-13-12", value: "#835dc7"}
  - {name: "s-viz-color-diverging-gender-13-13", value: "#6c43c0"}
```

```color-palette|horizontal
colors:
  - {name: "s-viz-color-diverging-gender-14-1", value: "#24b39c"}
  - {name: "s-viz-color-diverging-gender-14-2", value: "#52bba7"}
  - {name: "s-viz-color-diverging-gender-14-3", value: "#72c3b3"}
  - {name: "s-viz-color-diverging-gender-14-4", value: "#8dcbbf"}
  - {name: "s-viz-color-diverging-gender-14-5", value: "#a7d2cb"}
  - {name: "s-viz-color-diverging-gender-14-6", value: "#bfd9d7"}
  - {name: "s-viz-color-diverging-gender-14-7", value: "#d7e0e3"}
  - {name: "s-viz-color-diverging-gender-14-8", value: "#dbd7e6"}
  - {name: "s-viz-color-diverging-gender-14-9", value: "#cabee0"}
  - {name: "s-viz-color-diverging-gender-14-10", value: "#b9a5da"}
  - {name: "s-viz-color-diverging-gender-14-11", value: "#a88cd4"}
  - {name: "s-viz-color-diverging-gender-14-12", value: "#9574ce"}
  - {name: "s-viz-color-diverging-gender-14-13", value: "#815bc7"}
  - {name: "s-viz-color-diverging-gender-14-14", value: "#6c43c0"}
```

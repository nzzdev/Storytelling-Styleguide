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
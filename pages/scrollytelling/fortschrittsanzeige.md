```html|span-1,no-source,plain
<div class="stabilityIndex experimental">Experimental</div>
```

# So funktioniert's
Grafik bleibt stehen, meist oben oder links am Browserrand angeschlagen. Mit dem Scrollen verändert sich die Grafik, meist um einen zeitlichen oder räumlichen Verlauf zu zeigen. So dient das "Sticky Element" als Anzeige wo man sich in der Gesichte befindet (Orientierung) und was an dem Zeitpunkt geschehen ist (Inhalt).  

Wenn es möglich ist in die Fortschrittsanzeige reinzuklicken und so zu verschiedenen Abschnitten zu gelangen, wird aus der Anzeige eine Anchornavigation. Diese zeigen die Struktur einer Seite auf und ermöglichen es der Leserin innerhalb dieser Struktur hin und her zu springen. Meistens sind sie oben oder links am Browserrand angeschlagen. Es gibt davon verschiedene Ausprägungen davon: 
- Textliches Inhaltsverzeichnis
- Inhaltsverzeichnis das sowohl textlich, wie auch visuelle Elemente enthält 
- Ein rein visuelles Inhaltsverzeichnis

# Einsatzbereiche
Funktioniert am besten, wenn es in der Geschichte klare räumliche und / oder zeitliche Dimensionen gibt und diese sich in einer kleinen Grafik linear darstellen lassen, zum Beispiel: 
- Zeitreihen, wie Coronafallzahlen und Temperaturschwankungen
- Reiserouten

Die Technik setzt voraus, dass die Geschichte entlang dieser Dimension (also chronologisch oder örtlich) erzählt werden muss. Wenn die Anzeige auch als Navigation fungiert, ist wichtig zu bedenken, dass die Leser und Leserinnen so auch Teile der Geschichte überspringen können. 

Ein rein grafisches Sticky Fortschritt-Element ist auf der NZZ Webseite eingebaut.


# Beispiele 
### Anzeige
```html|span-6
<video width="100%" controls>
  <source src="assets/scrollytelling-examples/Bloomberg_Climate.mp4" type="video/mp4">
</video>
```
- [The Best Way to Slow Global Warming? You Decide in This Climate Simulator, Bloomberg (2020)](https://www.bloomberg.com/graphics/2020-global-warming-simulator/)

**Weitere**
- [Wie konnte das passieren?, Tagesanzeiger (2020)](https://interaktiv.tagesanzeiger.ch/2020/der-weg-in-die-zweite-welle/)

### Anzeige und Navigation
```html|span-6
<video width="100%" controls>
  <source src="assets/scrollytelling-examples/NYT_Russia.mp4" type="video/mp4">
</video>
```
[The Russia Left Behind, The New York Times (2013)](https://www.nytimes.com/newsgraphics/2013/10/13/russia/index.html)

**Weitere**
- [Continue, Pivot, or Put It Down, Pudding (2020)](https://pudding.cool/process/pivot-continue-down/)

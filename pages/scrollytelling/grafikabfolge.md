

# So funktioniert's
Die Grafik bleibt im Viewport stehen, Text erscheint – entweder als Annotation oder als Textblock. Beim nächsten Scroll, wechselt die Grafik und der nächste Textblock / Annontation erscheint. Die neue Grafik kann mit oder ohne Überblendung anzeigt werden.

# Einsatzbereiche
Funktioniert am besten, wenn im gleichen Koordinatensystem verschiedene Dinge gezeigt werden sollen, zum Beispiel:

- Orte oder Routen auf einer Karte hervorheben
- Kurven verschiedener Länder nacheinander zeigen und kommentieren
- Punkte oder Bereiche in einem Scatterplot nacheinander hervorheben und kommentieren
- Stellen einer Infografik hervorheben und erklären

# Umsetzung
Die einzelnen Grafiken können in einem Grafik-Programm (z.B. Illustrator) erstellt und als PNGs in die Webseite eingebunden werden. Die Überblendungen und das Timing werden durch eine Scroll-Library bestimmt. 

# Beispiele 
```html|span-6
<video width="100%" controls>
  <source src="assets/scrollytelling-examples/ElPais_AerosolTransmission.mp4" type="video/mp4">
</video>
```
[A room, a bar and a classroom: how the coronavirus is spread through the air, El Pais (2020)](https://english.elpais.com/society/2020-10-28/a-room-a-bar-and-a-class-how-the-coronavirus-is-spread-through-the-air.html)

```html|span-6
<video width="100%" controls>
  <source src="assets/scrollytelling-examples/WaPo_NCCA.mp4" type="video/mp4">
</video>
```
[The 2021 NCCA tournament will be more complicated than ever, The Washington Post (2020)](https://www.washingtonpost.com/sports/interactive/2021/ncaa-tournament-bubble-covid-indianapolis/)

**Weitere**
- [Here’s How America Uses Its Land, Bloomberg (2018)](https://www.bloomberg.com/graphics/2018-us-land-use/)
- [So sähe die Corona-Krise aus, wenn das Land eine Wohnüberbauung wäre, NZZ (2020)](https://www.nzz.ch/schweiz/corona-in-der-schweiz-wie-covid-19-unser-leben-veraendert-hat-ld.1588566)

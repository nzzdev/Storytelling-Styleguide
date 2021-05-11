```html|span-1,no-source,plain
<div class="stabilityIndex experimental">Experimental</div>
```

# So funktioniert's
Durch das Scrollen wird entweder ein animierter Übergang gestartet oder die Animation selbst gesteuert. Die Animation ist dazu da den Übergang von einer zum nächsten Ansicht «flüssiger» zu machen. Im Idealfall unterstützt der animierte Übergang die Erklärung des Sachverhaltes.  

# Einsatzbereiche
Funktioniert am besten, wenn Elemente aus der ersten Grafik auch in der zweiten Grafik wieder vorkommen, zum Beispiel:

- Skala wird geändert, z. B. von linear zu logarithmisch
- Eine Achse wird verändert, z. B. Wert einer Aktie über die Zeit zu Ertrag der gleichen Aktie über die Zeit
- Datenpunkte werden auf eine andere Art dargestellt, z. B. geografische Form zu einem Punkt in einem Dotplot
- Datenpunkte werden ein- oder ausgeblendet
- Die Daten oder Informationen erklären einen räumlich-zeitlichen Prozess, z.B. die Route eines Tornados, der Blutkreislauf, Schneeschmelze in der Arktis 

# Umsetzung
Die einzelnen Grafiken können in einem Grafik-Programm (z.B. Illustrator) erstellt. Sie können dann als SVGs in die Webseite eingebunden und mit Code direkt animiert werden. Eine andere Möglichkeit ist, die Animation im AfterEffect zu erstellen und diese dann mit der Lottie-Library als JSON zu exportieren. Das JSON wird dann in die Webseite eingebunden und mit einer Scroll-Library verknüpft. 

# Beispiele 
```html|span-6
<video width="100%" controls>
  <source src="assets/scrollytelling-examples/NYT_PrivacyPolicies.mp4" type="video/mp4">
</video>
```
[We Read 150 Privacy Policies. They Were an Incomprehensible Disaster, The New York Times ()](https://www.nytimes.com/interactive/2019/06/12/opinion/facebook-google-privacy-policies.html)

```html|span-6
<video width="100%" controls>
  <source src="assets/scrollytelling-examples/Reuters_GangesRiver.mp4" type="video/mp4">
</video>
```
[The race to save the river Ganges, Reuters (2019)](https://graphics.reuters.com/INDIA-RIVER/010081TW39P/index.html)


**Weitere**
- [Hurrican Irma is One of the Strongest Storms in History, New York Times (2017)](https://www.nytimes.com/interactive/2017/09/09/us/hurricane-irma-records.html)
- [Diese Staaten entscheiden die US-Präsidentschaftswahl, NZZ (2020)](https://www.nzz.ch/visuals/wahlen-usa-2020-trump-oder-biden-diese-staaten-entscheiden-ld.1579388)

- [1000 Times Gold, The Washington Post (2016)](https://www.washingtonpost.com/graphics/sports/olympics/the-1000-medals-of-the-united-states/)


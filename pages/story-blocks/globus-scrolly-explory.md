# So funktioniert's

Dieses Element zeigt eine **Erdkugel mit diversen Visualisierungen** entweder als **Scrolly** oder als **Explory**.

Im Scrolly fliegt man pro Schritt eine bestimmte Position an und blendet bestimmte Daten ein oder aus. Beschriftungen können auch pro Schritt angezeigt werden.

Im Explory kann der Besucher selber an der Erdkugel drehen und zoomen und an den Einstellungen schrauben.

Technisch basiert das Element auf https://globe.gl/ und dessen Auswahl an Visualisierungen.


```image
span: 3
plain: true
src: "/assets/story-blocks/globegl-overview.png"
description: |
    HexBins Scrolly
	[Vergessene Kriege](https://www.nzz.ch/pro/myanmar-lateinamerika-sahelzone-die-vergessenen-geopolitischen-konflikte-ld.1915667)
```
```image
span: 3
plain: true
src: "/assets/story-blocks/globegl-overview-explory.png"
description: |
    HexBins Explory
	[Vergessene Kriege](https://www.nzz.ch/pro/myanmar-lateinamerika-sahelzone-die-vergessenen-geopolitischen-konflikte-ld.1915667)
```


# Wie es eingesetzt werden kann
Mithilfe des Scrollys kann man eine Datengeschichte erzählen, die sich auf der Weltkarte abspielt. Dabei kann man nacheinander auf bestimmte Regionen eingehen, sie beschriften und im Scrolltext die Pointe erklären.

Das Explory eignet sich besonders gut, um anschliessend ans Scrolly den besonders Interessierten die Möglichkeit zu geben, sich die Daten selber noch genauer anzuschauen.



# Beispiel
- [Vergessene Kriege](https://www.nzz.ch/pro/myanmar-lateinamerika-sahelzone-die-vergessenen-geopolitischen-konflikte-ld.1915667)
- [ICE Abschiebungen](https://www.nzz.ch/international/wie-ice-tausende-menschen-durch-sein-haftsystem-schleust-ld.1923419)
- Satelliteninternet


# Technische Details

https://github.com/nzz-pt/ed-tech-q-story-blocks/tree/main/globus-scrolly-explory


### Visualisierungen

```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-hexbins.png"
description: |
    HexBins Scrolly
	[Vergessene Kriege](https://www.nzz.ch/pro/myanmar-lateinamerika-sahelzone-die-vergessenen-geopolitischen-konflikte-ld.1915667)
```
```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-arcs.png"
description: |
    Arcs: animierte Bögen
	[ICE Abschiebungen](https://www.nzz.ch/international/wie-ice-tausende-menschen-durch-sein-haftsystem-schleust-ld.1923419)
```
```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-rings.png"
description: |
    Rings
	[ICE Verhaftungen](https://www.nzz.ch/international/wie-ice-tausende-menschen-durch-sein-haftsystem-schleust-ld.1923419)
```
```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-satellites.png"
description: |
    Satelliten
```
```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-choropleth.png"
description: |
    Choropleth
```

### Annotationen

```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-label-outside.png"
description: |
    Ausserhalb des Globus, mit Linie verbunden
```
```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-label-inside-country.png"
description: |
    Auf dem Globus (Land/Region)
```
```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-label-inside-city.png"
description: |
    Aus dem Globus (Punkt)
```

### Dark/Light mode
Es kann ein dunkles und ein helles Theme definiert werden, die automatisch abhängig von den User Settings angezeigt werden.
```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-lightmode.png"
```

### Interaktionen
Im Explory kann man den Globus selber drehen und zoomen. Ausserdem gibt es je nach Story folgende Möglichkeiten:

```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-datepicker-open.png"
description: |
    Jahre wählen
```
```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-scale.png"
description: |
    Skala wechseln
```
```image
span: 2
plain: true
src: "/assets/story-blocks/globegl-tooltips.png"
description: |
    Tooltips
```


# Was braucht es dazu?
- Daten (Details bei EdTech anfragen)
- eigene Weltkarte (Erdoberfläche) für hell und dunkel
- Es kann alles in Q konfiguriert werden

# Aufwand
- DDJ Daten aufbereiten: (?)
- JournalistIn: Geschichte schreiben
- JournalistIn: in Q Scrolly/Explory konfigurieren: 1 Tag (?)
- EdTech: 10min
  - oder falls neue Visualisierungen gewünscht werden: 1-4 Tage pro Visualisierung
- Grafik: 
  - Farben der Darstellungen feintunen
  - passende Weltkarte
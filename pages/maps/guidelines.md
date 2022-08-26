

## _Digital First_

Alle Karten werden zuerst für unsere digitale Plattform erstellt. Einfache Karten sollten in Q erstellt werden. Anpassungen für den Druck können direkt in Q vorgenommen werden – bei grösseren Eingriffen in einer Kopie der ursprünglichen Karte.

Karten, die komplexer sind und manuelle Arbeit erfordern, werden in Kombination von QGIS und Illustrator erstellt.

```hint|neutral
Der konkrete Workflow muss noch genauer ausgearbeitet werden.
```


## Zweck
Zu welchem Zweck wird die Karte eingesetzt?

Wenn es darum geht, die **Handlungsorte einer Geschichte zu lokalisieren,** sollte die Karte so einfach wie möglich gehalten werden.

Wenn die Karte eine eigene, komplexe Geschichte erzählt – wie es oft bei der **Visualisierung von Geodaten** der Fall ist – sollte darauf geachtet werden, dass die Hauptaussage so deutlich wie möglich herausgearbeitet wird.

## Klarheit

Wir zeigen, was angezeigt werden muss, und entfernen, was nicht relevant ist.

Gewässer, Reliefs können der Orientierung dienen – oder die Karte visuell überladen.

Für einige Karten ist es möglicherweise nicht notwendig, alle Nachbarländer oder Hauptstädte zu kennzeichnen. Wir versuchen, effizient und präzise mit der auf einer Karte geplotteten Datenmenge zu sein.

## Projektionen
Wir müssen immer darüber nachdenken, welche Kartenprojektion für das, was die Karte kommunizieren muss, am besten geeignet ist. **Wir vermeiden die Mercator-Projektion** und verwenden, wann immer möglich, flächengetreue oder äquidistante Projektionen (manchmal funktioniert auch ein Globus gut).

```image
plain: true
span: 6
src: "assets/World_Robinson@1x.png 1x, assets/World_Robinson@2x.png 2x"
```

Für Weltkarten, die nicht auf ein bestimmtes Land fokussiert sind, verwenden wir die **Robinson-Projektion**. Die Verzerrung ist relativ gering, aber sie ist weder winkel- noch flächengetreu. Es ist also nur für Weltkarten nützlich.

```table
span: 4
rows:
  - Region: "**Welt**"
	Name: "World_Robinson"
	ID: "ESRI:54030"
  - Region: "**Schweiz**"
	Name: "CH1903+ / LV95"
	ID: "EPSG:2056"
  - Region: "**Europa**"
	Name: "ETRS89-extended / LAEA Europe"
	ID: "EPSG:3035"
  - Region: "**USA**"
    Name: "USA_Contiguous_Albers_Equal_Area_Conic"
	ID: "ESRI:102003"
```

```hint|neutral,span-2
Muss noch erweitert werden
```

## Verwendung von Geodaten

Beim Zeichnen von Linien oder Formen auf Karten verwenden wir Geodaten aus zuverlässigen Quellen. Wir zeichnen keine Karten von Hand, es sei denn, wir können absolut sicher sein, dass Genauigkeit kein Problem sein wird (z.B. ist es in Ordnung, ein Fußballstadion auf einem Stadtplan hervorzuheben, indem wir ein Polygon um ihn herum zeichnen). 

Auch für Karten gilt [_No data, no chart_](https://nzzdev.github.io/Storytelling-Styleguide/#/charts-guidelines?a=no-data-no-chart).

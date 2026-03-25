# So funktioniert's

Ein Scrolly mit einem SVG, das bei jedem Schritt gewisse Elemente ein- oder ausblendet. Damit wird das Publikum z.B. schrittweise durch eine immer komplexere Grafik geführt.


```html|span-6
<img src="assets/story-blocks/animiertes-svg-scrolly.png" style="max-width: 100%" />
```

```html|span-6
<video width="100%" controls>
  <source src="assets/story-blocks/animiertes-svg-scrolly-axpo.mp4" type="video/mp4">
</video>
```

# Wie es eingesetzt werden kann

- Ein Diagramm kann schrittweise aufgebaut werden, indem einzelne Linien oder Flächen eingeblendet und textlich erklärt werden. So kann man mit einem einfachen Diagramm starten und sich zu einer komplexeren Darstellung vorarbeiten.



# Beispiel
https://www.nzz.ch/schweiz/laut-der-axpo-muss-sich-die-schweiz-entscheiden-entweder-sie-baut-grosse-gaskraftwerke-oder-neue-kernkraftwerke-ld.1930034


# Technische Details

Mögliche Animationen:
- FADE: ein/ausblenden
- LINE_IN: Linie zeichnen
- AREA_FILL: Fläche füllen
- DIM: Element dimmen (Opacity reduzieren)

Jede Animation kann ein Delay haben, dadurch können z.B. Elemente staggered eingeblendet werden.
Falls weitere Animationen gewünscht sind, bitte mit EdTech reden!

# Was braucht es dazu?
- Figma-Design (Grafik):
  - 1 Gruppe, die alle ELemente enthält
  - Jeden Schritt mit 1 Kopie, Elemente ein/ausblenden, Textbox nebendran
  - Es braucht für mobile und Desktop _keine_ unterschiedlichen Varianten, sondern es soll Hochformat sein, auf Desktop ist das Scrolly side-by-side
  - 1 darkmode Variante
  - jedes animierbare Element sollte einen passenden Namen haben
- Scrolly-Texte in Q definieren

Figma-Beispiel:
- https://figma.com/design/rVtbMFymc8sV76AWUTdMkr/Stromzukunft-der-Schweiz?node-id=112-1244

# Konfiguration
- SVG aus Figma exportieren (EdTech):
  - dark und light als 2 .svg-Files
  - mit ids, "do not outline text"
  - die 2 Files in Q in eine AssetGroup hochladen und links in den Einstellungen angeben
  - Font Substitutions in den Einstellungen setzen, z.B. { original: 'font-family="GT America" font-size="16" font-weight="500"', substitution: 'class="s-font-title"' }
- Animationen in Q definieren



# Aufwand

- EdTech Aufwand: 1-5h
- Grafik Aufwand:
    - In Figma Diagramm und Scrolly-Schritte designen
    - Im Editor erfassen

Generalisierungsgrad: mittel

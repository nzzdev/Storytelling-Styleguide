

# So funktioniert's
Durch das Scrollen wird die Position im Video kontrolliert. Annotation/Hervorhebungen können direkt im Video enthalten sein. Geschichte kann zusätzlich mit Scrollover-Textblöcken vertieft werden. Das Video kann den ganzen Viewport füllen und beim Scrollen stehen bleiben oder aber mit der Pan-und-Zoom Technik kombiniert werden (siehe Beispiel von der New York Times zur Beirut Explosion). 

# Einsatzbereiche
Funktioniert am besten, wenn Videomaterial von einem Ereignis vorhanden ist und Geschichte damit erzählt werden kann, zum Beispiel:

- Social Media Videos, z.B. bei einer OSINT Investigation oder bei Breaking News wie der Explosion in Beirut oder dem Brand der Notre-Dame
- Dronen-Videomaterial mit Annotation / Hervorhebung Geschichte erzählen, z.B: Flüchtlingscamp, Naturkatastrophe, Proteste

# Umsetzung
Das Video muss mit den richtigen Einstellungen exportiert werden, damit das Scrolling reibungslos funktioniert.

Optimale Einstellungen für Desktop
- bitrate: 6068 kb/s
- fps: 30
- keyframe distance: 3
- resolution: 1600x1200

Optimale Einstellungen für Mobile
- bitrate: 3024 kb/s
- fps: 30
- keyframe distance: 3
- resolution: 640x1138

Die Überblendungen und das Timing werden durch eine Scroll-Library bestimmt.

# Beispiele 
```html|span-6
<video width="100%" controls>
  <source src="assets/scrollytelling-examples/NYT_BeirutVideo.mp4" type="video/mp4">
</video>
```
[How a Massive Bomb Came Together in Beirut’s Port, New York Times (2020)](https://www.nytimes.com/interactive/2020/09/09/world/middleeast/beirut-explosion.html) (siehe zweite Grafik in der Mitte des Artikels)

# So funktioniert's

Dieses Q-Story-Block ist die Umsetzung der Scrollytelling-Technik [«Video-Scroller»](https://nzzdev.github.io/Storytelling-Styleguide/#/video-scroller). 
Das Element erlaubt uns, Videos einzubetten, die durchs Scrollen schrittweise abgespielt werden können. 
Die Leser:innen haben über ihre eigene Scrollgeschwindigkeit volle Kontrolle über das Tempo, mit dem das Video abgespielt wird.

Optional können zusätzliche Informationen in Textboxen platziert werden, die ebenso beim Scrollen über das Video laufen. Der Video-Scroller hat ein signifikantes Update erhalten von der Geschichte [«Das Wasserschloss im Jahre 2027»](https://www.nzz.ch/-ld.1848954).

```html|span-6
<video width="100%" controls>
  <source src="assets/story-blocks/video-scroller-standard-checkpoint.mp4" type="video/mp4">
</video>
```

[«Meine Arbeiter haben Angst vor den Checkpoints. Wenn ich nicht fahre, macht es niemand» – unterwegs in einem Land voller Strassensperren](https://www.nzz.ch/international/israels-sicherheitsregime-im-westjordanland-unterwegs-im-land-der-checkpoints-ld.1858613#q_custom_code_422f5c8f2763c99bd78a87a8952b2548_qca7303a9323b43dda08935dc6964f5c4_container)

```html|span-6
<video width="100%" controls>
  <source src="assets/story-blocks/video-scroller-standard-unterwasser-kabel.mp4" type="video/mp4">
</video>
```

[Sabotage on the seabed: How can Europe protect itself?](https://www.nzz.ch/english/europe-faces-rising-risk-of-underwater-cable-sabotage-ld.1875983#q_custom_code_5cde6d33c8c4f3aad5c88cd2193f4f79_q53d9de19aa154baab4a0ac284b078280_container)

# Wie es eingesetzt werden kann

- Um den Handlungsbogen eines Videos Schritt für Schritt, Frame für Frame zu erzählen.
- Für Videos, bei denen wir das Tempo der Animation oder der Bewegung beim Erstellen nicht selbst steuern können.
- Für Videos, bei denen nicht einzelne, spezifische Frames kommentiert werden sollen, sondern eine ganze, fliessende Bewegung.

  Generell gilt: Der Einsatz des Standard-Scrollers oder des [Trigger-Video-Scroller](https://nzzdev.github.io/Storytelling-Styleguide/#video-scroller-trigger-story-block.md) hängt vom gewünschten Storytelling-Stil ab.

# Für was es nicht geeignet ist

- Für Videos, die bei denen ein flüssiger Ablauf wichtig ist, die also nicht durchs Scrollen unterbrochen werden sollen.
- Für Videos, bei denen der Ton wichtig ist.

# Beispiele

- [Frankreich fiebert der Auferstehung von Notre-Dame entgegen](https://www.nzz.ch/report-und-debatte/wie-der-wiederaufbau-von-notre-dame-frankreich-befluegelt-ld.1819981#q_custom_code_8b6ed7c33144ff7827d517b2bd378b44_qaf564536337645f58f2d5f277578acfe_container)
- [Roboter, Golfbälle, Kotbeutel: Welche Dinge auf dem Mond herumliegen – und was damit geschehen soll, wenn Astronauten zurückkehren](https://www.nzz.ch/wissenschaft/ueber-tausend-gegenstaende-auf-dem-mond-was-geschieht-damit-ld.1823689#q_custom_code_105c9a068b634adeb11dbeefc4c190da_qc9436c1c3b774ddebab78f39a6bbb219_container)
- [Der westliche Luftraum schrumpft: Was, wenn auch die Route über China für westliche Passagierflugzeuge plötzlich gesperrt ist?](https://www.nzz.ch/pro/geopolitik-beeinflusst-flugrouten-swiss-fliegt-zuerichtokio-ueber-umwege-ld.1835998#q_custom_code_5416ec5f862f92d97b5b8f819597b1f9_qdb78c12761df4cf28d38ef1a34bec295_container)

# Weitere Infos

- [Anleitung zum Upload der Video in den JW-Player](https://3.basecamp.com/3500782/buckets/10878677/documents/6058690351) (Basecamp)

# Technische Details

Eine Framerate von ca 12–15 FPS reicht aus, um die Illusion von Bewegung zu erzeugen.

Auf Firefox und Chrome (d.h. auch auf Android-Geräten) wird für eine flüssige Animation das komplette Video decodiert und in den Arbeitsspeicher geladen – was einen grossen Ressourcenbedarf bedeutet.
Damit die Videos auch auf Mid- und Low-Range Android-Geräten angezeigt werden, sollten die Videos möglichst kurz sein und nicht zu gross bezüglich der Bildgrösse. Auch empfiehlt sich, darauf zu verzichten, mehrere dieser Elemente in einem Artikel einzusetzen.


EdTech Aufwand: 10-15 Minuten
Generalisierungsgrad: Mittel

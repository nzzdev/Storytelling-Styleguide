# So funktioniert's

Dieses Q-Story-Block ist die Umsetzung der Scrollytelling-Technik [«Video-Scroller»](https://nzzdev.github.io/Storytelling-Styleguide/#/video-scroller). Ein Scrollytelling-Element, das es ermöglicht, ein Video beim Scrollen an bestimmten Keyframes zu „triggern“ – also gezielt anzuhalten oder weiterlaufen zu lassen. Optional können zusätzliche Informationen in Textboxen platziert werden, die ebenso beim Scrollen über das Video laufen. Im Gegensatz zum [Standard-Video-Scroller](https://nzzdev.github.io/Storytelling-Styleguide/#video-scroller-story-block.md) läuft das Video zwischen definierten Frames automatisch ab.

```html|span-6
<video width="100%" controls>
  <source src="assets/story-blocks/video-scroller-trigger-blatten.mp4" type="video/mp4">
</video>
```

[Die Gefahr von Blatten: ein Gletscher am Abhang](https://www.nzz.ch/visuals/die-gefahr-von-blatten-ein-bergsturz-auf-raten-ld.1885290)

```html|span-6
<video width="100%" controls>
  <source src="assets/story-blocks/video-scroller-trigger-papst.mp4" type="video/mp4">
</video>
```

[Der letzte Weg des Papstes](https://www.nzz.ch/visuals/der-letzte-weg-des-papstes-ld.1881464)

# Wie es eingesetzt werden kann

- Situationen, in denen die Bewegung im Video sekundär ist, aber einzelne Frames wichtig sind.
- Generell gilt: Der Einsatz des Standard-Scrollers oder des [Trigger-Video-Scroller](https://nzzdev.github.io/Storytelling-Styleguide/#video-scroller-standard-story-block.md) hängt vom gewünschten Storytelling-Stil ab.

  - In investigativen Geschichten, um Geschehnisse in Social-Media-Videos oder technische Video's (wie etwas über Drohnen) schrittweise zu erklären.
  - Für Animationen oder 3-D-Modelle, die als Videos ausgespielt und eingebunden werden, wie zum Beispiel bei dieser.

# Für was es nicht geeignet ist

- Für Videos, die bei denen ein flüssiger Ablauf wichtig ist, die also nicht durchs Scrollen unterbrochen werden sollen.
- Szenen, bei denen der Nutzer nicht gezielt Frame-Kontrolle haben sollte.
- Für Videos, bei denen der Ton wichtig ist.

# Beispiele

- [Ein Dorf verschwindet: Der Bergsturz von Blatten in 3-D](https://www.nzz.ch/visuals/aktuell/ein-dorf-verschwindet-der-bergsturz-von-blatten-in-3-d-ld.1888058#q_custom_code_710a4a79c3fb8ad00faf47207b91b3ac_q82482d9fcb5d4d8b878040515ca35d8a_container)
- [Die wichtigste Idee der Biologie: Wie ein Konkurrent Darwin dazu brachte, seine Evolutionstheorie zu veröffentlichen](https://www.nzz.ch/wissenschaft/evolutionstheorie-das-duell-zwischen-darwin-und-wallace-ld.1874958#q_custom_code_37eb94c3142998e64f10f7401abd0840_q3ab5f47fb35c45a59909955e269e723a_container)
- [Krise bei Benzinern, Chance für E-Autos? Der Wandel von Europas Autoindustrie in Grafiken](https://www.nzz.ch/visuals/krise-bei-benzinern-chance-fuer-e-autos-der-wandel-von-europas-autoindustrie-in-grafiken-ld.1847621#q_custom_code_e3b88305b7446b4d642e794ae7bc09a7_qfa3f8b9cd9c24fa584127a5e30c7a5bc_container)

# Weitere Infos

- [Anleitung zum Upload der Video in den JW-Player](https://3.basecamp.com/3500782/buckets/10878677/documents/6058690351) (Basecamp)

# Technische Details

EdTech Aufwand: 10-15 Minuten
Generalisierungsgrad: Mittel

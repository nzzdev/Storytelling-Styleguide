# So funktioniert's
Dieses Element macht es möglich, für verschiedene Bildschirmgrössen Videos mit unterschiedlichen Seitenverhältnissen einzubinden. Das Video kann auf Mobile zum Beispiel hochkant (Seitenverhältnis 9:16) und auf Desktop in einem klassischen Seitenverhältnis von 16:9 angezeigt werden. Zudem beginnt das Video automatisch, sobald es im Browserfenster sichtbar wird. Player-Elemente wie der Play-Button oder die Zeitleiste werden nicht gezeigt. Per Default wird das Video im Loop und ohne Ton abgespielt. Das Element kreiert somit ein immersives Video-Erlebnis auf allen Geräten, die zum Lesen der NZZ benutzt werden. 

```html|span-6
<video width="100%" controls>
  <source src="assets/story-blocks/mobile-freundliches video_dnipro.mp4" type="video/mp4">
</video>
```
[Das Schicksal der Ukraine hängt am Fluss Dnipro](https://www.nzz.ch/visuals/ukraine-krieg-der-dnipro-schicksalsfluss-zwischen-ost-und-west-ld.1721057)

# Wie es eingesetzt werden kann
- Für szenische Videos, die längere Artikel visuell in Kapitel unterteilen, wie zum Beispiel in diesem Artikel über den [Fluss Dnipro](https://www.nzz.ch/visuals/ukraine-krieg-der-dnipro-schicksalsfluss-zwischen-ost-und-west-ld.1721057).
- Als Teaser im Artikel bei den Artikeltypen «Regular» oder «Longform Standard», wie bei diesem Beispiel über die [ukrainische Stadt Marjinka](https://www.nzz.ch/international/ukraine-wie-russland-die-stadt-marjinka-dem-erdboden-gleichmacht-ld.1725188).

Generell eignen sich für dieses Element Videos, die nicht auf Ton beruhen, eine ruhige Bildsprache haben und gut im Loop abspielbar sind.

# Für was es nicht geeignet ist 
- Die Videos im Format beschnitten werden dürfen für die verschiedenen Grössen. Deshalb ist es oft nicht sinnvoll, dieses Element für Videos zu verwenden, die der Beweisführung dienen und auf jedem Gerät als Ganzes anzeigt werden sollen. Für solche Fälle eignet sich das Video-Widget in Livingdocs.
- Beim Artikeltyp «Visuals Longform» kann im Header auch ein Video eingefügt werden. Dieses Element wird von der IT betreut.

# Beispiele
- [Das Schicksal der Ukraine hängt am Fluss Dnipro](https://www.nzz.ch/visuals/ukraine-krieg-der-dnipro-schicksalsfluss-zwischen-ost-und-west-ld.1721057)
- [Arzt war mal ihr Traumjob: Über den Niedergang eines Berufsstands](https://www.nzz.ch/zuerich/umfrage-mit-assistenzaerzten-burnouts-und-buerokratie-im-spital-ld.1722170)
- [Die Apokalypse von Marjinka – wie Russland eine Stadt dem Erdboden gleichmacht](https://www.nzz.ch/international/ukraine-wie-russland-die-stadt-marjinka-dem-erdboden-gleichmacht-ld.1725188)
- [«Wir Ukrainer kämpfen hart, wir feiern hart» – darf man im Krieg Party machen?](https://www.nzz.ch/international/ukraine-darf-man-im-krieg-feiern-zu-besuch-an-einer-party-in-dnipro-ld.1734653)
- [Eines Morgens ruft Herr Binggeli seine Frau an und erzählt von einem Autounfall. Dann verschwindet er spurlos](https://www.nzz.ch/zuerich/verschollen-zuercher-verschwindet-am-walensee-spurlos-ld.1728835)

Weitere Beispiele finden sich im [Editorial Tech Showcase](https://nzzdev.github.io/ed-tech-project-showcase/?internal)

# Weitere Infos
- [Anleitung zum Aufsetzen und Befüllen von diesem Element](https://3.basecamp.com/3500782/buckets/10878677/documents/6427009913) (Basecamp)
- [Anleitung zum Upload der Video in den JW-Player](https://3.basecamp.com/3500782/buckets/10878677/documents/6058690351) (Basecamp)
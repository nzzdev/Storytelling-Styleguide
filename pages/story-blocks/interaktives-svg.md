# So funktioniert's

Mit diesem Element lassen sich hoverbare SVGs erstellen. Für beliebeige Vektorelemente kann ein HTML-Text hinterlegt werden, der beim hovern angezeigt wird. Wichtig: die Grafik muss auch ohne Interaktion grundsätzlich lesbar sein.

```html|span-6
<img src="assets/story-blocks/interaktives-svg.png" style="max-width: 100%" />
```

# Wie es eingesetzt werden kann

- Als Hilfe in Grafiken wo nicht alles gelabelt werden kann. Z. B. in einem Scatterplot oder auf einer Karte
- Um nicht essenzielle Zusatzinfos einzublenden

# Für was es nicht geeignet ist

- Wenn die Interaktion essenziell für die Grafik ist.

# Beispiel

- [Trumps neue Zölle sind da. Die Schweiz wird abgestraft – das gilt für den Rest der Welt
  ](https://www.nzz.ch/wirtschaft/trumps-zoll-deadline-rueckt-naeher-was-gilt-jetzt-eigentlich-fuer-die-schweiz-und-die-welt-ld.1895746)

# Technische Details

Die SVGs können wie Infografiken exportiert werden. Damit ein Element klickbar wird, muss es eine ID mit dem Präfix `Popup-` haben.

Standardmässig wird die ID als Popup angezeigt. Bei `Popup-Schweiz` also der Text `Schweiz`. In der Q-Tabelle kann jedoch einer ID ein beliebiger HTML-Text zugeordnet werden, der dann stattdessen angezeigt wird. Zum Beispiel so:

```table
span: 4
rows:
  - ID: "Schweiz"
	Popup: "<span class='s-font-note--strong'>Schweiz</span><br />39 Prozent"
  - ID: "Deutschland"
	Popup: "<span class='s-font-note--strong'>Deutschland</span><br />15 Prozent"
```

```html|span-1,no-source,plain
<div class="stabilityIndex stable">Stable</div>
```

# Farben für politische Parteien

Wir verwenden für ausgewählte Länder fix definierte Farben, um politische Parteien auszuzeichnen.

Die Redaktorinnen und Redaktoren sind angehalten, sich im `#visuals-aktuell`-Channel zu melden, wenn sie einen Q-Chart mit politischen Parteien erstellen, so dass wir den Chart entsprechend den hier aufgelisteten Farben einfärben können.

Für Länder oder Parteien, die noch nicht angeführt sind, definieren wir neue Farben und hinterlegen sie hier und in der entsprechenden Creative-Cloud-Bibliothek (siehe «Assets» weiter unten).

Bei der Definition von Farben lassen wir uns von folgenden Fragen leiten:
- Mit welchen Farben identifiziert sich die Partei selber? (Z.B. basierend auf deren Logo)
- Mit welcher Farbe ist die Partei bekannt? Beispielsweise in Deutschland, wo die möglichen Koalitionen fixe Namen haben, die sich spezifisch auf diese Farben beziehen (Ampel-Koalition, Jamaika-Koalition).
- Welche Farbe verwenden lokale Medien, wenn sie Charts mit dieser Partei erstellen?
- Welcher Schweizer Partei ist die Partei am nächsten, so dass es Sinn machen würde, dieselbe Farbe zu verwenden?
- Gibt es schon bestehende Q-Charts, in denen eine bestimmte Farbe verwendet wurde?

Für den endgültigen Farbwert gehen wir von den vordefinierten Datenvisualisierungs-Farben aus.

## How to generate "light" versions of party colors

We use [Chroma.js](https://gka.github.io/palettes) to interpolate between the
regular party color and white. Chroma.js can calculate any number of steps
between two colors so that they are visually at equal distance. To get the light
color of the Spanish "Más País" then, we would input `#54ba00, #ffffff` and set
the number of colors to `3` to get the middle value: `#b2dd90`.

## Assets
Die Parteifarben sind in [dieser Creative-Cloud-Bibliothek](https://shared-assets.adobe.com/link/232fa8e8-f335-45c0-6bcf-8f21819f7a34) hinterlegt. Beim Anpassen der Farben sollten auch die Farben in der Bibliothek aktualisiert werden.

## Schweiz

```color-palette|span-1
colors:
  - {name: "SVP - primary", value: "#408b3d"}
  - {name: "SP", value: "#c31906"}
  - {name: "FDP", value: "#0084c7"}
  - {name: "CVP", value: "#d28b00"}
  - {name: "GPS", value: "#54ba00"}
  - {name: "GLP", value: "#a9cf00"}
  - {name: "BDP", value: "#d1cc00"}
```

```color-palette|span-1
colors:
  - {name: "SVP - light", value: "#b2d0b1"}
  - {name: "SP", value: "#eaaea8"}
  - {name: "FDP", value: "#9ed0e9"}
  - {name: "CVP", value: "#edd29c"}
  - {name: "GPS", value: "#bae399"}
  - {name: "GLP", value: "#dceb99"}
  - {name: "BDP", value: "#edeca0"}
```

```color-palette|span-1
colors:
  - {name: "EVP - primary", value: "#bda700"}
  - {name: "LEGA", value: "#ac5038"}
  - {name: "MCR", value: "#716e48"}
  - {name: "AL", value: "#da467d"}
  - {name: "EDU", value: "#8440a3"}
  - {name: "SD", value: "#4e36d7"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "EVP - light", value: "#e5dc9b"}
  - {name: "LEGA", value: "#ddb9af"}
  - {name: "MCR", value: "#c3c2b2"}
  - {name: "AL", value: "#f1bace"}
  - {name: "EDU", value: "#cdb1d9"}
  - {name: "SD", value: "#b8aeef"}
  - {name: "default", value: "#bcbcbc"}
```

#### Sophie-Implementation

##### AL

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-al-1", value: "#f8dce7"}
  - {name: "s-viz-color-party-al-2", value: "#f2bace"}
  - {name: "s-viz-color-party-al-3", value: "#ea97b6"}
  - {name: "s-viz-color-party-al-4", value: "#e37199"}
  - {name: "s-viz-color-party-al-5", value: "#da467d"}
  - {name: "s-viz-color-party-al-7", value: "#82294a"}
```

##### SP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-sp-1", value: "#f3d1cd"}
  - {name: "s-viz-color-party-sp-2", value: "#eaa39a"}
  - {name: "s-viz-color-party-sp-3", value: "#db756a"}
  - {name: "s-viz-color-party-sp-4", value: "#d14e3b"}
  - {name: "s-viz-color-party-sp-5", value: "#c31906"}
  - {name: "s-viz-color-party-sp-7", value: "#750f04"}
```

##### GPS

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-gps-1", value: "#dcf1cc"}
  - {name: "s-viz-color-party-gps-2", value: "#bbe399"}
  - {name: "s-viz-color-party-gps-3", value: "#98d566"}
  - {name: "s-viz-color-party-gps-4", value: "#78c840"}
  - {name: "s-viz-color-party-gps-5", value: "#54ba00"}
  - {name: "s-viz-color-party-gps-7", value: "#326f00"}
```

##### GLP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-glp-1", value: "#edf5cc"}
  - {name: "s-viz-color-party-glp-2", value: "#ddeb9a"}
  - {name: "s-viz-color-party-glp-3", value: "#cbe266"}
  - {name: "s-viz-color-party-glp-4", value: "#bad842"}
  - {name: "s-viz-color-party-glp-5", value: "#a9cf00"}
  - {name: "s-viz-color-party-glp-7", value: "#657c00"}
```

##### EVP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-evp-1", value: "#f2edcc"}
  - {name: "s-viz-color-party-evp-2", value: "#e6db99"}
  - {name: "s-viz-color-party-evp-3", value: "#d7ca66"}
  - {name: "s-viz-color-party-evp-4", value: "#cbb83f"}
  - {name: "s-viz-color-party-evp-5", value: "#bda700"}
  - {name: "s-viz-color-party-evp-7", value: "#716400"}
```

##### CVP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-cvp-1", value: "#f6e8cc"}
  - {name: "s-viz-color-party-cvp-2", value: "#efd099"}
  - {name: "s-viz-color-party-cvp-3", value: "#e4b966"}
  - {name: "s-viz-color-party-cvp-4", value: "#dca23e"}
  - {name: "s-viz-color-party-cvp-5", value: "#d28b00"}
  - {name: "s-viz-color-party-cvp-7", value: "#7e5300"}
```

##### BDP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-bdp-1", value: "#f6f5cc"}
  - {name: "s-viz-color-party-bdp-2", value: "#eeea9a"}
  - {name: "s-viz-color-party-bdp-3", value: "#e3e066"}
  - {name: "s-viz-color-party-bdp-4", value: "#dad542"}
  - {name: "s-viz-color-party-bdp-5", value: "#d1cb00"}
  - {name: "s-viz-color-party-bdp-7", value: "#7d7a00"}
```

##### FDP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-fdp-1", value: "#cce6f4"}
  - {name: "s-viz-color-party-fdp-2", value: "#9ccde9"}
  - {name: "s-viz-color-party-fdp-3", value: "#66b5dd"}
  - {name: "s-viz-color-party-fdp-4", value: "#449cd2"}
  - {name: "s-viz-color-party-fdp-5", value: "#0084c7"}
  - {name: "s-viz-color-party-fdp-7", value: "#004f77"}
```

##### SVP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-svp-1", value: "#d8e7d8"}
  - {name: "s-viz-color-party-svp-2", value: "#b2d0b0"}
  - {name: "s-viz-color-party-svp-3", value: "#8cb98a"}
  - {name: "s-viz-color-party-svp-4", value: "#67a263"}
  - {name: "s-viz-color-party-svp-5", value: "#408b3d"}
  - {name: "s-viz-color-party-svp-7", value: "#265324"}
```

##### LEGA

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-lega-1", value: "#e8e3dd"}
  - {name: "s-viz-color-party-lega-2", value: "#d8cec4"}
  - {name: "s-viz-color-party-lega-3", value: "#c7b8ab"}
  - {name: "s-viz-color-party-lega-4", value: "#b6a392"}
  - {name: "s-viz-color-party-lega-5", value: "#a58e79"}
  - {name: "s-viz-color-party-lega-7", value: "#826b57"}
```

##### MCR

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-mcr-1", value: "#e3e2da"}
  - {name: "s-viz-color-party-mcr-2", value: "#c6c5b5"}
  - {name: "s-viz-color-party-mcr-3", value: "#aaa891"}
  - {name: "s-viz-color-party-mcr-4", value: "#8d8a6c"}
  - {name: "s-viz-color-party-mcr-5", value: "#716e48"}
  - {name: "s-viz-color-party-mcr-7", value: "#44422b"}
```

##### EDU

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-edu-1", value: "#e5d8ec"}
  - {name: "s-viz-color-party-edu-2", value: "#cdb2da"}
  - {name: "s-viz-color-party-edu-3", value: "#b58cc7"}
  - {name: "s-viz-color-party-edu-4", value: "#9d66b5"}
  - {name: "s-viz-color-party-edu-5", value: "#8440a3"}
  - {name: "s-viz-color-party-edu-7", value: "#502763"}
```

##### SD

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-sd-1", value: "#eedcd7"}
  - {name: "s-viz-color-party-sd-2", value: "#deb9af"}
  - {name: "s-viz-color-party-sd-3", value: "#cd9688"}
  - {name: "s-viz-color-party-sd-4", value: "#be735f"}
  - {name: "s-viz-color-party-sd-5", value: "#ac5038"}
  - {name: "s-viz-color-party-sd-7", value: "#673022"}
```

##### PDA

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-pda-1", value: "#f3e0e3"}
  - {name: "s-viz-color-party-pda-2", value: "#e2b4bb"}
  - {name: "s-viz-color-party-pda-3", value: "#d08993"}
  - {name: "s-viz-color-party-pda-4", value: "#bf5d6b"}
  - {name: "s-viz-color-party-pda-5", value: "#ae3143"}
  - {name: "s-viz-color-party-pda-7", value: "#5e2b3c"}
```

##### CSP

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-csp-1", value: "#fff0d1"}
  - {name: "s-viz-color-party-csp-2", value: "#ffe1a3"}
  - {name: "s-viz-color-party-csp-3", value: "#ffd175"}
  - {name: "s-viz-color-party-csp-4", value: "#ffc247"}
  - {name: "s-viz-color-party-csp-5", value: "#ffb319"}
  - {name: "s-viz-color-party-csp-7", value: "#a86c14"}
```

##### Liberale

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-liberale-1", value: "#dbd6f7"}
  - {name: "s-viz-color-party-liberale-2", value: "#b9adef"}
  - {name: "s-viz-color-party-liberale-3", value: "#9486e7"}
  - {name: "s-viz-color-party-liberale-4", value: "#765fdf"}
  - {name: "s-viz-color-party-liberale-5", value: "#4e36d7"}
  - {name: "s-viz-color-party-liberale-7", value: "#2e2081"}
```

##### Andere

```color-palette|horizontal
colors:
  - {name: "s-viz-color-party-default-1", value: "#e7e7e7"}
  - {name: "s-viz-color-party-default-2", value: "#cacaca"}
  - {name: "s-viz-color-party-default-3", value: "#adadad"}
  - {name: "s-viz-color-party-default-4", value: "#909090"}
  - {name: "s-viz-color-party-default-5", value: "#737373"}
  - {name: "s-viz-color-party-default-7", value: "#565656"}
```

## Andere Länder

### Brasilien

```color-palette|span-1
colors:
  - {name: "PSL - primary", value: "#D1CC00"}
  - {name: "PT", value: "#c31906"}
  - {name: "PDT", value: "#d28b00"}
  - {name: "PSDB", value: "#0084c7"}
  - {name: "Rede", value: "#66a622"}
```

```color-palette|span-1
colors:
  - {name: "PSL - light", value: "#edeca0"}
  - {name: "PT", value: "#eaaea8"}
  - {name: "PDT", value: "#edd29c"}
  - {name: "PSDB", value: "#9ed0e9"}
  - {name: "Rede", value: "#c2dba7"}
```


### Dänemark

```color-palette|span-1
colors:
  - {name: "Sozialdemokraten – primary", value: "#c31906"}
  - {name: "Det Konservative Folkeparti - primary", value: "#408b3d"}
  - {name: "Venstre", value: "#0084c7"}
  - {name: "Det Radikale Venstre", value: "#da467d"}
  - {name: "Dänische Volkspartei", value: "#FDD200"}
  - {name: "Christdemokraten", value: "#616161"}
  - {name: "Stram Kurs", value: "#ac5038"}
```

```color-palette|span-1
colors:
  - {name: "Sozialdemokraten – light", value: "#eaaea8"}
  - {name: "Det Konservative Folkeparti", value: "#b2d0b1"}
  - {name: "Venstre", value: "#9ed0e9"}
  - {name: "Det Radikale Venstre", value: "#f8dce7"}
  - {name: "Dänische Volkspartei", value: "#faeb9e"}
  - {name: "Christdemokraten", value: "#bcbcbc"}
  - {name: "Stram Kurs", value: "#ddb9af"}
```

```color-palette|span-1
colors:
  - {name: "Liberal Alliance - primary", value: "#01b1c0"}
  - {name: "Socialistik Volkeparti", value: "#D64B47"}
  - {name: "Enhedslisten", value: "#d28b00"}
  - {name: "Alternativet", value: "#54ba00"}
  - {name: "Nye Borgerlige", value: "#22A682"}
```

```color-palette|span-1
colors:
  - {name: "Liberal Alliance - light", value: "#d2f1f3"}
  - {name: "Socialistik Volkeparti", value: "#FFD3D1"}
  - {name: "Enhedslisten", value: "#edd29c"}
  - {name: "Alternativet", value: "#bae399"}
  - {name: "Nye Borgerlige", value: "#aadccf"}
```


### Deutschland

```color-palette|span-1
colors:
  - {name: "SPD - primary", value: "#c31906"}
  - {name: "Union", value: "#0a0a0a"}
  - {name: "FDP", value: "#d1cc00"}
  - {name: "Grüne", value: "#66a622"}
  - {name: "AfD", value: "#0084c7"}
```

```color-palette|span-1
colors:
  - {name: "SPD - light", value: "#eaaea8"}
  - {name: "Union", value: "#939393"}
  - {name: "FDP", value: "#edeca0"}
  - {name: "Grüne", value: "#c2dba7"}
  - {name: "AfD", value: "#9ed0e9"}
```

```color-palette|span-1
colors:
  - {name: "Linke - primary", value: "#8440a3"}
  - {name: "Piraten", value: "#d28b00"}
  - {name: "Freie Wähler", value: "#ac5038"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "Linke - light", value: "#cdb1d9"}
  - {name: "Piraten", value: "#edd29c"}
  - {name: "Freie Wähler", value: "#ddb9af"}
  - {name: "default", value: "#bcbcbc"}
```


### Finnland

```color-palette|span-1
colors:
  - {name: "Linksbündnis - primary", value: "#C31906"}
  - {name: "Grüne", value: "#66A622"}
  - {name: "Sozialdemokraten", value: "#DA467D"}
  - {name: "Konservative", value: "#00A0C6"}
  - {name: "Finnenpartei", value: "#005EA1"}
```

```color-palette|span-1
colors:
  - {name: "Linksbündnis - light", value: "#eaaea8"}
  - {name: "Grüne", value: "#c2dba7"}
  - {name: "Sozialdemokraten", value: "#f1bace"}
  - {name: "Konservative", value: "#a0deee"}
  - {name: "Finnenpartei", value: "#a3d3f5"}
```

```color-palette|span-1
colors:
  - {name: "Zentrum – primary", value: "#08783E"}
  - {name: "Schwedische Volkspartei", value: "#FDD200"}
  - {name: "Christlichdemokraten", value: "#8440a3"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "Zentrum – light", value: "#b3e6cb"}
  - {name: "Schwedische Volkspartei", value: "#faeb9e"}
  - {name: "Christlichdemokraten", value: "#cdb1d9"}
  - {name: "default", value: "#bcbcbc"}
```

### Frankreich

Die Einteilung basiert auf [Liste der politischen Parteien in Frankreich – Wikipedia](https://de.wikipedia.org/wiki/Liste_der_politischen_Parteien_in_Frankreich).

```color-palette|span-3
colors:
- {name: "Radikale Linke (FI, PG)", value: "#b00077"}
- {name: "Linker Flügel (PS, MRC, LGM)", value: "#ce4631"}
- {name: "Grüne Politik (EELV, MEI, PE)", value: "#93a345"}
- {name: "Zentrismus (LREM, MoDem, LC, RAD, UDI)", value: "#e3b13e"}
- {name: "Rechter Flügel (LR, DLF, CNI, MPF, SL)", value: "#8aabfd"}
- {name: "Radikale Rechte (RN)", value: "#374e8e"}
- {name: "Andere", value: "#616161"}
```

```color-palette|span-3
colors:
- {name: "Radikale Linke (Hintergrund)", value: "#d7b1c3"}
- {name: "Linker Flügel (Hintergrund)", value: "#e6aa9e"}
- {name: "Grüne Politik (Hintergrund)", value: "#c1c9a5"}
- {name: "Zentrismus (Hintergrund)", value: "#e0cba3"}
- {name: "Rechter Flügel (Hintergrund)", value: "#bbcaed"}
- {name: "Radikale Rechte (Hintergrund)", value: "#a1aecc"}
- {name: "Andere (Hintergrund)", value: "#bcbcbc" }
```

### Grossbritannien

```color-palette|span-1
colors:
  - {name: "Konservative", value: "#0084c7"}
  - {name: "Labour", value: "#c31906"}
  - {name: "Green Party", value: "#66a622"}
  - {name: "SNP", value: "#D1CC00"}
  - {name: "Brexit Party", value: "#24B39C"}
```

```color-palette|span-1
colors:
  - {name: "Konservative - light", value: "#9ed0e9"}
  - {name: "Labour", value: "#eaaea8"}
  - {name: "Green Party", value: "#c2dba7"}
  - {name: "SNP", value: "#f5f3a3"}
  - {name: "Brexit Party", value: "#7DD1C3"}
```

```color-palette|span-1
colors:
  - {name: "Liberaldemokraten", value: "#d28b00"}
  - {name: "UKIP", value: "#8440a3"}
  - {name: "DUP", value: "#DA467D"}
  - {name: "Plaid Cymru", value: "#ac5038"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "Liberaldemokraten - light", value: "#edd29c"}
  - {name: "UKIP", value: "#cdb1d9"}
  - {name: "DUP", value: "#f1bace"}
  - {name: "Plaid Cymru", value: "#ddb9af"}
  - {name: "default", value: "#bcbcbc"}
```

### Indien

```color-palette|span-2
colors:
  - {name: "Kongresspartei - primary", value: "#0084c7"}
  - {name: "BJP (Bharatiya Janata Party)", value: "#d28b00"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "Kongresspartei - light", value: "#9ed0e9"}
  - {name: "BJP (Bharatiya Janata Party)", value: "#edd29c"}
  - {name: "default", value: "#bcbcbc"}
```

### Irland

```color-palette|span-2
colors:
  - {name: "Sinn Fein - primary", value: "#0a0a0a"}
  - {name: "Fianna Fail", value: "#408b3c"}
  - {name: "Fine Gael", value: "#0083c7"}
  - {name: "default", value: "#616161"}
  - {name: "Grüne", value: "#54ba00"}
  - {name: "Labour", value: "#c31906"}
```

```color-palette|span-2
colors:
  - {name: "Sinn Fein - light", value: "#939393"}
  - {name: "Fianna Fail", value: "#b2d0b1"}
  - {name: "Fine Gael", value: "#9ed0e9"}
  - {name: "default", value: "#bcbcbc"}
  - {name: "Grüne", value: "#c2dba7"}
  - {name: "Labour", value: "#eaaea8"}
```

### Italien

```color-palette|span-2
colors:
  - {name: "Partito Democratico - primary", value: "#F1242B"}
  - {name: "Cinque Stelle", value: "#FDD200"}
  - {name: "Rechtsallianz", value: "#0084c7"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "Partito Democratico - light", value: "#f9a7aa"}
  - {name: "Cinque Stelle", value: "#faeb9e"}
  - {name: "Rechtsallianz", value: "#9ed0e9"}
  - {name: "default", value: "#bcbcbc"}
```

### Kanada

```color-palette|span-2
colors:
  - {name: "Liberals", value: "#d71920"}
  - {name: "Conservative Party of Canada (CDC)", value: "#0b2643"}
  - {name: "New Democratic Party (NDP)", value: "#f89920"}
  - {name: "Bloc Québécois", value: "#093c71"}
  - {name: "Green Party", value: "#66a622"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "Liberals – light", value: "#f19b9e"}
  - {name: "Conservative Party of Canada (CDC)", value: "#5d82ab"}
  - {name: "New Democratic Party (NDP)", value: "#ffe0b8"}
  - {name: "Bloc Québécois", value: "#83a7cc"}
  - {name: "Green Party", value: "#c2dba7"}
  - {name: "default", value: "#bcbcbc"}
```

### Niederlande

```color-palette|span-1
colors:
  - {name: "SP - primary", value: "#8440a3"}
  - {name: "PvdA", value: "#c31906"}
  - {name: "Groen Links", value: "#66a622"}
  - {name: "D66", value: "#22a682"}
  - {name: "ChristenUnie_", value: "#0084c7"}
```

```color-palette|span-1
colors:
  - {name: "SP - light", value: "#cdb1d9"}
  - {name: "PvdA", value: "#eaaea8"}
  - {name: "Groen Links", value: "#c2dba7"}
  - {name: "D66", value: "#aadccf"}
  - {name: "ChristenUnie_", value: "#9ed0e9"}
```

```color-palette|span-1
colors:
  - {name: "CDA - primary", value: "#01b1c0"}
  - {name: "VVD", value: "#d28b00"}
  - {name: "PVV", value: "#0a0a0a"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "CDA - light", value: "#a4e3e8"}
  - {name: "VVD", value: "#edd29c"}
  - {name: "PVV", value: "#939393"}
  - {name: "default", value: "#bcbcbc"}
```


### Österreich

```color-palette|span-1
colors:
  - {name: "ÖVP - primary", value: "#0A0A0A"}
  - {name: "SPÖ", value: "#c31906"}
  - {name: "FPO", value: "#0084c7"}
  - {name: "Grüne", value: "#54ba00"}
```

```color-palette|span-1
colors:
  - {name: "ÖVP - light", value: "#939393"}
  - {name: "SPÖ", value: "#eaaea8"}
  - {name: "FPO", value: "#9ed0e9"}
  - {name: "Grüne", value: "#bae399"}
```

```color-palette|span-1
colors:
  - {name: "NEOS - primary", value: "#da467d"}
  - {name: "Liste Pilz", value: "#22a682"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-1
colors:
  - {name: "NEOS - light", value: "#f1bace"}
  - {name: "Liste Pilz", value: "#aadccf"}
  - {name: "default", value: "#bcbcbc"}
```

### Polen

```color-palette|span-2
colors:
  - {name: "PiS - primary", value: "#005EA1"}
  - {name: "KO", value: "#d1cc00"}
  - {name: "Lewica", value: "#c31906"}
  - {name: "KP", value: "#66a622"}
  - {name: "Konf", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "PiS - light", value: "#a3d3f5"}
  - {name: "KO", value: "#edeca0"}
  - {name: "Lewica", value: "#eaaea8"}
  - {name: "KP", value: "#c2dba7"}
  - {name: "Konf", value: "#bcbcbc"}
```

### Portugal

```color-palette|span-2
colors:
  - {name: "CDU Kommunisten und Grüne - primary", value: "#C31906"}
  - {name: "PAN - Menschen Tiere Natur", value: "#003645"}
  - {name: "Livre", value: "#A3C760"}
  - {name: "BE - Linksblock", value: "#8440A3"}
  - {name: "PS Sozialisten", value: "#DA467D"}
  - {name: "PSD Bürgerlich", value: "#D28B01"}
  - {name: "Iniciativa Liberal", value: "#FFEF00"}
  - {name: "CDS-PP Konservativ", value: "#008CD7"}
  - {name: "Chega Partido", value: "#093c71"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "CDU Kommunisten und Grüne - light", value: "#eaaea8"}
  - {name: "PAN - Menschen Tiere Natur", value: "#5a7d87"}
  - {name: "Livre", value: "#bfcaaa"}
  - {name: "BE - Linksblock", value: "#aa99b2"}
  - {name: "PS Sozialisten", value: "#EC9EBA"}
  - {name: "PSD Bürgerlich", value: "#d9c191"}
  - {name: "Iniciativa Liberal", value: "#d9d48c"}
  - {name: "CDS-PP Konservativ", value: "#94CCEE"}
  - {name: "Chega Partido", value: "#83a7cc"}
  - {name: "default", value: "#bcbcbc"}
```

### Russland

```color-palette|span-2
colors:
  - {name: "Einiges Russland - primary", value: "#374E8E"}
  - {name: "Kommunisten", value: "#A50058"}
  - {name: "LDPR (Schirinowski)", value: "#E3B13E"}
  - {name: "Gerechtes Russland", value: "#75373C"}
  - {name: "Neue Leute", value: "#4FBBAE"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "Einiges Russland - light", value: "#A1AECC"}
  - {name: "Kommunisten - light", value: "#DE9DAB"}
  - {name: "LDPR (Schirinowski) - light", value: "#E0CBA3"}
  - {name: "Gerechtes Russland - light", value: "#BDAA93"}
  - {name: "Neue Leute - light", value: "#ABD1CB"}
  - {name: "default - light", value: "#bcbcbc"}
```

### Schweden

```color-palette|span-1
colors:
  - {name: "Sozialdemokraten", value: "#c31906"}
  - {name: "Grüne", value: "#66a622"}
  - {name: "Linkspartei", value: "#8440a3"}
  - {name: "Moderate", value: "#4fbfe8"}
```

```color-palette|span-1
colors:
  - {name: "Sozialdemokraten - light", value: "#eaaea8"}
  - {name: "Grüne", value: "#c2dba7"}
  - {name: "Linkspartei", value: "#cdb1d9"}
  - {name: "Moderate", value: "#a8ddf0"}
```

```color-palette|span-1
colors:
  - {name: "Zentrumspartei", value: "#08783E"}
  - {name: "Liberale", value: "#00a0c6"}
  - {name: "Christdemokraten", value: "#005EA1"}
  - {name: "Schwedendemokraten", value: "#FDD200"}
```

```color-palette|span-1
colors:
  - {name: "Zentrumspartei - light", value: "#b3e6cb"}
  - {name: "Liberale - light", value: "#a0deee"}
  - {name: "Christdemokraten - highlight", value: "#a3d3f5"}
  - {name: "Schwedendemokraten - highlight", value: "#faeb9e"}
```

### Spanien

```color-palette|span-2
colors:
  - {name: "Sozialisten - primary", value: "#C31906"}
  - {name: "Partido Popular", value: "#0084C7"}
  - {name: "Ciudadanos", value: "#D28B00"}
  - {name: "Podemos", value: "#8440A3"}
  - {name: "Vox", value: "#54BA00"}
  - {name: "Más País", value: "#22a682"}
  - {name: "ERC Katalanische Linksrepublikaner", value: "#d64b47"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "Sozialisten - light", value: "#eaaea8"}
  - {name: "Partido Popular - light", value: "#9ed0e9"}
  - {name: "Ciudadanos - light", value: "#edd29c"}
  - {name: "Podemos - light", value: "#cdb1d9"}
  - {name: "Vox - light", value: "#bae399"}
  - {name: "Más País - light", value: "#9dd3bf"}
  - {name: "ERC Katalanische Linksrepublikaner - light", value: "#f4a79e"}
  - {name: "default - light", value: "#bcbcbc"}
```

### Südafrika

```color-palette|span-2
colors:
  - {name: "African National Congress (ANC) - primary", value: "#38A650"}
  - {name: "Democratic Alliance (DA)", value: "#3952EE"}
  - {name: "Economic Freedom Fighters (EFF)", value: "#D64B47"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "African National Congress (ANC) - light", value: "#C9F5D2"}
  - {name: "Democratic Alliance (DA)", value: "#D6DCFF"}
  - {name: "Economic Freedom Fighters (EFF)", value: "#FFD3D1"}
  - {name: "default", value: "#bcbcbc"}
```

### Tschechien

```color-palette|span-2
colors:
  - {name: "ANO", value: "#FDD200"}
  - {name: "Spolu", value: "#008CD7"}
  - {name: "Piraten und Stan", value: "#66a622"}
  - {name: "SPD", value: "#616161"}
  - {name: "Kolmmunistische Partei", value: "#75373C"}
  - {name: "Sozialdemokraten", value: "#C31906"}
  - {name: "Versprechen", value: "#0a0a0a"}
  - {name: "default", value: "#616161"}
```

```color-palette|span-2
colors:
  - {name: "ANO", value: "#faeb9e"}
  - {name: "Spolu", value: "#9ed0e9"}
  - {name: "Piraten und Stan", value: "#c2dba7"}
  - {name: "SPD", value: "#bcbcbc"}
  - {name: "Kolmmunistische Partei", value: "#BDAA93"}
  - {name: "Sozialdemokraten", value: "#eaaea8"}
  - {name: "Versprechen", value: "#939393"}
  - {name: "default", value: "#bcbcbc"}
```

### Vereinigte Staaten von Amerika, USA

```color-palette|span-2
colors:
  - {name: "Republikaner Flächen - primary", value: "#ff7a64"}
  - {name: "Demokraten Flächen", value: "#81a8db"}
  - {name: "default Flächen", value: "#d7d7d7"}
```

```color-palette|span-2
colors:
  - {name: "Republikaner - light", value: "#ffafa2"}
  - {name: "Demokraten - light", value: "#b4c7e3"}
```

```color-palette|span-2
colors:
  - {name: "Republikaner Kurven - primary", value: "#ce6661"}
  - {name: "Demokraten Kurven", value: "#618ec0"}
  - {name: "default Kurven", value: "#7b7b7c"}
```

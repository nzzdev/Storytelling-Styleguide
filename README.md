# Visuals Styleguide

Der Styleguide basiert auf [Catalog](http://www.catalog.style/), unter Verwendung der
Standalone-Version: https://docs.catalog.style/installation/standalone

## Voraussetzungen

- NPX (Sollte mit einer aktuellen Version von Node.js/NPM installiert sein)

## Lokale Vorschau der Änderungen

1. `Terminal` öffnen
2. ```shell
   cd the/path/to/catalog/folder
   ```
4. ```shell
    make preview
    ```
5. Im Terminal sollten darauf verschiedene Informationen erscheinen, zuletzt die URLs, unter denen die Vorschau im
   Browser angezeigt werden kann.

### Vorschau beenden

Um den lokalen Server zu beenden, der mit dem Befehl oben erstellt wurde, im Terminal-Fenster 
<kbd>Ctrl</kbd>+<kbd>C</kbd> drücken.

## Neue Seiten hinzufügen

1. Ein neues Markdown-Dokument im `/pages`-Ordner anlegen.
2. Im `index.html`-Dokument die Seiten-Konfiguration den bestehenden Seiten entsprechend ergänzen.

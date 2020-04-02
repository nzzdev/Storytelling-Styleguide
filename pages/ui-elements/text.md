## Text Fields

```html
<div>
  <input
    type="search"
    class="s-input-field"
    placeholder="Bitte Suche eingeben"
  />

  <br />
  <br />

  <div class="s-input-field-wrapper">
    <label class="s-font-note">Suchen Sie Ihren Ort:</label>
    <input
      type="search"
      class="s-input-field"
      placeholder="Bitte Suche eingeben"
    />
  </div>

  <br />
  <br />

  <input
    type="search"
    class="s-input-field"
    placeholder="Bitte Suche eingeben"
    disabled
  />
</div>

<br />
<br />

<div>
  <input type="text" class="s-input-field" placeholder="Bitte Namen eingeben" />

  <br /><br />

  <input
    type="text"
    class="s-input-field"
    placeholder="banana or cherry?"
    pattern="banana|cherry"
  />

  <br /><br />

  <input
    type="text"
    class="s-input-field s-input-field--valid"
    value="Richtig!"
  />

  <br /><br />

  <div class="s-input-field-wrapper">
    <input
      type="text"
      class="s-input-field s-input-field--invalid"
      value="Falsch!"
    />
    <label class="s-font-note">Die Eingabe ist leider falsch.</label>
  </div>

  <br /><br />

  <input
    type="text"
    class="s-input-field"
    placeholder="Bitte Namen eingeben"
    disabled
  />

  <br /><br />

  <textarea
    rows="20"
    class="s-input-field"
    placeholder="Schreiben Sie etwas Text..."
  ></textarea>
</div>

<br />
<br />

<div>
  <input
    type="number"
    class="s-input-field"
    placeholder="Bitte Nummer eingeben"
  />
</div>

<br />
<br />

<div>
  <input
    type="tel"
    class="s-input-field"
    placeholder="Bitte Telefonnummer eingeben"
  />
</div>

<br />
<br />

<div>
  <input
    type="email"
    class="s-input-field"
    placeholder="Bitte E-Mail-Adresse eingeben"
  />
</div>

<br />
<br />

<div>
  <input
    type="password"
    class="s-input-field"
    placeholder="Bitte Passwort eingeben"
  />
</div>

<br />
<br />

<div>
  <input type="date" class="s-input-field" />
</div>

<br />
<br />

<div>
  <input id="textinput" type="time" class="s-input-field" />
</div>
```

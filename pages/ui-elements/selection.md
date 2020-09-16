## Selection Input Elements

### Range Sliders

```html
<input type="range" class="s-input-range" />

<br />
<br />

<input type="range" class="s-input-range" disabled />

<br />
<br />

<input type="range" class="s-input-range s-input-range--large" />

<br />
<br />

<input type="range" class="s-input-range s-input-range--large" disabled />
```

### Checkboxes

```html
<input
  id="checkbox1"
  type="checkbox"
  checked="checked"
  tabindex="0"
  class="s-input-checkbox"
/>
<label for="checkbox1">Eine wunderschöne, aktivierte Checkbox</label>

<br />

<input
  id="checkbox2"
  type="checkbox"
  checked
  tabindex="1"
  class="s-input-checkbox"
  disabled
/>
<label for="checkbox2">Eine wunderschöne, leider gesperrte Checkbox</label>

<br />

<input
  id="checkbox3"
  type="checkbox"
  tabindex="2"
  class="s-input-checkbox"
  disabled
/>
<label for="checkbox3"
  >Nochmals eine wunderschöne, leider gesperrte Checkbox</label
>

<br />

<input id="checkbox4" type="checkbox" tabindex="3" class="s-input-checkbox" />
<label for="checkbox4">Eine wunderschöne, deaktivierte Checkbox</label>
```

### Switches

```html
<div class="s-input-switch">
  <input name="enabled1" type="checkbox" value="on" tabindex="4" />
  <label>Option A</label>
  <label>Option B</label>
</div>

<br />

<div class="s-input-switch s-input-switch--secondary">
  <input name="enabled2" type="checkbox" value="on" tabindex="5" checked />
  <label>Option A</label>
  <label>Option B</label>
</div>

<br />

<div class="s-input-switch">
  <input name="enabled3" type="checkbox" value="on" tabindex="6" disabled />
  <label>Option A</label>
  <label>Option B</label>
</div>

<br />

<div class="s-input-switch">
  <input
    name="enabled4"
    type="checkbox"
    value="on"
    tabindex="7"
    checked
    disabled
  />
  <label>Option A</label>
  <label>Option B</label>
</div>
```

### Radios

```html
<input
  id="radio1"
  name="radio"
  type="radio"
  value="1"
  class="s-input-radio"
  checked="checked"
  tabindex="2"
/>
<label for="radio1">das ist der Beschrieb 1 </label>

<br />

<input
  id="radio2"
  name="radio"
  type="radio"
  value="2"
  class="s-input-radio"
  tabindex="3"
/>
<label for="radio2">das ist der Beschrieb 2 </label>

<br />

<input
  id="radio3"
  name="radio"
  type="radio"
  value="2"
  class="s-input-radio s-input-radio--secondary"
  tabindex="3"
/>
<label for="radio3">das ist der Beschrieb 2 </label>

<br />

<input
  disabled
  id="radio4"
  name="radio"
  type="radio"
  value="3"
  class="s-input-radio s-input-radio--secondary"
  tabindex="3"
/>
<label for="radio4">das ist der Beschrieb 2 </label>
```

### Selects

```html
<select class="s-input-select">
  <option value="1">erste Option</option>
  <option value="1">zweite Option</option>
  <option value="1">dritte Option</option>
  <option value="1">vierte Option</option>
</select>

<br /><br />

<select class="s-input-select" disabled>
  <option value="1">erste Option</option>
  <option value="1">zweite Option</option>
  <option value="1">dritte Option</option>
  <option value="1">vierte Option</option>
</select>
```

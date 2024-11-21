---
title: "CSS light-dark(): Dynamische Farben für Light und Dark Mode"
description: "Entdecke, wie die CSS light-dark() Funktion das Styling für Light und Dark Mode vereinfacht und dir hilft, flexiblere Designs zu erstellen."
teaser: "teaser.jpg"
teaserAlt: "Snippetauszug"
published: "2024-10-06T00:00"
tags: [ "CSS", "Color Schema", "Technologie" ]
---

## CSS `light-dark()` Funktion – Dynamische Farben für Light und Dark Mode

Mit der Einführung der `light-dark()` Funktion in CSS (Color Module Level 5) können Entwickler jetzt Farben
definieren, die abhängig vom genutzten **Color Scheme** automatisch wechseln. Diese Funktion vereinfacht die Handhabung
von Light und Dark Mode erheblich.

### Wie funktioniert `light-dark()`?

Die Funktion nimmt zwei Farbwerte entgegen:

- **Erster Wert**: Wird verwendet, wenn der Farbschema-Modus *light* oder *unbekannt* ist.
- **Zweiter Wert**: Gilt für den *dark*-Modus.

**Syntax:**

```css
background-color: light-dark(light-color, dark-color);
```

### Beispiel:

Im folgenden Code wechselt die Hintergrundfarbe der Seite basierend auf dem Farbschema zwischen einem hellen
Grau (`#ccc`) und einem dunklen Grau (`#333`):

```css
:root {
    color-scheme: light dark;
}

body {
    background-color: light-dark(#ccc, #333);
}
```

### Wichtiger Hinweis:

Damit `light-dark()` funktioniert, muss das `color-scheme` Property gesetzt werden. Üblicherweise erfolgt dies global
in `:root`.

### Vorteil: Reduzierter Code

Bisher wurde der Wechsel der Farben oft über Media Queries gesteuert:

```css
:root {
    --primary-bg: #e4e4e4;
}

@media (prefers-color-scheme: dark) {
    :root {
        --primary-bg: #121212;
    }
}
```

Mit `light-dark()` lässt sich dieser Code vereinfachen:

```css
:root {
    color-scheme: light dark;
    --primary-bg: light-dark(#e4e4e4, #121212);
}
```

### Browser-Support

Die Funktion ist seit Mai 2024 in allen großen Browsern verfügbar:
- Chrome 123
- Firefox 120
- Safari 17.5

`light-dark()` macht es einfacher, dynamische Designs zu erstellen, die sowohl im Light- als auch im Dark-Mode nahtlos
funktionieren.
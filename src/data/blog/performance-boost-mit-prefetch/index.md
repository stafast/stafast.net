---
title: "Astro: Performance-Boost mit Prefetch"
description: "Erfahre, wie du mit Prefetch im Astro Framework die Ladezeiten deiner Website verbessern kannst. Dieser Beitrag zeigt, wie du Prefetch aktivierst, konfigurierst und optimal einsetzt, um ein flüssiges Nutzererlebnis zu schaffen."
teaser: "teaser.jpg"
teaserAlt: "Astro Framework Logo"
published: "2024-11-16T00:00:00"
tags: [ "Astro", "Prefetch", "Performance", "Technologie" ]
---

In der heutigen Zeit, in der Benutzerfreundlichkeit und Geschwindigkeit immer wichtiger werden, ist die Optimierung von
Ladezeiten ein entscheidender Faktor. In diesem Artikel zeige ich, wie du mit der Prefetch-Option im **Astro Framework**
ein
nahezu verzögerungsfreies Nutzererlebnis schaffst. Prefetch sorgt dafür, dass Seiten vorab geladen werden, sodass sie
beim Navigieren sofort verfügbar sind.

## Das Aktivieren von Prefetching

Die Aktivierung von Prefetch ist denkbar einfach und erfolgt in der Konfigurationsdatei `astro.config.mjs`:

```js title="astro.config.mjs" ins={4}
import {defineConfig} from 'astro/config';

export default defineConfig({
    prefetch: true
});
```

Nach der Aktivierung wird das Prefetch-Skript automatisch eingebunden. Mit dem Attribut `data-astro-prefetch` kannst du
das Prefetching gezielt für Links aktivieren:

```html
<a href="/blog" data-astro-prefetch>
```

Standardmäßig lädt der Browser die verlinkte Seite vor, sobald der Benutzer den Mauszeiger über den Link bewegt.

## Konfiguration von Prefetch

Prefetch bietet vier Strategien, die individuell konfiguriert werden können:

* `hover` (Standard): Lädt die Zielseite vor, wenn die Maus über den Link fährt.
* `tap`: Lädt die Seite vor, sobald der Benutzer den Link antippt.
* `viewport`: Lädt die Seite vor, wenn der Link in den sichtbaren Bereich des Browsers gelangt.
* `load`: Lädt alle Links der Seite vor, sobald die aktuelle Seite vollständig geladen ist.

*Interessant: Bei langsamen Verbindungen oder aktiviertem Stromsparmodus passt Prefetch sich automatisch an und
verwendet
die Strategie `tap`.*

Beispiel für die Konfiguration eines Links:

```html
<a href="/blog" data-astro-prefetch="viewport">
```

## Standardeinstellungen anpassen

Die Standardeinstellung von Prefetch lässt sich ebenfalls in der `astro.config.mjs` festlegen:

```js title="astro.config.mjs" ins={4-6}
import {defineConfig} from 'astro/config';

export default defineConfig({
    prefetch: {
        defaultStrategy: 'viewport'
    }
});
```

Für meine eigenen Projekte bevorzuge ich die Strategie `viewport`, da sie eine gute Balance zwischen Performance und
Ressourcenschonung bietet.

---

### Weiterführende Informationen

Für noch mehr Details zu Prefetch im Astro Framework empfehle ich die
offizielle [Dokumentation](https://docs.astro.build/en/guides/prefetch/).
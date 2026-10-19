---
title: "Pile Pattern: Elemente mit CSS Grid überlagern"
description: "Content, Hintergrund und Badge in derselben Grid-Zelle: Das Pile Pattern ermöglicht flexible Überlagerungen ohne absolute Positionierung."
teaser: "teaser.jpg"
teaserAlt: "Drei überlagerte grüne Rechtecke neben den Schriftzügen CSS Grid und Pile Pattern auf hellem Hintergrund."
published: "2026-11-09T16:33:00+01:00"
tags: [ "CSS", "CSS Grid", "Webentwicklung" ]
draft: false
---

Eine Karte mit Hintergrund, Text und Badge ist schnell gebaut. Häufig bekommt der Container
`position: relative`, die überlagerten Elemente werden absolut positioniert und ihre Abstände
über `inset`, `top` oder `bottom` festgelegt. Sobald längere Texte oder andere Schriftgrößen
dazukommen, muss die Höhe des Containers diese Inhalte trotzdem zuverlässig aufnehmen.

Für solche Layouts ist das **Pile Pattern** eine praktische Alternative: Mehrere Grid-Items
belegen dieselbe Zelle und bilden so einen Stapel. Die Inhalte bleiben an der Größenberechnung
des Grids beteiligt.

## Eine Zelle für mehrere Ebenen

Der Kern ist klein:

```css
.pile {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
}

.pile > * {
    grid-area: 1 / 1;
}
```

Alle direkten Kinder beginnen in der ersten Zeile und Spalte und belegen dieselbe Zelle.
`minmax(0, 1fr)` hält die einzelne Spalte flexibel, auch wenn ein Kind eine große intrinsische
Mindestbreite mitbringt. Das Grundprinzip der überlappenden Grid-Items beschreibt
[MDN im Abschnitt zu überlagerten Elementen](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#layering_items_with_z-index).

## Eine Karte mit Content und Badge

Im Beispiel teilen sich ein dekorativer Hintergrund, der eigentliche Inhalt und ein Badge
dieselbe Fläche:

```html
<article class="promo-card pile">
    <div class="promo-card__visual" aria-hidden="true"></div>

    <div class="promo-card__body">
        <h2>Websites, die zum Projekt passen</h2>
        <p>Konzeption und Entwicklung für klare Inhalte und kurze Ladezeiten.</p>
        <a href="/arbeit/">Projekte ansehen</a>
    </div>

    <span class="promo-card__badge">Webentwicklung</span>
</article>
```

Zusätzlich zur `.pile`-Regel erhält die Karte folgende Styles:

```css
.promo-card {
    isolation: isolate;
    overflow: clip;
    border-radius: 0.75rem;
    color: white;
}

.promo-card__visual {
    min-block-size: 18rem;
    background: linear-gradient(135deg, #183c32, #376658);
}

.promo-card__body {
    align-self: end;
    z-index: 1;
    padding: 4rem 1.5rem 1.5rem;
    overflow-wrap: anywhere;
}

.promo-card__badge {
    align-self: start;
    justify-self: end;
    z-index: 2;
    margin: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    background: white;
    color: #183c32;
}
```

`align-self` setzt den Inhalt an den unteren Rand und das Badge nach oben. Mit `justify-self`
rückt das Badge an den rechten Rand. Seine Position ergibt sich aus der gemeinsamen Grid-Fläche.
Der obere Innenabstand des Inhalts reserviert Platz für das Badge.

Der Hintergrund definiert eine **Mindesthöhe**, keine feste Höhe. Wird der Inhalt höher,
wächst die automatisch bemessene Grid-Zeile mit. Der Hintergrund füllt diese Fläche durch
das standardmäßige Stretch-Verhalten aus. Das lässt sich mit einem längeren Absatz oder
einer schmaleren Karte direkt ausprobieren.

## Stapelreihenfolge ohne position relative

`z-index` funktioniert bei Grid-Items auch ohne zusätzliche Positionierung. Die expliziten Werte
halten den Inhalt und das Badge über dem Hintergrund. `isolation: isolate` erzeugt einen eigenen
Stacking Context für die Karte; ihre Ebenen werden dadurch innerhalb dieses Kontexts sortiert.
Die Grundlagen stehen in den MDN-Referenzen zu
[z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/z-index) und
[isolation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/isolation).

Das Grid löst dabei nicht automatisch jede Kollision. Wird das Badge mehrzeilig oder deutlich
höher, muss der reservierte Abstand zum Inhalt dazu passen. Auch ein festes `height` oder
ein erzwungenes Seitenverhältnis kann die gewünschte Flexibilität wieder einschränken.

## Wann absolute Positionierung weiterhin passt

Ein absolut positioniertes Element wird aus dem normalen Layoutfluss genommen und trägt nicht
zur Höhe seines Containers bei. Genau das kann erwünscht sein, etwa bei einem dekorativen
Icon oder einem Element, das an einer bestimmten Ecke verankert werden soll. Die
[position-Referenz](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position)
erklärt dieses Verhalten.

Grid ist besonders hilfreich, wenn mehrere inhaltliche Ebenen dieselbe Fläche teilen und ihre
Größe für das Layout relevant bleiben soll. Absolute Positionierung bleibt passend, wenn
ein Element bewusst unabhängig von dieser Größenberechnung platziert wird.

Die visuelle Überlagerung verändert außerdem weder Lesereihenfolge noch Tastaturnavigation.
Eine sinnvolle DOM-Reihenfolge, erreichbare Links und sichtbare Fokuszustände gehören weiterhin
zur Komponente. Darauf geht [MDN zu Grid und Barrierefreiheit](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Accessibility)
genauer ein.

Für eine Karte mit variablen Inhalten würde ich zuerst die gemeinsame Grid-Zelle ausprobieren.
Ein paar Regeln reichen häufig aus, um Höhe, Ausrichtung und Ebenen miteinander zu verbinden.

---
title: "Container Queries: Komponenten an ihren verfügbaren Platz anpassen"
description: "Mit CSS Container Queries reagieren Komponenten auf ihren verfügbaren Platz. Ein vollständiges Kartenbeispiel zeigt Container, Breakpoint und sinnvollen Fallback."
teaser: "teaser.jpg"
teaserAlt: "Grüne Umrisse einer schmalen und einer breiten Karte neben dem Schriftzug CSS – Container Queries auf hellgrauem Hintergrund."
published: "2026-12-01T16:33:00+01:00"
tags: [ "CSS", "Webentwicklung", "Frontend" ]
draft: false
---

Eine Projektkarte funktioniert im breiten Inhaltsbereich gut: links das Bild, rechts Text und
Link. Dieselbe Karte soll auch in einer schmalen Seitenleiste stehen. Dort braucht sie ein
Layout untereinander – obwohl der Viewport genauso breit ist.

Ein Media Query auf die Fensterbreite kann diese beiden Situationen nicht unterscheiden.
**Container Queries beziehen die Größe eines umgebenden Elements ein.** Damit lässt sich die
Layoutentscheidung näher an der Komponente treffen, die den verfügbaren Platz tatsächlich
nutzen muss.

## Der Container stellt den Bezug her

Für eine Größenabfrage braucht CSS einen passenden Query-Container. Bei einer Karte reicht
meist die Inline-Achse, in der üblichen horizontalen Schreibrichtung also die Breite:

```css
.card-container {
  container: project-card / inline-size;
}
```

Die Kurzschreibweise setzt den Namen `project-card` und `container-type: inline-size`.
Die spätere Query lässt sich dadurch gezielt diesem benannten Container zuordnen. Der Name
ist frei gewählt und muss nicht mit einer CSS-Klasse übereinstimmen.

Die Abfrage wirkt auf dessen **Nachfahren**. Deshalb bekommt die eigentliche Karte einen
Wrapper. Würde die Karte nur sich selbst als Container deklarieren, könnte sie damit nicht
ihr eigenes Layout anhand ihrer eigenen Größe umschalten. Die
[MDN-Dokumentation zu `@container`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@container)
erklärt die Auswahl des passenden Vorfahren und benannte Container genauer.

## Eine Karte mit einem lokalen Breakpoint

Das HTML bleibt für beide Einsatzorte identisch. Die Farbfläche steht hier als dekorativer
Platzhalter für eine Projektabbildung und wird deshalb vor assistiven Technologien verborgen.
Ein inhaltlich relevantes Bild würde ein passendes `alt`-Attribut erhalten.

```html
<div class="card-container">
  <article class="project-card">
    <div class="project-card__visual" aria-hidden="true"></div>
    <div class="project-card__body">
      <h2>Eine Website für das neue Angebot</h2>
      <p>
        Klare Leistungsseiten, kurze Kontaktwege und Inhalte,
        die das Team selbst pflegen kann.
      </p>
      <a href="/arbeit/">Weitere Projekte ansehen</a>
    </div>
  </article>
</div>
```

Die Basis ist eine einspaltige Karte. Ab `36rem` Containerbreite stehen Abbildung und Text
nebeneinander:

```css
.card-container {
  container: project-card / inline-size;
}

.project-card,
.project-card * {
  box-sizing: border-box;
}

.project-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  overflow: clip;
  border: 1px solid #c8d2c8;
  border-radius: 0.75rem;
  background: #f7f7f3;
  color: #252b26;
}

.project-card__visual {
  min-block-size: 10rem;
  background: linear-gradient(135deg, #dce6d8, #91ad96);
}

.project-card__body {
  display: grid;
  align-content: start;
  gap: 0.75rem;
  min-inline-size: 0;
  padding: 1.5rem;
  overflow-wrap: anywhere;
}

.project-card h2,
.project-card p {
  margin: 0;
}

@container project-card (min-width: 36rem) {
  .project-card {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
  }

  .project-card__visual {
    min-block-size: 14rem;
  }
}
```

`36rem` ist ein Beispielwert. Sinnvoll ist die Schwelle, ab der die konkreten Inhalte genügend
Platz für zwei Spalten haben. Sie muss nicht einem üblichen Geräte-Breakpoint entsprechen.

Bei einem `20rem` breiten Wrapper bleibt die Karte einspaltig. In einem `44rem` breiten Wrapper
wechselt sie in die zweispaltige Variante. Beides kann gleichzeitig auf derselben Seite
passieren. Die Karte braucht dafür keine Variantenklasse wie `is-sidebar` und kein JavaScript.

## Woher der Container seine Größe bekommt

Der Wrapper erhält seinen Platz weiterhin vom äußeren Layout, beispielsweise von einer
Grid-Spalte oder als Blockelement im Inhaltsbereich. Container Queries übernehmen diese
Aufgabe nicht. Sie reagieren auf den Platz, den das Seitenlayout bereits zugeteilt hat.

`inline-size` richtet dafür Größen-Containment auf der Inline-Achse ein. Vereinfacht gesagt
sollen die Inhalte die abgefragte Größe nicht selbst bestimmen. Dadurch werden wechselseitige
Abhängigkeiten zwischen Containergröße und abgefragtem Layout vermieden. Bei inhaltsabhängig
dimensionierten Grid- oder Flex-Layouts lohnt sich deshalb ein genauer Blick darauf, wie der
Wrapper seine Breite erhält.

`container-type: size` bezieht zusätzlich die Block-Achse ein. Für diese Karte wäre das unnötig;
ihre Höhe soll weiterhin mit dem Inhalt wachsen. Die Unterschiede beschreibt
[MDN zu `container-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/container-type).

## Basislayout und tatsächliche Inhalte prüfen

Die einspaltige Darstellung ist zugleich der Fallback: Wenn ein Browser die Container Query
nicht auswertet, bleiben Text und Link unterhalb der Farbfläche zugänglich. Eine zusätzliche
Abfrage mit `@supports` ist für dieses Beispiel nicht nötig.

Beim Prüfen würde ich zwei Instanzen mit unterschiedlichen Containerbreiten nebeneinander
setzen. Dazu gehören lange Überschriften, mehr Text und vergrößerte Schrift. Der Breakpoint
entscheidet nur über die Spaltenzahl; lesbare Zeilen, Umbrüche und ausreichender Platz für
Links bleiben eigene Anforderungen. Die DOM-Reihenfolge bleibt beim Layoutwechsel erhalten.

Media Queries bleiben sinnvoll, etwa für das Seitenlayout oder Nutzereinstellungen wie
`prefers-reduced-motion`. Container Queries ergänzen sie dort, wo eine wiederverwendbare
Komponente auf ihren Einsatzort reagieren soll.

Das passt auch zum [Pile Pattern mit CSS Grid](/blog/css-pile-pattern/): Dort geht es um das
Überlagern von Elementen, hier um die Anpassung an verfügbaren Platz. Beides lässt sich mit
überschaubarem CSS direkt in einer Komponente ausdrücken.

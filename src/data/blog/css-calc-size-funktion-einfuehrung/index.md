---
title: "Überblick zur neuen CSS-Funktion calc-size()"
description: "Entdecke die neue experimentelle CSS-Funktion calc-size(), die Berechnungen auf intrinsischen Größen wie auto und fit-content ermöglicht. Erfahre, wie sie flexiblere Layouts und dynamische Animationen unterstützt und welchen Einfluss sie auf moderne Webentwicklung haben könnte."
teaser: "teaser.jpg"
teaserAlt: "Snippetauszug"
published: "2024-12-16T00:00"
tags: [ "CSS", "calc-size", "Technologie" ]
---

Die Webentwicklung entwickelt sich ständig weiter, und CSS bleibt ein zentraler Bestandteil moderner Frontend-Technologien. Eine der spannendsten neuen Funktionen, die experimentell eingeführt wurde, ist die `calc-size()`-Funktion. Sie ermöglicht es, Berechnungen auf intrinsischen Größen wie `auto`, `fit-content` und `max-content` durchzuführen — etwas, das mit der bisherigen `calc()`-Funktion nicht möglich war. In diesem Beitrag werfen wir einen genaueren Blick auf `calc-size()` und erkunden, wie es genutzt werden kann.

## Was ist `calc-size()`?
Die `calc-size()`-Funktion ist speziell darauf ausgelegt, Berechnungen auf intrinsischen Größen vorzunehmen. Intrinsische Größen sind Werte, die sich aus dem natürlichen Inhalt oder Layout eines Elements ergeben, z. B. `auto` oder `fit-content`.

Ein Beispiel für den Einsatz von `calc-size()`:

```css
section {
  width: calc-size(fit-content, size + 6rem);
  height: calc-size(auto, size * 2);
}
```

In diesem Beispiel wird die Breite des Abschnitts auf die natürliche Größe (`fit-content`) plus 6rem gesetzt. Die Höhe wird verdoppelt, ausgehend von ihrer intrinsischen Größe (`auto`).

## Syntax
Die Grundsyntax der Funktion ist:

```css
calc-size(<calc-size-basis>, <calc-sum>)
```

### Parameter
1. **`<calc-size-basis>`**: Der Ausgangswert, der berechnet werden soll. Dies kann einer der folgenden intrinsischen Werte sein:
    - `auto`
    - `min-content`
    - `max-content`
    - `fit-content`
    - `content` (bei Flex-Layouts).

2. **`<calc-sum>`**: Der Ausdruck, der die Berechnung beschreibt. Hier können mathematische Operationen (+, -, *, /) und Funktionen wie `round()` verwendet werden.

Ein Beispiel für eine erweiterte Berechnung:

```css
height: calc-size(auto, round(up, size, 50px));
```

In diesem Fall wird die intrinsische Höhe auf den nächsten 50px-Schritt aufgerundet.

## Anwendungsfälle
Die Möglichkeiten von `calc-size()` sind vielfältig, insbesondere bei Layouts, die auf dynamische Inhalte reagieren. Zwei besonders interessante Szenarien sind:

### 1. **Berechnungen auf Basis von intrinsischen Größen**
`calc-size()` ist nützlich, wenn man Größen dynamisch anpassen möchte, ohne den natürlichen Fluss des Inhalts zu beeinträchtigen. Zum Beispiel:

```css
section {
  width: calc-size(max-content, size * 0.7);
}
```

Hier wird die Breite auf 70 % der maximalen natürlichen Größe gesetzt.

### 2. **Animationen mit intrinsischen Größen**
Eine der spannendsten Fähigkeiten von `calc-size()` ist die Möglichkeit, Animationen zwischen intrinsischen Größen und berechneten Werten zu erstellen. Ein Beispiel:

```css
@keyframes expand {
  from {
    width: fit-content;
  }
  to {
    width: calc-size(fit-content, size + 4rem);
  }
}
```

Hier wird die Breite animiert, ausgehend von der natürlichen Größe `fit-content` zu einer um 4rem erweiterten Größe.

## Einschränkungen
Da `calc-size()` noch experimentell ist, sollte es nur mit Vorsicht in Produktionsprojekten eingesetzt werden. Die Browserkompatibilität variiert, und die Funktion könnte sich in zukünftigen CSS-Spezifikationen noch ändern.

Prüfe die Unterstützung und nutze Polyfills oder Fallback-Lösungen, wenn notwendig.

## Fazit
Die `calc-size()`-Funktion erweitert die Fähigkeiten von CSS, indem sie Berechnungen auf intrinsischen Größen erlaubt und Animationen dynamischer gestaltet. Mit dieser Funktion können Entwickler flexiblere Layouts erstellen und dabei natürliche Inhaltsflüsse berücksichtigen. Trotz ihres experimentellen Status zeigt `calc-size()`, wie CSS sich weiterentwickelt, um modernen Anforderungen gerecht zu werden.


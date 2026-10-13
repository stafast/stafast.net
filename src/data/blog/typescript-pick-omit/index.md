---
title: "Pick und Omit in TypeScript: Typen gezielt ableiten"
description: "Komponenten-Props und Create-Inputs aus bestehenden Typen ableiten: Wann Pick und Omit passen, wie sie auf Modelländerungen reagieren und wo ihre Grenzen liegen."
teaser: "teaser.jpg"
teaserAlt: "Blaues TypeScript-Logo über den Schriftzügen TypeScript und Pick & Omit auf einem hellen Hintergrund."
published: "2026-10-13T00:00:00+02:00"
tags: [ "TypeScript", "Webentwicklung", "Technologie" ]
draft: false
---

Eine Teaser-Komponente braucht keinen vollständigen Blogartikel. Eine Funktion zum Anlegen eines Artikels
braucht wiederum keine ID oder Zeitstempel, die erst beim Speichern entstehen. Mit `Pick` und `Omit` lassen
sich passende Typen aus einem gemeinsamen Modell ableiten, ohne dessen Feldtypen mehrfach zu definieren.

```ts
type Article = {
    readonly id: string;
    title: string;
    slug: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
};
```

## Pick für gezielte Abhängigkeiten

Für eine Teaser-Komponente wählen wir die benötigten Properties explizit aus:

```ts
type ArticleTeaserProps = Pick<Article, "title" | "slug">;
```

Die Komponente benötigt damit nur `title` und `slug`. Deren Typen bleiben an `Article` gekoppelt;
zusätzliche Properties im Modell erweitern die Props nicht automatisch.

## Omit für Varianten eines Modells

Für eine interne `createArticle`-Funktion sollen alle redaktionellen Felder erhalten bleiben.
Die Persistenzschicht vergibt ID und Zeitstempel:

```ts
type CreateArticleInput = Omit<
    Article,
    "id" | "createdAt" | "updatedAt"
>;
```

Der Input enthält `title`, `slug` und `body`. `Omit` ist hier passend, solange die Funktion bewusst
alle übrigen Felder des Modells übernehmen soll.

Entscheidend ist deshalb nicht nur, welche Schreibweise kürzer ist. Ergänzt jemand später ein
`internalNote: string` in `Article`, wird es automatisch Teil von `CreateArticleInput` und dort zum
Pflichtfeld. `ArticleTeaserProps` bleibt unverändert. Für stabile API-Verträge oder eng begrenzte
Komponenten-Props ist eine explizite Auswahl mit `Pick` häufig die bessere Entscheidung.

Ein Detail bei Refactorings: `Pick` verlangt Keys aus `keyof Article`. `Omit` akzeptiert auch unbekannte
Keys. Ein Tippfehler im ausgeschlossenen Property-Namen kann deshalb unbemerkt bleiben, während das
eigentlich auszuschließende Feld weiterhin im Typ enthalten ist.

## Typableitung ist keine Datenprojektion

Ein vollständiger `Article` ist einem `ArticleTeaserProps`-Typ strukturell zuweisbar.
Die zusätzlichen Properties verschwinden dabei nicht. Auch `Omit` entfernt keine Daten zur Laufzeit;
die Typinformationen werden beim Kompilieren gelöscht. Das beschreibt das Handbook unter
[Erased Types](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#erased-types).

Soll beispielsweise eine Response tatsächlich nur die Teaser-Felder enthalten, braucht es eine
explizite Projektion:

```ts
function toArticleTeaser(article: Article): ArticleTeaserProps {
    return {
        title: article.title,
        slug: article.slug,
    };
}
```

`Pick` und `Omit` beschreiben die gewünschte Form auf Typebene. Welche Daten eine Funktion zurückgibt
oder eine API überträgt, entscheidet weiterhin der ausführbare Code.

Weitere Beispiele liefert die [Dokumentation zu Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html).

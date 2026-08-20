---
title: "Preloading von FontSource-Schriften"
description: "Erfahre, wie du das Preloading von Schriften mit FontSource optimierst, um Sprungeffekte zu vermeiden und die Performance deiner Website zu verbessern."
teaser: "teaser.jpg"
teaserAlt: "Snippetauszug"
published: "2024-11-04T00:00:00"
tags: [ "Preload", "Font", "Performance", "Technologie" ]
---

Beim Einbinden von Schriftarten kann es zu einem unschönen Effekt kommen, wenn der Besucher die Schriftart nicht bereits
auf seinem Endgerät hat. Der Browser muss die Schrift erst herunterladen, was einen Moment dauern kann und zu einem
„Flicker“- oder „Flash of Unstyled Text“ (FOUT) führen kann. Dies sieht unprofessionell aus und beeinträchtigt das
Nutzererlebnis.

Um dieses Problem zu vermeiden, lässt sich die `preload`-Anweisung verwenden, die es dem Browser ermöglicht, die
benötigte
Schriftart bereits im Voraus zu laden.

Hier ein Beispiel für das Preloading der Schrift „Noto Sans“:

```js title="src/app.js"  ins={2,7}
import '@fontsource-variable/noto-sans';
import notoSansWoff2 from '@fontsource-variable/noto-sans/files/noto-sans-latin-wght-normal.woff2?url';

const App = () => {
    return (
        <head>
            <link rel="preload" as="font" type="font/woff2" href={notoSansWoff2} crossorigin="anonymous"/>
        </head>
    );
};
```

In diesem Beispiel importieren wir die Schriftart „Noto Sans“ über das `@fontsource`-Paket und nutzen das
`preload`-Attribut, um die Schriftart im Voraus zu laden, bevor sie tatsächlich auf der Seite angezeigt wird. So wird die
Schriftart schneller angezeigt und verhindert den oben beschriebenen Sprungeffekt.

Das Preloading trägt dazu bei, die Performance deiner Website zu verbessern, da es die Ladezeiten verkürzt und das
Nutzererlebnis optimiert.
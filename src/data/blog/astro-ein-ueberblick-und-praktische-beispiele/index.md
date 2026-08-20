---
title: "Astro: Ein Überblick und praktische Beispiele"
description: "Astro ist ein leistungsstarkes Web-Framework, das schnelle Webseiten mit minimalem JavaScript ermöglicht. In diesem Artikel erhältst du einen Überblick und praktische Codebeispiele, um sofort loszulegen und die Performance deiner Website zu steigern."
teaser: "teaser.jpg"
teaserAlt: "Astro Framework Logo"
published: "2024-09-02T00:00:00"
tags: [ "Astro", "Framework", "JavaScript", "Technologie" ]
---

Astro ist ein modernes Web-Framework, das es ermöglicht, schnelle und performante Webseiten zu bauen. Es verwendet eine
innovative "Island Architecture", bei der nur das nötigste JavaScript auf der Seite geladen wird, was zu extrem
schnellen Ladezeiten führt. In diesem Artikel gebe ich dir einen Überblick über Astro und zeige dir, wie du mit
praktischen Codebeispielen schnell loslegen kannst.

## Was ist Astro?

Astro ist ein Static Site Generator, der darauf ausgelegt ist, sehr schnelle Webseiten zu erstellen. Das Besondere
daran: Es erlaubt dir, verschiedene Frameworks wie React, Vue, Svelte oder sogar Vanilla JS zu kombinieren. Zudem ist
Astro sehr flexibel, sodass du nur die Komponenten und Features einbinden musst, die du tatsächlich benötigst. Das
bedeutet weniger JavaScript, schnellere Ladezeiten und eine bessere Performance.

### Vorteile von Astro:

* **Performance:** Nur der notwendige JavaScript-Code wird geladen, was die Seite schnell und ressourcenschonend macht.
* **Flexibilität:** Du kannst verschiedene Frameworks und Technologien in einem Projekt kombinieren.
* **Weniger JavaScript:** Astro lädt nur das nötigste JavaScript für interaktive Komponenten, was die Seite schlanker
  und schneller macht.
* **Erleichterte Nutzung von Markdown und Content-Management-Systemen:** Besonders nützlich für Blogs und Websites mit
  viel Inhalt.

---

## Praktische Beispiele

Hier zeige ich dir, wie du einige der Funktionen von Astro in deinem Projekt nutzen kannst. Diese Beispiele sind leicht
verständlich und helfen dir, schnell in Astro einzutauchen.

### 1. **Dynamische Daten aus einer Markdown-Datei einbinden**

Astro ermöglicht es dir, Inhalte aus Markdown-Dateien zu nutzen, was besonders praktisch für Blogs und Content-Seiten
ist. Du kannst Inhalte speichern und sie dynamisch in deine Seiten integrieren.

#### Beispiel:

1. Erstelle eine `article.md` Datei:

```markdown
---
title: "Astro: Einblicke in die Zukunft der Webentwicklung"
date: "2024-10-05"
author: "Max Mustermann"
---

# Einführung in Astro

Astro ist ein Framework für die Erstellung schneller Webseiten. In diesem Artikel werfen wir einen Blick auf die
Vorteile von Astro und wie du es einsetzen kannst.
```

2. Binde die Markdown-Datei in deine Astro-Seite ein:

``` astro
---
import { Markdown } from '@astro/components';
import article from '../content/article.md';

const { title, date, author, default: content } = article;
---

<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>{title}</title>
  </head>
  <body>
    <header>
      <h1>{title}</h1>
      <p>{date} - {author}</p>
    </header>

    <section>
      <Markdown>{content}</Markdown>
    </section>
  </body>
</html>
```

### 2. Verwendung von Teilkomponenten

Mit Astro kannst du wiederverwendbare Komponenten erstellen, um deinen Code modular und wartbar zu halten. Zum Beispiel
könntest du einen Header erstellen, der auf allen Seiten deiner Website angezeigt wird.

#### Beispiel:

1. Erstelle eine Header-Komponente:

```astro
---
const { title } = Astro.props;
---

<header>
  <h1>{title}</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">Über uns</a></li>
      <li><a href="/contact">Kontakt</a></li>
    </ul>
  </nav>
</header>
```

2. Verwende die Komponente auf deiner Seite:

```astro
---
import Header from '../components/Header.astro';
---

<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Meine Website</title>
  </head>
  <body>
    <Header title="Willkommen auf meiner Website!" />

    <section>
      <h2>Meine erste Astro-Seite</h2>
      <p>Astro hilft dir, performante Seiten zu bauen!</p>
    </section>
  </body>
</html>
```

### 3. API-Daten abrufen und anzeigen

Astro ermöglicht es dir, API-Daten während der Build-Zeit abzurufen, was zu einer schnellen Ladezeit führt. Du kannst
beispielsweise Wetterdaten von einer öffentlichen API abfragen.

#### Beispiel:

```astro
---
const weatherData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=dein-api-schlüssel')
  .then(response => response.json())
  .catch(error => console.error(error));

const temperature = weatherData ? weatherData.main.temp : null;
const city = weatherData ? weatherData.name : 'Unbekannt';
---

<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Wettervorhersage</title>
  </head>
  <body>
    <header>
      <h1>Wetter in {city}</h1>
    </header>

    <section>
      {temperature ? (
        <p>Die aktuelle Temperatur ist {Math.round(temperature - 273.15)}°C.</p>
      ) : (
        <p>Es konnte keine Wettervorhersage geladen werden.</p>
      )}
    </section>
  </body>
</html>
```

---

### Fazit

Astro ist ein leistungsstarkes Tool für die Erstellung von schnellen, modernen Webseiten. Durch die Verwendung von
Komponenten, die Integration von API-Daten und die Möglichkeit, Markdown und CSS-in-JS zu nutzen, kannst du deine
Projekte effizient gestalten und die Ladezeiten optimieren. Dank der Flexibilität von Astro hast du die Wahl, genau die
Tools zu nutzen, die du benötigst – und das alles ohne unnötigen Ballast. Wenn du dich weiter in Astro einarbeitest,
wirst du sehen, wie einfach es ist, leistungsstarke und wartbare Webseiten zu erstellen.

Wenn du Hilfe bei der Umsetzung von Projekten benötigst oder Fragen hast, stehe ich als Freelancer gerne
zur Verfügung!
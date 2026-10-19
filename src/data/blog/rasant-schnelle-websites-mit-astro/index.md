---
title: "Rasant schnelle Websites mit Astro"
description: "Wie Astro schnelle Unternehmenswebsites ermöglicht: wenig JavaScript, optimierte Bilder und eine Architektur, die zu Inhalt, Redaktion und Funktionen passt."
teaser: "teaser.jpg"
teaserAlt: "Weißes Astro-Logo in einer dunkelblauen Weltraum-Illustration mit zwei Planeten und einer Sternschnuppe."
published: "2026-11-20T16:33:00+01:00"
tags: [ "Astro", "Performance", "Webentwicklung" ]
draft: false
---

Eine Unternehmenswebsite soll schnell zeigen, was angeboten wird, Vertrauen schaffen und den
Weg zur nächsten Handlung öffnen. Gerade auf dem Smartphone müssen Inhalte früh sichtbar sein,
Links reagieren und Formulare zuverlässig funktionieren. Eine gute Gestaltung braucht dafür
eine passende technische Grundlage.

**Astro ist für viele solcher Websites eine sinnvolle Wahl.** Das Framework setzt auf bereits
gerendertes HTML und lädt JavaScript für interaktive Funktionen gezielt dazu. Das passt zu
Unternehmensseiten, Landingpages, Blogs und Portfolios, deren Hauptaufgabe die Vermittlung
von Inhalten ist. Diese Ausrichtung beschreibt die
[Astro-Dokumentation](https://docs.astro.build/en/concepts/why-astro/).

Auch meine eigene Website läuft mit Astro. Entscheidend sind dabei mehrere konkrete Entscheidungen:
wie die Seiten gerendert werden, welche Funktionen im Browser laufen und welche Dateien
Besucher tatsächlich herunterladen müssen.

## Eine schnelle Website muss zum Geschäft passen

Für ein Unternehmen zählt, ob Besucher das Angebot verstehen und eine passende Anfrage stellen
können. Eine Leistungsseite sollte deshalb konkret zeigen, für wen das Angebot gedacht ist,
welches Problem es löst und wie eine Zusammenarbeit aussieht. Projektbeispiele geben dieser
Aussage Substanz. Ein gut erreichbarer Kontakt macht den nächsten Schritt einfach.

Für einen Relaunch würde ich einen solchen Nutzerweg zuerst durchplanen: von der passenden
Einstiegsseite über die Leistung und ein Projektbeispiel bis zur Anfrage. Darauf lassen sich
Navigation, Seitenstruktur und technische Funktionen ausrichten. Die Performance-Ziele gehören
in dieselbe Planung. So bekommt jede Optimierung einen Zweck, der sich am tatsächlichen
Angebot und an den Bedürfnissen der Besucher orientiert.

## Inhalte vor dem Seitenaufruf vorbereiten

Bei einer statischen Astro-Website werden die Seiten während des Builds als HTML erzeugt.
Die fertigen Dateien können anschließend über ein CDN ausgeliefert werden. Für Texte, Bilder
und Navigation muss beim Aufruf keine Anwendung im Browser erst die vollständige Seite aufbauen.

Meine Website verwendet dieses Modell. In der Konfiguration ist es ausdrücklich angegeben:

```js title="astro.config.mjs"
import { defineConfig } from "astro/config";

export default defineConfig({
    output: "static",
});
```

Statisches Rendering ist bei Astro die Voreinstellung. Wenn Inhalte pro Anfrage berechnet
werden müssen, unterstützt Astro auch serverseitiges Rendering mit einem passenden Adapter.
Beide Ansätze lassen sich innerhalb eines Projekts einsetzen, wie die
[Dokumentation zum Rendering auf Anfrage](https://docs.astro.build/en/guides/on-demand-rendering/)
zeigt.

Für Unternehmen hängt die Entscheidung vor allem davon ab, wie aktuell und wie individuell
Inhalte sein müssen. Leistungsseiten und veröffentlichte Blogartikel lassen sich gut vorbereiten.
Eine persönliche Kontoseite oder eine tagesaktuelle Verfügbarkeitsprüfung hat andere Anforderungen.

## JavaScript nach dem tatsächlichen Bedarf laden

Eine Leistungsbeschreibung benötigt keine reaktive Oberfläche. Ein Preisrechner dagegen schon.
Astro behandelt solche interaktiven Bereiche als sogenannte Islands. Ein Framework wie Vue
oder React kann für diese einzelne Komponente eingesetzt werden, während die umgebende Seite
als HTML ausgeliefert wird.

Entwickler legen über `client:*`-Direktiven fest, wann solche Komponenten geladen und hydriert
werden. `client:load` passt zu sofort benötigter Interaktion. `client:visible` kann für einen
interaktiven Bereich weiter unten auf der Seite sinnvoll sein. Die
[Islands-Dokumentation](https://docs.astro.build/en/concepts/islands/)
erläutert diesen Ansatz.

Für einfache Funktionen reicht häufig ein kleines Script. Das mobile Menü meiner Website
arbeitet beispielsweise mit einem eigenen Script statt mit einem zusätzlichen UI-Framework.
Auch Animationen und andere Komfortfunktionen bringen aber JavaScript mit. Jede davon sollte
einen erkennbaren Nutzen haben und im ausgelieferten Bundle überprüft werden.

## Bilder passend ausliefern

Ein großes Bild kann trotz schlanker Architektur den Seitenaufbau dominieren. Deshalb gehören
Bildgröße, Format und Ladepriorität zur Umsetzung. Astro bietet dafür `Image` und `Picture`
aus `astro:assets`. Bei lokalen Bildern kann das Framework Größeninformationen übernehmen
und optimierte Varianten erzeugen.

Ein Beispiel für ein früh sichtbares, wichtiges Bild:

```astro
---
import { Image } from "astro:assets";
import portrait from "@/assets/images/me.jpg";
---

<Image
    src={portrait}
    alt="Porträt von André Stafast"
    layout="constrained"
    width={960}
    format="webp"
    loading="eager"
    fetchpriority="high"
    class="portrait"
/>

<style>
    .portrait {
        max-inline-size: 100%;
        block-size: auto;
    }
</style>
```

Das responsive Layout erzeugt `srcset` und `sizes`, damit der Browser eine passende Bildvariante
wählen kann. Die ausgegebenen Abmessungen helfen, den benötigten Platz früh zu reservieren.
`sizes` und die tatsächliche Darstellung sollten zusammenpassen. Details liefert die
[Astro-Dokumentation zu Bildern](https://docs.astro.build/en/guides/images/).

`loading="eager"` und eine hohe Priorität sind für wichtige Bilder im ersten sichtbaren Bereich
gedacht. Bilder weiter unten können verzögert laden. Auf meiner Website werden beispielsweise
die Blogvorschaubilder lazy geladen und als WebP ausgegeben. Die Titelbilder der Artikel werden
dagegen früh angefordert.

## Fonts und Navigation gehören ebenfalls dazu

Ich liefere die Schriften meiner Website lokal aus. Für wichtige Fonts kann ein Preload helfen,
den Download früh anzustoßen. Zusätzliche Schriftfamilien und Varianten brauchen dennoch
Bandbreite. Hier lohnt es sich, Auswahl und tatsächlich verwendete Dateien zu prüfen, statt
vorsorglich jede Variante vorzuladen.

Für interne Links nutze ich Astro-Prefetch mit der Strategie `viewport`. Ausgewählte Zielseiten
können damit vorbereitet werden, sobald ihre Links sichtbar werden. Das kann die weitere
Navigation beschleunigen, verursacht aber zusätzliche Requests und Datenübertragung. Es sollte
gezielt eingesetzt werden. Mehr dazu steht in der
[Prefetch-Dokumentation](https://docs.astro.build/en/guides/prefetch/)
und meinem [Beitrag zu Prefetch](/blog/performance-boost-mit-prefetch/).

## Performance an der Nutzung messen

Für eine neue Website würde ich konkrete Performance-Ziele vereinbaren. Die Core Web Vitals
bilden drei Aspekte ab:

| Messgröße | Was sie erfasst | Guter Bereich |
| --- | --- | --- |
| LCP | Wann das größte sichtbare Inhaltselement dargestellt wird | höchstens 2,5 Sekunden |
| INP | Wie schnell die Seite auf Interaktionen reagiert | höchstens 200 Millisekunden |
| CLS | Wie stark sich sichtbare Inhalte unerwartet verschieben | höchstens 0,1 |

Diese Zielwerte beziehen sich auf das 75. Perzentil der gemessenen Seitenaufrufe und sind in der
[Web-Vitals-Dokumentation](https://web.dev/articles/vitals)
beschrieben. Es geht also um die Erfahrung der Besucher unter ihren jeweiligen Bedingungen.

Lighthouse und die Browser-DevTools helfen während der Entwicklung, Ursachen wie große Bilder,
lange Script-Ausführung oder Layoutsprünge aufzuspüren. Nach dem Start ergänzen verfügbare
Felddaten die Prüfung. Besonders wichtig sind typische Mobilgeräte und echte Abläufe, etwa
das Öffnen der Navigation oder das Absenden eines Formulars.

## Wann Astro zu einem Unternehmensprojekt passt

Astro passt aus meiner Sicht besonders gut, wenn Inhalte, Auffindbarkeit und eine klare
Navigation im Mittelpunkt stehen. Dazu gehören Unternehmenswebsites, Angebotsseiten,
Kampagnen, redaktionelle Angebote und Portfolios mit überschaubaren interaktiven Funktionen.

Steht dagegen eine umfangreiche Anwendung mit ständig wechselnden Zuständen, vielen
angemeldeten Nutzern oder Zusammenarbeit in Echtzeit im Mittelpunkt, würde ich die Architektur
gesondert bewerten. Der konkrete Funktionsumfang entscheidet, welche Werkzeuge passen.

## Inhalte selbst pflegen mit Keystatic und anderen CMS

Auch bei einer Astro-Website kann die Redaktion Texte und Bilder über eine Oberfläche pflegen.
Astro ist das Webframework; das Redaktionssystem wird dazu passend ausgewählt. Die
[CMS-Dokumentation](https://docs.astro.build/en/guides/cms/)
zeigt verschiedene Anbindungen.

**Keystatic** ist eine interessante Option für Inhalte, die als Dateien im Projekt liegen sollen.
Entwickler definieren Collections und deren Felder; Redakteure bearbeiten die Inhalte anschließend
in einer Admin-Oberfläche. Die Daten können lokal oder direkt in GitHub gespeichert werden.
Damit lassen sich Inhalte in einen bestehenden Git- und Veröffentlichungsablauf einbinden.
Die [Astro-Integration](https://keystatic.com/docs/installation-astro)
und der [GitHub-Modus](https://keystatic.com/docs/github-mode)
beschreiben die Einrichtung. Für einen online erreichbaren Editor muss dessen serverseitiger
Betrieb mitgeplant werden. Die öffentlichen Inhaltsseiten können trotzdem vorgerendert bleiben.

Wenn eine visuelle Bearbeitung direkt an der Seitenvorschau wichtig ist, würde ich beispielsweise
**Storyblok** prüfen. Die [Astro-Anbindung mit Visual Preview](https://www.storyblok.com/docs/quickstarts/astro/visual-preview)
verknüpft Seitenbausteine mit dem Editor. **Sanity** bietet mit seinem Studio eine weitere
Redaktionsoberfläche und unterstützt ebenfalls
[Vorschau und visuelle Bearbeitung mit Astro](https://www.sanity.io/docs/astro).

Welche Lösung passt, hängt von der Redaktion ab: Zahl der Bearbeiter, benötigte Freigaben,
Mehrsprachigkeit, Medien und Vorschau sind wichtige Auswahlkriterien. Dazu kommen laufende
Kosten, Hosting und der Zeitpunkt, zu dem eine Änderung öffentlich werden soll. Diese Fragen
würde ich gemeinsam mit dem Team anhand eines typischen Beitrags oder einer Leistungsseite
durchgehen, bevor das System feststeht.

## So würde ich einen Relaunch angehen

Am Anfang stehen die vorhandene Website, die Ziele des Unternehmens und die Inhalte, die
Besucher tatsächlich brauchen. Daraus entsteht ein klarer Umfang: benötigte Seitentypen,
Redaktionsoberfläche, Schnittstellen und die wichtigsten Funktionen.

Anschließend würde ich einen repräsentativen Seitenentwurf mit echten Texten, Bildern und
dem vorgesehenen Kontaktweg umsetzen. Daran lassen sich Gestaltung, mobile Bedienung,
Redaktionsablauf und Performance früh prüfen. Vor der Veröffentlichung gehören außerdem
Weiterleitungen bestehender URLs und ein getesteter Veröffentlichungsprozess dazu. Nach dem
Start wird anhand der vereinbarten Ziele weiter optimiert.

Astro bringt für viele dieser Websites eine gute Grundlage mit. Wie schnell die fertige Seite
ist, hängt zusätzlich von Bildern, Scripts, Hosting und der weiteren Pflege ab. Eine passende
Redaktionsoberfläche sorgt dafür, dass das Unternehmen seine Inhalte auch langfristig
selbstständig aktuell halten kann.

Wenn du einen Relaunch planst, [erzähl mir von deiner Website](/kontakt/).
Mit der bisherigen URL, deinen Zielen und den Anforderungen an die Redaktion können wir
einschätzen, welche Umsetzung zu deinem Projekt passt.

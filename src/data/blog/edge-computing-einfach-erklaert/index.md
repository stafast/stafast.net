---
title: "Was ist Edge-Computing? Verständlich erklärt"
description: "Edge-Computing bringt Daten und Rechenleistung näher an die Nutzer. Ich erkläre, wie das funktioniert und warum ich Cloudflare dafür einsetze."
teaser: "teaser.jpg"
teaserAlt: "Illustration einer Weltkugel, die über verteilte Edge-Server eine Website an Laptop und Smartphone ausliefert."
published: "2026-08-20T00:00:00"
updated: "2026-08-22T00:00:00"
tags: [ "Edge-Computing", "Cloudflare", "Performance", "Technologie" ]
---

Wenn wir von der Cloud sprechen, klingt das oft so, als würden Daten irgendwo unsichtbar im Internet liegen. Tatsächlich
stehen dahinter reale Rechenzentren. Beim Aufruf einer Website müssen Texte, Bilder und andere Dateien von dort zum
Endgerät gelangen. Edge-Computing verkürzt diesen Weg, indem Daten und Rechenleistung näher an den Ort gebracht werden,
an dem sie benötigt werden.

## Was bedeutet „Edge“?

„Edge“ bedeutet übersetzt „Rand“. Gemeint ist die Infrastruktur am Rand eines Netzwerks, möglichst nah an den
Nutzer*innen oder an der Quelle der Daten. Das kann ein regionales Rechenzentrum, aber auch ein Smartphone oder ein
vernetztes Gerät sein.

Das Prinzip ähnelt einem Handelsunternehmen mit regionalen Verteilzentren: Bestellungen müssen nicht immer aus einem
einzigen zentralen Lager kommen. Beim Edge-Computing werden zwar keine Pakete verteilt, Inhalte und Berechnungen aber
ebenfalls dort bereitgestellt, wo sie schneller verfügbar sind.

![Vergleich einer zentralen Serverarchitektur mit langen Datenwegen und Edge-Computing mit mehreren nahen Serverstandorten.](./edge-computing-vergleich.jpg)

*Vereinfacht dargestellt: Links versorgt ein zentraler Server alle Endgeräte über lange Wege. Rechts übernehmen nahe
Edge-Standorte die Auslieferung. In der Praxis liegt nicht automatisch jede Datei dauerhaft auf jedem Edge-Server.*

## Ist Edge-Computing dasselbe wie die Cloud?

Edge-Computing ersetzt die Cloud nicht zwangsläufig, sondern ergänzt sie. Datenbanken und zentrale Systeme können in
einem klassischen Rechenzentrum bleiben, während der Netzwerkrand zeitkritische Aufgaben übernimmt.

Bei statischen Websites werden beispielsweise HTML-Dateien, Bilder und Stylesheets an mehreren Standorten
zwischengespeichert. Dieses Prinzip kennt man von einem Content Delivery Network, kurz CDN. Edge-Computing kann darüber
hinaus auch Programmcode am Netzwerkrand ausführen, etwa um eine Anfrage zu prüfen oder Inhalte anzupassen.

## Wo liegen die Daten konkret?

Bei dieser Website lässt sich der Weg in drei Schritte aufteilen:

1. **Der Quellcode liegt auf GitHub.** Besucher*innen rufen die Website aber nicht direkt von dort ab.
2. **Cloudflare erstellt daraus ein Deployment.** Bei einer Änderung zieht Cloudflare den aktuellen Stand, baut die
   fertige Website und übernimmt das Ergebnis in seine Infrastruktur.
3. **Die Dateien werden am Netzwerkrand zwischengespeichert.** Beim Aufruf landet die Anfrage in einem geeigneten
   Cloudflare-Rechenzentrum. Ist eine Datei dort bereits im Cache, wird sie direkt ausgeliefert. Fehlt sie, lädt
   Cloudflare sie nach und kann sie anschließend vor Ort zwischenspeichern.

Die Website liegt damit weder nur auf einem einzelnen klassischen Server noch dauerhaft vollständig auf jedem
Cloudflare-Server. Häufig abgerufene Dateien können an vielen Standorten im Cache liegen. Nicht mehr benötigte Dateien
werden wieder entfernt und bei Bedarf neu geladen. Cloudflare
[verwaltet diesen Cache pro Rechenzentrum](https://developers.cloudflare.com/pages/configuration/serving-pages/),
statt jede Website dauerhaft hunderte Male vollständig zu speichern.

## Bringt das mit schnellem Internet noch etwas?

Ein schneller Internetanschluss ermöglicht vor allem die Übertragung großer Datenmengen. Er beseitigt aber weder die
geografische Entfernung noch die Laufzeit einer Anfrage. Diese Verzögerung wird als
[Latenz](https://www.cloudflare.com/de-de/learning/performance/glossary/what-is-latency/) bezeichnet.

Eine Website besteht außerdem nicht aus einem einzigen Download. Der Browser fordert HTML, Schriften, Stylesheets,
Skripte und Bilder an. Moderne Protokolle wie HTTP/2 und HTTP/3 machen diese Kommunikation effizienter, trotzdem kostet
jeder Weg durch das Netz Zeit. Wird ein Inhalt aus einem nahe gelegenen Cache geliefert, fällt die lange Strecke zum
ursprünglichen System weg.

Wie groß der Unterschied ist, hängt vom Projekt ab. Bei einer kleinen Website mit einem ohnehin nahen Server kann er
kaum auffallen. Bei internationalen Zugriffen, mobilen Verbindungen, vielen Dateien oder einem weit entfernten Ursprung
kann der Effekt deutlich sein. Gleichzeitig werden zentrale Systeme entlastet, dort weniger Bandbreite benötigt und
hohe Zugriffszahlen besser verteilt.

## Wie ich Edge-Computing nutze

Auch diese Website und einige meiner Kundenprojekte laufen über das Edge-Netzwerk von Cloudflare. Viele davon sind
statisch. Ein dauerhaft laufender Server muss die Seiten daher nicht bei jedem Aufruf neu zusammensetzen. Cloudflare
übernimmt das Deployment und die Auslieferung über seine Edge-Infrastruktur.

In meinem konkreten Setup entstehen dadurch für die Bereitstellung solcher statischen Websites praktisch keine
laufenden Serverkosten. Das passt auch zum aktuellen Kostenmodell von Cloudflare Pages: Anfragen an rein statische
Dateien sind dort [kostenlos und unbegrenzt](https://developers.cloudflare.com/pages/functions/pricing/). Dynamische
Funktionen werden separat betrachtet. Domains, Entwicklung, Wartung und zusätzliche Dienste können natürlich trotzdem
Kosten verursachen.

Für einfache Unternehmensseiten, Portfolios oder Blogs halte ich dieses Modell für sehr sinnvoll. Es ist schnell,
zuverlässig und verursacht wenig technischen Verwaltungsaufwand.

## Wo liegen die Grenzen?

Nicht jede Website ist statisch. Shops, Benutzerkonten oder Anwendungen mit aktuellen Daten benötigen häufig
Datenbanken und weitere Hintergrunddienste. Edge-Technologien können sie ergänzen, ersetzen die übrige Infrastruktur
aber nicht automatisch. Die Architektur muss deshalb zum jeweiligen Projekt passen.

## Weiterführende Informationen

Eine ausführlichere technische Erklärung findest du im Cloudflare-Lernzentrum:
[Was ist Edge-Computing?](https://www.cloudflare.com/de-de/learning/serverless/glossary/what-is-edge-computing/)

## TL;DR

Der Quellcode meiner Website liegt auf GitHub. Cloudflare baut daraus die fertige Website und liefert benötigte Dateien
über ein Rechenzentrum in der Nähe aus. Dort werden sie nur zwischengespeichert und nicht dauerhaft auf jeden Server
kopiert. Die kürzeren Datenwege können Ladezeiten reduzieren und zentrale Infrastruktur entlasten. Bei meinen
statischen Websites entstehen dadurch praktisch keine laufenden Serverkosten.

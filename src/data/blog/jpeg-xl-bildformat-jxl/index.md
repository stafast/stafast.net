---
title: "JPEG XL: Was das Bildformat JXL besser macht"
description: "JPEG XL verspricht kompakte Bilder, hohe Qualität und mehr Farbtiefe. Was JXL bietet, welche Browser es unterstützen und wann sich der Einsatz lohnt."
teaser: "teaser.jpg"
teaserAlt: "Grünes Bilddatei-Symbol neben dem Schriftzug Bildformat JPEG XL auf hellgrauem Hintergrund."
published: "2026-10-16T08:21:00+02:00"
tags: [ "JPEG XL", "Performance", "Webentwicklung" ]
draft: false
---

Große Bilder sollen gut aussehen und schnell laden. Beim klassischen JPEG bedeutet das oft,
zwischen Dateigröße und sichtbaren Qualitätsverlusten abzuwägen. **JPEG XL, kurz JXL, soll
diesen Spielraum erweitern:** mit effizienter Kompression und Funktionen, die über das
gewohnte JPEG hinausgehen.

Das Format trägt die Dateiendung `.jxl` und ist als ISO/IEC 18181 standardisiert. Es wurde für
Bildauslieferung im Web und professionelle Fotografie entwickelt. Die
[JPEG-Arbeitsgruppe](https://jpeg.org/jpegxl/) beschreibt diese beiden Einsatzbereiche
ausdrücklich. Der Standard existiert bereits seit mehreren Jahren; durch die jüngsten
Browser-Versionen wird er für Websites jetzt deutlich interessanter.

## Was JPEG XL gegenüber JPEG bietet

JPEG XL unterstützt sowohl verlustbehaftete als auch verlustfreie Kompression. Im ersten Fall
werden Bildinformationen zugunsten kleinerer Dateien verworfen. Im zweiten bleiben die
Bilddaten vollständig erhalten. „Sieht aus wie das Original“ und „ist mathematisch verlustfrei“
sind dabei unterschiedliche Qualitätsziele.

Zu den weiteren Funktionen gehören:

- **Mehr Farbtiefe und HDR.** Das Format kann feinere Tonwertabstufungen sowie einen größeren
  Helligkeits- und Farbumfang speichern. Bei geeigneten Ausgangsbildern und Displays lässt sich
  dieser zusätzliche Spielraum nutzen.
- **Transparenz.** Freigestellte Motive lassen sich mit transparentem Hintergrund speichern.
- **Progressives Laden.** Ein Bild kann bereits sichtbar werden, während weitere Bilddaten
  nachgeladen werden. Es muss dafür entsprechend codiert sein.

Diese Eigenschaften führt die [JPEG-Arbeitsgruppe](https://jpeg.org/jpegxl/) im Überblick auf.
Für eine Fotogalerie oder eine bildreiche Produktseite sind das interessante Möglichkeiten.
Wie viel eine konkrete Datei spart, muss trotzdem am jeweiligen Motiv und am gewünschten
Bildeindruck geprüft werden.

## Vorhandene JPEGs ohne zusätzlichen Verlust verkleinern

Besonders interessant finde ich die verlustfreie Rekompression bestehender JPEG-Dateien.
Dabei werden ihre vorhandenen Daten effizienter gespeichert. Mit den nötigen
Rekonstruktionsinformationen lässt sich später sogar die ursprüngliche JPEG-Datei bitgenau
wiederherstellen.

Die [JPEG-XL-Community](https://jpegxl.info/) nennt dafür eine durchschnittliche Ersparnis von
rund 20 Prozent. Das ist ein Richtwert, kein Versprechen für jede Datei. Entscheidend ist,
dass ein Werkzeug ausdrücklich die verlustfreie JPEG-Rekompression nutzt; ein gewöhnlicher
erneuter Bildexport ist etwas anderes.

**Verlorene Details kommen dabei nicht zurück.** Aus einem bereits stark komprimierten JPEG
wird durch die Umwandlung kein hochwertigeres Ausgangsbild. Auch zusätzliche Farbtiefe erzeugt
keine Bildinformationen, die vorher nicht vorhanden waren. Für ein Fotoarchiv würde ich
Originaldateien einschließlich vorhandener RAW-Aufnahmen deshalb weiterhin aufbewahren.

## Welche Browser JXL inzwischen unterstützen

Die Situation hat sich im Oktober 2026 deutlich verändert. Die Hersteller nennen folgende
Versionen mit Unterstützung:

| Browser | JPEG-XL-Unterstützung |
| --- | --- |
| Safari | seit [Version 17](https://webkit.org/blog/14445/webkit-features-in-safari-17-0/) |
| Chrome | ab [Version 155](https://developer.chrome.com/blog/jpeg-xl-in-chrome) |
| Firefox | ab [Version 158](https://www.firefox.com/en-US/firefox/158.0/releasenotes/) |

Damit ist die Aussage, JPEG XL sei grundsätzlich ungeeignet für Websites, zu pauschal.
Ältere Browser-Versionen und andere Programme müssen aber weiterhin berücksichtigt werden.
Für eine öffentliche Website würde ich deshalb zusätzlich eine unterstützte Alternative
bereitstellen, etwa WebP oder JPEG. Der Browser kann dann die passende Datei auswählen.
Dieses Vorgehen erläutert auch das [WebKit-Team](https://webkit.org/blog/14445/webkit-features-in-safari-17-0/).

## Wie JXL neben WebP und AVIF einzuordnen ist

JPEG XL ergänzt die Auswahl moderner Bildformate. Googles Chrome-Team empfiehlt, **AVIF und
JPEG XL an den eigenen Bildern auszuprobieren**. JXL sieht es besonders bei hoher Bildtreue,
verlustfreier Kompression und progressiver Darstellung als interessant an. Die Empfehlung
steht in der [Ankündigung zur Chrome-Unterstützung](https://developer.chrome.com/blog/jpeg-xl-in-chrome).

Für eine Website würde ich mehrere typische Motive in gleicher Auflösung und bei vergleichbarer
sichtbarer Qualität gegenüberstellen. Neben der Dateigröße zählen die Ladezeit und die Frage,
ob Redaktionssystem, Bildverarbeitung und Auslieferung das Format zuverlässig unterstützen.
Gleiche Qualitätszahlen in unterschiedlichen Exportwerkzeugen sind dafür kein ausreichender
Vergleich.

## Wann ich JPEG XL einsetzen würde

Für hochwertige Fotogalerien, Produktbilder und geeignete Bildarchive ist JXL für mich eine
ernsthafte Option. Besonders die Kombination aus hoher Bildqualität und verlustfreier
JPEG-Rekompression macht das Format interessant.

Bei einer bestehenden Website würde ich mit repräsentativen Bildern testen, welche Vorteile
tatsächlich ankommen, und die Darstellung auf den Geräten der Zielgruppe prüfen. Wenn sich
damit Daten sparen lassen, ohne Bildqualität oder Zuverlässigkeit zu verschlechtern, gibt es
einen konkreten Grund für die Umstellung. Der Formatname allein reicht dafür nicht.

---
title: "NCM vs. LLM: Was hinter Next-Concept Modeling steckt"
description: "Was ist Next-Concept Modeling? NCM verständlich erklärt: Unterschiede zu üblichen LLMs, erste Forschungsergebnisse und mögliche Folgen für die Zukunft der KI."
teaser: "teaser.jpg"
teaserAlt: "Grünes Symbol mit groben und feinen Textblöcken neben den Schriftzügen NCM vs. LLM und Next-Concept Modeling auf hellem Hintergrund."
published: "2026-10-25T09:21:00+01:00"
updated: "2026-10-30T23:37:00+01:00"
tags: [ "KI", "NCM", "LLM", "Technologie" ]
draft: false
---

Eine KI-Antwort kann schon während ihrer Entstehung auf dem Bildschirm erscheinen. Viele
Sprachmodelle erzeugen dafür ein Textstück nach dem anderen. **Next-Concept Modeling, kurz
NCM, untersucht einen anderen Weg:** Text entsteht über mehrere Stufen, von einer groben
Darstellung bis zu den Details. Das soll die Erzeugung beschleunigen.

Die Forschungsgruppe Hazy Research aus dem Stanford-Umfeld hat den Ansatz im Oktober 2026
[vorgestellt](https://hazyresearch.stanford.edu/blog/2026-10-12-ncm).
Grundlage dieses Artikels ist der
[Forschungs-Preprint vom 9. Oktober 2026](https://arxiv.org/abs/2610.14162), Version 1.

## Wie ein übliches LLM Text erzeugt

LLM steht für **Large Language Model**, also ein großes Sprachmodell. Solche Modelle werden
mit großen Textmengen trainiert.

Bei vielen bekannten generativen Sprachmodellen wird die Ausgabe schrittweise verlängert.
Das Modell berechnet jeweils das nächste **Token**: einen Textbaustein, der etwa ein Wortteil,
ein Wort oder ein Satzzeichen sein kann. Anschließend folgt der nächste Schritt. Dieses
Verfahren heißt *autoregressiv*.

Dabei berücksichtigt das Modell den verfügbaren Kontext. Es rät also nicht einfach ein
einzelnes Wort ohne Zusammenhang. Die Abfolge der Ausgabeschritte kann jedoch Zeit kosten,
besonders bei langen Antworten.

Auch autoregressive Modelle lassen sich beschleunigen. Bei Verfahren wie
[Speculative Decoding](https://arxiv.org/abs/2211.17192) werden mehrere mögliche Folgetokens
vorgeschlagen und vom eigentlichen Sprachmodell gemeinsam geprüft. Das kann die Ausgabe
beschleunigen, während das autoregressive Modell erhalten bleibt.

## Was ist Next-Concept Modeling?

NCM erzeugt den Text über eine Hierarchie gelernter Codes. Zunächst entsteht eine kurze,
grobe Darstellung. Weitere Ebenen ergänzen feinere Informationen. Innerhalb einer Ebene
werden mehrere Positionen gleichzeitig berechnet; die Ebenen selbst bauen aufeinander auf.
Am Ende wird daraus der lesbare Text rekonstruiert. So beschreibt es das
[offizielle NCM-Projekt](https://github.com/HazyResearch/ncm).

Als Bild hilft eine Zeichnung, die erst grobe Formen bekommt und anschließend ausgearbeitet
wird. Beim üblichen autoregressiven Verfahren wächst dagegen die Textausgabe fortlaufend
am Ende weiter. Der Vergleich beschreibt den Erzeugungsablauf, keine menschlichen Denkprozesse.

Auch das Wort „Concept“ sollte man vorsichtig lesen. Gemeint sind hier gelernte mathematische
Darstellungen. Das Modell schreibt nicht zunächst einen verständlichen Gedankenplan, wie
ein Mensch ihn auf einem Notizzettel festhalten würde.

## NCM vs. LLM: Wo liegt der Unterschied?

Die Begriffe bezeichnen unterschiedliche Dinge: LLM beschreibt ein großes Sprachmodell,
NCM ein bestimmtes Verfahren zur Sprachmodellierung. NCM verwendet ebenfalls einen Transformer,
eine auch bei vielen LLMs genutzte Modellarchitektur. Das zeigt die
[Projektbeschreibung](https://github.com/HazyResearch/ncm).

Mit „NCM vs. LLM“ ist deshalb meist dieser Vergleich gemeint:

| Frage | Übliches autoregressives LLM | Next-Concept Modeling |
| --- | --- | --- |
| Wie entsteht die Ausgabe? | Textbaustein für Textbaustein | Über gröbere und feinere Darstellungsebenen |
| Was wird im nächsten Schritt vorhergesagt? | Das nächste Ausgabetoken | Die Codes der nächsten Ebene |
| Was wird nacheinander berechnet? | Im Grundverfahren die einzelnen Ausgabetokens | Die Ebenen; die Codes innerhalb einer Ebene entstehen parallel |

## Ist NCM schneller und besser?

Das Forschungsteam berichtet je nach untersuchter Aufgabe von **10- bis 31-fach schnellerer
Texterzeugung**. Diese Spanne bezieht sich auf drei konkrete Vergleiche:

- **Textgenerierung:** 21-fach schneller auf der Textsammlung LM1B und 10-fach auf OpenWebText.
- **Zusammenfassungen:** 31-fach schneller auf dem Datensatz XSum.

Verglichen wurde mit ausgewählten **Diffusions-Sprachmodellen**, bei denen eine Textfolge
über wiederholte Bearbeitungsschritte entsteht. Die Messungen erfolgten auf einer
NVIDIA H100 SXM mit 80 GB Speicher, bei vergleichbaren oder besseren automatischen
Qualitätswerten. Diese Kennzahlen bewerten bestimmte Texteigenschaften; sie belegen
nicht, dass jede Aussage sachlich richtig ist. Die Bedingungen stehen im
[Forschungsbericht von Hazy Research](https://hazyresearch.stanford.edu/blog/2026-10-12-ncm).

Übersetzungen und Sudokus wurden ebenfalls untersucht. Die genannten Geschwindigkeitsfaktoren
lassen sich daraus nicht pauschal auf diese oder andere Aufgaben übertragen.

Daraus wird kein allgemeines „31-mal schneller als jedes LLM“. Ein Vergleich braucht dieselbe
Aufgabe, passende Qualitätsmaßstäbe und vergleichbare Hardware. Eine schnelle Zusammenfassung
hilft wenig, wenn sie eine entscheidende Zahl verändert.

## Wo die Forschung noch Grenzen hat

Die [Originalarbeit](https://arxiv.org/html/2610.14162v1) nennt überwiegend Generatoren mit
rund 100 Millionen Parametern und eine Skalierungsstudie bis 725 Millionen. Parameter sind
die im Training angepassten Modellwerte. Größere Modelle und Datensätze müssen weiter
untersucht werden. Außerdem bleibt die Zahl der Verfeinerungsstufen bislang fest vorgegeben.

Schon die Umwandlung zwischen Text und Codes kann Fehler verursachen. Die Autoren zeigen
beispielsweise veränderte Namen und Zahlen in rekonstruierten Texten. Die Beispiele stammen
vom OpenWebText-Tokenizer, für den sie zugleich eine exakte Rekonstruktion von **99,99 Prozent
der Tokens** melden. Das beschreibt die Wiederherstellung vorhandenen Textes, keine
Wahrheitsquote neu erzeugter Antworten. Die Einzelheiten stehen in ihrer
[Analyse des Tokenizers](https://arxiv.org/html/2610.14162v1).

Dass NCM falsche Aussagen grundsätzlich verhindert oder eine bessere allgemeine Intelligenz
besitzt, ist damit nicht belegt. Die
[veröffentlichten Modelle](https://huggingface.co/collections/hazyresearch/ncm) erlauben weitere
Untersuchungen an den genannten Aufgaben. Ein guter Messwert dort ersetzt keinen Nachweis
für jede denkbare Alltagssituation.

## Welche Zukunftsaussichten hat NCM?

Der mögliche Nutzen liegt zunächst bei der Erzeugung von Text. Wenn sich vergleichbare
Qualität mit weniger Rechenzeit erreichen lässt, könnten etwa Übersetzungen oder
Zusammenfassungen schneller verfügbar werden. Ob dadurch auch Kosten sinken, müsste am
vollständigen System geprüft werden.

Für künftige Anwendungen wäre auch eine Kombination verschiedener Verfahren denkbar:
Ein schneller Entwurf könnte anschließend gezielt auf Details geprüft oder überarbeitet
werden. Das ist eine mögliche Entwicklungsrichtung, keine bereits nachgewiesene Eigenschaft
des veröffentlichten NCM-Projekts.

Für Unternehmen bleibt deshalb die konkrete Aufgabe der sinnvolle Ausgangspunkt. Bei einer
internen Dokumentensuche zählen beispielsweise korrekte Belege, aktuelle Inhalte und
Zugriffsrechte. Ein anderes Erzeugungsverfahren nimmt diese Arbeit nicht ab. NCM wird dann
praktisch interessant, wenn es einen solchen Ablauf nachweisbar verbessert – etwa durch
kürzere Wartezeiten bei ausreichend verlässlichen Ergebnissen.

*Stand der Recherche und Faktenprüfung: 30. Oktober 2026.*

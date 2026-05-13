---
title: "Textcheck Pressemitteilung"
description: "Prüft eine Pressemitteilung auf typische Schwächen: Buzzwords, schwache Verben, schwammige Aussagen."
category: "Sprachliche Qualitätskontrolle"
phase: "Auswertung"
subject: "Branchenübergreifend"
order: 13
prompt: |
  Prüfe die folgende Pressemitteilung kritisch und liefere ein redaktionelles Lektorat.

  Prüfdimensionen:

  1. **News-Hook**
     - Ist klar, was das Neue ist?
     - Steht es im ersten Absatz oder versteckt es sich?

  2. **5 W-Fragen im Lead**
     - Wer, was, wann, wo, warum - sind alle beantwortet?
     - Falls nein: welche fehlen?

  3. **Sprachliche Schwächen**
     - Buzzwords ("innovativ", "ganzheitlich", "führend", "nachhaltig" ohne Beweis)
     - Schwache Verben ("sein", "haben", "werden", "können" als Hauptverb)
     - Nominalstil (Substantivketten statt Verben)
     - Passivkonstruktionen, die aktiv besser wären
     - Adjektive, die Marketing-Sprech sind statt Information

  4. **Konkretheit**
     - Wo werden Behauptungen NICHT mit Zahlen, Beispielen, Quellen gestützt?
     - Wo könnten konkrete Belege ergänzt werden?

  5. **Zitate**
     - Klingen sie wie aus dem Mund einer echten Person oder wie Marketingtext im Konjunktiv?
     - Was würde glaubwürdiger klingen?

  6. **Boilerplate**
     - Ist sie aktuell? Welche Floskeln können raus?

  Output-Format:
  - Tabelle mit "Stelle im Text" / "Problem" / "Vorschlag"
  - Zusammenfassendes Urteil in 3 Sätzen: Wie gut ist der Text für ein Fachmedium / Wirtschaftsmedium?

  Hier der Text:
  [Pressemitteilung einfügen]
---

---
title: "Übersetzung & Lokalisierung Check"
description: "Prüft eine Übersetzung auf Natürlichkeit und kulturelle Passung."
category: "Sprachliche Qualitätskontrolle"
phase: "Auswertung"
subject: "Branchenübergreifend"
order: 7
community: false
prompt: |
  Du bist Lokalisierungsexpert:in. Prüfe folgende Übersetzung auf Natürlichkeit und kulturelle Passung: [Original + Übersetzung].
  
  Prüfe:
  1. Klingt die Übersetzung natürlich oder "übersetzt"?
  2. Wörtliche Übertragungen, die im Zielkontext nicht funktionieren
  3. Kulturelle Anpassungen nötig? (Idiome, Anspielungen, Maßeinheiten, Anrede)
  4. Tonalität erhalten?
  5. Fachterminologie korrekt?
  
  Output: Tabelle "Stelle / Problem / Vorschlag" + Gesamturteil.
  
  Sprachrichtung: [z.B. EN→DE]
  Zielmarkt/Kontext: [Eingabe]
---

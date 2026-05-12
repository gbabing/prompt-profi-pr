# Prompt-Profi

Statische Web-Anwendung mit durchsuchbarer, kuratierter Sammlung von KI-Prompts für Lehrkräfte. Admins pflegen Inhalte über Decap CMS, Inhalte liegen als Markdown im Repo, gehostet auf Cloudflare Pages.

## Stack

- **Astro** (statische Seitengenerierung)
- **Decap CMS** (Admin-Oberfläche, läuft im Browser)
- **GitHub** (Repo + Auth-Provider für CMS)
- **Cloudflare Pages** (Hosting + Auto-Deploy bei Push)

## Setup (Erstinstallation)

### 1. Repo auf GitHub anlegen

1. Auf github.com → "New repository"
2. Name: `prompt-profi`
3. Sichtbarkeit: public oder private (egal — wenn private, brauchst du später für Decap einen Token)
4. Erstellen, **noch nicht** initialisieren
5. Den Code aus diesem Ordner pushen:

```bash
cd prompt-profi
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USER/prompt-profi.git
git push -u origin main
```

### 2. `config.yml` anpassen

`public/admin/config.yml` öffnen, Zeile `repo:` anpassen:

```yaml
backend:
  name: github
  repo: DEIN-GITHUB-USER/prompt-profi
```

Commit + push.

### 3. Cloudflare Pages verbinden

1. Auf dash.cloudflare.com → "Workers & Pages" → "Create application" → "Pages" → "Connect to Git"
2. GitHub-Repo `prompt-profi` auswählen
3. Build-Einstellungen:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy starten
5. Nach erstem erfolgreichen Build erhältst du eine `*.pages.dev`-URL

### 4. Custom Domain verbinden

In Cloudflare Pages → dein Projekt → "Custom domains" → "Set up a custom domain"

`prompt-profi.babing-media.de` eingeben.

Cloudflare zeigt dir an, welcher CNAME-Record nötig ist. Diesen bei All-Inkl in der DNS-Verwaltung eintragen (oder, falls du Cloudflare schon als DNS-Provider nutzt, wird's automatisch angelegt).

### 5. GitHub OAuth für Decap einrichten

Damit sich Admins über `prompt-profi.babing-media.de/admin/` einloggen können:

1. Auf github.com → Settings → Developer settings → OAuth Apps → "New OAuth App"
2. **Application name**: Prompt-Profi CMS
3. **Homepage URL**: `https://prompt-profi.babing-media.de`
4. **Authorization callback URL**: Hier brauchst du einen OAuth-Proxy. Einfachste Variante: kostenlosen Public-Proxy nutzen.

**OAuth-Proxy einrichten:**

Auf netlify.com einen kostenlosen Account anlegen → "Add new site" → "Deploy manually" → eine leere `index.html` hochladen. Du brauchst die Seite gar nicht — nur das Netlify Identity / Git Gateway Feature.

Oder: Du nutzt direkt **Decap "Git Gateway"-Backend** über Netlify Identity (auch ohne dort zu hosten). Anleitung dazu: https://decapcms.org/docs/git-gateway-backend/

**Alternative (technisch versierter):** Eigenen OAuth-Proxy auf Cloudflare Workers deployen. Ca. 30 Min Setup, dafür alles in einer Hand. Repo dazu: https://github.com/sterlingwes/decap-proxy

Wir entscheiden das gemeinsam, sobald die Seite steht.

## Entwicklung

```bash
npm install
npm run dev
```

→ Seite läuft auf http://localhost:4321

## Neue Prompts hinzufügen

**Variante A: Über Decap CMS (für nicht-technische Admins)**

`https://prompt-profi.babing-media.de/admin/` → mit GitHub einloggen → "New Prompt" → ausfüllen → speichern. Die Seite baut sich nach 1-2 Minuten neu.

**Variante B: Direkt im Repo**

Neue Datei in `src/content/prompts/dateiname.md` anlegen, gleiches Frontmatter-Schema wie bei den bestehenden Prompts nutzen.

## Schema

```yaml
---
title: "..."
description: "..."
category: "Unterrichtsvorbereitung" # oder Kreativer Unterricht / Arbeitsorganisation / Differenzierung / Feedback / Elternkommunikation
stage: "Sek I" # oder Grundschule / Sek II / Berufsschule / Alle
subject: "Deutsch" # oder beliebiger Fach-String
hint: "..." # optional
order: 1 # optional, niedriger = oben
prompt: |
  Mehrzeiliger
  Prompt-Text
---
```

## Häufige Änderungen

- **Neue Kategorie hinzufügen**: in `src/content.config.ts` UND `public/admin/config.yml` ergänzen
- **Branding ändern**: Farben in `src/layouts/Layout.astro` unter `:root { ... }`
- **Logo statt "P"-Favicon**: `public/favicon.svg` ersetzen

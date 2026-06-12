# Azure Deployment Guide — Nexloom (Static Web App)

## Overview

| Part     | Azure Service         | Tier | Cost       |
|----------|-----------------------|------|------------|
| Frontend | Azure Static Web Apps | Free | $0 forever |

Next.js is configured as a **static export** — `npm run build` writes to `out/`.
Azure Static Web Apps serves `out/` from the CDN edge globally.

---

## Quick Reference

| Item | Value |
|------|-------|
| Resource Group | `nexloom-rg` |
| Static Web App name | `nexloom-web` |
| GitHub org | `Happy-people-ai` |
| GitHub repo | `Nexloom` |
| Branch deployed | `main` |
| Build command | `npm run build` |
| Output folder | `out` |
| Target domain | `nexloom.co` |

---

## STATUS — What's Already Done (Code Changes)

- [x] `next.config.ts` — `output: "export"` + `images: { unoptimized: true }` added
- [x] `public/staticwebapp.config.json` — Azure SWA routing config added
- [x] Build verified locally — `out/` folder produced clean ✓
- [x] Committed and pushed to `main`

---

## STEP 1 — Create a Resource Group *(Portal — you do this)*

1. Go to [portal.azure.com](https://portal.azure.com)
2. Search **"Resource groups"** → click **+ Create**
3. Fill in:
   - **Subscription**: your subscription
   - **Resource group name**: `nexloom-rg`
   - **Region**: `Central India` (or closest to your users)
4. Click **Review + Create** → **Create**

---

## STEP 2 — Create the Static Web App *(Portal — you do this)*

1. In the Azure Portal search bar → type **"Static Web Apps"** → click it
2. Click **+ Create**
3. Fill in:
   - **Subscription**: your subscription
   - **Resource Group**: `nexloom-rg`
   - **Name**: `nexloom-web`
   - **Plan type**: **Free**
   - **Region**: `Central India`
   - **Source**: **GitHub**
4. Click **Sign in with GitHub** → authorise Azure
5. Set:
   - **Organization**: `Happy-people-ai`
   - **Repository**: `Nexloom`
   - **Branch**: `main`
6. **Build Details** — this is critical:
   - Build preset: **Custom**
   - App location: `/`
   - Api location: *(leave blank)*
   - Output location: `out`
7. Click **Review + Create** → **Create**

> Azure will add a GitHub Actions workflow file to the repo and trigger the first build automatically.

---

## STEP 3 — Pull the Workflow File *(Terminal — you do this)*

After Step 2, Azure pushes a workflow file to the repo. Pull it locally:

```bash
cd D:\HPA\Nexloom_nextjs
git pull origin main
```

Open `.github/workflows/azure-static-web-apps-*.yml` and confirm these values:

```yaml
- name: Build And Deploy
  uses: Azure/static-web-apps-deploy@v1
  with:
    app_location: "/"
    api_location: ""
    output_location: "out"        # ← must be "out", not "build" or "dist"
```

If `output_location` is wrong, fix it and push:

```bash
git add .github/
git commit -m "fix: set SWA output_location to out"
git push
```

---

## STEP 4 — Confirm Green Build *(GitHub — you do this)*

1. Go to `https://github.com/Happy-people-ai/Nexloom`
2. Click **Actions** tab
3. Watch the latest workflow run — wait for the green tick ✓

If it fails, check the logs. Most common cause: `output_location` mismatch (see Step 3).

---

## STEP 5 — Note Your Live URL *(Portal — you do this)*

1. Azure Portal → **Static Web Apps** → `nexloom-web`
2. **Overview** → copy the auto-generated URL:
   `https://something-random.azurestaticapps.net`
3. Test all pages:
   - `https://<your-url>/`
   - `https://<your-url>/about`
   - `https://<your-url>/services/engineering-product`
   - `https://<your-url>/blog`
   - `https://<your-url>/case-studies`
   - `https://<your-url>/contact`
   - `https://<your-url>/book-a-call`

---

## STEP 6 — Add Custom Domain `nexloom.co` *(Portal + Registrar — you do this)*

1. Azure Portal → **Static Web Apps** → `nexloom-web` → **Custom domains** (left sidebar)
2. Click **+ Add**
3. Enter `nexloom.co` → click **Next**
4. Azure will show you a DNS record to add. Two possible cases:

   **If your domain is on Azure DNS:**
   - Azure auto-validates and adds the CNAME for you

   **If your domain is on another registrar (e.g. GoDaddy, Namecheap, Cloudflare):**
   - Copy the **CNAME** or **TXT** record Azure shows you
   - Log in to your registrar → DNS settings → add the record
   - Come back to Azure → click **Validate** (takes 5–15 min to propagate)

5. Repeat for `www.nexloom.co` if you want the www redirect too.

> **SSL is automatic** — Azure provisions a free certificate within minutes of validation.

---

## STEP 7 — Update `seo.config.ts` BASE_URL *(Already done)*

`BASE_URL` is already set to `https://nexloom.co` in `src/lib/seo.config.ts` ✓

Once the custom domain is live and SSL is active, every page will have the correct canonical URLs.

---

## How Redeployments Work

Every push to `main` → GitHub Actions auto-builds and deploys. No manual steps.

To redeploy manually: GitHub → **Actions** → select latest run → **Re-run all jobs**.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Build fails — "output directory not found" | Confirm `output_location: out` in the workflow YAML and `output: "export"` in `next.config.ts` |
| 404 on page refresh (e.g. `/about`) | Confirm `public/staticwebapp.config.json` is committed and in the `out/` folder after build |
| Images not loading | `images: { unoptimized: true }` is already set in `next.config.ts` — check image paths start with `/` |
| Site loads but Header/animations broken | Check browser console for Framer Motion errors; likely a `window` reference issue — add `"use client"` to affected components |
| GitHub Actions workflow not appearing | Re-check Azure connected to the correct GitHub org (`Happy-people-ai`) and repo (`Nexloom`) |
| Custom domain shows "insecure" | Wait up to 24 h for Azure to provision the SSL certificate automatically |
| Old deployment still showing | Push a small commit or GitHub → Actions → Re-run all jobs |

---

## After Every Phase of Migration

When new pages are added (blog/case-study dynamic routes, etc.) just push to `main`.
No Azure config changes needed — the workflow re-builds the full static export automatically.

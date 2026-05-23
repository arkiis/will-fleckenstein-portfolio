# GitHub + Vercel setup (sync across computers)

Your code is committed locally on branch `main`. Finish these steps once to enable **push → auto-deploy** to [williamfleckenstein.com](https://williamfleckenstein.com).

## Step 1 — Log into GitHub on this PC

In PowerShell (project folder):

```powershell
gh auth login --hostname github.com --git-protocol https --web
```

Follow the browser prompt and approve access for the `gh` CLI.

## Step 2 — Create repo, push, connect Vercel

```powershell
cd "C:\Users\Will\Videos\AE-downloads\will-fleckenstein-portfolio-version-3.0"
.\scripts\connect-github.ps1
```

This will:

1. Create **github.com/arkiis/will-fleckenstein-portfolio** (public)
2. Push your `main` branch
3. Connect the Vercel project `will-fleckenstein-portfolio-version-2.0` to that repo

## Step 3 — On any other computer

```bash
git clone https://github.com/arkiis/will-fleckenstein-portfolio.git
cd will-fleckenstein-portfolio
npm install
# edit files...
git add .
git commit -m "Describe your change"
git push
```

Vercel rebuilds production automatically after each push to `main`.

## Manual alternative (no `gh` CLI)

1. [Create a new repo](https://github.com/new) named `will-fleckenstein-portfolio` under account **arkiis**
2. Do **not** add a README (repo should be empty)
3. In this folder:

```powershell
git remote add origin https://github.com/arkiis/will-fleckenstein-portfolio.git
git push -u origin main
```

4. [Vercel project → Settings → Git](https://vercel.com/arkiis-projects/will-fleckenstein-portfolio-version-2.0/settings/git) → Connect **will-fleckenstein-portfolio** → Production branch: **main**

## Notes

- `.vercel` and `node_modules` are gitignored; Vercel builds on push.
- CLI deploy still works: `npx vercel --prod --yes`

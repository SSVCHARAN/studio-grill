# Push to GitHub

Local git is ready (initial commit on `main`). Finish GitHub login once, then run the commands below.

## 1. Log in to GitHub CLI

In PowerShell:

```powershell
gh auth login
```

Choose: **GitHub.com** → **HTTPS** → **Login with a web browser** → paste the one-time code when prompted.

## 2. Create the repo and push

From this folder:

```powershell
cd d:\CURSOR\studio-grill

gh repo create studio-grill --public --source=. --remote=origin --push --description "Studio Grill (SCG) — marketing website, Visakhapatnam"
```

Use a different name if you prefer:

```powershell
gh repo create YOUR-REPO-NAME --public --source=. --remote=origin --push
```

For a **private** repo, add `--private` instead of `--public`.

## 3. Confirm

```powershell
gh repo view --web
```

---

**Already created an empty repo on GitHub?** Link and push:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/studio-grill.git
git push -u origin main
```

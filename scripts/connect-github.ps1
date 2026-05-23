# Run after: gh auth login (GitHub device flow)
# Creates repo, pushes main, links Vercel production deploys to GitHub pushes.

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $ProjectRoot

$RepoName = "will-fleckenstein-portfolio"
$RemoteUrl = "https://github.com/arkiis/$RepoName.git"

gh auth status | Out-Null

if (-not (git remote get-url origin 2>$null)) {
  gh repo create $RepoName --public --source=. --remote=origin --description "Will Fleckenstein UI/UX portfolio (williamfleckenstein.com)" --push
} else {
  git push -u origin main
}

npx vercel@latest git connect $RemoteUrl --yes
Write-Host ""
Write-Host "Done. Workflow on any computer:"
Write-Host "  git clone $RemoteUrl"
Write-Host "  npm install"
Write-Host "  git add . && git commit -m 'your message' && git push"
Write-Host "Vercel will deploy automatically to https://williamfleckenstein.com"

# Portfolio Structure Generator

$folders = @(
    "assets",
    "assets/images",
    "assets/icons",
    "assets/logos",
    "assets/resume",
    "css",
    "js",
    "docs",
    "screenshots"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

$cssFiles = @(
    "01-variables.css",
    "02-base.css",
    "03-header.css",
    "04-hero.css",
    "05-about.css",
    "06-skills.css",
    "07-projects.css",
    "08-contact.css",
    "09-footer.css",
    "10-responsive.css"
)

foreach ($file in $cssFiles) {
    New-Item -ItemType File -Path "css/$file" -Force | Out-Null
}

$jsFiles = @(
    "01-navbar.js",
    "02-matrix.js",
    "03-animations.js",
    "04-typing.js",
    "05-projects.js",
    "06-main.js"
)

foreach ($file in $jsFiles) {
    New-Item -ItemType File -Path "js/$file" -Force | Out-Null
}

$rootFiles = @(
    "README.md",
    "LICENSE",
    "index.html"
)

foreach ($file in $rootFiles) {
    New-Item -ItemType File -Path $file -Force | Out-Null
}

$docFiles = @(
    "architecture.md",
    "changelog.md"
)

foreach ($file in $docFiles) {
    New-Item -ItemType File -Path "docs/$file" -Force | Out-Null
}

Write-Host ""
Write-Host "======================================" -ForegroundColor Green
Write-Host " Portfolio Structure Created Successfully!" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Green
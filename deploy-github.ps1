#!/usr/bin/env pwsh

# GitHub Deploy Script para cocinaenapp
Write-Host "`n🚀 GITHUB DEPLOY - COCINAENAPP`n" -ForegroundColor Cyan

# Verificar si gh está disponible
$ghPath = & where.exe gh 2>$null
if (-not $ghPath) {
    Write-Host "⚠️  GitHub CLI no está en el PATH. Intenta abrir una nueva terminal PowerShell.`n"
    exit 1
}

# Login si es necesario
Write-Host "🔐 Verificando autenticación de GitHub..."
& gh auth status *>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Necesitas autenticarte en GitHub`n"
    & gh auth login
}

# Crear repositorio
Write-Host "`n📦 Creando repositorio en GitHub..."
$repoName = "cocinaenapp"
$description = "CocinaEnApp - Aplicación web para reservas de cocinas"

& gh repo create $repoName --public --description "$description" --source=. --remote=origin --push

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ ¡Repositorio creado y código pusheado exitosamente!`n" -ForegroundColor Green
    Write-Host "📍 URL del repositorio: https://github.com/$(gh api user -q .login)/$repoName`n"
} else {
    Write-Host "`n❌ Error al crear el repositorio`n" -ForegroundColor Red
}

@echo off
cd /d "d:\GITHUB PROYECTS\Proyecto 1\cocinaenapp"

REM Agregar remote
git remote add origin https://github.com/DiegoMQP/cocinaenapp.git

REM Renombrar branch a main si es necesario
git branch -M main

REM Pushear código
git push -u origin main

REM Resultado
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ ¡Repositorio creado y código pusheado exitosamente!
    echo.
    echo 📍 URL: https://github.com/DiegoMQP/cocinaenapp
    echo.
) else (
    echo.
    echo ❌ Error durante el push. Verifica tus credenciales de GitHub.
    echo.
)

pause

@echo off
:: BatchGotAdmin
:-------------------------------------
REM  --> Check for permissions
    IF "%PROCESSOR_ARCHITECTURE%" EQU "amd64" (
>nul 2>&1 "%SYSTEMROOT%\SysWOW64\cacls.exe" "%SYSTEMROOT%\SysWOW64\config\system"
) ELSE (
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
)

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    echo Requesting administrative privileges...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params= %*
    echo UAC.ShellExecute "cmd.exe", "/c ""%~s0"" %params:"=""%", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    pushd "%CD%"
    CD /D "%~dp0"
:-------------------------------------- 
@echo off
title "SteamRPC Installer (Windows)"
cls
set thisfolder=%~dp0%
copy "%thisfolder%SteamRPC_start.vbs" "c:\Documents And Settings\All Users\Start Menu\Programs\Startup" 
copy "%thisfolder%SteamRPC_start.vbs" "C:\Users\Nicolas\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup" 
cd "c:\program files"
if not exist "SteamRPC" mkdir "SteamRPC"
cd %thisfolder%
cd ..
cd ..
set prefolder=%cd%
xcopy "%prefolder%\SteamRPC" "c:\program files\SteamRPC" /s /y /r /c /e
echo Installation done

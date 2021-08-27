cd %~dp0%
cd ..
:connect
node .
timeout /t 30 /nobreak
goto connect
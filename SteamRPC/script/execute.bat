cd %~dp0%
cd ..
:connect
if not exist "c:\program files\steamrpc\script\execute.bat" exit
node .
timeout /t 30 /nobreak
goto connect
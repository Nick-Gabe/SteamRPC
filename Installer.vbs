Dim msg, style, title, response, answer
msg = "Thank you for downloading SteamRPC"+chr(13)+chr(10)+chr(13)+chr(10)+"YES to Install/update"+chr(13)+chr(10)+"NO to Uninstall"+chr(13)+chr(10)+"CANCEL to Close"
style = vbYesNoCancel + vbDefaultButton1 + vbQuestion
title = "SteamRPC Installer"

response = msgbox(msg, style, title)
if response = vbYes then
    Dim yes_cmd
    yes_cmd = "steamRPC\script\install.bat"
    Set WshShell = WScript.CreateObject("WScript.Shell") 
    WshShell.Run yes_cmd, 1, true
    answer = msgbox("Program installed successfully.", vbOkOnly + vbInformation, title)
    Set WshShell = Nothing
    Set ScndShell = WScript.CreateObject("WScript.Shell") 
    ScndShell.Run chr(34) & "c:/Program Files/SteamRPC/script/execute.bat" & Chr(34), 0 
    Set ScndShell = Nothing 
elseif response = vbNo then
    Dim no_cmd
    no_cmd = "steamRPC\script\uninstall.bat"
    Set WshShell = WScript.CreateObject("WScript.Shell") 
    WshShell.Run no_cmd, 1, true
    Set WshShell = Nothing
    answer = msgbox("Program uninstalled successfully.", vbOkOnly + vbInformation, title)
else
    answer = msgbox("Operation cancelled.", vbOkOnly + vbCritical, title)
End if
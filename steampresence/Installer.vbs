Dim msg, style, title, response, answer
msg = "Thank you for downloading SteamPresence"+chr(13)+chr(10)+chr(13)+chr(10)+"YES to Install"+chr(13)+chr(10)+"NO to Uninstall"+chr(13)+chr(10)+"CANCEL to Close"
style = vbYesNoCancel + vbDefaultButton1 + vbQuestion
title = "Steam Presence Installer"

response = msgbox(msg, style, title)
if response = vbYes then
    Dim yes_cmd
    yes_cmd = "script\install.bat"
    Set WshShell = WScript.CreateObject("WScript.Shell") 
    WshShell.Run yes_cmd, 1, true
    answer = msgbox("Program installed successfully.", vbOkOnly + vbInformation, title)
    Set WshShell = Nothing
    Set ScndShell = CreateObject("WScript.Shell") 
    ScndShell.Run chr(34) & "c:/Program Files/SteamPresence/script/execute.bat" & Chr(34), 0 
    Set ScndShell = Nothing 
elseif response = vbNo then
    Dim no_cmd
    no_cmd = "script\uninstall.bat"
    Set WshShell = WScript.CreateObject("WScript.Shell") 
    WshShell.Run no_cmd, 1, true
    Set WshShell = Nothing
    answer = msgbox("Restart the Computer to finish the uninstall.", vbOkOnly + vbInformation, title)
else
    answer = msgbox("Operation cancelled.", vbOkOnly + vbCritical, title)
End if
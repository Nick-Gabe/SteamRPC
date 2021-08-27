Dim msg, style, title, response, answer
msg = "Choose one of this options:"+chr(13)+chr(10)+chr(13)+chr(10)+"YES to run the program"+chr(13)+chr(10)+"NO to stop the program"+chr(13)+chr(10)+"CANCEL to close"
style = vbYesNoCancel + vbDefaultButton1 + vbQuestion
title = "Steam Presence Manager"

response = msgbox(msg, style, title)
if response = vbYes then
    Set YesShell = CreateObject("WScript.Shell" ) 
    YesShell.Run chr(34) & "script\execute.bat" & Chr(34), 0 
    Set YesShell = Nothing
    answer=msgbox("The program is running!",vbOkOnly + vbInformation, title)
elseif response = vbNo then
    Set NoShell = CreateObject("WScript.Shell" ) 
    NoShell.Run chr(34) & "script\stop.bat" & Chr(34), 0 
    Set NoShell = Nothing
    answer=msgbox("The program will stop in a minute.",vbOkOnly + vbInformation, title)
else 
    answer = msgbox("Operation cancelled.", vbOkOnly + vbCritical, title)
End if
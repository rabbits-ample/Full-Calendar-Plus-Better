This is a mendix widget Full Calendar that I did not write. I just want to uncover some of the hidden/broken features that have already been made. 
In order to put this all together, you need to zip it up (and rename the extension as mpk). MAC automatically puts weird files in a zip, and that breaks the widget.
So this command will allow you to zip it up, and then it puts the mpk in it's parent folder.

zip -r (location)/(New_Name).mpk . -x "*.DS_Store" -x "__MACOSX/*"
example:
zip -r ../FullCalendarPlus_selectDate.mpk . -x "*.DS_Store" -x "__MACOSX/*"


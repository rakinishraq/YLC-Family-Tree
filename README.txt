Tech stack: Raw HTML5 + jQuery, GSheets database

Database:
ID, name, immediate bigs [IDs], immediate smalls [IDs], checked [QIDs]
constraints: ID must be unique to name

Admin:
significantly changed questions change QID
draggable/reorderable instance is defined by QID
stored as ordered dict {"cat": [QID1, QID2], "cat2": [QID3, QID4]}

Users:
ID and name input login
fetch entry by ID: https://github.com/orgs/community/discussions/108921
show tree and checklist (form updates excel on click + submit/update)

NEW Issues:
API key exposed (change to website-specific, new API after clearing git history)
spreadsheet is "anyone with link" and spreadsheet ID is in code
cannot move questions around but can add new questions at end/new category
categories should be letters only and not "title" or "items" (existing IDs)

DEV Notes:
data indexes noted as iName/iPass/iChecked for when above database rows are added and reordered
Checked initialized with A to simplify logic since Sheets API rows dont add leading blank strings

[Fetching data from google sheets using Javascript · community · Discussion #108921 · GitHub](<https://github.com/orgs/community/discussions/108921>)
[APIs & Services – APIs & Services – YLC App – Google Cloud console](<https://console.cloud.google.com/apis/dashboard?project=ylc-app-450508>)
[YLC App Admin - Google Sheets](<https://docs.google.com/spreadsheets/d/1qVWFAWsBUW4bp7B3cGEzcAD_DSoiUYM25EOwMOC1oKY/edit?gid=1734663839#gid=1734663839>)
[UpdateChecked - Project Editor - Apps Script](<https://script.google.com/u/0/home/projects/1S-oN2xOowuVVtJeo8xexZW4ORywvM0FxfsMT89loJvQ06G3BK3iARNNg/edit>)
[levinunnink/html-form-to-google-sheet: How to submit HTML forms to Google Sheets. (Updated for 2024 Script Editor)](<https://github.com/levinunnink/html-form-to-google-sheet/>)

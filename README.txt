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
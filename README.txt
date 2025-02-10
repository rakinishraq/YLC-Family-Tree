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
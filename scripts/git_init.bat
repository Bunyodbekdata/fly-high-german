@echo off
set "PATH=C:\Program Files\Git\cmd;%PATH%"

git init
git branch -M main
git config user.name "For Great Nation"
git config user.email "user@greatnation.uz"
git add .
git commit -m "Initial commit: German learning platform with 24 lessons and 229 YouTube video lessons"
git status

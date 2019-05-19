@echo off
for /f "tokens=*" %%a in (a.txt) do (
  firefox %%a
)
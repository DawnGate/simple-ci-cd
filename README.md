# This is a simple CI react with github

## Introduction

This project aim to try ci with react and github

- React 18
- Github ci/cd
- Vite test

## Progress

1. Create a project [X]
2. Create github ci/cd pipeline [X]
3. Create test [X]
4. Update github with ci/cd for test [X]
5. Test integrated and test e2e [X]
6. Integrate with sonarqube - for code qualify [! Don't have server sonarqube]
7. Seperate flow (development, master) [X]
8. Find security with npm audit or snyk [! Don't have account - pending]
9. Auto deploy in host (firebase hosting)

## Note

- The ci will run step by step. It will stop when any step stop, that mean it will not
  execute the next step if previous step has failed

- Formatter + Linter can setup in local => before commit => make code more standard

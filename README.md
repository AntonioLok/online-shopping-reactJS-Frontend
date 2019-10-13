# online-shopping-reactJS

## System requirements
* Nodejs 10.x
* NPM 6.x

## Project setup
* clone repository: `git clone https://github.com/AntonioLok/online-shopping-reactJS-Frontend.git`
* install dependences: `npm i`

## Development
To start the app, simply run `npm run start`
The app should run at `localhost:8080`

## Git hooks
Git hooks have been created to run code quality before committing changes. If any of the scripts in the hooks report an error, the commit will be aborted. Please fix the code quality issue before proceeding further.

The commit message is checked in order to ensure that it provides enough description for developers to use. For instance, if a bug was introduced by a certain commit, it becomes quicker and easier to find and revert the commit which caused the bug in the first place. 

The pre-commit message follows the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).

The commit message should be structured as follows: `<type>[optional scope]: <description>`
Where type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]

### pre-commit
Before each commit, only code quality (eslint) and sass-lint checks will be made. 
The following command will be run:
`npm run eslint && npm run sass-lint`
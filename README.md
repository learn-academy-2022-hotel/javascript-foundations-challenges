# javascript-foundations-challenges

## Process Notes
- Anything wrapped in `< >` is an indication that this will be named uniquely, the `< >` are NOT actually added to the command
- `$` is an indication of a command line prompt, the `$` is not included
- Anything in `( )` is informational and not included in the command
- The term local/locally means on your personal computer
- The term remote means on GitHub

## Naming Conventions
Branches and file names should be in all lowercase letters with no spaces. File names will include an extension:
- Branch name: `topic-initials1-initials2` (ex. javascript-foundations-ts-cb)
- File name: `topic-student1-student2.js` (ex. javascript-foundations-tricia-charlean.js)

## Informational Commands
Use this informational command to tell you what directory you are currently in:
- $ `pwd` 

Use this informational command to tell you what files have been modified and what phase of the git process you are on:  
- $ `git status` 

Use this informational command to see what branch you are currently on:  
- $ `git branch`

## Cloning a Repository
Use this command if you don't have the repository (folder) on your local machine:   
- $ `git clone <repo-url>` (repo url pasted from Code dropdown menu on GitHub repo)

## Making Changes Locally to a Repo
-  Enter the repo locally to make changes: $ `cd javascript-foundations-challenges`
- Create a new branch: $ `git checkout -b foundations-initials1-initials2` (ex. git checkout -b foundations-ts-cb)
- Create a file: $ `touch foundations-student1-student2.js` (ex. touch foundations-tricia-charlean.js)
- Open the folder in a text editor
- Copy and paste the code challenge questions onto the file


## Updating an Existing Repository
Use this command if you DO have the repository on your local machine but DON'T have the latest version of the code from GitHub:  
- $ `git pull origin main`

## Create a Branch
Use this command if you need to create a branch that does not exist anywhere:  
- $ `git checkout -b <topic-initials1-initials2>` (ex. arrays-ts-cb)

## Moving to an Existing Local Branch 
- $ `git branch`  
- Move to a branch that exist on your local machine: $ `git checkout <branch-name>`  


## Moving to an Existing GitHub Branch
Use these commands if the repo you are working on has a branch but it is NOT on your local machine:  
- $ `git fetch origin <branch-name>`
- $ `git checkout <branch-name>`

## Use these commands to add the code you have on your local machine to GitHub:
- $ `pwd` (ensure you are in the repository level)
- $ `git status` (informational command, ensure you are on the correct branch and in the correct directory)
- Options to track file changes:
  - (If you want to add all files) $ `git add .`
  - (If you want to add certain files) $ `git add <file-name>`
- $ `git commit -m "message describing the work that was accomplished"`
- $ `git push origin <branch-name>`

## Updating an Existing Local Branch when switching drivers
Use these commands if the local branch you are working DOESN'T have the latest version of the code: 
- Ensure the changes to the branch are pushed to GitHub
- $ `git checkout <branch-name>` 
- $ `git pull origin <branch-name>`

## Create a Pull Request for Code Review
- Click `Compare & pull request` to be redirected to a page to create a pull request for code review
- Click `Create pull request` to create a pull request

## Merging changes on GitHub after review approval:
- Wait for an approval before merging changes from the current branch into the main branch
- Once approved, Click `Merge pull request` which will update the main branch with all the changes from your current branch
- Delete stale branch remotely, click `Delete branch`
- Delete stale branch locally 
  - Ensure the local repo is up to date with the remote repo
    - $ `git checkout main`
    - $ `git pull origin main`
  - Delete the stale branch
    - $ `git branch -d <stale-branch>`

## Change requests:
- Modify code on the branch linked to the pull request
- Follow the same steps to add the code you have on your local machine to GitHub
- These changes will automatically update the current pull request
- Wait for approval
- When approved, follow the steps to merge changes
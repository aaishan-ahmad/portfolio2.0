

## 1. Normal command

- **ls(git) and dir(cmd)** : show list of file
- **cd drive_name** :move the drive
- **cd "folder_name/"** :move in folder
- **cd ..** :back into current directory
- **Type nul "file_name"(cmd) and touch "file_name"**:create file
- **mkdir "folder name"** : create a folder
- **Cat "file name"**: show text in file

## 2. Vim editor command

1. **vi file_name** : create file
2. **i** : use to start write in vim editor
3. **esc & :x** :exit ti vim editor

---

## 3. Config:

---

- **git config --global credential.username "user_name"** : cahnge credential (authore).
- **git config --global user.email** : set email.
- **git config --global user.name** : set name.

---

## 4. Basic and Beginner Git Commands:

---

- **git init** : Initializes a new Git repository in the current directory.
- **git add "file"** : Adds a file to the staging area for a commit.
- **git commit -m "Commit message"** : Commits the changes in the staging area to the repository with a commit message.
- **git status** : Shows the current status of the repository, including changes that have been made and files that are in the staging area.
- **git log** : Shows a log of all commits that have been made in the repository.
- **git diff** : Shows the differences between the current state of the repository and the last commit.
- **git branch** : Lists all local branches in the repository.
- **git checkout "branch"** : Switches to a different branch.
- **git merge "branch"** : Merges the specified branch into the current branch.
- **git clone "repository"** : Clones a remote Git repository to a local directory.
- **git restore --staged "file name"** :out of the stage area
- **git reset "hash id"**:remove all the commit after the hash id
- **git stash** : If you want not to commit and hide from stage area
- **git stash pop** :unhide and go hide file stage area

## 5. Branch in Git

- **git branch "branch_name"** : create branch
- **git checkout "branch_name"** : chekout the branch
- **git merge "branch_name"** : merge the branch with main branch
- **git checkout "branch_name^"** : checkout the above back commit of the branch
- **git branch -d "branch_name"** : delete the branch
- **git branch -m old_name new_name** : Rename the branch name
- **git push -u origin main** : set main as a defalut branch
- **git branch --set-upstream-to=origin/main** : This sets the upstream branch for the current branch to main, which will pull changes from the renamed main branch on the remote repository.

## 6. Remote Git Commands:

---

- **git remote** : Lists all remote repositories that are associated with the current Git repository.
    
- **git remote add "name" "url"** : Adds a new remote repository to the current Git repository.
    
- **git remote add "name" "url"** : Adds a new remote repository to the current Git repository.
    
- **git push "remote" "branch"** : Pushes local changes to the specified remote repository and branch.
    
- **git fetch "remote"** : Fetches changes from the specified remote repository.
    
- **git pull "remote" "branch"** : Fetches changes from the specified remote repository and merges them into the current branch.

[link with basic](BASIC)

/*
  Creating a new branch
  git checkout -b "akash_branch_01"

  Enter this branch
  git branch

  Normal Git Commit Steps
  
  git add .

  git commit -m "added comments"

  git push origin akash_branch_01

Step 1: From your project repository, bring in the changes and test.

git fetch origin
git checkout -b akash_branch_01 origin/akash_branch_01
git merge master


Step 2: Merge the changes and update on GitHub.

git checkout master
git merge --no-ff akash_branch_01
git push origin master


*/
#!/bin/bash

echo -e "--------------- Checking branch name against convention ---------------\n"

branch_name=""
branch_name_from_git=$(git rev-parse --abbrev-ref HEAD)
branch_name_from_github=${GITHUB_HEAD_REF}
project_prefix="monorepo"
branch_name_regex="^(chore|feat|bug|hotfix)/${project_prefix}-[0-9]+(-.*)?|^dependabot.*"

if [ -n "$branch_name_from_github" ]; then
  branch_name="$branch_name_from_github"
elif [ -n "$branch_name_from_git" ]; then
  branch_name="$branch_name_from_git"
else
  echo "Error: Unable to get the branch name. (This script probably needs to be updated...)"
  exit 1
fi

if [[ "$branch_name" =~ $branch_name_regex ]]; then
  echo -e "Branch name matches the naming convention."
  echo -e "Exiting successfully.\n"
  exit 0
else
  echo -e "Error: Branch name '$branch_name' does not match the branch naming convention.\n"
  echo -e "Branch name should start with 'chore/', 'feat/', 'bug/', or 'hotfix/' followed by '${project_prefix}-' and the story number."
  echo -e "An optional description can follow at the end, prefixed with a dash.\n" 

  echo -e "Example: 'bug/${project_prefix}-5678'"
  echo -e "Example: 'feat/${project_prefix}-1234-fix'"
  echo -e "Example: 'feat/${project_prefix}-1234-add-missing-feature'\n"

  echo -e "Please update the branch name to match the naming convention and try again.\n"

  exit 1
fi
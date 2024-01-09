# Using git with python to create a daemon that verify for updates on a repository periodically:

```
import os
import git
import requests
from datetime import datetime
import time
import sys


def check_for_updates(repository_path):
    repo = git.Repo(repository_path)
    current_commit = repo.head.commit

    # GitHub repository details
    owner = "Doquey"
    repo_name = "FingerCounter"

    # GitHub API URL for the main branch
    api_url = f"https://api.github.com/repos/{owner}/{repo_name}/branches/main"

    # Make a request to the GitHub API
    response = requests.get(api_url)

    if response.status_code == 200:
        github_commit = response.json()["commit"]["sha"]

        if github_commit != current_commit.hexsha:
            print(f"Update detected in {repo_name} at {datetime.now()}!")
            print("Perform actions or update your local repository as needed.")
        else:
            print(f"No updates in {repo_name} at {datetime.now()}.")

    else:
        print(
            f"Failed to fetch repository information. Status code: {response.status_code}")


def main():
    # Specify the local path to your Git repository
    repository_path = "./FingerCounter"

    while True:
        check_for_updates(repository_path)
        # Check for updates every hour
        time.sleep(1)


if __name__ == '__main__':
    # Daemonize the process (optional)
    try:
        pid = os.fork()
        if pid > 0:
            os._exit(0)
    except OSError as e:
        sys.stderr.write("Fork failed: {}\n".format(e))
        os._exit(1)

    main()
```

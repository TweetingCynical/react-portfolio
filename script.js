const url =
  "https://api.github.com/search/repositories?q=TweetingCynical+in:name";

function getGithubRepos() {
  const githubData = fetch(url).then((response) => response.json());
  console.log(getGithubRepos);
  return githubData;
}

getGithubRepos();

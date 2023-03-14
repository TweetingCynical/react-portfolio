// Standard api call for us in ordinary html
// Need to convert to React in order to use with Cards at a later stage
let repos;
const url =
  "https://api.github.com/search/repositories?q=TweetingCynical+in:name";

const getGithubRepo = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.items;
};

getGithubRepo().then((data) => {
  repos = data.filter((repo) => repo.topics.includes("portfolio-ready"));
  repos.sort((a, b) => b.id - a.id);
});

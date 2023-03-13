import React, { useState, useEffect } from "react";
import Card from "./Card";

const GithubRepos = () => {
  console.log("TEST");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // URL for searching my repos on Github
    const url =
      "https://api.github.com/search/repositories?q=TweetingCynical+in:name";

    const getGithubRepo = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // Only return the items from the object that is promised
      return data.items;
    };

    getGithubRepo().then((data) => {
      // Use a filter on the topics, so that only repos that we WANT included in our Portfolio will remain
      // NOTE: To include a portfolio, you now need to add the topic "portfolio-ready"
      const filterRepos = data.filter((repo) =>
        repo.topics.includes("portfolio-ready")
      );
      // Sort repo so that largest ID is at the front, allowing your latest work to be the first cards in the site
      const sortRepos = filterRepos.sort((a, b) => b.id - a.id);
      setRepos(sortRepos);
    });
  }, []);

  // Pass the information to the Cards which is actually required for the
  const cards = repos.map((repo) => (
    <Card
      key={repo.id}
      name={repo.name}
      homepage={repo.homepage}
      description={repo.description}
      url={repo.html_url}
    />
  ));

  return <div>{cards}</div>;
};

export default GithubRepos;

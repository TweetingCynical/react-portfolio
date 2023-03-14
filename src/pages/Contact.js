// Import font awesome for bullet point icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      <h2>
        <span className="bg-purple rounded shadow-lg p-2">Contact Me</span>
      </h2>
      <br></br>
      <p>
        To find out more about my services, collaborations and more, follow your
        choice from the links below:
      </p>
      <br></br>
      <div className="portfolio-nav justify-content-center">
        <div>
          <span className="bg-purple rounded shadow-lg m-1 p-2">
            <FontAwesomeIcon icon={faGithub} />{" "}
            <a
              href="https://github.com/TweetingCynical"
              className="text-light text-decoration-none"
            >
              Github
            </a>
          </span>
        </div>
        <div>
          <span className="bg-purple rounded shadow-lg m-1 p-2">
            <FontAwesomeIcon icon={faLinkedin} />{" "}
            <a
              href="https://www.linkedin.com/in/jon-garnett-smith-b18780261/"
              className="text-light text-decoration-none"
            >
              LinkedIn
            </a>
          </span>
        </div>
        <div>
          <span className="bg-purple rounded shadow-lg m-1 p-2">
            <FontAwesomeIcon icon={faTwitter} />{" "}
            <a
              href="https://twitter.com/tweetingcynical"
              className="text-light text-decoration-none"
            >
              Twitter
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import headshot from "../images/headshot.png";

const Header = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      <h1>Jon Garnett-Smith</h1>
      <br></br>
      <img
        src={headshot}
        alt="Headshot of Jon Garnett-Smith"
        className="border border-primary shadow-lg rounded-circle headshot m-2 p-2"
      />
    </div>
  );
};

export default Header;

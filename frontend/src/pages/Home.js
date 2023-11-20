import logo from "../assets/salvo.png";
import "./Home.css";


function Home(props) {

  return (
    <>
      <div className="App">
        <header className="Appheader">
          <img src={logo} className="Applogo" alt="logo" />
          <br />
          <br />
          <br />
          <br />
          <br />        
          <p>
            <code>{process.env.REACT_APP_BEGNAPP_NAME}</code>
          </p>
          <a
            className="Applink"
            href="https://painfulstaff.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            painfulstaff.com
          </a>
          <p>{props.children}</p>
          <br />
          <br />
          <br />
          <br />
          <br />
        </header>
      </div>
    </>
  );
}

export default Home;

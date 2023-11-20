
import c from "./Navigator.module.css";

import Button from "../layout/Button";
import LoginButton from "../layout/LoginButton";


function Navigator() {

  return (
    <div className={c.header + " m-4 App-header"}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Button active={true} name={process.env.REACT_APP_BEGNAPP_NAME} link={process.env.REACT_APP_BEGNAPP_ROOT} />

          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                  
              <Button active={true /*isLoggedIn*/} name="Button 1" link={process.env.REACT_APP_BEGNAPP_ROOT + "link1" } />
              <Button active={true /*isLoggedIn*/} name="Button 2" link={process.env.REACT_APP_BEGNAPP_ROOT + "link2" } />
              <Button active={true /*isLoggedIn*/} name="Button 3" link={process.env.REACT_APP_BEGNAPP_ROOT + "link3" } />
            </div>


            <div className="navbar-nav ms-auto">
              <LoginButton />
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigator;

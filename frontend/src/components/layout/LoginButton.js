import { Link } from "react-router-dom";
import { useAppContext } from "../../utils/AppContex";

function LoginButton(props) {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  const { profileObj, setProfileObj } = useAppContext();


  if (profileObj) {
    return (
      <>
        <Link className="nav-item nav-link" to={process.env.REACT_APP_BEGNAPP_ROOT + "profile" } >
          <div>Hi, {profileObj.name}</div>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link className="nav-item nav-link" to={process.env.REACT_APP_BEGNAPP_ROOT + "login" } >
          <div>Login</div>
        </Link>
      </>
    );
  }
}

export default LoginButton;

import { Link } from "react-router-dom";

function Button(props) {
  if (!props.active) {
    return (<></>);
  } else {
  return (
    <>
      <Link className="nav-item nav-link" to={props.link}>
        {props.name}
      </Link>
    </>
  );
  }
}

export default Button;

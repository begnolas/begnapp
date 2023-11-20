import { useAppContext } from "../utils/AppContex";

function Profile(props) {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  const { profileObj, setProfileObj } = useAppContext();


  if (!isLoggedIn) {
    return (
      <>
      <p>null</p>
      </>
    );
  }
  else {
        return (
      <>
        <div>
          <h1>{profileObj.name}</h1>
          <p>
            <img src={profileObj.imageUrl} />
          </p>
          <p>{profileObj.email}</p>
          <p>{profileObj.googleId}</p>
          <p>{profileObj.familyName}</p>
          <p>{profileObj.givenName}</p>
        </div>
      </>
    );
  }
}

export default Profile;

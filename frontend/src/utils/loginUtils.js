import {
  getLocalStorageObj,
  setLocalStorage,
  deleteLocalStorage,
} from "./localStorageUtils";

/*
export function requireAuth(nextState, replace, next) {
  if (!authenticated) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname },
    });
  }
  next();
}
*/

export function saveLoginDataInStorage(res) {
  setLocalStorage("loginInfo", JSON.stringify(createProfileInfo(res)));


  console.log("saveLoginDataInStorage");
}

export function deleteLoginDataInStorage() {
  deleteLocalStorage("loginInfo");
}

export function profileData() {
  var data = {};
  var profileObj = getLocalStorageObj("loginInfo");

  if (profileObj === null) return null;
  else {
    data.email = profileObj["email"];
    data.name = profileObj["name"];
    data.imageUrl = profileObj["imageUrl"];
    data.googleId = profileObj["googleId"];
    data.familyName = profileObj["familyName"];
    data.givenName = profileObj["givenName"];

    return data;
  }
}

export function isGoogleLogged() {
  if (getLocalStorageObj("loginInfo") === null) return false;
  else return true;
}

export function isLogged() {
  return isGoogleLogged();
}


export function createProfileInfo(googleObj) {
  const data = new Map();

  if (googleObj === null) return null;
  else {
    var profileObj = googleObj["profileObj"];

    data.set("email", profileObj["email"]);
    data.set("name", profileObj["name"]);
    data.set("imageUrl", profileObj["imageUrl"]);
    data.set("googleId", profileObj["googleId"]);
    data.set("familyName", profileObj["familyName"]);
    data.set("givenName", profileObj["givenName"]);

    return Object.fromEntries(data);
  }
}




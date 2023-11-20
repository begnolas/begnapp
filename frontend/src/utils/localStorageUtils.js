export function isLocalStorageSet(key) {
  const value = localStorage.getItem(key);

  if (value === null) 
    return false;
  else 
    return true;
  }

export function getLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value;
}

export function getLocalStorageObj(key) {
  if (isLocalStorageSet(key)) {
    const value = getLocalStorage(key);
    return JSON.parse(value);
  } else return null;
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function deleteLocalStorage(key) {
  localStorage.removeItem(key);
}

export function deleteAllLocalStorage() {
  localStorage.clear();
}
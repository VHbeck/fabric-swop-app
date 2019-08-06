export function getFromStorage(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (error) {
    return [];
  }
}

export function setToStorage(name, item) {
  return localStorage.setItem(name, JSON.stringify(item));
}

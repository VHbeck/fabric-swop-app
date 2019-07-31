export function getCardFromStorage() {
  try {
    return JSON.parse(localStorage.getItem("Card"));
  } catch (error) {
    return [];
  }
}

export function setCardToStorage(item) {
  return localStorage.setItem("Card", JSON.stringify(item));
}

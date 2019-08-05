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

export function getPurchaseFromStorage() {
  try {
    return JSON.parse(localStorage.getItem("Purchase"));
  } catch (error) {
    return [];
  }
}

export function setPurchaseToStorage(item) {
  return localStorage.setItem("Purchase", JSON.stringify(item));
}

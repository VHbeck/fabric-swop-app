export function getCards() {
  return fetch("/api/cards").then(res => res.json());
}

export function postCard(data) {
  return fetchCard("POST", data);
}

export function patchCard(data, id) {
  return fetchCard("PATCH", data, id);
}

function fetchCard(method, data, id = "") {
  return fetch("/api/cards/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function getProfiles() {
  return fetch("/api/profiles").then(res => res.json());
}

export function postProfile(data) {
  return fetchProfile("POST", data);
}

export function patchProfile(data, id) {
  return fetchProfile("PATCH", data, id);
}

function fetchProfile(method, data, id = "") {
  return fetch("/api/profiles/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

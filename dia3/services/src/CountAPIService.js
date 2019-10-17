const API = "https://api.countapi.xyz";
const NAMESPACE = "092019_react_class_services";

export const getKey = (key) => {
  return fetch(`${API}/info/${NAMESPACE}/${key}`, {
    method: "GET"
  }).then(res => res.json());
};

export const setKeyValue = (key, newValue) => {
  return fetch(`${API}/set/${NAMESPACE}/${key}?value=${newValue}`, {
    method: "GET"
  }).then(res => res.json());
};

export const createKey = (key) => {
  return fetch(`${API}/create?namespace=${NAMESPACE}&enable_reset=1&key=${key}`, {
    method: "GET"
  }).then(res => res.json());
};

export const hit = (key) => {
  return fetch(`${API}/hit/${NAMESPACE}/${key}`, {
    method: "GET"
  }).then(res => res.json());
};
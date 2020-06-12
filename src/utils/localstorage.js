export const lSsetItem = ({ name, value }) => {
  return localStorage.setItem(name, value);
};
export const lSgetItem = ({ name }) => {
  return localStorage.getItem(name);
};

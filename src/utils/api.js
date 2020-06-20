export const getQuery = () => {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams;
};

export const queryParams = object => {
  const params = new URLSearchParams();
  Object.keys(object).forEach(item => {
    params.append(item, object[item]);
  });
  return params;
};

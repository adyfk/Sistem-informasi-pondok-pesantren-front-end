export const getPath = () => window.location.pathname;
export const pushPath = path => `${getPath()}/${path}`;

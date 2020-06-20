export const toLocalString = number => {
  if (typeof number !== "number") {
    const afterParse = parseInt(number);
    if (afterParse.toString() === "NaN") return 0;
    return afterParse;
  }
  return number.toLocaleString();
};

export const string = (val, params = {}) => {
  const front = params?.front || "";
  const back = params?.back || "";
  return front + (val || "") + back;
};

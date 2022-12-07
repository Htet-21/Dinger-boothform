export const removeWhiteSpaceAndChangeLowerCase = (str) => {
  return str.toString().toLowerCase().replace(/\s/g, "");
};

export const isEditTable = ({ edit, index, data }) => {
  let editable;
  if (edit === "new") {
    editable = index + 1 === data.length;
  } else {
    editable = edit === index;
  }
  return editable;
};

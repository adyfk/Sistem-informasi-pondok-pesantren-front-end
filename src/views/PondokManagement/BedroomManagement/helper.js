export const schemaTable = {
  tableHeader: [
    { name: "no", label: "#", classHead: "" },
    { name: "title", label: "Title", classHead: "w-25" },
    { name: "description", label: "Description", classHead: "w-25" },
    { name: "cost", label: "Cost", classHead: "w-25" },
    { name: "action", label: "Action", classHead: "" }
  ]
};

export const sumCost = data =>
  data.reduce((prev, curr) => ((curr?.id && curr?.cost) || 0) + prev, 0);

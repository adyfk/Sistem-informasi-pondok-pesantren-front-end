export default function() {
  return [
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      htmlAfter: ""
    },
    {
      title: "Pondok Management",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/pondok-management"
    },
    {
      title: "Payment",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/payment"
    },
    {
      title: "Santri Management",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/santri-management"
    }
  ];
}

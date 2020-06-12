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
      title: "Santri Management",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/santri-management"
    },
    {
      title: "Payment",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/payment"
    },
    {
      title: "Bedroom Santri",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/bedroom-santri"
    },
    {
      title: "Class Santri",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/class-santri"
    },
    {
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts"
    },
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post"
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview"
    }
    // {
    //   title: "Tables",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables"
    // },
    // {
    //   title: "User Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/user-profile-lite"
    // },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors"
    // }
  ];
}
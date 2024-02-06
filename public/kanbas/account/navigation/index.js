function AccountNavigation(location) {
  const links = [
    {
      name:"Notification",
      url:""
    },
    {
      name:"Profile",
      url:"/kanbas/account/profile/screen.html"
    },
    {
      name:"Files",
      url:""
    },
    {
      name:"Settings",
      url:""
    },
    {
      name:"The Hub",
      url:""
    },
  ];

  document.write(`
    <ul class="account-navigation">
      ${links.map(
        (link) => `<li class="${location === link.name ? "active" : ""}">
                      <a href="${link.url}">${link.name}</a>
                   </li>`
      ).join("")}
    </ul>
  `);
}

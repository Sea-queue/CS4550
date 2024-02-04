function KanbasNavigation(location) {
  const links = [
    {
      name: "N",
      url: "http://northeastern.edu",
    },
    {
      name:"Account",
      url:"/kanbas/account/navigation/index.html",
      icon: "fa fa-solid fa-user"
    },
    {
      name:"Dashboard",
      url:"/kanbas/dashboard/screen.html",
      icon: "fa fa-tachometer"
    },
    {
      name:"Courses",
      url:"/kanbas/courses/navigation/index.html",
      icon: "fa fa-solid fa-bell"
    },
    {
      name:"Calendar",
      url:"",
      icon:"fa fa-calendar"
    },
    {
      name:"Inbox",
      url:""
    },
    {
      name:"History",
      url:""
    },
    {
      name:"Studio",
      url:""
    },
    {
      name:"Commons",
      url:""
    },
    {
      name:"Help",
      url:""
    },
  ];

  document.write(`
    <ul class="kanbas-navigation">
      ${links.map(
          (link) => `<li class=${location === link.name ? "active" : ""}>
                        <a href="${link.url}">
                          <i class="${link.icon}"></i>
                          ${link.name}
                        </a>
                     </li>`
        ).join("")}
    </ul>
  `)

}
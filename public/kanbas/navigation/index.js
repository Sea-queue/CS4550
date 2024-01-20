function KanbasNavigation(location) {
  const links = [
    {
      name:"Account",
      url:"/kanbas/account/navigation/index.html"
    },
    {
      name:"Dashboard",
      url:""
    },
    {
      name:"Courses",
      url:"/kanbas/courses/navigation/index.html"
    },
    {
      name:"Calendar",
      url:""
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
    <ul style="width:100px; list-style-type: none; background-color:orange; margin:0px; padding-left:10px">
      ${links.map(
          (link) => `<li style="width:100%; padding:10px; ${location === link.name ? "border-left: 3px solid green;" : ""}">
                        <a href="${link.url}">${link.name}</a>
                     </li>`
        ).join("")}
    </ul>
  `)
}
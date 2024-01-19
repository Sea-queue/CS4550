function CourseNavigation(location) {
  const links = [
    {
      name:"Home",
      url:"/kanbas/courses/home/screen.html"
    },
    {
      name:"Modules",
      url:""
    },
    {
      name:"Piazza",
      url:""
    },
    {
      name:"Zoom Meetings",
      url:""
    },
    {
      name:"Assignments",
      url:"/kanbas/courses/assignments/screen.html"
    },
    {
      name:"Quizes",
      url:""
    },
    {
      name:"Grades",
      url:"/kanbas/courses/grades/screen.html"
    },
    {
      name:"People",
      url:""
    },
  ];

  
  document.write(`
    <ul style="list-style-type: none; background-color:lightgray; margin:0px; padding:0px">
      ${links.map(
          (link) => `<li style="padding:10px; ${location === link.name ? "border-left: 3px solid green;" : ""}">
                        <a href="${link.url}">${link.name}</a>
                     </li>`
        ).join("")}
    </ul>
  `);
}
function CourseNavigation(location) {
  const links = [
    {
      name:"Home",
      url:"/kanbas/courses/home/screen.html"
    },
    {
      name:"Modules",
      url:"/kanbas/courses/modules/screen.html"
    },
    {
      name:"Piazza",
      url:""
    },
    {
      name:"Zoom",
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
    <ul class="course-navigation">
      ${links.map(
          (link) => `<li class="${location === link.name ? "active" : ""}">
                        <a href="${link.url}">${link.name}</a>
                     </li>`
        ).join("")}
    </ul>
  `);
}
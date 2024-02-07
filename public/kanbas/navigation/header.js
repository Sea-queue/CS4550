function Header() {
  const link1 = [
    {
      name:"Account",
      url:"/kanbas/account/profile/screen.html",
      icon: "fa fa-solid fa-user"
    },
    {
      name:"Dashboard",
      url:"/kanbas/dashboard/screen.html",
      icon: "fa fa-tachometer"
    },
    {
      name:"Courses",
      url:"/kanbas/courses/home/screen.html",
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

  const link2 = [
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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <button class="navbar-toggler float-left" type="button" data-toggle="collapse" data-target="#kanbasNavigation" aria-controls="kanbasNavigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">NEU</a>
      <button class="navbar-toggler float-left" type="button" data-toggle="collapse" data-target="#courseNavigation" aria-controls="courseNavigation" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-solid fa-chevron-down"></i>
      </button>
    
      <div class="collapse navbar-collapse" id="kanbasNavigation">
        <ul class="navbar-nav mr-auto header">
          ${link1.map(
            (link) => `<li class="nav-item">
                          <a href="${link.url}">
                            <i class="${link.icon}"></i>
                            ${link.name}
                          </a>
                      </li>`
          ).join("")}
        </ul>
      </div>

      <div class="collapse navbar-collapse" id="courseNavigation">
        <ul class="navbar-nav mr-auto header">
          ${link2.map(
            (link) => `<li class="nav-item">
                          <a href="${link.url}">
                            <i class="${link.icon}"></i>
                            ${link.name}
                          </a>
                      </li>`
          ).join("")}
        </ul>
      </div>
    </nav>
  `)
}
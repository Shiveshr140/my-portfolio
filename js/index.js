const projects = [
     {
      "name": "InfoShop Admin Dashboard using React",
      "thumb": "dashboard.png",
      "hero": "dashboard-hero.png",
      "categories": ["react", "css", "material ui"],
      "slug": "dashboard",
      "prod": "https://harmonious-dusk-70f970.netlify.app/"
  },

    {
      "name": "E-Commerce Web App with Nodejs and Express",
      "thumb": "e-comm.png",
      "hero": "e-comm-hero.png",
      "categories": ["nodejs", "express", "html", 'css'],
      "slug": "e-comm",
      "prod": "http://mynodeapp.eba-mxt3bqgp.ap-south-1.elasticbeanstalk.com/"
  },

    {
      "name": "Movie Fight App with JavaScript, HTML and CSS",
      "thumb": "movie-fight.png",
      "hero": "movie-fight -hero.png",
      "categories": ["java script", "html", 'css'],
      "slug": "movie-fight",
      "prod": "https://shiveshr140.github.io/Movie-Fight/"
  },

  {
      "name": "Movie Watchlist App with Python and Flask",
      "thumb": "movie.png",
      "hero": "movie-hero.png",
      "categories": ["python", "flask"],
      "slug": "movie-watchlist",
      "prod": "https://movie-watchlist-1q8p.onrender.com/",
  },


  {
      "name": "Habit tracking app with Python and MongoDB",
      "thumb": "habit-tracking.png",
      "hero": "habit-tracking-hero.png",
      "categories": ["python", "web"],
      "slug": "habit-tracking",
      "prod": "https://habit-tracker-7dde.onrender.com/",
  },
  
  {
      "name": "Microblog app with Python and Flask",
      "thumb": "micro-blog.png",
      "hero": "micro-blog-hero.png",
      "categories": ["python", "flask"],
      "slug": "micro-blog",
      "prod": "https://python-microblog-nati.onrender.com/"
  },

  {
      "name": "Maze Game using JavaScript and MatterJs",
      "thumb": "maze-game.png",
      "hero": "maze-game -hero.png",
      "categories": ["java script", "matter js"],
      "slug": "maze-game",
      "prod": "https://shiveshr140.github.io/Maze-Game/"
  }

]


function projectsSection() {
    const div = document.querySelector('.projects');

    for (let project of projects) {
        const projectCard = document.createElement('article');
        projectCard.classList.add('project-card');

        const projectImage = document.createElement('img');
        projectImage.classList.add('project-card__image');
        projectImage.src = `./static/assets/${project['thumb']}`;
        projectCard.appendChild(projectImage);

        const projectMeta = document.createElement('header');
        projectMeta.classList.add('project-card--meta');

        const categoriesList = document.createElement('ul');
        categoriesList.classList.add('categories');

        for (let category of project['categories']) {
            const categoryTag = document.createElement('li');
            categoryTag.classList.add('categories__tag');
            categoryTag.textContent = category;
            categoriesList.appendChild(categoryTag);
        }

        const projectName = document.createElement('h2');
        projectName.classList.add('project-card__name');
        projectName.textContent = project['name'];

        projectMeta.appendChild(categoriesList);
        projectMeta.appendChild(projectName);

        projectCard.appendChild(projectMeta);
        
        const projectLink = document.createElement('a');
        projectLink.classList.add('u-bare-link');
        projectLink.href = `./projects/project_${project['slug']}.html`;
        projectLink.appendChild(projectCard);

        div.appendChild(projectLink);
    }
}

projectsSection();










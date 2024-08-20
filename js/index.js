const projects = [

    {
        "name": "InfoShop Admin Dashboard Web App with ReactJS and Material UI",
        "thumb": "infoshop.png",
        "hero": "infoshop-hero.png",
        "categories": ["reactjs", "material ui", "tailwind"],
        "slug": "infoshop",
        "prod": "https://flourishing-hamster-19573b.netlify.app/"
    },

    {
        "name": "Fast React Pizza Web App using Redux, RESTful API and Tailwind CSS",
        "thumb": "pizzareact.png",
        "hero": "pizzareact-hero.png",
        "categories": ["reactjs", "api", "tailwind"],
        "slug": "pizzareact",
        "prod": "https://fast-react-pizza-shiv140.netlify.app/"
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
        "name": "WorldWise Web App with ReactJS, Api and Leaflet Js ",
        "thumb": "worldwise.png",
        "hero": "worldwise-hero.png",
        "categories": ["reactjs", "api", "leaflet js"],
        "slug": "worldwise",
        "prod": "https://worldwisenow.netlify.app/"
    },    
    
    {
        "name": "usePopcorn Web App with ReactJS and OMDB API",
        "thumb": "usePopcorn.jpg",
        "hero": "usePopcorn-hero.png",
        "categories": ["reactjs", "omdb api", "html", 'css'],
        "slug": "usePopcorn",
        "prod": "https://usepopcornshiv140.netlify.app/"
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










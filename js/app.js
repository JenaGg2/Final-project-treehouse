const body = document.querySelector('body');
const overlay = document.querySelector('#overlay');
const projectDetails = document.querySelector('#project-details');
const buttons = document.querySelectorAll('button');
const projectsInfo = [


  { name: 'responsive layout',
  id: 'ResponsiveLayout',
  image: 'img/ResponsivelayoutFull.jpeg',
  description: 'This project was built using HTML, CSS, and responsive design creating a mobile-first web page with a layout that adjusts to fit mobile phones, tablets, and desktop displays.',
  skills: 'HTML, CSS, Responsive Images, Media Queries, Chrome DevTools, Mobile first design.',
  site: 'https://jenagg2.github.io/TECHDEGREE-PROJECT2/',
  code: 'https://github.com/JenaGg2/TECHDEGREE-PROJECT2'
  },

  { name: 'online registration form',
    id: 'OnlineRegistrationForm',
    image: 'img/Registrationformfull.jpeg',
    description: 'This project was built with a variety of HTML form elements, laid out responsively with Flexbox, and styled with CSS selectors.',
    skills: 'HTML Forms, CSS, Flexbox, Responsive Design',
    site: 'https://jenagg2.github.io/techdegree-project3/',
    code: 'https://github.com/JenaGg2/techdegree-project3'
  },

  { name: 'web style guide',
    id: 'WebStyleGuide',
    image: 'img/WebStyleGuideFull.jpg',
    description: 'This project was built using Sass to manage a network of separate CSS files for normalizing browser differences, base styling, components (buttons, form fields, layout grids, images, navigation, and typography), and utilities (inheritance, functions, mixins, placeholders, and variables). Although these features may be managed individually on complex projects, the result is a single, compiled CSS file &hellip; and a single web page to display the styles for the user.',
    skills: 'HTML, CSS, Sass, Responsive Design',
    site: 'https://jenagg2.github.io/techdegree-project4/',
    code: 'https://github.com/JenaGg2/techdegree-project4'

  },


  { name: 'interactive photo gallery',
    id: 'InteractivePhotoGallery',
    image: 'img/PhotoGalleryFull.jpg',
    description: 'This project was built using a vanilla JavaScript to loop through an array of objects to build an initial gallery of thumbnail photos. It then accepts user search criteria to iterate through the array and rebuild the gallery based on matching the search string to words in the photo descriptions. In addition, it employs a "Lightbox" plugin that displays the full resolution image, title, and description, and allows the user to cycle through hi-res photos in this mode.',
    skills: 'HTML, CSS, JavaScript, jQuery, Lightbox Plugin, Responsive Design',
    site: 'https://jenagg2.github.io/Treehouse-Project5/',
    code: 'https://github.com/JenaGg2/Treehouse-Project5'
  },

  { name: 'game show app',
    id: 'GameShowApp',
    image: 'img/GameshowAppFull.jpg',
    description: 'This project was built using JavaScript to select a random phrase from a string array and parse each letter into a list item. It then displays the hidden letter divs, a keyboard, and a life meter at the start of the game. Players select letters from the keyboard, and if they guess correctly, those hidden letters are revealed in the phrase. Incorrect guesses result in a life (indicated by hearts at the bottom) being removed from the board. This game relies on the DOM (Document Object Model), JavaScript functions, and arrays to build and reset the gameboard for continuous play.',
    skills: 'HTML, CSS, JavaScript, DOM',
    site: 'https://jenagg2.github.io/techdegree-project6/',
    code: 'https://github.com/JenaGg2/techdegree-project6'
  },
  

  { name: 'employee directory',
  id: 'EmployeeDirectory',
  image: 'img/EmployeeFull.jpg',
  description: 'This project was built using  the Fetch API to pull randomly-generated employee info.  The results are parsed into a JavaScript array and iterated over to build the initial gallery of employee cards. When the user clicks on a card, an event listener triggers an overlay screen and several functions which filter and format the employee details matching the card that was clicked. The overlay card is then populated with the filtered results along with an "x" for the user to close out of the overlay window.',
  skills: 'HTML, CSS, JavaScript, Fetch API, Responsive Design',
  site: 'https://jenagg2.github.io/Techdegree-Project8/',
  code: 'https://github.com/JenaGg2/Techdegree-Project8'
  }

  
]

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', (event) => {
    let clickId = event.target.id;
    let project = projectsInfo.filter(object => object.id == clickId)[0];
    overlay.style.display = 'flex';
    body.style.overflow = 'hidden';
    showDetails(project);
  });
}

function showDetails(project) {
  let name = project.name;
  let image = project.image;
  let description = project.description;
  let skills = project.skills;
  let site = project.site;
  let code = project.code;
  let html = `
    <button class="x"><strong>&times;</strong></button>
    <div class="p-image-and-info">
      <img class="project-full" alt="project picture" src="${image}">
      <div class="p-info">
        <h5>${name}</h5>
        <p>${description}</p>
        <p><strong>Skills</strong>: ${skills}</p>`
        if ( site !== '' ) {
          html += `<p><a href="${site}" target="_blank">Visit the site</a></p>`;
        }
        if ( code !== '' ) {
          html += `<p><a href="${code}"target="_blank">View the code</a></p>`;
        }
        html += `
      </div>
    </div>
  `;
  projectDetails.innerHTML = html;
  
  let x = document.querySelector('.x');
  x.addEventListener('click', () => {
    overlay.style.display = 'none';
    body.style.overflow = '';
  });
}

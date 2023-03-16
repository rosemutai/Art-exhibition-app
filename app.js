const speakers = [
  {
    image: 'images/artist1.jpg',
    name: 'Mia Foster',
    careerRole: 'Art Professor at Havard University',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing eliteque commodi.',
  },

  {
    image: 'images/artist2.jpg',
    name: 'Layla Kim',
    careerRole: 'Founder and CEO of Velocity Vision, New York',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing eliteque commodi.',
  },

  {
    image: 'images/artist3.jpg',
    name: 'Tristan Hayes',
    careerRole: 'Manager, Quantum Innovations',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing eliteque commodi.',
  },

  {
    image: 'images/artist5.jpg',
    name: 'Kira Patel',
    careerRole: 'Senior Designer, Firefly Productions',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing eliteque commodi.',
  },

  {
    image: 'images/artist4.jpg',
    name: 'Xavier Cohen',
    careerRole: 'Founder of Celestial Designs',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elitneque commodi.',
  },

  {
    image: 'images/artist6.jpg',
    name: 'Mathew Brooks ',
    careerRole: 'Executive Director of the Solaris Studios',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elitneque.',
  },
];

const hamburger = document.getElementById('hamburger');
const closeNavIcon = document.getElementById('close-icon');
const nav = document.querySelector('.menu-links');

hamburger.addEventListener('click', () => {
  nav.style.display = 'block';
  hamburger.style.display = 'none';
});

closeNavIcon.addEventListener('click', () => {
  nav.style.display = 'none';
  hamburger.style.display = 'block';
});

const speakersSection = document.getElementById('speakers-section');
const desktopSpeakersSection = document.getElementById('desktop-speakers-section');

// desktop version speakers
speakers.forEach((speaker) => {
  const card = document.createElement('div');

  const cardContent = `
    <div class='speaker-card card px-2 d-flex flex-row mb-3
      justify-content-center align-items-center rounded-0 border-0'>
      <img src=${speaker.image} class="speaker-image" style="background-image: 
        'images/chess.png'; width: 100px; height: 120px;" alt="speaker">
      <img src='images/chess.png' class='chess position-absolute' alt='chess'>
      <div class='speaker-details ms-4'>
        <h5 class='cardtitle fw-bold text-dark'>${speaker.name}</h5>
        <p class='cardtitle fw-medium opacity-100 fst-italic'>${speaker.careerRole}</p>
        <hr class='my-1 ms-0 speaker-hr' >
        <p class='cartex fw-light text-opacity-25 small'>${speaker.details}</p>
      </div>
    </div>
  `;

  card.innerHTML = cardContent;
  desktopSpeakersSection.appendChild(card);
});

// mobile version speakers
speakers.slice(0, 2).forEach((speaker) => {
  const card = document.createElement('div');
  // card.classList.add('col-md-4', 'mb-4');

  const cardContent = `
    <div class='card mobile-speaker-card px-3 d-flex flex-row mb-3 gap-2
      justify-content-center align-items-center rounded-0 border-0'>
      <img src=${speaker.image} class="speaker-image" style="width: 100px; height: 120px;" alt="speaker">
      <img src='images/chessblack.png' class='black-chess position-absolute' alt='chess'>
      <div class='speaker-details ms-4'>
        <h5 class='cardtitle fw-bold text-dark'>${speaker.name}</h5>
        <p class='cardtitle fw-medium opacity-100 fst-italic'>${speaker.careerRole}</p>
        <hr class='my-1 ms-0 speaker-hr' >
        <p class='cartex fw-light text-opacity-25 small'>${speaker.details}</p>
      </div>
    </div>
  `;

  card.innerHTML = cardContent;
  speakersSection.appendChild(card);
});

const shoreMoreBtn = document.getElementById('show-more-btn');

shoreMoreBtn.addEventListener('click', () => {
  speakers.slice(2).forEach((speaker) => {
    const card = document.createElement('div');
    speakersSection.style.marginTop = '2rem';

    const cardContent = `
    <div class='card mobile-speaker-card px-2 bg-light d-flex flex-row mb-3
      justify-content-center align-items-center rounded-0 border-0'>
      <img src=${speaker.image} class="speaker-image" style="width: 100px; height: 120px;" alt="speaker">
      <img src='images/chessblack.png' class='black-chess position-absolute' alt='chess'>
      <div class='speaker-details ms-4'>
        <h5 class='cardtitle fw-bold text-dark'>${speaker.name}</h5>
        <p class='cardtitle fw-medium opacity-100 fst-italic'>${speaker.careerRole}</p>
        <p class='cartex fw-light text-opacity-25 small'>${speaker.details}</p>
      </div>
    </div>
  `;
    card.innerHTML = cardContent;
    speakersSection.appendChild(card);
  });
  shoreMoreBtn.style.display = 'none';
});
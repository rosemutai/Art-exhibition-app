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

const speakersSection = document.getElementById('speakers-section');
speakers.forEach((speaker) => {
  const card = document.createElement('div');
  // card.classList.add('col-md-4', 'mb-4');

  const cardContent = `
    <div class='speaker-card card px-2 w-100 bg-light d-flex flex-row
      justify-content-center align-items-center rounded-0 border-0'>
      <img src=${speaker.image} class="cardi" style="width: 100px; height: 120px;" alt="speaker">
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

// for (let i = 0; i < speakers.length; i += 1) {
//   speakersSection.innerHTML = `<div class='card h-50 px-2 w-100 bg-light d-flex flex-row
//       justify-content-center align-items-center rounded-0 border-0' id="speaker-card">
//       <img src=${speakers[i].image} class="cardimg" style="width: 150px;
// height: 150px;" alt="speaker">
//       <div class='speaker-details ms-4 bg-light'>
//         <h5 class='cardtitle fw-medium text-dark'>${speakers[i].name}</h5>
//         <p class='cardtitle fw-medium opacity-100'>${speakers[i].careerRole}</p>
//         <p class='cartex fw-light text-opacity-25 small'>${speakers[i].details}</p>
//       </div>
//   </div>`;
// }
const speakers = [
  {
    id: 1,
    image: 'images/artist1.jpg',
    name: 'Mia Foster',
    careerRole: 'Art Professor at Havard University',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing eliteque commodi.',
  },

  {
    id: 2,
    image: 'images/artist1.jpg',
    name: 'Layla Kim',
    careerRole: 'Founder and CEO of Velocity Vision, New York',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing eliteque commodi.',
  },

  {
    id: 3,
    image: 'images/artist4.jpg',
    name: 'Tristan Hayes',
    careerRole: 'Manager, Quantum Innovations',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing eliteque commodi.',
  },

  {
    id: 4,
    image: 'images/artist5.jpg',
    name: 'Kira Patel',
    careerRole: 'Senior Designer, Firefly Productions',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing eliteque commodi.',
  },

  {
    id: 5,
    image: 'images/artist7.jpg',
    name: 'Xavier Cohen',
    careerRole: 'Founder of Celestial Designs',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elitneque commodi.',
  },

  {
    id: 6,
    image: 'images/artist6.jpg',
    name: 'Mathew Brooks ',
    careerRole: 'Executive Director of the Solaris Studios',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elitneque.',
  },
];

const speakersSection = document.getElementById('speakers-section');
// speakers.forEach((speaker) => {
//   card.innerHTML = `
//       <img src=${speaker.image} class="cardimg" alt="speaker">
//       <div class='speaker-details ms-4'>
//         <h5 class='cardtitle fw-bolder h3 opacity-100'>${speaker.name}</h5>
//         <p class='cardtitle fw-bolder h4 opacity-100'>${speaker.careerRole}</p>
//         <p class='cartex fw-bold'>${speaker.details}</p>
//       </div>
//   `;
// });

for (let i = 0; i < speakers.length; i += 1) {
  speakersSection.innerHTML = `<div class='card h-50 px-2 w-100 bg-light d-flex flex-row
      justify-content-center align-items-center rounded-0 border-0' id="speaker-card">
      <img src=${speakers[i].image} class="cardimg" style="width: 150px; height: 150px;" alt="speaker">
      <div class='speaker-details ms-4 bg-light'>
        <h5 class='cardtitle fw-medium text-dark'>${speakers[i].name}</h5>
        <p class='cardtitle fw-medium opacity-100'>${speakers[i].careerRole}</p>
        <p class='cartex fw-light text-opacity-25 small'>${speakers[i].details}</p>
      </div>
  </div>`;
}
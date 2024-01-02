const aboutcards = [
  {
    titel: 'Brainstorming',
    discrption: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated'
  },
  {
    titel: 'Analysing',
    discrption: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.'
  },
  {
    titel: 'News Publishing',
    discrption: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
  },
];
const aboutCardContainer = document.querySelector ('aboutCardContainer')
console.log(aboutCardContainer);

if(aboutCardContainer) {
  aboutcards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('about_card');
    
    const cardNumber = document.createElement('p');
    cardNumber.classList.add('card_number');
    cardNumber.textContent = (index + 1).toString().padStart(2, '0');
    
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card_title');
    cardTitle.textContent = card.titel;
    
    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card_description');
    cardDescription.textContent = card.discrption;
    
    const learnMoreLink = document.createElement('a');
    learnMoreLink.classList.add('learn_more');
    learnMoreLink.href = '#';
    learnMoreLink.textContent = 'Learn More';
    
    cardElement.appendChild(cardNumber);
    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardDescription);
    cardElement.appendChild(learnMoreLink);
    
    aboutCardContainer.appendChild(cardElement);
  });
} else {
  console.log('hamlza ');
}


const date = document.getElementById('daynamick_year')
console.log(date);
const currentYear = new Date().getFullYear()
date.textContent = currentYear || 2024


const mobileMenu = document.querySelector('nav');
const menuTrigger = document.getElementById('menu-trigger');

menuTrigger.addEventListener('click', (event) => {
  mobileMenu.classList.toggle('show');
});

// let postes = [];
// fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(json => postes.push(json))

// <div class="car_Post">
// <img style="border-radius: 1rem; margin-bottom: 2.5rem;" src="./imgs/testPostimg.png" alt="post img">
// <div style="gap: .5rem; margin-bottom: 1.51rem;" class="flexItems about_this_section">
//     <p class="catogray">Travel</p>
//     <p class="data">13 March 2023</p>
// </div>
// <h1 class="Post_titel">8 Rules of Travelling In Sea You Need To Know</h1>
// <p class="Post_discrption">Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs</p>
// <a href="#" class="underline_link">Read More...</a>
// </div>
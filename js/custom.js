const hamburger = document.querySelector('#hamburger');
const closeBtn = document.querySelector('#btn-close');
const mobileNav = document.querySelector('.menu-list');
const header = document.querySelector('#header');
const menuItems = document.querySelectorAll('.menu-item');

hamburger.addEventListener('click', () => {
  mobileNav.classList.add('active');
  header.classList.toggle('d-center');
  hamburger.classList.toggle('active');
  closeBtn.classList.toggle('active');
});
closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  header.classList.toggle('d-center');
  hamburger.classList.toggle('active');
  closeBtn.classList.toggle('active');
});
menuItems.forEach((el) => el.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  header.classList.toggle('d-center');
  hamburger.classList.toggle('active');
  closeBtn.classList.toggle('active');
}));

const speakers = [
  {
    image: 'https://images.unsplash.com/photo-1613186941372-f19da23e373b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    name: 'Wislene Delicieux',
    bio: 'Coordinator at Banj and Ceo at Curly Studio',
    description: 'can help you to build beautiful projects, modern and responsive websites, you can see him work on this page',
  },
  {
    image: 'https://images.unsplash.com/photo-1560439514-e960a3ef5019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    name: 'Wilnick Dormevil',
    bio: 'Career Coach at Microverse',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy',
  },
  {
    image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
    name: 'Wigui Doe',
    bio: 'Developer at GSTech and student at microverse',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy',
  },
  {
    image: 'https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    name: 'Stanley Jacques',
    bio: 'Coordinator at Banj and Ceo at Curly Studio',
    description: 'can help you to build beautiful projects, modern and responsive websites, you can see him work on this page',
  },
  {
    image: 'https://images.unsplash.com/flagged/photo-1557896279-080cb03b9ca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'St-Victor Wigens',
    bio: 'CEO at GSTech',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy',
  },
  {
    image: 'https://images.unsplash.com/photo-1515295411605-71de55c34a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Desor Guishny',
    bio: 'Developer at GSTech and student at microverse',
    description: 'can help you to build beautiful projects, modern and responsive websites, you can see him work on this page',
  },
];

const speakersSection = document.querySelector('#speakers-container');

for (let i = 0; i < speakers.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.className = 'speaker';
  speaker.innerHTML = `
  <div class="featured-image">
      <img src="${speakers[i].image}" alt="speaker" class="featured">
    </div>
    <div class="speaker-details">
      <h5 class="fullName">${speakers[i].name}</h5>
      <i class="bio">${speakers[i].bio}</i>
      <p class="description">${speakers[i].description}</p>
      </div>
  `;
  speakersSection.appendChild(speaker);
}
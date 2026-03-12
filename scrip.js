const memories = [
  {
    title: 'Nuestra primera cita',
    date: 'El inicio de todo',
    image: 'primera cita.png',
    alt: 'Foto de nuestra primera cita',
    description:
      'Aqui comenzo esta historia tan bonita. Donde despues de todo lo feo que pasamos pude encontrar claridad y darme cuenta que lo unico que queria y necesitaba era estar contigo , Fue una noche magica , donde conectamos una vez mas , donde patinamos , tomamos chocolatito , donde recorde que es la felicidad.',
  },
  {
    title: 'Navidad juntos',
    date: 'Un recuerdo muy especial',
    image: 'navidad.png',
    alt: 'Foto de nosotros en Navidad',
    description:
      'Nuestra primera navidad juntos, una de las temporadas mas bonitas y  a la vez mas emotivas para mi , la convertiste en una especial , donde me hiciste sentir esa alegria y ese cariño especial. Me senti tan feliz de pasar esa temporada contigo , esas pijamadas inolvidables y toda esas pomidas chatarras tan deliciosas jajaaj.',
  },
  {
    title: 'Cuando te pedi que fueras mi novia',
    date: 'El dia de tu si',
    image: 'novia.png',
    alt: 'Foto del momento en que te pedi ser mi novia',
    description:
      'Es el momento mas importante , donde tome la decision de ser otra persona, de respertarte , de amarte , de apoyarte , de cuidarte y de hacerte feliz. Ese dia fue una oportunidad para ser mejor persona , hasta la fecha cada vez que despierto intento ser una mejor persona para ti , es un dia que siempre recordare , te amo terroncito.',
  },
  {
    title: 'Cenita Familiar',
    date: 'Una noche genial',
    image: 'cena.png',
    alt: 'Foto de una cena especial juntos',
    description:
      'Fue un dia muy bonito pero a la vez de muchos nervios , era la primera vez que saliamos con tu familia pero en el fondo me sentia muy emocionado y muy feliz por compartir momentos contigo y tu familia que siempre me reciben muy bonito.',
  },
  {
    title: 'Nuestro picnic',
    date: 'Una tarde de naturaleza ',
    image: 'picknick.png',
    alt: 'Foto de nuestro picknick',
    description:
      'Fue un dia hermoso , donde festejabamos nuestros 6 meses , en medio de la naturaleza , con un clima que nos encanta y sobre todo con la mejor compañia. Fue un momento lindisimo que nunca imagine vivir , que solo veia que pasaba en las peliculas de amor pero me sorprendiste una vez mas con tus planes hermoshos.',
  },
  {
    title: 'Primer viaje juntitos',
    date: 'Recuerdo de aventura',
    image: 'playa.png',
    alt: 'Foto de nosotros en la playa',
    description:
      'De las experiencias mas hermosas , nuestro primer viaje juntos , fue una experiencia hermosa , donde disfrute cada instante a tu lado , donde solo sentia felicidad y alegria , donde lo primero que veia al despertar eras tu y lo ultimo en ver eras tu , fue un viaje hermoso donde senti emociones inexplicables. ',
  },
  {
    title: 'De Fiestita ',
    date: 'Un dia lindo',
    image: 'salida1.png',
    alt: 'Foto de una salida especial juntos',
    description:
      'este fue un dia muy divertido , y a la vez no , fue el primer dia donde te hice enojar , pero no hablare de esho jaja , fue un dia especial donde fue nuestra primera salida de fiesta como novios , la primera vez que me quede a mimir a tu casa porque estaba borracho :/ , pero nunca dejo de ser especial para mi.',
  },
];

const startButton = document.getElementById('startStory');
const memoriesSection = document.getElementById('recuerdos');
const memoryTitle = document.getElementById('memoryTitle');
const memoryDate = document.getElementById('memoryDate');
const memoryDescription = document.getElementById('memoryDescription');
const memoryCard = document.getElementById('memoryCard');
const memoryImage = document.getElementById('memoryImage');
const spotifyCassette = document.getElementById('spotifyCassette');
const pins = document.querySelectorAll('.memory-pin');

function renderMemory(index) {
  const memory = memories[index];

  memoryTitle.textContent = memory.title;
  memoryDate.textContent = memory.date;
  memoryDescription.textContent = memory.description;
  memoryImage.src = memory.image;
  memoryImage.alt = memory.alt;

  memoryCard.classList.remove('reveal');
  void memoryCard.offsetWidth;
  memoryCard.classList.add('reveal');

  pins.forEach((pin) => {
    pin.classList.toggle('active', Number(pin.dataset.memory) === index);
  });
}

startButton.addEventListener('click', () => {
  memoriesSection.scrollIntoView({ behavior: 'smooth' });
});

if (spotifyCassette) {
  spotifyCassette.addEventListener('click', () => {
    const isOpen = spotifyCassette.classList.toggle('is-open');
    spotifyCassette.setAttribute('aria-expanded', String(isOpen));
  });
}

pins.forEach((pin) => {
  pin.addEventListener('click', () => {
    renderMemory(Number(pin.dataset.memory));
  });
});

renderMemory(0);

const people = [
  {
    name: "Ahmad Wildanu Wahyu Ramadhan",
    role: "Co-Founder / CEO",
    imageUrl: "../wildanu.jpg",
  },
  {
    name: "Lingga Satria BS",
    role: "Programer",
    imageUrl: "../wildanu.jpg",
  },
  {
    name: "Diana Putri",
    role: "Desainer UI/UX",
    imageUrl: "../diana.jpg",
  },
  {
    name: "Budi Santoso",
    role: "Manajer Proyek",
    imageUrl: "../budi.jpg",
  },
  {
    name: "Siti Aisyah",
    role: "Pengembang Frontend",
    imageUrl: "../siti.jpg",
  },
  {
    name: "Rudi Hartono",
    role: "Pengembang Backend",
    imageUrl: "../rudi.jpg",
  },
];

export default function TeamSection() {
  return (
    <div id="team" className="bg-red-600 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">Kenali Tim Pengembang Perangkat Lunak Kami</h2>
          <p className="mt-6 text-lg/8 text-justify text-gray-200">
            Kami adalah tim yang terdiri dari pemecah masalah inovatif, penggemar teknologi, dan pemikir kreatif, yang disatukan oleh semangat untuk menciptakan solusi perangkat lunak terkini. Dengan komitmen terhadap keunggulan dan
            semangat kolaborasi, kami berupaya mengubah ide menjadi pengalaman digital yang luar biasa untuk mendorong kesuksesan klien kami.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name} className="transition-transform transform hover:scale-105 duration-300 hover:shadow-lg">
              <div className="flex items-center gap-x-6 animate-fade-in">
                <img alt={person.name} src={person.imageUrl} className="size-16 rounded-full shadow-md transition-shadow duration-300 hover:shadow-xl" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-300">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// CSS for animation
const styles = {
  '@keyframes fade-in': {
    from: {
      opacity: 0,
      transform: 'translateY(10px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '.animate-fade-in': {
    animation: 'fade-in 0.5s ease-in-out',
  },
};

// Apply styles to the document
Object.keys(styles).forEach((key) => {
  const style = document.createElement('style');
  style.innerHTML = `${key} { ${Object.entries(styles[key]).map(([k, v]) => `${k}: ${v};`).join(' ')} }`;
  document.head.appendChild(style);
});

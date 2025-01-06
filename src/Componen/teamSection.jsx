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
    name: "Ahmad Wildanu Wahyu Ramadhan",
    role: "Co-Founder / CEO",
    imageUrl: "../wildanu.jpg",
  },
  {
    name: "Ahmad Wildanu Wahyu Ramadhan",
    role: "Co-Founder / CEO",
    imageUrl: "../wildanu.jpg",
  },
  {
    name: "Ahmad Wildanu Wahyu Ramadhan",
    role: "Co-Founder / CEO",
    imageUrl: "../wildanu.jpg",
  },
  {
    name: "Ahmad Wildanu Wahyu Ramadhan",
    role: "Co-Founder / CEO",
    imageUrl: "../wildanu.jpg",
  },
];

export default function TeamSection() {
  return (
    <div id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Kenali Tim Pengembang Perangkat Lunak Kami</h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Kami adalah tim yang terdiri dari pemecah masalah inovatif, penggemar teknologi, dan pemikir kreatif, yang disatukan oleh semangat untuk menciptakan solusi perangkat lunak terkini. Dengan komitmen terhadap keunggulan dan
            semangat kolaborasi, kami berupaya mengubah ide menjadi pengalaman digital yang luar biasa untuk mendorong kesuksesan klien kami.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

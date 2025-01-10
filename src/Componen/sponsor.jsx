const stats = [
    { id: 1, name: 'Transaksi Setiap 24 Jam', value: '44 Juta', description: 'Jumlah transaksi yang dilakukan setiap harinya, menunjukkan kepercayaan pengguna.' },
    { id: 2, name: 'Aset yang Dikelola', value: '$119 Triliun', description: 'Total nilai aset yang dikelola, mencerminkan kekuatan dan stabilitas kami.' },
    { id: 3, name: 'Pengguna Baru Setiap Tahun', value: '46,000', description: 'Jumlah pengguna baru yang bergabung setiap tahun, menandakan pertumbuhan yang pesat.' },
];

const CountSponsor = () => {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-white mb-10">Statistik Menarik Kami</h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <dt className="text-lg font-medium text-gray-800">{stat.name}</dt>
                <dd className="order-first text-5xl font-bold tracking-tight text-blue-600 sm:text-6xl">
                  {stat.value}
                </dd>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
}

export default function Sponsor() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 py-24 sm:py-32 rounded-lg shadow-lg">
        <CountSponsor/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-white mt-10 animate-fadeIn">Dipercaya oleh Tim Inovatif Terbaik di Dunia</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {["Transistor", "Reform", "Tuple", "SavvyCal", "Statamic"].map((logo, index) => (
            <img 
              key={logo} 
              alt={logo} 
              src={`https://tailwindui.com/plus/img/logos/158x48/${logo.toLowerCase()}-logo-white.svg`} 
              width={158} 
              height={48} 
              className={`col-span-2 max-h-12 w-full object-contain lg:col-span-1 animate-slideIn ${index % 2 === 0 ? 'delay-200 transition-transform transform hover:scale-110' : 'delay-400 transition-transform transform hover:scale-110'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

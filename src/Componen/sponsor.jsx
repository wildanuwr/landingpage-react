const stats = [
    { id: 1, name: 'Transaksi Setiap 24 Jam', value: '44 Juta', description: 'Jumlah transaksi yang dilakukan setiap harinya, menunjukkan kepercayaan pengguna.' },
    { id: 2, name: 'Aset yang Dikelola', value: '$119 Triliun', description: 'Total nilai aset yang dikelola, mencerminkan kekuatan dan stabilitas kami.' },
    { id: 3, name: 'Pengguna Baru Setiap Tahun', value: '46,000', description: 'Jumlah pengguna baru yang bergabung setiap tahun, menandakan pertumbuhan yang pesat.' },
];

const CountSponsor = () => {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">Statistik Menarik Kami</h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <dt className="text-lg font-medium text-gray-800">{stat.name}</dt>
                <dd className="order-first text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
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
    <div className="bg-gray-50 py-24 sm:py-32">
        <CountSponsor/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900 mt-10">Dipercaya oleh Tim Inovatif Terbaik di Dunia</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img alt="Transistor" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
          <img alt="Reform" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
          <img alt="Tuple" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
          <img alt="SavvyCal" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
          <img alt="Statamic" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg" width={158} height={48} className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
        </div>
      </div>
    </div>
  );
}

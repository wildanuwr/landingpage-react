const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
const CountSponsor = () => {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  

export default function Sponsor() {
  return (
    <div className="bg-white py-24 sm:py-32">
        <CountSponsor/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">Trusted by the world’s most innovative teams</h2>
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

import React from 'react'

const Statistic = ({theme}) => {
        const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]
  return (

  


    <div className={` py-24 border rounded sm:py-32 ${theme==="Dark"?"bg-white border-gray-600":"border-gray-200 bg-gray-800"}`}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-8  ${theme==="Dark"?"bg-gray-50 text-gray-950":"bg-gray-800 "}`}>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className={`text-base/7 ${theme==="Dark"?"text-gray-600":"text-gray-400"}`}>{stat.name}</dt>
              <dd className={`order-first text-3xl font-semibold tracking-tight  sm:text-5xl ${theme==="Dark"?"text-gray-900":"text-gray-50"}`}>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Statistic

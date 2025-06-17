import React from 'react'

const About = ({theme}) => {
const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Jenny Wilson',
    role: 'Lead Designer',
    imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristin Watson',
    role: 'Head of Finance',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Cody Fisher',
    role: 'Senior Developer',
    imageUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Darrell Steward',
    role: 'Marketing Manager',
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Eleanor Pena',
    role: 'UX Researcher',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    role: 'Product Manager',
    imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ronald Richards',
    role: 'QA Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Savannah Nguyen',
    role: 'Customer Success',
    imageUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

];
  
return (
<div className={`py-24 sm:py-32 min-h-96 ${theme === "Dark" ? "bg-white" : "bg-gray-800"}`}>

      <div className="mx-auto  max-w-7xl gap-20 px-6 lg:px-8 flex flex-col xl:grid-cols-3" >
        <div className="max-w-xl">
          <h2 className={`text-3xl font-semibold tracking-tight text-pretty  sm:text-4xl ${theme==="Dark"?"text-gray-900":"text-gray-50"}`}>
            Meet our leadership
          </h2>
          <p className={`mt-6 text-lg/8  ${theme==="Dark"?"text-gray-600":"text-gray-400"}`}>
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li  key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                <div>
                  <h3  className={`text-xl font-semibold tracking-tight ${theme==="Dark"?"text-gray-900":"text-gray-50"}`}>{person.name}</h3>
                  <p className={`text-base/7 font-semibold tracking-tight ${theme==="Dark"?"text-indigo-600":"text-yellow-400"}`} >{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default About



  // More people...



  


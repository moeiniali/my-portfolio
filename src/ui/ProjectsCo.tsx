import React, { useState } from 'react'

type Props = {}
const tabs = [
 { id: '1', title: 'all', icon: './images/icon.svg' },
 { id: '2', title: 'reactJs', icon: './images/icon.svg' },
 { id: '3', title: 'nextJs', icon: './images/icon.svg' },
 { id: '4', title: 'UI Design', icon: './images/icon.svg' },
 { id: '5', title: 'wordpress', icon: './images/icon.svg' },
 { id: '6', title: 'html - css', icon: './images/icon.svg' },
 { id: '7', title: 'javascript', icon: './images/icon.svg' },
];


const projects = [
 { id: '1', title: 'project 1', description: 'project 1', image: './images/images.jpg' },
 { id: '2', title: 'project 2', description: 'project 2', image: './images/images.jpg' },
 { id: '3', title: 'project 3', description: 'project 3', image: './images/images.jpg' },
 { id: '4', title: 'project 4', description: 'project 4', image: './images/images.jpg' },
 { id: '5', title: 'project 5', description: 'project 5', image: './images/images.jpg' },
 { id: '6', title: 'project 6', description: 'project 6', image: './images/images.jpg' },
 { id: '7', title: 'project 7', description: 'project 7', image: './images/images.jpg' },
]

const ProjectsCo = (props: Props) => {
 const [isActiveTab, setIsActiveTab] = useState<string>('1')

 // Filter projects based on the active tab
 // If the active tab is "1" (all), return all projects
 // Otherwise, filter projects to match the active tab ID
 const filteredProjecs = isActiveTab === "1" ? projects : projects.filter((project) => project.id === isActiveTab)




 return (
  <div>

   <div className="container mx-auto px-4 py-8 mt-20">
    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
     {/* Left side - Portfolio Title */}
     <div className="mb-4 md:mb-0">
      <h2 className="text-purple-500 text-3xl font-bold mb-2 hover:scale-105 transition-transform duration-300 animate-pulse">
       Portfolio
      </h2>
      <p className="text-white text-lg hover:text-purple-300 transition-colors duration-300">
       Examples of work done
      </p>
     </div>
     <div className='w-full flex flex-wrap gap-4 items-center justify-end'>

      {tabs.map((tab, index) => (
       <div id={tab.id}
        onClick={(e) => setIsActiveTab((e.target as HTMLTextAreaElement).id)}
        className="w-auto Z-50 h-12 flex space-x-4  mb-1 ">
        <button
         id={tab.id}
         key={tab.id}
         className={`px-4 py-2 rounded-lg border border-purple-950 flex items-center space-x-2 transition-all duration-700 hover:scale-95 
                ${index === 0 ? 'bg-violet-950 text-gray-50 text-lg' : 'bg-transparent text-purple-500 hover:brightness-105 hover:text-gray-500'}`}
        >
         <img id={tab.id} src={tab.icon} alt={`${tab.title} icon`} className="w-5 h-5 mr-2" />
         <span id={tab.id} className='whitespace-nowrap'>{tab.title}</span>
        </button>
       </div>
      ))}
     </div>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
     {filteredProjecs.map((project) => (<>

      <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/50 hover:scale-105 cursor-pointer  duration-700">
       <img src={project.image} alt={`Project ${project.title}`} className="w-full h-48 object-cover" />
       <div className="p-4">
        <h3 className="text-white text-sm font-semibold mb-2">Project: {project.title}</h3>
        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua {project.description}</p>
       </div>
      </div>
     </>))
     }

    </div>


   </div>


  </div >
 )
}

export default ProjectsCo
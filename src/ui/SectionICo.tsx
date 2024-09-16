import React from 'react'

type Props = {}

const SectionICo = (props: Props) => {
 return (
  <div className="w-full p-8 h-96 border-t max-sm:border-none border-[#7B4AE233] flex gap-10 flex-col items-center justify-center my-10 bg-transparent">

   <div className="flex space-x-4 mb-4 gap-10">
    <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-95 duration-700">
     <img src="./images/CodeIcon.svg" alt="icon" width={50} height={50} />
     <p className="text-gray-200 text-sm">4+ yrs</p>
     <p className="text-white text-xs">programming</p>
    </div>

    <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-95 duration-700">
     <img src="./images/ProjectsIcon.svg" alt="icon" width={50} height={50} />
     <p className="text-gray-200 text-sm">2+ yrs</p>
     <p className="text-white text-xs">wordpress and joomla</p>
    </div>

    <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-95 duration-700">
     <img src="./images/DesignIcon.svg" alt="icon" width={50} height={50} />
     <p className="text-gray-200 text-sm">1+ yrs</p>
     <p className="text-white text-xs">ui designer</p>
    </div>
   </div>

   <div className="w-full h-28 flex space-x-4 bg-[#7B4AE21A] rounded-2xl hover:animate-pulse justify-evenly items-center max-sm:flex-col max-sm:h-auto py-4 max-sm:gap-6">
    <div className="flex flex-col justify-center items-center">
     <p className="text-[#A67DF2] text-base font-medium">Incididunt ut</p>
     <p className="text-3xl text-[#A67DF2] font-medium">Front-end</p>
    </div>
    <div className="flex flex-col justify-center items-center">
     <p className="text-[#A67DF2] text-base font-medium">Designer Freelancer e</p>
     <p className="text-3xl text-[#A67DF2] font-medium">UI - UX</p>
    </div>
    <div className="flex flex-col justify-center items-center">
     <p className="text-[#A67DF2] text-base font-medium">7 anos de</p>
     <p className="text-3xl text-[#A67DF2] font-medium">Experiências</p>
    </div>
   </div>
  </div>
 )
}

export default SectionICo
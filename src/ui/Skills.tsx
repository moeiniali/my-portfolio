import React from 'react'

type Props = {}

const Skills = (props: Props) => {
 return (
  <div className="container mx-auto px-4 py-8 flex flex-col items-center mt-20">
   <h2 className="text-purple-500 text-3xl font-bold mb-4">my Skills</h2>
   <p className="text-white text-lg mb-8 text-center max-w-2xl">
    As a passionate developer, I've honed my skills across various technologies and frameworks. Here's a glimpse of my technical expertise:
   </p>

   <div className="text-gray-300 mb-8 text-center max-w-2xl">
    <p>
     My skill set includes proficiency in front-end technologies such as Html, css, javascript, typescript, design patterns, tailwindcss, antd, mui, bootstrap, redux, rtkQuery, webApi, graphQl, React and Next.js, and a solid foundation in I have UI/UX design principles.
    </p>
   </div>

   <div className="flex flex-wrap justify-center gap-8 hover:scale-95 duration-1000 mt-10 ">
    <img src="/images/React.svg" alt="React" className="w-16 h-16 cursor-pointer hover:scale-105 duration-1000  " />
    <img src="/images/Nextjs.svg" alt="Next.js" className="w-16 h-16 cursor-pointer hover:scale-105 duration-1000" />
    <img src="/images/javascript.svg" alt="javascript.js" className="w-16 h-16 cursor-pointer hover:scale-105 duration-1000" />
    <img src="/images/TypeScript.svg" alt="TypeScript" className="w-16 h-16 cursor-pointer hover:scale-105 duration-1000" />
    <img src="/images/Github.svg" alt="Github" className="w-16 h-16 cursor-pointer hover:scale-105 duration-1000" />
    <img src="/images/Figma.svg" alt="Figma" className="w-16 h-16 cursor-pointer hover:scale-105 duration-1000" />
    <img src="/images/Group 1 (1).svg" alt="icon" className="w-16 h-16 cursor-pointer hover:scale-105 duration-1000" />
    <img src="/images/Group 1.svg" alt="icon" className="w-16 h-16 cursor-pointer hover:scale-105 duration-1000" />
    <img src="/images/TailwindCSS.svg" alt="TailwindCSS" className="w-16 h-16 cursor-pointer hover:scale-105 duration-1000" />
    <img src="/images/Nodejs.svg" alt="Nodejs" className="w-16 h-16 cursor-pointer hover:scale-105 duration-1000" />
   </div>
  </div>




 )
}

export default Skills
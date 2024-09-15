import React from 'react'

type Props = {}

const BioCo = (props: Props) => {
 return (
  <div>
   <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row items-center justify-between">
     {/* Left side - Image */}
     <div className="mb-8 md:mb-0 md:w-1/3">
      <div className="relative w-64 h-64 mx-auto">
       <img
        src="./images/icon.svg"
        alt="Profile"
        width={460}
        height={460}
        className="rounded-full w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:shadow-lg"
       />
       <div className="absolute inset-0 rounded-full border-4 border-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
     </div>

     {/* Right side - Biography */}
     <div className="md:w-2/3 space-y-4">
      <h3 className="text-purple-500 text-sm font-semibold">About Me</h3>
      <h2 className="text-white text-3xl font-bold mb-4">Ali Moeini </h2>

      <div className="flex items-start  space-x-2">
       <img src="./images/Group 70.png" alt="Location" className="w-5 h-5" />
       <p className="text-gray-400 text-sm">

        Dear Sir/Madam, Best regards My name is Ali Moeini, and I am 27 years old. I have been working
        in front-end design and coding for over 2 years. During this time, I have gained proficiency in
        various front-end programming and markup languages, including HTML, JavaScript, TypeScript,
        React.js, and Next.js. I am constantly learning new things. I am very interested in growing
        alongside a team and achieving more successful projects. With the experience I have gained
        over the years, I have the ability to implement responsive components and PWA web
        applications, collaborate with back-end teams to integrate APIs and services such as REST API
        and GraphQL, use Git and Azure DevOps for version management and collaboration, and design
        and implement user interfaces using CSS and libraries like Bootstrap, AntDesign, and
        TailwindCSS. I am always working on improving my skills. Thank you very much for taking the
        time to review my resume. I am sincerely eager to collaborate and gain experience alongs




       </p>
      </div>




     </div>
    </div>
   </div>




  </div>
 )
}

export default BioCo
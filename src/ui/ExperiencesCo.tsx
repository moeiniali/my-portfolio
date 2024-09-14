import React from 'react'

type Props = {}

const ExperiencesCo = (props: Props) => {
 return (
  <div>

   <div className="container mx-auto px-4 py-8 mt-20">
    <h2 className="text-purple-500 text-3xl font-bold mb-2">Experience</h2>
    <p className="text-white text-lg mb-6">A summary of my professional journey and key roles.</p>

    <div className="space-y-8">
     {[
      {
       jobTitle: "Senior Frontend Developer",
       organization: "Tech Innovators Inc.",
       duration: "Jan 2020 - Present",
       position: "Full-time",
       description: "Led the development of responsive web applications using React and Next.js. Implemented state management solutions with Redux and optimized performance for large-scale applications."
      },
      {
       jobTitle: "Web Developer",
       organization: "Digital Solutions Ltd.",
       duration: "Mar 2018 - Dec 2019",
       position: "Full-time",
       description: "Developed and maintained client websites using HTML, CSS, and JavaScript. Collaborated with the design team to implement UI/UX improvements and ensure cross-browser compatibility."
      },
      {
       jobTitle: "Junior Developer",
       organization: "StartUp Ventures",
       duration: "Jun 2017 - Feb 2018",
       position: "Internship",
       description: "Assisted in the development of web applications, gained hands-on experience with modern frontend frameworks, and participated in code reviews and team meetings."
      }
     ].map((experience, index) => (
      <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300">
       <h3 className="text-white text-xl font-semibold mb-2">{experience.jobTitle}</h3>
       <p className="text-purple-400 mb-2">{experience.organization}</p>
       <div className="flex justify-between text-gray-400 text-sm mb-4">
        <span>{experience.duration}</span>
        <span>{experience.position}</span>
       </div>
       <p className="text-gray-300">{experience.description}</p>
      </div>
     ))}
    </div>
   </div>



  </div>
 )
}

export default ExperiencesCo
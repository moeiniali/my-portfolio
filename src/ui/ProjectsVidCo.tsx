import React from 'react'

type Props = {}

const ProjectsVidCo = (props: Props) => {
 return (
  <div>
   <div className="container mx-auto px-4 py-8 mt-20">
    <h2 className="text-purple-500 text-3xl font-bold mb-2">Project Videos</h2>
    <p className="text-white text-lg mb-6">A showcase of my project demonstrations and walkthroughs.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {[
      { id: 1, title: "E-commerce Platform", description: "A walkthrough of the user interface and key features.", videoUrl: "https://example.com/video1.mp4" },
      { id: 2, title: "Mobile App Development", description: "Demonstrating the app's functionality and user experience.", videoUrl: "https://example.com/video2.mp4" },
      { id: 3, title: "Data Visualization Dashboard", description: "Exploring interactive charts and data analysis tools.", videoUrl: "https://example.com/video3.mp4" },
      { id: 4, title: "AI-powered Chatbot", description: "Showcasing natural language processing capabilities.", videoUrl: "https://example.com/video4.mp4" },
      { id: 5, title: "Blockchain Application", description: "Explaining the decentralized architecture and security features.", videoUrl: "https://example.com/video5.mp4" },
      { id: 6, title: "VR Training Simulation", description: "A tour of the immersive learning environment.", videoUrl: "https://example.com/video6.mp4" },
     ].map((project) => (
      <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300">
       <video className="w-full h-48 object-cover" controls>
        <source src={project.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
       </video>
       <div className="p-4">
        <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
       </div>
      </div>
     ))}
    </div>
   </div>


  </div>
 )
}

export default ProjectsVidCo
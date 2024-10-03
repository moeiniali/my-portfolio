import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const data = [
 { id: 1, title: "Next.js Web Dev: Master this Powerful React Framework", issuer: "Udemy", date: "may 27 2024", image: "/images/UC.jpg", url: 'https://www.udemy.com/certificate/UC-a5068126-f6d9-466e-8289-66a7732cc00f/' },
 { id: 2, title: "Learn JavaScript", issuer: "Coursera", date: "sep 2 2023", image: "/images/CERTIFICATE_LANDING_PAGE~Z24YE5R73VFZ.jpeg" },
 { id: 3, title: "HTML, CSS, and Javascript for Web Developers", issuer: "Coursera", date: "July 1, 2023", image: "/images/CERTIFICATE_LANDING_PAGE~2M3R49EE5QPG.jpeg" },
 { id: 4, title: "Preliminary design of web pages", issuer: "Technical and professional organization of Iran", date: "February  31, 2023", image: "/images/1677259492046.jpg" },
 { id: 5, title: "Course completion certificate", issuer: "nikoravesh", date: "September  15, 2022", image: "/images/1672569945422.jpg" },
]


const CertificatesCo = (props: Props) => {
 const navigate = useNavigate()
 return (
  <div>
   <div className="container mx-auto px-4 py-8 mt-20">
    <h2 className="text-purple-500 text-3xl font-bold mb-2">My Certificates</h2>
    <p className="text-white text-lg mb-6">A showcase of my professional achievements and qualifications.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     {data.map((cert) => (
      <div key={cert.id}

       className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-95 cursor-pointer">
       <img onClick={() => window.open(cert.image, "_blank")}
        src={cert.image} alt={cert.title} className="w-full h-96 object-cover" />
       <div className="p-4">
        <h3 className="text-white text-lg font-semibold mb-2">{cert.title}</h3>
        <p className="text-gray-400 text-sm mb-1">Issued by: {cert.issuer}</p>
        <p className="text-gray-400 text-sm">Date: {cert.date}</p>
       </div>
      </div>
     ))}
    </div>
   </div>



  </div>
 )
}

export default CertificatesCo;
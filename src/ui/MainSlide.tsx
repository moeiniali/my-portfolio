import React from 'react'


type Props = {}

const MainSlide = (props: Props) => {
 return (

  <div className="flex flex-row items-center justify-between w-full p-8  mt-10" >
   {/* Left section: Three texts and social icons */}
   <div className="flex flex-col items-start justify-center space-y-4 w-1/3">
    <div className='flex flex-row items-center justify-center '>
     <img src="/images/Group 70.png" alt="icon" width={32} height={32} />
     <h2 className="text-base font-bold text-gray-500">Hi Everyone</h2>
    </div>
    <h2 className="text-2xl font-bold text-gray-500">I'm Ali Moeini</h2>
    <p className="text-xl text-gray-500">Front-end developer · UI designer</p>


    <div className="flex flex-row space-x-4 mt-4">
     <a href="https://github.com/moeiniali" target='_blank' className="text-gray-500 hover:text-gray-700 hover:scale-95 duration-700">
      <i className="fab fa-facebook-f">
       <img src="/images/github.png" alt="" width={32} height={32} />
      </i>
     </a>

     <a href="https://linkedin.com/in/ali-moeini75" target='_blank' className="text-gray-500 hover:text-gray-700 hover:scale-95 duration-700">
      <i className="fab fa-twitter">
       <img src="/images/linkedin.png" alt="" width={32} height={32} />
      </i>
     </a>

    </div>
   </div>

   {/* Middle section: Circular rotating image */}
   <div className="w-1/3 flex justify-center items-center">
    <div className="w-64 h-64 rounded-full overflow-hidden">
     <img
      src="/images/Group 69.svg"
      alt="Featured"
      className="w-full h-full object-cover animate-custom-move"
     />
    </div>
   </div>

   {/* Right section: Two texts with icon links */}
   <div className="flex flex-col items-end justify-center space-y-4 w-1/3">






    <div className="flex flex-col items-center justify-center content-center hover:scale-95 duration-700">
     <a href="/files/aliMoeini-en.pdf" target='_blank' className="flex items-center gap-2 justify-center content-center text-gray-500 hover:text-gray-700">
      <h3 className="text-base font-semibold text-gray-500  ">myCv</h3>
      <img src="/images/ArrowLineDown.png" alt="download" width={16} height={16} />
     </a>
    </div>


    <div className="flex flex-col items-center justify-center content-center  hover:scale-95 duration-700 border rounded-full border-indigo-700">
     <a href="#" className="flex items-center text-gray-500 hover:text-gray-700 gap-2 px-4 py-1">
      <img src="/images/WhatsappLogo.png" alt="whatsapp" width={16} height={16} />
      <h3 className="text-base font-semibold text-gray-500 ">whatsUp...</h3>
     </a>
    </div>



   </div>
  </div>



 )
}

export default MainSlide
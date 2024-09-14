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
       <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
      </div>




     </div>
    </div>
   </div>




  </div>
 )
}

export default BioCo
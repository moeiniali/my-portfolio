import React from 'react'
import { SocialLink, ContactItem } from '../exAllCo'




type Props = {}

const FooterCo = (props: Props) => {
 return (
  <footer className="bg-transparent text-white py-12 mt-20 rounded-2xl">
   <div className="container mx-auto px-4">
    {/* Thank you section */}
    <div className="flex flex-col gap-4 items-center justify-center mb-12 ">
     <img src="/images/icon.svg" alt="Thank you" width={32} height={32} />
     <div className="text-center ">
      <h2 className="text-3xl font-bold mb-2">Thank You for Visiting!</h2>
      <p className="text-lg">I appreciate your time and interest in my portfolio.</p>
     </div>
    </div>

    {/* Contact methods */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
     <ContactItem icon="mail" text="Email" value="your.email@example.com" />
     <ContactItem icon="whatsapp" text="WhatsApp" value="+1234567890" />
     <ContactItem icon="telegram" text="Telegram" value="@yourusername" />
     <ContactItem icon="linkedin" text="LinkedIn" value="linkedin.com/in/yourprofile" />
     <ContactItem icon="instagram" text="Instagram" value="@yourusername" />
    </div>

    {/* Back to top button */}
    <div className="text-center mb-12">
     <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="bg-transparent border border-purple-950 hover:scale-95 duration-700 text-gray-200 font-bold py-2 px-4 rounded-full transition "
     >
      Back to Top
     </button>
    </div>
   </div>

   {/* Social links and copyright */}
   <div className="bg-gray-800 py-4   w-full h-20 absolute   left-0">
    <div className=" flex flex-col items-center  pb-10 w-full h-full  ">
     <div className="flex space-x-4 mb-4">
      <SocialLink href="#" icon="facebook" />
      <SocialLink href="#" icon="twitter" />
      <SocialLink href="#" icon="instagram" />
      <SocialLink href="#" icon="linkedin" />
     </div>
     <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </div>
   </div>
  </footer>


 )
}

export default FooterCo
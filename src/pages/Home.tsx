import React from 'react'
import { HeaderCo, MainSlide, SectionICo, BioCo, CertificatesCo, ProjectsCo, ProjectsVidCo, Skills, ExperiencesCo, FooterCo } from '../exAllCo';
type Props = {}

const Home = (props: Props) => {
 return (
  <div className='w-full h-full bg-[#090E16] '>


   <HeaderCo />
   <MainSlide />
   <SectionICo />
   <BioCo />
   <ProjectsCo />
   <ProjectsVidCo />
   <Skills />
   <ExperiencesCo />
   <CertificatesCo />
   <FooterCo />
  </div>
 )
}

export default Home;
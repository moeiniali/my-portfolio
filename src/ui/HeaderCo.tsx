import { Flex } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';


type Props = {}

const HeaderCo = (props: Props) => {
 return (
  <Flex justify={'space-between'} align={'center'} gap={16} style={{ backgroundColor: 'rgba(123, 74, 226, 0.05)' }}
   className='max-w-[1640px]   h-16 text-gray-300  mt-9 right-0 m-auto rounded-2xl px-4'>

   <div>
    <img src="./images/logo.svg" alt="logo" width={36} height={40} />
   </div>
   <Flex gap={24} >
    <Link to={'/home'}>
     <p className='hover:scale-95 duration-700 hover:text-purple-800'>home</p>
    </Link>
    <Link to={'/home'}>
     <p className='hover:scale-95 duration-700 hover:text-purple-800'>login</p>
    </Link>
    <Link to={'/home'}>
     <p className='hover:scale-95 duration-700 hover:text-purple-800'>signup</p>
    </Link>
   </Flex>

  </Flex>
 )
}

export default HeaderCo
import React from 'react'
import useUserStore from '../../utils/Store.js'

const HomePage = () => {

const user = useUserStore((state)=> state.user);
  return (

    <section className = "w-full h-screen flex justify-center items-center">
      {user? (<span className='text-4xl'> Welcome {user.userName}!</span>):(<span className = "text-4xl">Homepage</span>)}
    </section>



   
  )
}

export default HomePage
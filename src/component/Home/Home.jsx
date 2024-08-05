import React from 'react'

const Home = () => {
  return (
    <div>
        <main className='flex flex-col-reverse md:flex-row justify-center  bg-[#1E1842] text-white'>
            <div className='flex flex-col justify-center md:w-1/2 p-9 items-center'>
                <h1 className='text-2xl md:text-4xl md:text-left text-center font-serif font-bold mb-4 max-w-md '>Bring everyone together to build better products</h1>
                <p className='opacity-35 md:text-left text-center max-w-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis harum fugiat quasi</p>
                <div className='flex justify-center md:justify-start mt-5 md:w-1/2'>
               <button className='bg-orange-500 px-5 py-2 rounded-full max-w-md md:-ms-12'>Get Started</button>
               </div>
            </div>  
            <div className='md:w-1/2'>
                <img src="https://i.pinimg.com/originals/75/e7/ef/75e7ef7aa27009befb076509382b86b8.gif" alt="" 
            />
            </div>
        </main>
    </div>
  )
}

export default Home

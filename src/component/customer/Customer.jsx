import React from 'react'

const Customer = () => {
    const profiles = 
    [
        {
            img:"https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png",
            name:"John Doe",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis fugit consequuntur dolore voluptatum est vitae eos reprehenderit non"
        },
        {
            img:"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
            name:"Smith Joe",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis fugit consequuntur dolore voluptatum est vitae eos reprehenderit non"
        },
        {
            img:"https://cdn3.iconfinder.com/data/icons/avatars-collection/256/23-1024.png",
            name:" Caroline",
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis fugit consequuntur dolore voluptatum est vitae eos reprehenderit non"
        },

    ]
  return (
   
    <div>
      <main>
        <div className='container mx-auto'>
            <div className='flex flex-col m-5 gap-7 md:flex-row md:justify-center  mt-10'>
                {profiles.map((data,index)=>(
                    <div className='flex flex-col items-center md:flex-col space-x-4 text-center md:w-80 bg-slate-100 rounded-lg p-5'>
                        <img src={data.img} alt="" className='w-20'/>
                        <h1 className='text-2xl font-mono font-bold'>{data.name}</h1>
                        <p className='md:text-md'>"{data.desc}"</p>
                    </div>
                ))}
            </div>
        </div>
      </main>
    </div>
  )
}

export default Customer

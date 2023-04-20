import React,{useState} from 'react'
import img from '../../assets/img2.jpg'
function Section1() {

    const [details,setDetails]=useState({});
    const onchange=(e)=>{
        const {name,value}=e.target;
        setDetails({...details,[name]:value})
    }

    const onSubmit=async(e)=>{
        console.log('clicked');
        e.preventDefault();
        await fetch('https://tiny-puce-coati-tutu.cyclic.app/sendmail',
        {
            method:'post',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(details)
        }).then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }

  return <div className={`md:relative   flex justify-center items-center md:py-28 bg-inherit`}>
    <div className='absolute  md:h-[100%] -z-10 '>
        <img src={img} className='opacity-20  object-cover blur'/>
    </div>
    <div className='z-20 flex flex-col justify-start gap-2 md:gap-8 items-center w-[90%]  md:w-[60%] h-auto border  border-gray-400 md:p-8  shadow-2xl '>
        <form onSubmit={onSubmit}>

        <h1 className='md:text-5xl text-3xl font-serif font-bold text-gray-700 text-center mt-6 md:mt-0'>Contact us</h1>
        <div className='flex flex-col items-center md:flex-row md:justify-between w-full md:w-[80%] mt-2 md:mt-9 gap-2 md:gap-0'>
            <label htmlFor="name" className='font-serif md:text-2xl text-gray-800'>Enter Your Name </label>
            <input onChange={onchange} name='name' type="text" className='w-52 md:h-9 md:w-60 bg-inherit border focus:outline-none  text-gray-600 border-gray-400 px-1 rounded'/>
        </div>
        <div className='flex flex-col items-center md:flex-row md:justify-between w-full md:w-[80%] gap-2 md:gap-0'>
            <label htmlFor="Email" className='font-serif md:text-2xl text-gray-800'>Enter Your Email </label>
            <input type="text" name='email' onChange={onchange} className='w-52 md:h-9 md:w-60 bg-inherit border focus:outline-none  text-gray-600 border-gray-400 px-1 rounded'/>
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-start md:justify-between md:w-[80%]'>
            <label htmlFor="Messege" className='font-serif md:text-2xl text-gray-800'>Enter Your Messege   </label>
            <textarea rows={7} onChange={onchange} name="message" className='w-52 md:w-60 bg-inherit border focus:outline-none  text-gray-600 resize-none py-1  border-gray-400 px-1 rounded'></textarea>
        </div>
         <button className='btn btn-outline md:w-32 btn-sm md:btn-md mb-5 hover:bg-[#f5f5f5] hover:text-black'> submit </button> 
        </form>
    </div>
  </div>
}

export default Section1;

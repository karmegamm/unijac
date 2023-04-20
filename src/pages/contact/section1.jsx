import React,{useState} from 'react'
import Swal from 'sweetalert2';
import img from '../../assets/img2.jpg'
function Section1() {

    const [isloading,setIsLoading]=useState(false);
    const [details,setDetails]=useState({name:'',email:'',message:''});
    const onchange=(e)=>{
        const {name,value}=e.target;
        setDetails({...details,[name]:value})
    }

    const onSubmit=async(e)=>{
        console.log('clicked');
        e.preventDefault();
        setIsLoading(true)
        await fetch('https://combative-boa-kit.cyclic.app/sendmail',
        {
            method:'post',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(details)
        }).then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        setDetails({name:'',email:'',message:''});
        setIsLoading(false)
        Swal.fire(
            'Message sended !',
            'thanks for your visit 🙂!',
            'success')
        }
      return <div className={`md:relative   flex justify-center items-center md:py-28 bg-inherit`}>
    <div className='absolute  md:h-[100%] -z-10 '>
        <img src={img} className='opacity-20  object-cover blur'/>
    </div>
        <form onSubmit={onSubmit} className='z-20 flex flex-col justify-start gap-2 md:gap-8 items-center w-[90%]  md:w-[60%] h-auto border  border-gray-400 md:p-8  shadow-2xl '>
        <h1 className='md:text-5xl text-3xl font-serif font-bold text-gray-700 text-center mt-6 md:mt-0'>Contact us</h1>
        <div className='flex flex-col items-center md:flex-row md:justify-between w-full md:w-[80%] mt-2 md:mt-9 gap-2 md:gap-0'>
            <label htmlFor="name" className='font-serif md:text-2xl text-gray-800'>Enter Your Name </label>
            <input onChange={onchange} name='name' type="text" value={details.name} required={true} className='w-52 md:h-9 md:w-60 bg-inherit border focus:outline-none  text-gray-600 border-gray-400 px-1 rounded'/>
        </div>
        <div className='flex flex-col items-center md:flex-row md:justify-between w-full md:w-[80%] gap-2 md:gap-0'>
            <label htmlFor="Email" className='font-serif md:text-2xl text-gray-800'>Enter Your Email </label>
            <input type="email" name='email' value={details.email} onChange={onchange} required={true}  className='w-52 md:h-9 md:w-60 bg-inherit border focus:outline-none  text-gray-600 border-gray-400 px-1 rounded'/>
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-start md:justify-between md:w-[80%]'>
            <label htmlFor="Messege" className='font-serif md:text-2xl text-gray-800'>Enter Your Messege   </label>
            <textarea rows={7} required={true}  onChange={onchange} value={details.message} name="message" className='w-52 md:w-60 bg-inherit border focus:outline-none  text-gray-600 resize-none py-1  border-gray-400 px-1 rounded'></textarea>
        </div>
         <button className='btn btn-outline md:w-32 text-black  md:btn-md mb-5'>{isloading?'processing ...':'submit'}</button> 
        </form>
  </div>
}

export default Section1;

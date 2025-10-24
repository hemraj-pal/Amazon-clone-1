import axios from 'axios'
import React from 'react'
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast'


function Contact() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit=async (data) =>{
        const useinfo={
          name:data.name,
          email:data.email,
          message:data.message
        }
        try{
            await axios.post("https://getform.io/f/azygevlb",useinfo);
            toast.success("your message has been sent");
        }catch(error){
             console.log(error);
             toast.error("somthing went wrong");
        }


  }
  return (
    <>
         <div  name= "Contact"
 
         className="max-w-screen-2xl  container mx-auto px-4 md:px-20 my-16">
            <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
            <span>Please fill out the Form below to contact me</span>
            <div className='flex flex-col justify-center items-center mt-5'>
                  <form  onSubmit={handleSubmit(onSubmit)} 
                  //action="https://getform.io/f/azygevlb"
                  //method="POST" 
                  className='bg-slate-200 w-full max-w-sm px-8 py-6 rounded-xl'>
                      <h1 className='font-semibold text-xl mb-3'>Send Your Message</h1>
                      <div  className='flex flex-col mb-4'>
                             <label htmlFor='name' className='block text-gray-700'>FullName</label>
                             <input
                              {...register("name", { required: true })}
                        className="shadow rounded-lg appearance-none border ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" 
                             id='name'
                             name='name'
                             placeholder='Enter Your FullName'
                             />
                             {errors.name && <span>This field is required</span>}
                      </div>
                         <div  className='flex flex-col mb-4'>
                            <label htmlFor='name' className='block text-gray-700'>Email Address</label>
                             <input
                             {...register("email", { required: true })}
                        className="shadow rounded-lg appearance-none border ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" 
                             id='name'
                             name='email'
                             placeholder='Enter Your Email Address'
                             />
                              {errors.email && <span>This field is required</span>}
                      </div>
                        <div  className='flex flex-col mb-4'>
                            <label htmlFor='name' className='block text-gray-700'>Message</label>
                             <input
                             {...register("message", { required: true })}
                        className="shadow rounded-lg appearance-none border ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           type="text" 
                             id='name'
                             name='message'
                             placeholder='Enter Your Message'
                             />
                             {errors.message && <span>This field is required</span>}
                      </div>
                      <button type='submit' className='bg-black rounded-xl text-white px-3 py-2 hover:bg-slate-700 duration-500'>Send</button>
                  </form>
            </div>
        </div> 
    </>
  )
}

export default Contact

import { Button } from '@/components/ui/button'
import LabeledInput from '@/components/ui/LabeledInput'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
       <div>
         <div className="max-w-[387px] container mx-auto  mt-10">
           <form action="" className='flex flex-col gap-5'>
           <div className="w-30 rounded-full border mx-auto">
             <img draggable='false' src="/logo.avif" alt="logo"  className='rounded-full'/>
           </div>
          <div className="">
            <h1 className='text-center text-2xl'>Create an account</h1>
           <h2 className='text-center text-gray-600'>Please enter your details to create an account</h2>
          </div>
           <LabeledInput label={'Name'} id={'name'} placeholder ="Enter your Name"/>
           <LabeledInput label={'Email'} id={'email'} placeholder ="Enter your Email"/>
           <LabeledInput label={'Password'} id={'password'} placeholder ="Enter your Password"/>
           <div className="flex justify-center">
                      <Link href={'/dashboard'}> <Button className={'w-sm cursor-pointer'}>Sign up</Button></Link>
           </div>
            <p>Don{"'"}t have an Account <Link className='text-blue-500 underline' href={'/login'}>Already have an account</Link></p>
           </form>
         </div>
       </div>
  )
}

export default page
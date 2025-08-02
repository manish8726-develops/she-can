import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
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
         <h1 className='text-center text-2xl'>Login to your Account</h1>
        <h2 className='text-center text-gray-600'>Please enter your details to login your account</h2>
       </div>
        <LabeledInput label={'Email'} id={'email'} placeholder ="Enter your Email"/>
        <LabeledInput label={'Password'} id={'password'} placeholder ="Enter your Password"/>
        <div className="flex justify-center">
          <Link href={'/dashboard'}> <Button className={'w-sm cursor-pointer'}>Log in</Button></Link>
        </div>
         <p>Don{"'"}t have an Account <Link className='text-blue-500 underline' href={'/signup'}>Create Account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default page
'use client'

import Button from '@/component/ui/button'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // console.error(error)
  }, [error])

  return (
    <div className='flex justify-center items-center container w-full h-screen'>
      <div className='text-center'>
        <div className='mb-3'>
          <h2 className='text-2xl font-medium mb-1'>Something went wrong!</h2>
          <p>{error.message}</p>
        </div>
        <Button
          variant={"secondary"}
          onClick={
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  )
}
import { Loader } from 'lucide-react'
import React from 'react'

function Loading() {
    return (
        <div className='flex items-center justify-center min-h-screen h-48'>
            <Loader size={100} className='animate-spin' />
        </div>
    )
}

export default Loading
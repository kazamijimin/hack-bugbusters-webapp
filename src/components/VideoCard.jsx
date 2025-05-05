import React from 'react'
import { Button } from './ui/button'
import { Play } from 'lucide-react'

export default function VideoCard() {
    return (
        <div className="card bg-base-100 image-full w-86 shadow-sm">
            <figure>
                <img
                    src="/assets/ad1.png"
                    alt="Shoes" />
            </figure>
            <div className="card-body flex justify-center items-center">
                <Button variant="outline" size="icon" className="rounded-full ">
                    <Play className='text-black' /> 
                </Button>
            </div>
        </div>
    )
}

import React from 'react'

export default function imageModule(selectedQuestion) {
    switch (selectedQuestion) {
        case 'option1':
            return <img src="../../../../../public/hengPhoto.jpeg" alt="" className='relative border border-black rounded-md box-shadow animate-alert z-20' />
        case 'option2':
            return <img src="../../../../../public/hengPhoto.jpeg" alt="" className='relative border border-black rounded-md box-shadow animate-eyeLeftRight z-20' />
        case 'option3':
            return <img src="../../../../../public/hengPhoto.jpeg" alt="" className='relative border border-black rounded-md box-shadow animate-travelAcrossScreen z-20' />
        default:
            return <img src="../../../../../public/hengPhoto.jpeg" alt="" className='relative border border-black rounded-md box-shadow z-20' />
    }
}
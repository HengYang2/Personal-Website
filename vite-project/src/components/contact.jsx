import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_88w1saa', 'template_mb8poy8', form.current, 'PHFhSdIVwLUvYhCpu')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent Successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Email Not Sent :( Please review form');
            });
    };

    return (
        <div className=' text-black absolute z-50 bg-blue-300 h-100 w-100 ml-110 mt-111 flex flex-col justify-center items-center'>
        <form ref={form} onSubmit={sendEmail} className='w-1/2 h-4/5 flex flex-col justify-center gap-2 items-center bg-white border border-black rounded-md p-2 text-sm'>
            <label>Name</label>
            <input type="text" name="user_name" className='bg-gray-400'/>
            <label>Email</label>
            <input type="email" name="user_email" className='bg-gray-400'/>
            <label>Message</label>
            <textarea name="message" className='bg-gray-400'/>
            <input type="submit" value="Send" />
        </form>
        </div>
    );
};


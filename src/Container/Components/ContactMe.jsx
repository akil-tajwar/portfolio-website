import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const form2 = e.target;
        const email = form2.user_email.value;
        const name = form2.user_name.value;
        const message = form2.message.value;
        if (email.length === 0 || name.length === 0 || message.length === 0) {
            Swal.fire(
                'Your message has not been sent',
                'Please fill up the required fields',
                'error'
            )
        }
        else {
            emailjs.sendForm('service_h2q9jan', 'template_zv7j9vr', form.current, 'WokdTe7q4sxZ2WTJz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            Swal.fire(
                'Your message has been sent',
                'Thank you for contacting me',
                'success'
            )
        }
    };
    return (
        <div className='w-11/12 lg:w-3/4 mx-auto pt-20 lg:pt-32' id='contact'>
            <h1 className='text-center text-4xl pb-10 font-semibold primary-color'>Contact Me</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>
                <form className='' ref={form} onSubmit={sendEmail}>
                    <h3 className='text-xl text-white mb-10'>For any inquiries feel free to ask me. Or you can always reach out to my social accounts.</h3>
                    <div className='flex gap-5 text-white mb-5'>
                        <input className='bg-[#181818] rounded-md w-full px-4 py-5 border border-white' name='user_name' type="text"  placeholder='Your Name (required)' />
                    </div>
                    <div className='flex gap-5 text-white'>
                        <input className='bg-[#181818] rounded-md w-full px-4 py-5 border border-white' name='user_email' type="text"  placeholder='Email Address (required)' />
                        <input className='bg-[#181818] rounded-md w-full px-4 py-5 border border-white' name='user_phone' type="text" placeholder='Phone Number' />
                    </div>
                    <textarea className='bg-[#181818] rounded-md w-full px-4 py-5 border border-white mt-5' name='message'  placeholder='Your Message (required)' cols="30" rows="5"></textarea>
                    <div className='text-right'>
                        <input type='submit' value="Let's talk" className='mt-3 cursor-pointer bg-[#008f40] text-white rounded font-semibold text-xl px-5 py-2' />
                    </div>
                </form>
                <div className='hidden md:hidden lg:block'>
                    <img className='' src="/message.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
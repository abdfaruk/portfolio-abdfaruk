import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gowc0tr', 'template_7qrli4c', form.current, 'user_Hph1TZQA1NSJ8QJCQeFsk')
      .then((result) => {
          if (result.text == 'OK') {
              alert('Thanks , i will contact with you soon')
          }
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <h1 className='font-bold text-4xl text-center my-5'>Contact with me</h1>

            <h3 className='font-bold text-2xl text-center'>Address</h3>
            <h5>Chatra, Pirganj, Rangpur, Bangladesh.</h5>
            <h3 className='font-bold text-2xl text-center'>Phone</h3>
            <h5>+8801716149429</h5>
            <h3 className='font-bold text-2xl text-center'>Email</h3>
            <h5 className="mb-6">abd.faruk.mern@gmail.com</h5>

            <h3 className='font-bold text-2xl text-center mb-3'>Any Query? Put Here</h3>
            <form ref={form} onSubmit={sendEmail} className='space-y-5 text-center'>
               
                <p>
                   
                    <input type="text" name="name" className='w-1/2 p-2 bg-gray-100 rounded-2xl ' placeholder='Enter your name'required />
                </p>
                <p>
                   
                   <input type="email" name="email"  className='w-1/2 p-2 bg-gray-100 rounded-2xl ' placeholder='Enter your email' required/>
                </p>
                
                <p>
                   
                   <textarea type="text" name="message"  className='w-1/2 p-2 bg-gray-100 rounded-2xl ' placeholder='Message' required/>
               </p>
             
              
            
                <p className='flex justify-center'>
                    
                <input type="submit" className='font-bold bg-yellow-400 px-5 py-1 rounded-2xl block' value="Send" />
               </p>
            </form>
            

        </div>
    );
};

export default Contact;
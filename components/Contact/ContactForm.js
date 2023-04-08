import React from 'react'
import Form from './Form'
import PhoneNumberDet from './PhoneNumberDet'
import AddressDet from './AddressDet'

const ContactForm = () => {
  return (
    <div className="bg-white px-7 md:px-[5.25rem] py-12 md:py-[7.5rem]">
      <Form
        number={'01'}
        question={'What’s your email ?'}
        placeHolder={'JohnDoe@gmail.com'}
        contactDetails={<PhoneNumberDet />}
      />
      <Form
        number={'02'}
        question={'What’s your message ?'}
        placeHolder={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit '
        }
        contactDetails={<AddressDet />}
      />

      <div className='md:ml-[5rem]'>
        <button className="bg-black text-white tracking-wider uppercase px-10 py-2 text-lg font-semibold">
          Submit
        </button>
      </div>

      <div className='my-[5rem] block md:hidden'>
        <PhoneNumberDet/>
        <AddressDet/>
      
      
      
      </div>



    </div>
  )
}

export default ContactForm
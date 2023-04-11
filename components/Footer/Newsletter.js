import { FiSend } from 'react-icons/fi'
import { useRef, useState } from 'react'

const SHEETS_APP_URL = 'https://script.google.com/macros/s/AKfycbwmi_t6T7K6AQo4rIOJrkcaOxjejb3Km0kNd_IOpsYEOwoo9kZacxnuUO_qG4DUqBw9/exec'

export default function Newsletter() {
    const emailRef = useRef()
    const formRef = useRef()
    let [loading, setLoading] = useState(false)
    let [subscribe, setSubscribe] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        // get email from input field
        let form = formRef.current
        let data = new FormData(form)

        // send email to google script
        fetch(SHEETS_APP_URL, {
            method: 'POST',
            body:  data,
        }).then(() => {
            // show success message
            emailRef.current.value = ''
            console.log('success')
            setSubscribe(true)
            // sleep for 5 seconds
            setTimeout(() => {
                setSubscribe(false)
            }, 5000)
        })
        setLoading(false)
    }

    return (
        <>
            <h3 className="text-3xl font-bold mb-4 mt-8 lg:mt-0">
              Join our Newsletter
            </h3>
            <form className="flex flex-col lg:flex-row w-9/12" ref={formRef}>
              <input
                type="text"
                name='Email'
                ref={emailRef}
                className="w-full lg:w-3/4 px-4 py-2 rounded-lg bg-[#161616] text-white mb-4 lg:mb-0 md:mr-4 outline-none focus:border-2 focus:border-[#dd1313]"
                placeholder="Enter your email"
              />
            {
                loading ? (
              <button className="w-full lg:w-1/4 px-4 py-2 rounded-lg bg-[#dd1313]"  disabled={true}>
                <FiSend className="text-white w-6 h-6 mx-auto" />
              </button> ) : (
                <button className="w-full lg:w-1/4 px-4 py-2 rounded-lg bg-[#dd1313]" onClick={(e) => {handleSubmit(e)}}>
                <FiSend className="text-white w-6 h-6 mx-auto" />
              </button>
              )
            }
            </form>
            {subscribe && <p className="py-2 w-3/4 text-[#dd1313]">
              Thank you for subscribing to our newsletter!
            </p>}
            <p className="py-4 w-3/4">
              Be the first one to hear from us! You can unsubscribe our update
              any time you want.
            </p>
        </>
    )
}
import { useState } from "react"
import { Button } from "../components"
import { subscribeUser } from "../services/apiService.js"  

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState("")
  const [loading, setLoading] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  const handleSubscribe = async () => {
    setLoading(true)
    setAlertMessage("Loading...")
    setAlertType("info")
    setDisableButton(true)

    setTimeout( async () => {
      
      if (!email) {
        setAlertMessage("Please fill in your Email Address!")
        setAlertType("danger")
        setLoading(false)
        setDisableButton(false)
        return
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        setAlertMessage("Please fill in a valid Email Address!")
        setAlertType("danger")
        setLoading(false)
        setDisableButton(false)
        return
      }
  
      try {
        const response = await subscribeUser(email) 
        console.log(response)
        setAlertMessage(response.message || response.error || "Subscribed successfully!")
        setAlertType(response.error ? "danger" : "success")

        setTimeout(() => {
          setAlertMessage("")
        }, 3000)

      } catch (error) {
        console.error(error)
        setAlertMessage("Unknown error occurred, try again later!")
        setAlertType("danger")

        setTimeout(() => {
          setAlertMessage("")
        }, 3000)

      }
  
      setLoading(false)
      setDisableButton(false)

    }, 2000)
  }

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setAlertMessage("");  // Clears alert when typing
  };

  return (
    <section
    id='contact-us'
    className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
        <h3 className='text-[48px] leading-[68px] lg:max-w-md font-palanquin font-bold'>
          Sign Up for
          <span className='text-vivid-orange'> Updates </span>& Newsletter
        </h3>

        <div className="lg:max-w-[40%] w-full">
          <div className=' flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
            <input 
            type='text' 
            placeholder='example@gmail.com' 
            className='input' 
            value={email}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubscribe();
              }
            }}
            />
            <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                <Button disable={disableButton} label="Sign Up" fullWidth onClick={handleSubscribe} />
            </div>
          </div>

          <div className="text-center mt-3">
            {
              alertMessage && (
                <p className={`${alertType === "danger" ? "text-red-500" : alertType === "success" ? "text-green-500" : "text-yellow-500"} animate-fade-in`}>
                  {alertMessage}
                </p>
              )
            }
          </div>

        </div>
        

  </section>
  )
}

export default Newsletter

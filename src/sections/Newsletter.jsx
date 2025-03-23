import { Button } from "../components";

const Newsletter = () => {
  return (
    <section
    id='contact-us'
    className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
        <h3 className='text-[48px] leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-vivid-orange'> Updates </span>& Newsletter
        </h3>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='example@gmail.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
            <Button label='Sign Up' fullWidth />
        </div>
        </div>
  </section>
  )
}

export default Newsletter
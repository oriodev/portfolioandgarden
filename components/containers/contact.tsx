'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import SectionHeader from './sectionheader';
import { sendEmail } from '@/utils/sendemail.utils';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [success, setSuccess] = useState(false);

  function onSubmit(data: FormData) {
    sendEmail(data);
    reset();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 10000)
  }

  return (
    <div id='contact' className='flex justify-center w-full p-15 pt-30 pb-30 bg-gradient-to-tr from-cyan-100 to-indigo-200 clip-diagonal-both'>
      <div className='w-full sm:w-1/2 lg:w-1/3'>
        <SectionHeader title="💌 contact." />
        {/* #TODO: ADD A 'I WOULD LOVE TO CHAT' MSSG HERE. */}

        <form onSubmit={handleSubmit(onSubmit)} className='pt-5'>
          <div className='mb-5'>
            <label
              htmlFor='name'
              className='mb-3 block text-base font-medium text-black'
            >
              🍂 name/nickname.
            </label>
            <input
              type='text'
              placeholder='name or a nickname.'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-indigo-300 focus:shadow-md'
              {...register('name', { required: true })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='email'
              className='mb-3 block text-base font-medium text-black'
            >
              📪 email.
            </label>
            <input
              type='email'
              placeholder='email@email.com'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-indigo-300 focus:shadow-md'
              {...register('email', { required: true })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='message'
              className='mb-3 block text-base font-medium text-black'
            >
              🖋️ message.
            </label>
            <textarea
              rows={9}
              placeholder='your message goes here.'
              className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-indigo-300 focus:shadow-md'
              {...register('message', { required: true })}
            ></textarea>
          </div>
          <div>
            <button className='w-full text-center p-2 pl-5 pr-5 rounded-lg font-bold bg-white text-black effect-shine transition hover:cursor-pointer'>
              💌 Send
            </button>
            {success && (
              <p className='font-bold text-center pt-3'>🎉 message sent 🎉</p>
            )}
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Contact;

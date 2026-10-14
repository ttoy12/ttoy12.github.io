'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import Reveal from '../Reveal'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const inputClassName =
  'w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-accent-500'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    setStatus('sending')
    emailjs
      .sendForm('service_wx9rt9o', 'template_br9qfev', form.current, {
        publicKey: 'KmrpDOrH6czSND86J'
      })
      .then(
        () => {
          setStatus('sent')
          // Only clear the form once the message is actually delivered, so a failure doesn't lose what they typed
          form.current?.reset()
        },
        error => {
          console.error('Contact form failed to send:', error.text)
          setStatus('error')
        }
      )
  }

  return (
    <section id='contact' className='bg-gray-900 py-20 text-white'>
      <Reveal className='container mx-auto px-4'>
        <h2 className='mb-4 text-center text-3xl font-bold'>Contact Me</h2>
        <p className='mb-8 text-center text-lg'>
          Feel free to get in touch with me through the form below.
        </p>
        <form
          ref={form}
          className='mx-auto max-w-lg text-left'
          onSubmit={sendEmail}
        >
          <div className='mb-4'>
            <label htmlFor='name' className='mb-2 block text-sm font-medium'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className={inputClassName}
              name='user_name'
              placeholder='Your name'
              autoComplete='name'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='mb-2 block text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className={inputClassName}
              name='user_email'
              placeholder='you@example.com'
              autoComplete='email'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='mb-2 block text-sm font-medium'>
              Message
            </label>
            <textarea
              id='message'
              rows={5}
              className={inputClassName}
              name='message'
              placeholder='Hi Tommy...'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            disabled={status === 'sending'}
            className='w-full rounded-lg bg-accent-700 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-accent-800 disabled:cursor-not-allowed disabled:opacity-60'
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          <div aria-live='polite' className='mt-4 min-h-[1.5rem]'>
            {status === 'sent' && (
              <p className='flex items-center gap-2 text-green-400'>
                <FaCheckCircle aria-hidden='true' /> Thanks! Your message was
                sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className='flex items-center gap-2 text-red-400'>
                <FaExclamationCircle aria-hidden='true' /> Something went wrong
                sending your message. Please try again or email me directly.
              </p>
            )}
          </div>
        </form>
      </Reveal>
    </section>
  )
}

export default Contact

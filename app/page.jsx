'use client';
import React from 'react';
import { BsArrowRight, BsInstagram } from 'react-icons/bs'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter, BiUserCircle } from 'react-icons/bi'
import { LuSmartphone } from 'react-icons/lu'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import CheckBox from './components/inputs/CheckBox';
import { LiaCitySolid, LiaAngleDownSolid } from 'react-icons/lia'
import { states, cities } from './packages/Nigeria';
import { useEffect, useState } from 'react';
import UseFormHandler from './hooks/formik';
import axios from 'axios';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import logo from '../public/images/shap_cap_logo.png'
import mockup from '../public/images/Shap_Cab.png'
import car from '../public/images/car-image.png'

import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  FacebookIcon,
} from 'react-share';


export default function Home() {
  const [cityArr, setCityArr] = useState([])
  const [showStates, setShowState] = useState(false)
  const [showCity, setShowCity] = useState(false)
  const [message, setMessage] = useState('')
  const [step, setStep] = useState(1)
  const shareUrl = 'https://www.shapcab.com';

  const formHandler = UseFormHandler({
    required: {
      name: 'Please enter your fullname',
      email: 'Please enter your email',
      state: 'Please select your residential state',
      city: 'Please select residential city',
      type: 'Please select what your are waiting as'
    },
    initialValues: {
      name: '',
      email: '',
      phone: '',
      state: '',
      city: '',
      type: ''
    },
    onSubmit: async (value) => {
      await axios.post(`${'https://api.shapcab.com/api'}/join-waitlist`, value).then((res) => {
        setMessage(res.data.message)
        setStep(3)
      })
    }
  })


  const sumitForm = (e) => {
    e.preventDefault();
    formHandler.submit()
  }

  useEffect(() => {
    let cty = cities.filter(ct => ct.state === formHandler.value.state);
    if (cty[0]?.lga !== undefined) {
      formHandler.value.city = ''
      setCityArr(cty[0]?.lga)
    }
  }, [formHandler.value, formHandler.value.state])

  useEffect(() => {
    AOS.init();
    AOS.refreshHard()
  }, [step])

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-800 via-yellow-400 to-yellow-600 select-none">
      <Image src={car} width={'80'} height={'954'} className="h-full w-auto absolute top-0 z-0" alt='' draggable="false" />
      <div className="max-w-7xl md:px-5 min-h-screen mx-auto grid md:grid-cols-2 lg:grid-cols-3 relative z-20">
        <div className="lg:col-span-2 space-y-5 hidden md:flex flex-col">
          <div className="flex-grow">

          </div>
          <div className="text-white max-w-lg">
            <section className={`bg-black bg-opacity-50 py-4 px-6 rounded-lg`}>
              <p className="mb-4">
                Are you tired of waiting endlessly for a ride when you need it the most? 
                We understand the frustration, and that is why we are thrilled to introduce our groundbreaking 
                new transportation solution - <strong className="text-xl">SHAP CAB!</strong>
              </p>

              <p>
                Don&apos;t miss out on this opportunity to be part of a transportation revolution.
                Join our waitlist today, and be prepared to embark on a journey that will change the way
                you move around your city.
              </p>
            </section>
          </div>
          <div className="flex gap-3 pb-4">
            <Link href="https://www.facebook.com/shapcab/" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
              <BiLogoFacebook size={'17px'} />
            </Link>
            {/* <Link href="https://www.facebook.com/shapcab/" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
              <BiLogoLinkedin size={'18px'} />
            </Link> */}
            <Link href="https://instagram.com/shapcab?igshid=MzRlODBiNWFlZA==" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
              <BsInstagram size={'14px'} />
            </Link>
            <Link href="https://twitter.com/shapcab?s=21&t=fMhxnbtVctq4_kSBCJaykQ" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer">
              <BiLogoTwitter size={'20px'} />
            </Link>
          </div>
        </div>
        <div className="bg-white bg-opacity-30 backdrop-blur-xl flex flex-col p-8">
          <div className="flex gap-3">
            <hr data-aos="zoom-in" className={`border-2 border-yellow-700 w-1/4 ${step > 0 ? 'block' : 'hidden'}`} />
            <hr data-aos="zoom-in" className={`border-2 border-yellow-700 w-1/4 ${step > 1 ? 'block' : 'hidden'}`} />
            <hr data-aos="zoom-in" className={`border-2 border-yellow-700 w-1/4 ${step > 2 ? 'block' : 'hidden'}`} />
          </div>
          <div className="flex-grow flex pt-5 items-center overflow-hidden">
            <section data-aos="fade-left" className={`space-y-5 w-full ${step === 1 ? 'block' : 'hidden'}`}>
              <div className="">
                <Image src={logo} width={'80'} height={'954'} alt='shap cab logo' draggable="false" />
              </div>
              <div>
                <Image src={mockup} width={'80'} height={'250'} className="h-[285px] w-auto" alt='shap cab mockup' draggable="false" />
              </div>
              <div className="font-extrabold text-2xl">
                <div>Join Shap Cab - Waitlist</div>
                <div className="font-medium text-base md:text-sm first-letter:uppercase first-letter:italic first-letter:text-base">be first in line for a ride like no other!</div>
              </div>
              <div>
                <div onClick={() => setStep(2)} className="bg-black overflow-hidden divide-x-2 items-center hover:bg-gray-800 cursor-pointer rounded-lg flex w-full text-white">
                  <div className="text-center flex-grow py-3">Get Started</div>
                  <div className="p-4 bg-gray-700"><BsArrowRight size={'24px'} /></div>
                </div>
              </div>
            </section>

            <section data-aos="fade-left" className={`space-y-5 h-full overflow-hidden w-full ${step === 2 ? 'block' : 'hidden'}`}>
              <div>
                <Image src={logo} width={'80'} height={'954'} alt='shap cab logo' draggable="false" />
              </div>
              <div className="font-extrabold text-2xl">
                <div>Waitlist Form</div>
              </div>
              <form onSubmit={(e) => sumitForm(e)} className="space-y-6">
                <div className="space-y-3">
                  <div className="">
                    <div className="rounded-md overflow-hidden bg-yellow-200 border border-yellow-300 relative">
                      <div className="absolute top-3 left-2">
                        <BiUserCircle size={'24px'} />
                      </div>
                      <input onChange={(e) => formHandler.value.name = e.target.value} type="text" placeholder="Enter Fullname" className="w-full py-3 bg-transparent focus:outline-none p-2 pl-9" />
                    </div>
                    {formHandler.error?.name && <div className="text-red-500">{formHandler.error.name}</div>}
                  </div>

                  <div className="">
                    <div className="rounded-md overflow-hidden bg-yellow-200 border border-yellow-300 relative">
                      <div className="absolute top-3 left-2">
                        <MdOutlineMarkEmailUnread size={'24px'} />
                      </div>
                      <input onChange={(e) => formHandler.value.email = e.target.value} type="text" placeholder="Enter Email" className="w-full py-3 bg-transparent focus:outline-none p-2 pl-9" />
                    </div>
                    {formHandler.error?.email && <div className="text-red-500">{formHandler.error.email}</div>}
                  </div>

                  <div className="rounded-md overflow-hidden bg-yellow-200 border border-yellow-300 relative">
                    <div className="absolute top-3 left-2">
                      <LuSmartphone size={'24px'} />
                    </div>
                    <input onChange={(e) => formHandler.value.phone = e.target.value} type="text" placeholder="Enter Phone Number" className="w-full py-3 bg-transparent focus:outline-none p-2 pl-9" />
                  </div>

                  {/* the selectstarts here */}
                  <div className="">
                    <div onMouseLeave={() => setShowState(false)} className="rounded-md cursor-pointer bg-yellow-200 border border-yellow-300 relative">
                      <div className="absolute top-2 left-2">
                        <LiaCitySolid size={'24px'} />
                      </div>
                      <div className="absolute top-3 pt-1 text-gray-500 right-2">
                        <LiaAngleDownSolid size={'18px'} />
                      </div>
                      <div className="py-3 pl-9" onClick={() => setShowState(true)} >
                        {formHandler.value.state === '' ? 'Select Residential State' : formHandler.value.state}
                      </div>
                      {
                        showStates && (
                          <div className="pt-2 w-full absolute top-12 z-10 h-72">
                            <div className="py-1 h-72 overflow-auto bg-gray-100 rounded-lg">
                              {
                                states.map((state, index) => (
                                  <div key={index} onClick={() => { setShowState(false); formHandler.value.state = state.name }} className="p-2 capitalize hover:bg-gray-200">
                                    {state.name}
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        )
                      }
                    </div>
                    {formHandler.error?.state && <div className="text-red-500">{formHandler.error.state}</div>}
                  </div>

                  {/* the select ends here */}

                  <div className="">
                    <div onMouseLeave={() => setShowCity(false)} className="rounded-md cursor-pointer bg-yellow-200 border border-yellow-300 relative">
                      <div className="absolute top-2 left-2">
                        <LiaCitySolid size={'24px'} />
                      </div>
                      <div className="absolute top-3 pt-1 text-gray-500 right-2">
                        <LiaAngleDownSolid size={'18px'} />
                      </div>
                      <div className="py-3 pl-9" onClick={() => setShowCity(true)} >
                        {formHandler.value.city === '' ? 'Select Residential City' : formHandler.value.city}
                      </div>
                      {
                        showCity && cityArr.length > 0 && (
                          <div className="pt-2 w-full absolute top-12 z-10 h-52">
                            <div className="py-1 h-52 overflow-auto bg-gray-100 rounded-lg">
                              {
                                cityArr.map((cty, index) => (
                                  <div key={index} onClick={() => { setShowCity(false); formHandler.value.city = cty.name }} className="p-2 capitalize hover:bg-gray-200">
                                    {cty.name}
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        )
                      }
                    </div>
                    {formHandler.error?.city && <div className="text-red-500">{formHandler.error.city}</div>}
                  </div>

                  <div className="">
                    <div className="flex flex-wrap gap-4 py-3">
                      <CheckBox onChange={(e) => formHandler.value.type = e} value={'customer'} Boxlable={'customer'} display={'row'} name={'type'} type={'radio'} />
                      <CheckBox onChange={(e) => formHandler.value.type = e} value={'rider'} Boxlable={'rider'} display={'row'} name={'type'} type={'radio'} />
                    </div>
                    {formHandler.error?.type && <div className="text-red-500">{formHandler.error.type}</div>}
                  </div>
                </div>
                <div>
                  {
                    formHandler.proccessing ? (
                      <div className="bg-gray-600 overflow-hidden divide-x-2 items-center cursor-none rounded-lg flex w-full text-white">
                        <div className="text-center flex-grow py-4">proccessing ...</div>
                      </div>
                    ) : (
                      <button className="bg-black overflow-hidden divide-x-2 items-center hover:bg-gray-800 cursor-pointer rounded-lg flex w-full text-white">
                        <div className="text-center flex-grow py-3">Join Waitlist</div>
                        <div className="p-4 bg-gray-700"><BsArrowRight size={'24px'} /></div>
                      </button>
                    )
                  }
                </div>
              </form>
            </section>

            <section data-aos="fade-left" className={`space-y-7 w-full ${step === 3 ? 'block' : 'hidden'}`}>
              <div>
                <Image src={logo} width={'80'} height={'954'} alt='shap cab logo' draggable="false" />
              </div>
              <div className="font-extrabold text-2xl">
                <div>Thanks </div>
                <div>{formHandler.value.name.split(' ')[0]}</div>
              </div>
              <div className="space-y-1">
                <div>{message}</div>
                <div className="">Share to your friend to join the waitlist</div>
                <div className="flex gap-1">
                  <FacebookShareButton
                    url={shareUrl}
                    image={'https://www.shapcab.com/_next/static/media/Shap_Cab.6a811b1f.png'}
                    title={'I just joined Shapcab Waitlist🕺 join with me🙌'}
                  >
                    <FacebookIcon size={35} round={true} />
                  </FacebookShareButton>

                  <WhatsappShareButton
                    url={shareUrl}
                    image={'https://www.shapcab.com/_next/static/media/Shap_Cab.6a811b1f.png'}
                    title={'I just joined Shapcab Waitlist🕺 join with me🙌'}
                  >
                    <WhatsappIcon size={35} round={true} />
                  </WhatsappShareButton>
                  <TwitterShareButton
                    url={shareUrl}
                    image={'https://www.shapcab.com/_next/static/media/Shap_Cab.6a811b1f.png'}
                    title={'I just joined Shapcab Waitlist🕺 join with me🙌'}
                  >
                    <TwitterIcon size={35} round={true} />
                  </TwitterShareButton>

                  <LinkedinShareButton
                    url={shareUrl}
                    image={'https://www.shapcab.com/_next/static/media/Shap_Cab.6a811b1f.png'}
                    title={'I just joined Shapcab Waitlist🕺 join with me🙌'}
                  >
                    <LinkedinIcon size={35} round={true} />
                  </LinkedinShareButton>
                </div>
                {/* <Link href={'https://manage.shapcab.com/'}>
                  <div className="bg-black overflow-hidden divide-x-2 items-center hover:bg-gray-800 cursor-pointer rounded-lg flex w-full text-white">
                    <div className="text-center flex-grow py-3">Visit Our Website</div>
                    <div className="p-4 bg-gray-700"><BsArrowRight size={'24px'} /></div>
                  </div>
                </Link> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

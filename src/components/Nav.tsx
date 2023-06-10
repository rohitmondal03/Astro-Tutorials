import React, { useState } from 'react'

import avatar from "/avatar.png"

// HOOK FOR ADDING MEDIA QUERIES
import { useMediaQuery } from '../utils/useMediaQuery'

import { motion } from "framer-motion"


const navMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15
        },
    },
    hidden: {
        opacity: 0,
    }
}

const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}



const Nav = () => {
    const [toggled, setToggled] = useState(false)
    const matches = useMediaQuery("(min-width: 1280px)")
    // console.log(matches);


    return (
        <nav className='relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32'>
            <svg
                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                width='250'
                height={4}
                viewBox='0 0 250 4'
                fill='none'
                xmlns='https://www.w3.org/2000/svg'
            >
                <path
                    d='M2 2L428 2'
                    stroke='#282828'
                    strokeLinecap='round'
                />
            </svg>

            <div>
                <img
                    src={avatar}
                    alt='profile pic of Hua'
                />
            </div>


            <h1 className='text-lg font-bold'>
                <a href='/'>Hua.</a>
            </h1>

            {matches && (
                <div className='flex flex-row items-center justify-between'>
                    <a className='mx-4' href="/">Home</a>
                    <a className='mx-4' href="/services">Services</a>
                    <a className='mx-4' href="/contact">Contact</a>
                </div>
            )}

            {!matches && (
                <div
                    className='space-y-1 cursor-pointer z-50'
                    onClick={() => { setToggled((prevToggle) => !prevToggle) }}
                >
                    <motion.span
                        animate={{
                            rotateZ: toggled ? 45 : 0,
                            y: toggled ? 8 : 0
                        }}
                        className='block h-0.5 w-8 bg-black'>
                    </motion.span>

                    <motion.span
                        animate={{
                            width: toggled ? 0 : 24
                        }}
                        className='block h-0.5 w-6 bg-black'
                    >
                    </motion.span>

                    <motion.span
                        animate={{
                            rotateZ: toggled ? -45 : 0,
                            y: toggled ? -8 : 0,
                            width: toggled ? 32 : 16
                        }}
                        className='block h-0.5 w-4 bg-black'
                    >
                    </motion.span>
                </div>
            )}

            {toggled && !matches && (
                <motion.div
                    className='fixed flex bg-white top-0 bottom-0 left-0 w-full h-screen items-center justify-center z-40'
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 25 }}
                >
                    <motion.div
                        variants={navMotion}
                        animate="visible"
                        initial="hidden"
                        className='flex flex-col gap-24 text-lg'
                    >
                        <motion.a variants={itemMotion} href="/">Home</motion.a>
                        <motion.a variants={itemMotion} href="/services">Services</motion.a>
                        <motion.a variants={itemMotion} href="/contact">Contact</motion.a>
                    </motion.div>
                </motion.div>
            )}
        </nav>
    )
}

export default Nav
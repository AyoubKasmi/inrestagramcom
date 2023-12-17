// 'use client';
import Image from 'next/image';
import heroInstagram from "../../public/heroinstagram.svg";
import InputLink from '../components/input';
// import { AnimatePresence, motion } from "framer-motion";
// import { useState, useEffect } from 'react';

export default function Hero() {
    // const texts = ["Reels", "Videos", "Images"];
    // const variants = {
    // enter: direction => {
    //     return {
    //     y: -20,
    //     opacity: 0
    //     };
    // },
    // center: {
    //     zIndex: 1,
    //     y: 0,
    //     opacity: 1
    // },
    // exit: direction => {
    //     return {
    //     zIndex: 0,
    //     opacity: 0
    //     };
    // }
    // };
    // const TextLoop = () => {
    //     const [index, setIndex] = useState(0);
      
    //     useEffect(() => {
    //       setTimeout(() => {
    //         let next = index + 1;
    //         if (next === texts.length) {
    //           next = 0;
    //         }
    //         setIndex(next);
    //       }, 2000);
    //     }, [index, setIndex]);
      
    //     return (
    //         <AnimatePresence>
    //             <motion.span
    //                 style={{ position: "absolute" }}
    //                 variants={variants}
    //                 key={index}
    //                 initial="enter"
    //                 animate="center"
    //                 exit="exit"
    //                 transition={{
    //                 y: { type: "tween"},
    //                 opacity: { duration: 0.3 }
    //                 }}
    //             >
    //                 {texts[index]}
    //             </motion.span>
    //         </AnimatePresence>
    //     );
    // };
    
      return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-gray-900 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Instagram Reels Retriever
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-sm md:text-base lg:text-lg dark:text-gray-400">Unlocking Insights, Amplifying Engagement – Your Instagram Experience Elevated.<br/>Just copy and paste Instagram post URL here 🔽</p>
                    <InputLink />
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        priority
                        src={heroInstagram}
                        alt="Hero Instagram People Halloween"
                    />
                </div>                
            </div>
        </section>
    )
}


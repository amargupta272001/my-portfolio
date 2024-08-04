import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1-1.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import TransitionEffect from '../components/TransitionEffect'
import Link from 'next/link';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}
const About = () => {
    const title = "Innovation Sparks Change!"
    const biography = [`Hello, I'm Amar Gupta, a passionate full-stack developer dedicated to crafting innovative, user-focused digital experiences. With over 5 years of experience, I excel in leading teams to create high-performance web applications using technologies like React, NextJS, and NodeJS.`,
        `I specialize in implementing microfrontend architectures to enhance team autonomy and reduce complexity. My expertise in optimizing UI architecture and improving load times through strategies like lazy loading and CDN usage has consistently driven performance improvements.`,
        `I am skilled in automating business processes, reducing manual efforts, and redesigning user interfaces for optimal interaction. As a leader, I prioritize effective collaboration, feature planning, and resource management to ensure timely and high-quality project delivery.`,
        `Driven by a commitment to design excellence and problem-solving, I am excited to bring my expertise and passion to your next project, creating seamless and engaging user experiences.`]

    const numbers = { company: 4, projects: 10, experience: 6 }
    const linkedInProfile = "https://in.linkedin.com/in/amar-gupta-534291140"
    return (
        <>
            <Head>
                <title>My Portfolio | About Page</title>
                <meta name="description" content="My Portfolio"></meta>
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center text-dark dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={title} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium'>{biography[0]}</p>
                            <p className='font-medium my-4'>{biography[1]}</p>
                            <p className='font-medium mb-4'>{biography[2]}</p>
                            <p className='font-medium'>{biography[3]}</p>
                        </div>

                        <div className='relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />
                            <Link href={linkedInProfile} target={"_blank"}>
                                <Image src={profilePic} alt="my-portfolio" className='w-full h-auto rounded-2xl' priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw" />
                            </Link>
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={numbers.company} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Companies</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={numbers.projects} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Project Completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={numbers.experience} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                            </div>
                        </div>
                    </div>
                </Layout>
                <div className={`w-full h-full inline-block bg-[#f5f5f5] dark:bg-dark z-0 p-32 xl:p-24 lg:p-16 mb:p-12 sm:p-8`}>
                    <Skills />
                </div>

                <Layout className='pt-0'>
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default About
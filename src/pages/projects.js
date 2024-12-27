import AnimatedText from '../components/AnimatedText'
import { GithubIcon } from '../components/Icons'
import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/carparts_home2.png"
import project2 from "../../public/images/projects/membership.png"
import project3 from "../../public/images/projects/track_package.png"
import project4 from "../../public/images/projects/pepper_content.png"
import project5 from "../../public/images/projects/recommendation.png"
import project6 from "../../public/images/projects/topgeek.png"
import app2 from "../../public/images/projects/app2.png"
import app3 from "../../public/images/projects/app3.png"
import Image from 'next/image'
import { motion } from "framer-motion"
import TransitionEffect from '../components/TransitionEffect'

const FramerImage = motion(Image)

const projectsData = [{
    title: "Carparts.com",
    summary: "A comprehensive e-commerce platform for car parts and accessories, built using React, NextJS, Tailwind CSS, Context API, and React Router. It features a user-friendly interface, advanced search and filtering options, and secure checkout.",
    img: project1,
    link: "https://carparts.com",
    github: "/",
    type: "Featured Project",
    tech: "NextJS + Microfrontend + Tailwind"
},
{
    "title": "Pepper Content",
    "summary": "An AI-driven content marketing platform designed to help businesses create high-quality content at scale. It offers tools for content strategy, creation, SEO, and analytics, leveraging a network of expert creators and advanced AI technology.",
    "img": project4,
    "link": "https://www.peppercontent.io/",
    "github": "/",
    "type": "Featured Project",
    tech: "NextJS + ReactJS + Tailwind"
},
{
    "title": "TopGeek",
    "summary": "An AI-driven platform designed to help professionals upskill, find jobs, and connect with the developer community. It offers automated interviews, job openings, and resources for continuous learning and career growth.",
    "img": project6,
    "link": "https://topgeek.io/",
    "github": "/",
    "type": "Featured Project",
    tech: "NextJS + ReactJS"
},
{
    "title": "CarParts+ Membership",
    "summary": "An exclusive membership program offering benefits like 24/7 roadside assistance, free shipping on over 500,000 parts, extended 60-day returns, and VIP member support. Built using NextJS, Tailwind CSS, Context API, and Bloomreach CMS.",
    "img": project2,
    "link": "https://www.carparts.com/membership",
    "github": "/",
    "type": "Featured Project",
    tech: "Microfrontend + Tailwind + Bloomreach"
},
{
    "title": "Recommendation System",
    "summary": "An intelligent recommendation system for car parts and accessories, leveraging Constructor.io to provide personalized suggestions such as best sellers, popular essentials, and popular products based on user behavior. Built using React, NextJS, Tailwind CSS, Context API, and constructor.io.",
    "img": project5,
    "link": "https://www.carparts.com",
    "github": "/",
    "type": "Project",
    tech: "ReactJS + Constructor.io"

},
{
    "title": "Package Tracking",
    "summary": "A convenient package tracking system that allows users to easily track their orders by entering their email address and order ID. Built using React, Tailwind CSS, Context API, it provides status updates and seamless navigation.",
    "img": project3,
    "link": "https://www.carparts.com/myaccount/trackorder",
    "github": "/",
    "type": "Project",
    tech: "ReactJS + Strapi"
},
{
    "title": "Flutter App",
    "summary": "A webview Flutter app for CarParts.com, providing a seamless shopping experience for car parts and accessories. Users can browse products, track orders, and manage their accounts with ease. Built using Flutter, it integrates with the CarParts.com platform to offer real-time updates and a user-friendly interface.",
    "img": app3,
    "link": "https://www.carparts.com",
    "github": "/",
    "type": "Project",
    "tech": "Flutter Web View"
},
{
    "title": "Vehicle Selector",
    "summary": "A webview Flutter app for CarParts.com, ensuring parts that perfectly fit your vehicle's specifications every time. Users can browse products, track orders, and manage their accounts with ease. Built using Flutter, it integrates with the CarParts.com platform to offer real-time updates and a user-friendly interface.",
    "img": app2,
    "link": "https://www.carparts.com",
    "github": "/",
    "type": "Project",
    "tech": "Flutter Web View"
},
];


const FeaturedProject = ({ type, title, summary, img, link, github, tech }) => {
    return (
        <article className='relative rounded-br-2xl w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>

                {tech ? <div class="flex items-center justify-center">
                    <div class="w-full bg-black py-4 transform text-center">
                        <span class="text-white text-lg lg:text-sm font-bold">{tech}</span>
                    </div>
                </div> : null}
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>Visit Project</Link>
                </div>
            </div>

        </article>
    )
}


const Project = ({ type, title, img, link, github, tech }) => {
    return (
        <article className='w-full h-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                {tech ? <div class="flex items-center justify-center">
                    <div class="w-full bg-black py-4 transform text-center">
                        <span class="text-white font-bold text-lg lg:text-sm">{tech}</span>
                    </div>
                </div> : null}
                <FramerImage src={img} alt={title} className="w-full h-auto rounded-bl-lg  rounded-br-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>Visit</Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon /></Link>
                </div>
            </div>

        </article>
    )
}
const projects = () => {
    return (
        <>
            <Head>
                <title>My Portfolio | Project Page</title>
                <meta name="description" content="My Portfolio"></meta>
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Imagination Trumps Knowledge!"} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        {
                            projectsData?.map((project, index) => {
                                const { title, img, link, github, type, summary, tech } = project
                                return (
                                    project.type === "Project" ?
                                        <div className='col-span-6 sm:col-span-12' key={index}>
                                            <div className='col-span-12 h-full'>
                                                <Project
                                                    title={title}
                                                    img={img}
                                                    link={link}
                                                    github={github}
                                                    type={type}
                                                    tech={tech ?? ''}
                                                />
                                            </div>
                                        </div> :
                                        <div className='col-span-12' key={index}>
                                            <FeaturedProject
                                                title={title}
                                                summary={summary}
                                                img={img}
                                                link={link}
                                                github={github}
                                                type={type}
                                                tech={tech ?? ''}
                                            />
                                        </div>
                                )
                            })
                        }
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
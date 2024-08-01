import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import { motion, useMotionValue } from "framer-motion"
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import TransitionEffect from '../components/TransitionEffect'

const FramerImage = motion(Image)
const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
            <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0 }}
                    priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )

}

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = React.useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);

    }
    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);

    }

    return (
        <Link href={link} target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
                style={{ x: x, y: y }}
            />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4
            sm:flex-col'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )

}

const Articles = () => {
    return (
        <>
            <Head>
                <title>My Portfolio | Articles Page</title>
                <meta name="description" content="My Portfolio"></meta>
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World! " className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16 '>
                        <FeaturedArticle
                            img={article1}
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="9 min read"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch.
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            link="/"
                        />

                        <FeaturedArticle
                            img={article2}
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="9 min read"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch.
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            link="/"
                        />
                    </ul>

                    <h2 className='font-semibold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>

                    <ul>
                        <Article
                            img={article3}
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 5, 2024"
                            link="/"
                        />
                        <Article
                            img={article3}
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 5, 2024"
                            link="/"
                        />
                        <Article
                            img={article3}
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 5, 2024"
                            link="/"
                        />
                        <Article
                            img={article3}
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 5, 2024"
                            link="/"
                        />
                        <Article
                            img={article3}
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 5, 2024"
                            link="/"
                        />
                        <Article
                            img={article3}
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 5, 2024"
                            link="/"
                        />
                        <Article
                            img={article3}
                            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="June 5, 2024"
                            link="/"
                        />

                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default Articles
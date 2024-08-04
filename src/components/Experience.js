import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from '../components/LiIcon'

const Details = ({ key, position, company, companyLink, time, address, work }) => {
    const ref = React.useRef(null)
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (<li key={key} ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <div className='font-medium w-full md:text-sm mt-7' dangerouslySetInnerHTML={{ __html: work }} />
        </motion.div>
    </li >)
}

const Experience = () => {
    const ref = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
    const titleStyle = `background: linear-gradient(to right, #3498db, #9b59b6); color: white; padding: 1px 5px; border-radius: 4px;`
    const highlighterStyle = `font-weight: bolder; background: linear-gradient(to right, #CF3DC5 50%, #37F2FF 100%); background-clip: text; color: transparent; -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
    const detailsData = [
        {
            id: 1,
            position: `Senior Software Engineer`,
            company: `CarParts.com`,
            companyLink: "https://www.carparts.com",
            time: "Sept 2023 - Present",
            address: "Torrance, California",
            work: `
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Microfrontend Implementation:</strong>
                Led the integration of microfrontend architecture, enhancing team autonomy by 
                <span style="${highlighterStyle}">50%</span> 
                and reducing overall complexity by 
                <span style="${highlighterStyle}">30%</span>.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Performance Optimization:</strong>
                Boosted application performance by incorporating 
                <span style="${highlighterStyle}">NextJS</span> 
                and 
                <span style="${highlighterStyle}">Tailwind CSS</span>, 
                resulting in a 
                <span style="${highlighterStyle}">20%</span> 
                reduction in backend polling and latency.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">UI Architecture Enhancement:</strong>
                Improved UI architecture and data transfer efficiency, reducing load times by 
                <span style="${highlighterStyle}">30%</span>.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">CDN Optimization:</strong>
                Optimized asset performance through CDN hosting and skeleton loading, significantly improving load times.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Render Time Reduction:</strong>
                Achieved a render time and time to first load of under 
                <span style="${highlighterStyle}">400 ms</span> 
                by implementing lazy loading and code splitting techniques.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Team Leadership:</strong>
                Managed a team, providing expert guidance on project planning, time estimation, resource allocation, and ensuring timely delivery.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Collaboration and Quality:</strong>
                Conducted regular team meetings to monitor progress, address issues, and maintain high standards of work through best practices and quality checks.
                </li>
            `
        },
        {
            id: 2,
            position: `Senior Software Engineer`,
            company: `Pepper Content`,
            companyLink: "https://www.peppercontent.io/",
            time: "May 2022 - May 2023",
            address: "Mumbai, India",
            work: `
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Automating Business Processes:</strong> Led junior developers to automate business processes, reducing manual code changes by 
                <span style="${highlighterStyle}">90%</span>.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Workflow Efficiency:</strong> Implemented automated job functionalities, improving the marketing team’s workflow efficiency.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">UI Redesign:</strong> Redesigned UI to minimize unnecessary clicks, optimizing user interactions and accelerating task completion.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Adaptability:</strong> Adapted to challenges and changes in project requirements with a positive, solution-oriented approach.
                </li>
            `
        },
        {
            id: 3,
            position: `Senior Software Engineer`,
            company: `GeekyAnts`,
            companyLink: "https://geekyants.com",
            time: "Dec 2019 - May 2022",
            address: "Bangalore, India",
            work: `
                 <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Team Leadership:</strong> Promoted to lead a team of 
                <span style="${highlighterStyle}">4 Frontend engineers</span> for a management portal application.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Training and Development:</strong> Led 
                <span style="${highlighterStyle}">Javascript</span> and 
                <span style="${highlighterStyle}">ReactJS</span> training for new hires, ensuring rapid production readiness.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Code Reviews:</strong> Actively participated in code reviews and 
                <span style="${highlighterStyle}">Agile workflows</span>, enhancing project efficiency.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Mentoring:</strong> Provided mentorship to junior developers, fostering skill development and team growth.
                </li>
                <li style="margin-bottom: 16px;">
                <strong style="${titleStyle}">Efficiency Improvements:</strong> Identified and implemented key process improvements, streamlining development workflows and boosting productivity.
                </li>
            `
        },
        {
            id: 4,
            position: `Software Engineer`,
            company: `SparxIT`,
            companyLink: "https://www.sparxitsolutions.com/",
            time: "Dec 2018 - Dec 2019",
            address: "Noida, India",
            work: `
                <li style="margin-bottom: 16px;">
                    <strong style="${titleStyle}">Reusable Components:</strong> Developed 
                    <span style="${highlighterStyle}">reusable frontend components</span> for a reporting app, focusing on intuitive 
                    <span style="${highlighterStyle}">dashboard design</span> for visualizing company statistics.
                    </li>
                    <li style="margin-bottom: 16px;">
                    <strong style="${titleStyle}">Backend Collaboration:</strong> Collaborated with 
                    <span style="${highlighterStyle}">backend teams</span> to define 
                    <span style="${highlighterStyle}">functional requirements</span>, ensuring seamless integration and functionality.
                    </li>
                    <li style="margin-bottom: 16px;">
                    <strong style="${titleStyle}">Dashboard Optimization:</strong> Enhanced the dashboard design to provide 
                    <span style="${highlighterStyle}">intuitive data visualization</span> and improve user experience.
                    </li>
                    <li style="margin-bottom: 16px;">
                    <strong style="${titleStyle}">Component Reusability:</strong> Created components that can be easily reused across 
                    <span style="${highlighterStyle}">different parts of the application</span>, reducing development time and improving consistency.
                    </li>
                    <li style="margin-bottom: 16px;">
                    <strong style="${titleStyle}">Design and Development:</strong> Focused on both 
                    <span style="${highlighterStyle}">design</span> and 
                    <span style="${highlighterStyle}">development</span> aspects of the frontend, ensuring high-quality and functional interfaces.
                </li>
            `
        },

    ]
    return (
        <div className='my-32 md:my-16'>
            <h2 className='font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl'>Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    {detailsData.map(detail => (
                        <Details
                            key={detail.id}
                            position={detail.position}
                            company={detail.company}
                            companyLink={detail.companyLink}
                            time={detail.time}
                            address={detail.address}
                            work={detail.work}
                        />)
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Experience
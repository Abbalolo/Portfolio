import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { portfolioCards } from "../../pages/project/data/ProjectData";

function ProjectDetails() {
    const { projectId } = useParams();
    const project = portfolioCards.find((item) => item.id == projectId);
    const { name, image, language, github, host, description, short } = project;
    // console.log(project);

    return (
        <section className='relative px-5 lg:px-16 md:px-10 pb-40 bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-black'>
            <h1 className='font-extrabold text-xl pt-2 pb-2'>{name}</h1>
            <p className=" pb-3 text-[#f9f7f6] dark:text-[#545454]">{short}</p>
            <img className="rounded-lg" src={image} alt="pic" />

            <div className='mt-4'>
                <h2 className='font-semibold text-xl'>About</h2>
                <p className="text-[#f9f7f6] dark:text-[#545454]">{description}</p>
            </div>

            <div className='mt-2'>
                <h2 className='font-semibold text-xl pt-2 pb-1'>Technologies</h2>
                <div className="flex flex-wrap gap-2 py-1">
                    {language.map((lang, index) => (
                        <span key={index} className="text-[16px] md:text-md text-[#f9f7f6] dark:text-[#545454] hover:bg-blue-500 hover:text-white bg-slate-950 dark:bg-transparent dark:border dark:border-gray-400 rounded-md p-1 text-center duration-300 cursor-pointer">{lang}</span>
                    ))}
                </div>
            </div>

            <div className='mt-2'>
                <h2 className="font-semibold text-xl pt-2 pb-1 flex items-center gap-2"><BiWorld />Website</h2>
                <Link to={host} className="text-blue-600 hover:underline cursor-pointer">{host}</Link>
            </div>

            <div className='mt-2'>
                <h2 className="font-semibold text-xl pt-2 pb-1 flex items-center gap-2"><AiFillGithub />GitHub</h2>
                <Link to={github} className="text-blue-600 hover:underline cursor-pointer">{github}</Link>
            </div>

            <Link className="mt-4 bg-blue-900 p-3 w-full absolute bottom-12 left-0 flex items-center justify-center gap-2 dark:text-[#f9f7f6]" to={host}>
                Open Project <BiLinkExternal className="text-[18px]" />
            </Link>
        </section>
    );
}

export default ProjectDetails;

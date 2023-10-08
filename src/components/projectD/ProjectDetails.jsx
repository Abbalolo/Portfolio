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
        <section className='relative px-5 lg:px-16 md:px-10 pb-20 bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454]'>
            <h1 className='font-extrabold text-xl pt-2 pb-2'>{name}</h1>
            <p className="text-gray-100 pb-3">{short}</p>
            <img className="rounded-lg" src={image} alt="pic" />

            <div className='mt-4'>
                <h2 className='font-semibold text-xl'>About</h2>
                <p className="text-gray-100">{description}</p>
            </div>

            <div className='mt-2'>
                <h2 className='font-semibold text-xl pt-2 pb-1'>Technologies</h2>
                <div className="flex flex-wrap gap-2 py-1">
                    {language.map((lang, index) => (
                        <span key={index} className="text-[16px] md:text-md text-white hover:bg-blue-500 hover:text-white bg-slate-950 rounded-md p-1 text-center duration-300 cursor-pointer">{lang}</span>
                    ))}
                </div>
            </div>

            <div className='mt-2'>
                <h2 className="font-semibold text-xl pt-2 pb-1 flex items-center gap-2"><BiWorld />Website</h2>
                <p className="text-blue-600 hover:underline cursor-pointer">{host}</p>
            </div>

            <div className='mt-2'>
                <h2 className="font-semibold text-xl pt-2 pb-1 flex items-center gap-2"><AiFillGithub />GitHub</h2>
                <p className="text-blue-600 hover:underline cursor-pointer">{github}</p>
            </div>

            <Link className="mt-4 bg-blue-900 p-3 w-full absolute bottom-0 left-0 flex items-center justify-center gap-2 dark:text-[#f9f7f6]" to={host}>
                Open Project <BiLinkExternal className="text-[18px]" />
            </Link>
        </section>
    );
}

export default ProjectDetails;

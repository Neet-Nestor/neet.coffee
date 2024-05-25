"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Octokit } from "octokit"
import { MaxWidthContainer } from "./Utils"

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="mr-1 h-3 w-3"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
      clipRule="evenodd"
    ></path>
  </svg>
)

interface Project {
  title: string
  description: string
  tags: string[]
  image: JSX.Element
  gh?: {
    owner: string
    repo: string
  }
  link?: string
}

const ProjectCard: React.FC<{ project: Project; stars?: number }> = ({
  project,
}) => {
  const { title, description, tags, image, gh, link } = project
  const [stars, setStars] = useState<number | null>(null)
  useEffect(() => {
    if (!project.gh) return
    const { owner, repo } = project.gh
    octokit
      .request("GET /repos/{owner}/{repo}", {
        owner,
        repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((res: { data: { stargazers_count: number } }) => {
        setStars(res.data.stargazers_count)
      })
  }, [project.gh])

  return (
    <div className="group relative grid gap-4 pb-1 mb-12 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="sm:order-2 sm:col-span-5">
        <h3 className="text-md inline-flex">
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium leading-tight hover:text-coffee-400 focus-visible:text-coffee-300 group/link text-base"
            >
              {title}
              <LinkIcon />
            </Link>
          ) : (
            title
          )}
        </h3>

        <p className="text-sm text-gray-600 mt-2">{description}</p>
        {gh && (
          <Link
            href={`https://github.com/${gh.owner}/${gh.repo}`}
            target="_blank"
            rel="noreferrer noopener"
            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-800 hover:text-coffee-400 focus-visible:text-teal-300"
          >
            <StarIcon />
            {stars || "---"}
          </Link>
        )}
        <ul className="flex mt-2 flex-wrap">
          {tags.map((tag) => (
            <li className="mr-1.5 mt-2" key={tag}>
              <div className="flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium leading-5 text-coffee-400">
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-fit rounded overflow-clip	border-2 border-slate-500/40 transition group-hover:border-slate-500/80 sm:order-1 sm:col-span-3 sm:translate-y-1">
        {image}
      </div>
    </div>
  )
}

const projects: Project[] = [
  {
    title: "WebLLM Chat",
    description:
      "A chatbot web application that runs large language models natively in your browser, utilizing WebGPU for enhanced performance.",
    tags: ["Next.js", "React.js", "TypeScript", "JavaScript", "LLM"],
    image: (
      <Image
        src="/images/projects/web-llm-chat.png"
        alt="A chatbot webapp with AI language models directly running inside your browser."
        width={2332}
        height={1580}
      />
    ),
    link: "https://webllm.mlc.ai",
    gh: {
      owner: "mlc-ai",
      repo: "web-llm",
    },
  },
  {
    title: "Telegram Media Downloader",
    description:
      "A tool for downloading images, GIFs, and videos on Telegram webapp from private channels which disable downloading and restrict saving content.",
    tags: ["JavaScript"],
    image: (
      <video width="2538" height="1782" loop autoPlay playsInline muted>
        <source src="/videos/telegram-downloader.webm" type="video/webm" />
        <source src="/videos/telegram-downloader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    link: "https://github.com/Neet-Nestor/Telegram-Media-Downloader",
    gh: {
      owner: "Neet-Nestor",
      repo: "Telegram-Media-Downloader",
    },
  },
  {
    title: "Morphing World",
    description:
      "A platformer game combined with puzzle elements. You neet to collect world pieces and build up the map by yourself before you can escape!",
    tags: ["Haxe", "Game Development"],
    image: (
      <Image
        src="/images/projects/morphingworld.png"
        alt="A chatbot webapp with AI language models directly running inside your browser."
        width={2332}
        height={1580}
      />
    ),
    link: "https://gamejolt.com/games/Morphingworld/475838",
  },
]

const Projects = () => {
  return (
    <section className="px-4 py-8 sm:px-8">
      <MaxWidthContainer>
        <h2 className="w-fit mb-8 text-lg text-start relative">
          Projects
          <span className="bg-coffee-200 w-full h-1 absolute left-0 -bottom-[0.125rem]" />
        </h2>
        {projects.map((p) => (
          <ProjectCard project={p} key={p.title} />
        ))}
      </MaxWidthContainer>
    </section>
  )
}

export default Projects

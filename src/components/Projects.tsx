import React from 'react'
import Heading from './Heading'
import Card from './Card'
import '../app/styles/projects.css'

const data =[
    {
        id:0,
        title: "Netflix Clone",
        img: "/a3.png",
        tags: ["Html", "CSS", "Typescript"],
    },
    {
        id:1,
        title: "Static Resume",
        img: "/a1.png",
        tags: ["Html", "CSS", "Typescript"],
    },
    {
        id:2,
        title: "Todo List",
        img: "/a5.jpg",
        tags: ["Html", "CSS", "Typescript"],
    }
]

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
        <Heading title='My Projects'/>
        <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects

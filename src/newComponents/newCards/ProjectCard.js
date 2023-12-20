import React from 'react'
import './ProjectCard.css'

export const ProjectCard = () => {
    return (
            <div className="card">
                <div className="face face1">
                    <div className="content">
                            <h3>Design</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis
                            provident at.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
    )
}
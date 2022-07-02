import React, { useEffect, useState } from 'react';
import './project.css'
import { portofolioData } from '../../data'
import { useLocation, useParams } from 'react-router-dom';

const ProjectPage = () => {

    const { id } = useParams()
    const location = useLocation()

    const [projectData, setProjectData] = useState({})

    useEffect(() => {
        setProjectData(portofolioData.data[id])

    }, [])


    return (
        <>
            <div className='dp-header'>
                <span className='dp-title'>{projectData.name}</span>
            </div>

            <div className='container-fluid' style={{paddingTop:'20px'}}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner" style={{borderRadius:'20px'}}>
                                {
                                    projectData.photos?.map((data)=>{
                                        return(
                                            <div class="carousel-item active">
                                    <img class="d-block w-100" src={data.photo} alt="First slide" />
                                </div>
                                        )
                                    })
                                }
                                
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only" style={{backgroundColor:'red'}}>Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Deskripsi</h5>
                            <p>{projectData.description}</p>
                            <h5>Preview Project</h5>
                            {
                                 projectData.preview_project?.length != 0 ?
                                 <ul>
                                    {
                                         projectData.preview_project?.map((data)=>{
                                            return(
                                                <>
                                                <li><a href={data.link}>{data.title}</a> {data.type}</li>
                                                </>
                                            )
                                        }) 
                                    }
                                 </ul> : <p>Preview Projek tidak tersedia</p>
                            }
                           
                            
                            
                            <div></div>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectPage
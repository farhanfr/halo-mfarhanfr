import React, { useEffect, useState } from 'react';
import './project.css'
import { portofolioData } from '../../data'
import { useLocation, useParams } from 'react-router-dom';
import ReactImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

const ProjectPage = () => {

    const { id } = useParams()
    const location = useLocation()

    const [projectData, setProjectData] = useState({})
    const [photoData,setPhotoData] = useState([])

    useEffect(() => {
        setProjectData(portofolioData.data[id])
        setPhotoData(portofolioData.data[id].photos)
    }, [])


    return (
        <>
            <div className='dp-header'>
                <span className='dp-title'>{projectData.name}</span>
            </div>

            <div className='container-fluid' style={{ paddingTop: '20px' }}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <ReactImageGallery items={photoData} showPlayButton={false} showNav={true} showThumbnails={false}/>
                    </div>
                    <div className='col-lg-6'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5><b>Deskripsi</b></h5>
                                <p>{projectData.description}</p>
                                <h5><b>Demo Project</b></h5>
                                {
                                    projectData.preview_project?.length != 0 ?
                                        <ul>
                                            {
                                                projectData.preview_project?.map((data) => {
                                                    return (
                                                        <>
                                                            <li><a href={data.link}>{data.title}</a> {data.type}</li>
                                                        </>
                                                    )
                                                })
                                            }
                                        </ul> : <p>Preview Projek tidak tersedia</p>
                                }
                            {/* <h5>Preview Project</h5>
                                {
                                    projectData.preview_project?.length != 0 ?
                                        <ul>
                                            {
                                                projectData.preview_project?.map((data) => {
                                                    return (
                                                        <>
                                                            <li><a href={data.link}>{data.title}</a> {data.type}</li>
                                                        </>
                                                    )
                                                })
                                            }
                                        </ul> : <p>Preview Projek tidak tersedia</p>
                                } */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div style={{height:'20px'}}></div>                           
        </>
    )
}

export default ProjectPage
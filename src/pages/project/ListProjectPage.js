import React from 'react';
import { useHistory } from 'react-router-dom';
import { BasicCard } from '../../components';
import { portofolioData } from '../../data'
import './list_project.css'

const ListProject = () => {
    let history = useHistory()
    return(
        <>
        <div className='lp-header'>
                <span className='lp-title'>List Project</span>
            </div>

            <div className='container' style={{paddingTop:'30px'}}>
                            <div className='row'>
                                {
                                    portofolioData.data.map((data,index) => {
                                        return (
                                            <div className='col-lg-4' >
                                                <div onClick={()=>history.push({
                                                pathname: `/detailproject/${index}`,
                                                state:{
                                                    id: 1
                                                }
                                            })} style={{cursor:'pointer'}}>
                                                <BasicCard
                                                    img={data.cover}
                                                    title={data.name} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            </div>
        </>
    )
}

export default ListProject
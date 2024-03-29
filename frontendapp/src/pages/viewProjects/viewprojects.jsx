import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import View5 from '../../components/Views/view5'
import 'bootstrap/dist/css/bootstrap.min.css';
import './viewprojects.scss'

const ViewProjects = () => {
    return (
        <div className='main-container d-flex' id='page-one'>
            <Sidebar />
            <div className='vp'>
                <View5 />
            </div>
        </div>
    )
}

export default ViewProjects
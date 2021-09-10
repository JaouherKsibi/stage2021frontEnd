import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dashboard.css'
import DashboardContent from '../DashboardContent'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import React from 'react'
function Dashboard(){
        return(
                <div className="d-flex" id="wrapper">
                        <Sidebar/>
                        <DashboardContent   />
                </div>   
        )
}
export default Dashboard;
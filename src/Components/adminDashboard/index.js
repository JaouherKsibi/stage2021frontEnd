import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect , useState } from 'react'
import '../../css/Dashboard.css'
import DashboardContent from '../DashboardContent'
import Footer from '../Footer.js'
import Sidebar from '../Sidebar'
import GetList from '../test/GetListProducts'
function Dashboard(){
        return(
        <div className="d-flex" id="wrapper">
            <Sidebar/>
            <DashboardContent   />
        </div>
        )
}
export default Dashboard;
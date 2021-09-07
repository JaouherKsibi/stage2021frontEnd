import { faAlignLeft, faUser, faTrash, faPencilAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/DashboardStyle.css'
import ProductsTableHeader from '../ProductsTableHeader/index.js'
import { useState , useEffect } from 'react';
import ProductsTable from '../ProductsTable';
import AdminDashboardNavbar from '../navbar';
//import ShowProductDetailsModal from '../showProductDetails';
function DashboardContent(){
    return (
        <div id="page-content-wrapper">
            <AdminDashboardNavbar data="Dashboard" />
            <ProductsTable />
        </div>
    )
}
export default DashboardContent;
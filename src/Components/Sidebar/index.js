import '../../css/DashboardStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faGift, faItalic, faLayerGroup, faPowerOff, faShoppingCart, faTachometerAlt, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

function Sidebar(){
    let history = useHistory();
    return (
        <div className="bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <FontAwesomeIcon icon={faItalic} className="fass" />Inscypt</div>
            <div className="list-group list-group-flush my-3">
                <a href="/dashboard" className="list-group-item list-group-item-action bg-transparent second-text active">
                    <FontAwesomeIcon className="fass" icon={faTachometerAlt} />Dashboard</a>
                <a href="/addProduct" className="list-group-item list-group-item-action bg-transparent second-text active">
                    <FontAwesomeIcon className="fass" icon={faPlus} />Add NewProduct</a>
                <a href="/addCategory" className="list-group-item list-group-item-action bg-transparent second-text active">
                    <FontAwesomeIcon className="fass" icon={faPlus} />Add New Category</a>
                <a href="/categories" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faLayerGroup} />Categories</a>
                <a href="/productsByCategory" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faShoppingCart} />Products by Category</a>
                <a href="/ordersManagement" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faGift} />All Orders</a>
                <a href="/comments" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faCommentDots} />Comments</a>
                <a href="/clientsManagement" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faUsers} />Users Management</a>
                <button onClick={()=>{localStorage.removeItem('loggedAdmin');history.push('/adminLogin')}} className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                <FontAwesomeIcon className="fass" icon={faPowerOff} />Logout 
                </button>
            </div>
        </div>
    )
}
export default Sidebar;
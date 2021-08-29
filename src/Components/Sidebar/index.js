import '../../css/DashboardStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCoffee, faCommentDots, faGift, faItalic, faLayerGroup, faMapMarkedAlt, faPaperclip, faPowerOff, faProjectDiagram, faShoppingCart, faTachometerAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
function Sidebar(){
    return (
        <div className="bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <FontAwesomeIcon icon={faItalic} className="fass" />Inscypt</div>
            <div className="list-group list-group-flush my-3">
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text active">
                    <FontAwesomeIcon className="fass" icon={faTachometerAlt} />Dashboard</a>
                {/*<a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faProjectDiagram} />Projects</a>
                <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
    <FontAwesomeIcon className="fass" icon={faChartLine} />Analytics</a>*/}
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faLayerGroup} />Categories</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faShoppingCart} />Products by Category</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faGift} />All Products</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faCommentDots} />Comments</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <FontAwesomeIcon className="fass" icon={faUsers} />Users Management</a>
                <a href="#" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                    <FontAwesomeIcon className="fass" icon={faPowerOff} />Logout</a>
            </div>
        </div>
    )
}
export default Sidebar;
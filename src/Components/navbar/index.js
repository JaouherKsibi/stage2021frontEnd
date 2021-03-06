import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
function AdminDashboardNavbar(props){
    //const [seen,setSeen]=useState(false);
    let history = useHistory();
    const toggle=()=>{
        var el = document.getElementById("wrapper");
        var toggleButton = document.getElementById("menu-toggle");
    console.log(el);
    toggleButton.onclick = function () {
        el.classList.toggle("toggled");
    };}
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div className="d-flex align-items-center">
                    {/*<i class="fas fa-align-left primary-text fs-4 me-3" ></i>*/}
                    <button id="menu-toggle" onClick={toggle}><FontAwesomeIcon icon={faAlignLeft} className='fass1' /></button>
                    
                    <h2 className="fs-2 m-0">{props.data} </h2>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Dropdown>
                            <Dropdown.Toggle style={{backgroundColor:'transparent',border:'none',transition:"none"}} id="dropdown-basic">
                            <FontAwesomeIcon icon={faUser}/> {JSON.parse(localStorage.getItem('loggedAdmin')).email}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                                <Dropdown.Item href="/categories">Categories</Dropdown.Item>
                                <Dropdown.Item onClick={()=>{localStorage.removeItem('loggedAdmin');history.push('/adminLogin')}}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                </div>
            </nav>
    )
}
export default AdminDashboardNavbar;
import { faAlignLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/DashboardStyle.css'
import ProductsTableHeader from '../ProductsTableHeader/index.js'
import { useState , useEffect } from 'react';
function DashboardContent(){
    const [productsList, setProductsList] = useState([]);
    useEffect(()=>{
        async function fetchProductsList() {
        const requestUrl='http://localhost:3001/api/getAllProducts'
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        console.log(responseJSON);
        setProductsList(responseJSON)
        }
        fetchProductsList()
    },[]);
    const NumberOfElement=productsList.length;
    console.log(productsList.length);
    const toggle=()=>{
        var el = document.getElementById("wrapper");
        var toggleButton = document.getElementById("menu-toggle");
    console.log(el);
    toggleButton.onclick = function () {
        el.classList.toggle("toggled");
    };
    }
    return (
        <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div className="d-flex align-items-center">
                    {/*<i class="fas fa-align-left primary-text fs-4 me-3" ></i>*/}
                    <button id="menu-toggle" onClick={toggle}><FontAwesomeIcon icon={faAlignLeft} className='fass1' /></button>
                    
                    <h2 className="fs-2 m-0">Dashboard</h2>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faUser}/> {JSON.parse(localStorage.getItem('loggedAdmin')).email}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid px-4">
                <div className="row g-3 my-2">
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">{NumberOfElement}</h3>
                                <p className="fs-5">Products</p>
                            </div>
                            <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">4920</h3>
                                <p className="fs-5">Sales</p>
                            </div>
                            <i
                                className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">3899</h3>
                                <p className="fs-5">Delivery</p>
                            </div>
                            <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">%25</h3>
                                <p className="fs-5">Increase</p>
                            </div>
                            <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <h3 className="fs-4 mb-3">Recent Orders</h3>
                    <div className="col">
                        <table className="table bg-white rounded shadow-sm  table-hover">
                            <ProductsTableHeader/>
                            <tbody>
                                {
                                    productsList.map((product,index)=>{
                                        return(
                                            <tr key={product._id}>
                                                <th scope="row">{index+1}</th>
                                                <td>{product.nom} </td>
                                                <td>{product.category.nom} </td>
                                                <td>{product.price} </td>
                                            </tr>
                                       )
                                    })
                                }
                            </tbody>
                        </table>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
export default DashboardContent;
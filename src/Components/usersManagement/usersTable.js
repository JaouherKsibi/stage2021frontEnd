import { useEffect, useState } from "react";
import InfosBar from "../InfoBar";

import User from "./user";

function UsersTable(){
    const [usersList, setUsersList] = useState([]);
    const abortController=new AbortController();
    const signal=abortController.signal;
    useEffect(()=>{
        async function fetchUsersList() {
        const requestUrl='http://localhost:3001/api/getAllClients'
        const response=await fetch(requestUrl,{signal:signal});
        const responseJSON=await response.json();
        setUsersList(responseJSON)
        }
        fetchUsersList().catch((err)=>{})
        return function cleanUp() {
            abortController.abort();
        }
    },[usersList]);
    return(
        <div className="container-fluid px-4">
        <InfosBar />
        <div className="row my-5">
            <h3 className="fs-4 mb-3">Categories</h3>
            <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                    <thead>
                        <tr>
                            <th scope="col" width="50">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col"  width="50">Show infos</th>
                            <th scope="col"  width="50">Show Orders</th>
                            <th scope="col"  width="50">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usersList.map((user,index)=>{
                                return(
                                    <User user={user} index={index} key={user._id}/>   
                               )
                            })
                        }
                    </tbody>
                </table>
            </div>
            
            
        </div>

    </div>
    )
}
export default UsersTable;
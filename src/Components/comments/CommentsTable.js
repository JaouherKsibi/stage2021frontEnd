import { useEffect, useState } from "react";
import InfosBar from "../InfoBar";
import Comment from "./comment";

function CommentsTable(){
    const [CommentsList, setCommentsList] = useState([]);
    useEffect(()=>{
        async function fetchCommentsList() {
        const requestUrl='http://localhost:3001/api/getAllComments'
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        setCommentsList(responseJSON)
        }
        fetchCommentsList()
    },[CommentsList]);
    return(
        <div className="container-fluid px-4">
        <InfosBar />

        <div className="row my-5">
            <h3 className="fs-4 mb-3">Comments</h3>
            <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                    <thead>
                        <tr>
                            <th scope="col" width="50">#</th>
                            <th scope="col">nom </th>
                            <th scope="col">email </th>
                            <th scope="col">message </th>
                            <th scope="col"  width="50">Show</th>
                            <th scope="col"  width="50">Update</th>
                            <th scope="col"  width="50">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CommentsList.map((comment,index)=>{
                                return(
                                   
                                    <Comment comment={comment} index={index} key={comment._id}/>   
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
export default CommentsTable;
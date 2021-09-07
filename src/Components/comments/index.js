import Sidebar from "../Sidebar";
import CommentsContent from "./CommentsContent";

function Comments(){
    return(
        <div className="d-flex" id="wrapper">
            <Sidebar/>
            <CommentsContent   />
        </div>
    )
}
export default Comments;
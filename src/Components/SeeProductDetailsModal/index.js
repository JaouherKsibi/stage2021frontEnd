import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ShowDetailsContent from "./ShowDetailsContent";

function SeeProductDetailsModal(props) {
    
    const [showed,setShowed]= useState(props.see);
    
    return (
        <Modal show={showed}>
            <Modal.Header>show product infos </Modal.Header>
            <Modal.Body>
                <h1>ok</h1>
            </Modal.Body>
            <Modal.Footer>
                <Button >close</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default SeeProductDetailsModal;
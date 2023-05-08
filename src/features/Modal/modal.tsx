import {Button, Form, InputGroup} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from "react-redux";
import {setShow} from "./modalSlice";
import {editPost} from "../Card/cardSlice";
import {useEffect, useState} from "react";

/**
 * Component Modal edit Posts
 *
 * **/

const Modals = () => {
    /** state **/
    const show = useSelector((state: any) => state.modal.show)
    const id = useSelector((state: any) => state.modal.id)
    const totalPosts = useSelector((state: any) => state.card.paginatedPosts)
    const post = totalPosts.find((item: any) => item.id === id)
    /** dispatch **/
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    useEffect(()=> {
        setTitle(post && post.title)
        setBody(post && post.body)
    },[id !== 0])

    const handleClose = () => {
        dispatch(setShow({show: !show, id: 0}))

    }

    const submitHandler = () => {
        dispatch(editPost({
            id,
            title,
            body
        }))
        dispatch(setShow({show: !show, id: 0}))

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group>
                <Form.Label>title</Form.Label>
                <Form.Control value={title || " "} onChange={(e: any) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                <Form.Label>body</Form.Label>

                <Form.Control value={body || ""} onChange={(e: any) => setBody(e.target.value)}/>
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    بستن
                </Button>
                <Button variant="primary" onClick={submitHandler}>
                    ثبت
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default Modals
import {useEffect, useState} from "react";
import Pagination from "../Pagination/pagination";
import {useDispatch, useSelector} from "react-redux";
import {fetchPackage} from "./cardSlice";
import Posts from "../Posts/posts";

/**
 * component Card show
 *
 *
 * **/
const Card = () => {
    /** state **/

    const [pageNumber, setCurrentPage] = useState(1);
    const [pageSize, setPostsPerPage] = useState(15);
    const totalPosts = useSelector((state:any) => state.card.posts.data )

    /** dispatch **/

    const dispatch = useDispatch()

    useEffect(()=>{
    fetchPackage(dispatch)

    },[])

    const previousClickHandler = () => {
        setCurrentPage(pageNumber - 1);
    };
    const nextClickHandler = () => {
        setCurrentPage(pageNumber + 1);
    };
    const pageChangeHandler = (page:any) => {
        setCurrentPage(page);
    };

    return(<div className="row mt-3 mx-2">
       <Posts pageNumber={pageNumber} pageSize={pageSize} />
        <div className="col-12 text-center ">

                <Pagination
                    currentPage={pageNumber}
                    postsPerPage={pageSize}
                    noOfPosts={totalPosts}
                    onPreviousClick={previousClickHandler}
                    onNextClick={nextClickHandler}
                    onPageChange={pageChangeHandler}
                />

        </div>
    </div>)
}
export default Card
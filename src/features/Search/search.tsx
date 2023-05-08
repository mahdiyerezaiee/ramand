import {useDispatch, useSelector} from "react-redux";
import {setSearchItem} from "../Card/cardSlice";
import {Fragment, useState} from "react";

const Search = () => {
    const paginatedPosts = useSelector((state:any) => state.card.paginatedPosts)
    const dispatch = useDispatch()
    const searchItem = useSelector((state:any) => state.card.searchItem)
    const filterKeys = Object.keys(paginatedPosts && paginatedPosts[0])
    let filterQuery = paginatedPosts.filter((value:any) => filterKeys.some((key:any) => (value[key] + "").includes(searchItem)));
    const searchHandler = (e:any) => {
        dispatch(setSearchItem(e.target.value))
    }

  return(
      <Fragment>
          <div className="result">  موارد :  {filterQuery && filterQuery.length} </div>

          <div className="search-box">
          <button className="btn-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                   className="bi bi-search" viewBox="0 0 20 20">
                  <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
          </button>
          <input type="text" className="input-search"  placeholder=" ...جستجو  "  onChange={searchHandler}/>
      </div>
      </Fragment>
)
}
export default Search
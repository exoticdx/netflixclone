import React from "react";

const MovieList = (props) => {
    return(
            
        <div className="mt-2 align-item-center justify-contant-center hii2">
            <input 
                className="form-control"
                type="text" 
                placeholder="Type to Search" 
                value={props.value}
                onChange={(event)=>{props.setSearch(event.target.value)}}
            />
        </div>

    )
}

export default MovieList;
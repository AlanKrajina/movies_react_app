import React from "react";
import { useState } from "react";

const SearchedMovieCard = () => {

	const [ myBookState, setBookState ] = useState({  
    bookmark: ''
    })

    const handleBookClicks = () => {
        setBookState({                
            bookmark: 'Bookmark Added!'
            })
    }

	  return (                
      <div>
        <button onClick={handleBookClicks}>Click to Bookmark using useState Hook</button>
        <p>{myBookState.bookmark}</p>
      </div>
	)
}

export default SearchedMovieCard;  
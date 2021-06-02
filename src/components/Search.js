import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {

    const [{}, dispatch] = useStateValue();

    // use state to write a variable
    const [input, setInput] = useState("");
    const history = useHistory()

    const search = e => {
        e.preventDefault(); // not want it to refresh

        console.log("You hit the search button >>", input); // show enter gives the search

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        // do something with input... come back and fix
        // history showing how to push to the browser history and so manipulate the url
        history.push('/search');
    };

    return(
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                {/* maps the input in the field */}
                <input value={input} onChange={e => {setInput(e.target.value)}}/>
                <MicIcon/>
            </div>
            {!hideButtons ? (

                <div className="search__buttons">
                {/* React context api */}
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    {/* submit to info */}
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                    {/* Variant Outlined looks pretty clean */}
                </div>

            ): (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                    {/* submit to info */}
                    <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                    {/* Variant Outlined looks pretty clean */}
                </div>
            )}
            
        </form>
    )
}

export default Search
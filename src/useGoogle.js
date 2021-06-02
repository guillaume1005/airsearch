import { useState, useEffect } from "react"
import API_KEY from './key';


const CONTEXT_KEY = "CONTEXT_KEY";

// custom hook

// like a functional comp

// term comes from the datalayer 

const useGoogleSearch = (term) => {

    const [data, setData] = useState(null);
    
    // fires the useeffect when we use
    useEffect(() => {
        const fetchData = async () => {
            fetch(
                // `https://www.gogleapis.com/customsearch/v1?ket=${API_KEY}&cs=${CONTEXT_KEY}&q=${term}`
                `http://localhost:5000/search?name=${term}`
            )
            .then(response => response.json())
            .then(result => {

                // update the result in the async function so that the return of the component will work
                setData(result)
            })
        }

        // use after axios
        fetchData();
    }, [term])

    return { data }; // where do we put the results

    // when term changes

    // clean hook
}

export default useGoogleSearch
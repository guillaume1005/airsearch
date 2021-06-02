import { useState, useEffect } from 'react';


// custom hook

// like a functional comp

// term comes from the datalayer

const useLogin = (term) => {
	const [data, setData] = useState(null);

	// fires the useeffect when we use
	useEffect(() => {
        console.log("in it")
		const fetchData = async () => {
			fetch(
				// `https://www.gogleapis.com/customsearch/v1?ket=${API_KEY}&cs=${CONTEXT_KEY}&q=${term}`
				// `http://localhost:8080/greeting?name=${term}`

                // address to log in, database in sql
                'https://airsearch1000.herokuapp.com/liste' // server
			)
				.then((response) => response.json())
				.then((result) => {
                    console.log(result);
					// update the result in the async function so that the return of the component will work
					setData(result); // get the info of the user and allows him or not to connect, the result contains if it is logged or not
                    // console.log(data);

                    // result in forme: {logged: true} or false
				});
		};

		// use after axios
		fetchData();
	}, [term]);

	return { data }; // where do we put the results

	// when term changes

	// clean hook
};

export default useLogin;

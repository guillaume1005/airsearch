import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import './Login.css';
import logo from '../logo.png';
import { Button } from "@material-ui/core";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { useHistory } from 'react-router-dom';

function Login() {

    const history = useHistory();
    const [{response}, dispatch] = useStateValue();

    
    const search = (e) => {
		e.preventDefault(); // not want it to refresh

		console.log('You hit the search button >>', input); // show enter gives the search

		dispatch({
			type: actionTypes.SET_LOGIN_TERM,
			term: input,
		});

        history.push('/');

		// do something with input... come back and fix
		// history showing how to push to the browser history and so manipulate the url
		// history.push('/search');
	};
    const [input, setInput] = useState('');
	return (
		<div>
			<div className="home__header">
				<div className="home__headerLeft">
					{/* Use React Router */}
					<Link to="/about">About</Link>
					<Link to="/store">Who are we ?</Link>
				</div>
				<div className="home__headerRight">
					{/* convert to a tags */}
					<Link to="/airmail">Air Mail</Link>
					<Link to="/images">Images</Link>
					<AppsIcon />
					{/* link not a tag because a tag refresh, and link does it instantly */}
					{/* Use Material UI */}
					{/* Icon, gridIcon */}
					{/* Avatar blank */}
					<Link to="/login">
						<Avatar />
					</Link>
				</div>
			</div>

			<div className="login__body">
				<Link to="/">
					<img
						className="login__logo__"
						// src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
						src={logo}
						alt=""
					/>
				</Link>
				{response.map((el) => (
					<div style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:20, color: "gray"}}>
						<div style={{marginRight:20}}>{el.nom}</div>
                        <div>{el.prenom}</div>
					</div>
				))}

				<form className="login__body__inside">
					<div>Login</div>

					<div className="login__body__inside__inputs">
						<input
							placeholder="Rentrez votre nom"
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
							}}
						/>

						<Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">
							Google Search
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;

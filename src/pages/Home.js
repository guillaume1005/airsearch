import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, Typography } from '@material-ui/core';
import Search from '../components/Search'; // not an object
import logo from '../logo.png';
import { useStateValue } from '../StateProvider';
import useLogin from '../useLogin';

function Home() {
	const [{ logged }, dispatch] = useStateValue();

	const { liste } = useLogin("term"); // not a POST yet
	console.log(liste);
	return (
		<div>
			{logged ? (
				<div className="home">
					{/* If it is logged in or not */}
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

					<div className="home__body">
						<img src={logo} alt="" />
						<div className="home__inputContainer">
							{/* Search */}
							<Search hideButtons />
						</div>
					</div>
				</div>
			) : (
				<div className="home">
					{/* If it is logged in or not */}
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
					<div className="home__body">
						<img src={logo} alt="" />
						<div className="home__inputContainer">
							{/* Search */}
							<center style={{color: 'gray'}}>
								<Typography>Vous n'êtes pas encore connecté !</Typography>
							</center>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;

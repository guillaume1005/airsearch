import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogle';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from '../logo.png';

function SearchPage() {
	const [{ term }, dispatch] = useStateValue();
    // by default assign

	// LIVE API CALL
	const { data } = useGoogleSearch(term);

    // const data = {
	// 	id: 1,
	// 	list: [
	// 		'https://fr.wikipedia.org/wiki/Jeff_Bezos',
	// 		'https://fr.wikipedia.org/wiki/Jeff_Bezos',
	// 		'https://www.vanityfair.fr/dossiers/dossier/jeff-bezos',
	// 		'https://www.vanityfair.fr/dossiers/dossier/jeff-bezos',
	// 		'https://www.presse-citron.net/homme-le-plus-riche-ne...',
	// 		'https://www.presse-citron.net/homme-le-plus-riche-ne...',
	// 		'https://www.bbc.com/afrique/monde-55919509',
	// 		'https://www.bbc.com/afrique/monde-55919509',
	// 		'https://www.journaldunet.com/1208742-jeff-bezos',
	// 		'https://www.journaldunet.com/1208742-jeff-bezos',
	// 		'https://www.forbes.fr/luxe/jeff-bezos-des-secrets-rev...',
	// 		'https://www.forbes.fr/luxe/jeff-bezos-des-secrets-rev...',
	// 		'https://www.huffingtonpost.fr/news/jeff-bezos',
	// 		'https://www.huffingtonpost.fr/news/jeff-bezos',
	// 		'https://www.lepoint.fr/PERSONNALITÉ',
	// 		'https://www.lepoint.fr/PERSONNALITÉ',
	// 		'https://plus.lefigaro.fr/tag/jeff-bezos',
	// 		'https://plus.lefigaro.fr/tag/jeff-bezos',
	// 	],
	// };



	// https://developers.google.com/custom-search/v1/using_rest

	// https://cse.google.com/cse/create/new

	console.log(data);
	return (
		<div className="searchPage">
			<div className="searchPage__header">
				<Link to="/">
					<img
						className="searchPage__logo"
						// src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
						src={logo}
						alt=""
					/>
				</Link>

				<div className="searchPage__headerBody">
					<Search hideButtons />
					<div className="searchPage__options">
						<div className="searchPage__optionsLeft">
							<div className="searchPage__option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>
							<div className="searchPage__option">
								<DescriptionIcon />
								<Link to="/news">News</Link>
							</div>
							<div className="searchPage__option">
								<ImageIcon />
								<Link to="/images">Images</Link>
							</div>
							<div className="searchPage__option">
								<LocalOfferIcon />
								<Link to="/shopping">shopping</Link>
							</div>
							<div className="searchPage__option">
								<RoomIcon />
								<Link to="/maps">maps</Link>
							</div>
							<div className="searchPage__option">
								<MoreVertIcon />
								<Link to="/more">more</Link>
							</div>
						</div>
						<div className="searchPage__optionsRight">
							<div className="searchPage__option">
								<Link to="/settings">Settings</Link>
							</div>
							<div className="searchPage__option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{true && (
				<div className="searchPage__results">
					<p className="searchPage__resultCount">
						{/* here we can put the option ? to see if data exists */}
						About
					</p>

					{data?.list.map((item) => (
						<div className="searchPage__result">
							<a target="_blank" className="searchPage__resultTitle" href={item}>
								<h2>{item}</h2>
							</a>
							<p className="searchPage__resultSnippet">Description..</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default SearchPage;


import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Article } from './Article';
import { Form } from './Form';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	const [article, setArticle] = useState([]);
	const [pages, setPages] = useState([]);
	const [details, setDetails] = useState(false);
	const [addArticle, setAddArticle] = useState(false);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<PagesList 
			pages={pages} 
			setArticle={setArticle} 
			article={article} 
			details={details}
			setDetails={setDetails}
			/>
			<button onClick={() => setAddArticle(!addArticle)}>Create Article</button>
			{addArticle ? <Form addArticle={addArticle} setAddArticle={setAddArticle} /> : null}
			{details 
			? <Article setAddArticle={setAddArticle} addArticle={addArticle} setPages={setPages} pages={pages} setArticle={setArticle} article={article} setDetails={setDetails} details={details} /> : <br/>}

		</main>
	)
}
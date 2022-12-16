import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, setArticle, article, details, setDetails}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} setArticle={setArticle} article={article} details={details} setDetails={setDetails} />
			})
		}
	</>
} 

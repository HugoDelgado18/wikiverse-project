import React, {useEffect} from 'react';
import api from '../api';

export const Page = (props) => {

  async function getArticles() {
    const res = await fetch(`${api}/wiki/${props.page.slug}`);
    const data = await res.json();

    console.log(data);
    props.setArticle(data);
    props.setDetails(!props.details);
    console.log(props.articles);
    // props.setGetDetails(false);
} 

  return <>
    <h3 onClick={getArticles}>{props.page.title}</h3>
  </>
} 
	
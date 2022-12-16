import React from "react";
import api from '../api';

export function Article(props) {

    function backToList(){
        props.setArticle([]);
        props.setDetails(!props.details);
    }

    async function deletePage() {
        const response = await fetch(`${api}/wiki/${props.article.slug}`, {
        method: "DELETE"
        });
        const data = await response.json();
        props.setPages(props.pages.filter(page => page.slug !== props.article.slug));
        window.location.reload(false);

    }



    return(
        <div className="article">
        <h2>{props.article.title}</h2>    
        <p><b>Author:</b> {props.article.author.name}</p>
        <p><b>Published:</b>{props.article.createdAt}</p>
        <p>{props.article.content}</p>
        <b>Tags:</b>
        {props.article.tags.map(tag => <p key={tag.id}> {tag.name}</p>)}
        <button onClick={deletePage}>DELETE</button><button onClick={backToList}>get back to list</button>
        </div>
    );
}
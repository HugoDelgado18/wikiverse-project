import React, { useState } from "react";
import api from '../api';


export const Form = ({addArticle, setAddArticle}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tags, setTags] = useState([]);
   
    const handleForm = async (event) => {
        event.preventDefault();
        const article = {
            title: title,
            content:content,
            name: name,
            email: email,
            tags: tags,
        }
  
         const res =  await fetch(`${api}/wiki`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                article
            )
        });
        const data = await res.json();
        setTitle('');
        setContent('');
        setName('');
        setEmail('');
        setTags('');
        setAddArticle(!addArticle);
        window.location.reload(false);
  
    }
   
    return(
        <form className='addPage' onSubmit={handleForm}>
             <h3>Add a Page</h3>
                <input type="text" name="title" value={title} onChange = {(e)=> setTitle(e.target.value)} placeholder='Title'></input><br></br>
                <input type="text" name= "content" value={content} onChange = {(e)=> setContent(e.target.value)} placeholder='Article Content'></input><br></br>
                <input type="text" name= "name" value={name} onChange = {(e)=> setName(e.target.value)} placeholder='Author Name'></input><br></br>
                <input type="email" name = "email" value={email} onChange = {(e)=> setEmail(e.target.value)} placeholder='Author Email'></input><br></br>
                <input type="text" name="tags" value={tags} onChange = {(e)=> setTags(e.target.value)} placeholder='Tags'></input><br></br>
                <button>Create Page</button>
        </form>
    )
}
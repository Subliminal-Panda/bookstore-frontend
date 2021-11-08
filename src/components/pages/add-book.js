import React, { useState } from 'react';
import { navigate } from "hookrouter";

export default function AddBook(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [review, setReview] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("this is a test from AddBook", title, author, review, genre)

        fetch('http://127.0.0.1:5000/book/add', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify({
                title,
                author,
                review,
                genre,
            })
        })
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(error => console.log("An error has occurred in your post request", error))

    }

    return (
        <form onSubmit={handleSubmit} className="add-book-form">
            <div className="input-container">
                <input type="text" placeholder="Title" name="title"  onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Author" name="author" onChange={(e) => setAuthor(e.target.value)}/>
                <input type="text" placeholder="Review" name="review" onChange={(e) => setReview(e.target.value)}/>
                <input type="text" placeholder="Genre" name="genre" onChange={(e) => setGenre(e.target.value)}/>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

import React, { useState, useEffect } from 'react';
import { navigate } from "hookrouter";

export default function AddBook(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [review, setReview] = useState('');
    const [requestType, setRequestType] = useState(props.request);
    const [request, setRequest] = useState('');
    const [bookToEdit, setBookToEdit] = useState(props.book);
    const [endPoint, setEndPoint] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(endPoint, {
            method: `${request}`,
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify({
                title,
                author,
                genre,
                review,
            })
        })
        .then(res => {
            console.log(res);
            if(props.edit === true) {
                props.handleEditSubmit();
            } else {
            navigate('/');
            }
        })
        .catch(error => console.log("An error has occurred in your post request", error))

    }

    useEffect(() => {
        if(requestType === 'add') {
            setEndPoint(`http://127.0.0.1:5000/book/add`);
            setRequest('POST');
        } else if(requestType === 'update') {
            setEndPoint(`http://127.0.0.1:5000/book/update/${bookToEdit.id}`);
            setRequest('PUT');

            if(bookToEdit) {
                setTitle(bookToEdit.title);
                setAuthor(bookToEdit.author);
                setGenre(bookToEdit.genre);
                setReview(bookToEdit.review);
            }
        }
    },[]);

    return (
        <form onSubmit={handleSubmit} className="add-book-form">
            <div className="input-container">
                <div className="add-edit-header">{requestType === 'update' ? <h1>Edit-Book</h1> : <h1>Add-Book</h1>}</div>
                <input type="text" placeholder="Title" name="title"  onChange={(e) => setTitle(e.target.value)} defaultValue={bookToEdit ? bookToEdit.title : ''} />
                <input type="text" placeholder="Author" name="author" onChange={(e) => setAuthor(e.target.value)} defaultValue={bookToEdit ? bookToEdit.author : ''} />
                <input type="text" placeholder="Genre" name="genre" onChange={(e) => setGenre(e.target.value)} defaultValue={bookToEdit ? bookToEdit.genre : ''} />
                <input type="text" placeholder="Review" name="review" onChange={(e) => setReview(e.target.value)} defaultValue={bookToEdit ? bookToEdit.review : ''} />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

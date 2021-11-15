import React from "react";

export default function Book(props) {
    const {title, author, genre, review, id} = props.book;

    return (
        <div className="book-container">
            <div className="title">{title}</div>
            <div className="book-info-wrap">
                <div className="author">Authored by: {author}</div>
                { genre ? (<div className="genre">Genre: {genre}</div>) : null }
            </div>
            { review ? (<div className="review">{review}</div>) : null }

            <button onClick={() => props.handleDeleteClick(id)}>Delete</button>
            <button onClick={() => props.handleEditClick(props.book)}>Edit</button>
            <div className="border-div" />
        </div>
    )
}

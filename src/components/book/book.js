import React from "react";

export default function Book(props) {
    const {title, author, review, genre} = props.book;

    return (
        <div className="book-container">
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className="review">{review}</div>
            <div className="genre">{genre}</div>
        </div>
    )
}

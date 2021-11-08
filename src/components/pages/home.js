import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../book/book';
import EditBook from '../book/edit-book';
import { navigate } from "hookrouter";

export default function Home() {
    const [allBooks, setAllBooks] = useState([]);
    const [bookToEdit, setBookToEdit] = useState({});

    const getAllBooks = () => {
        axios.get('http://127.0.0.1:5000/book/get')
        .then(res => {
            setAllBooks(res.data)
        })
        .catch(error => {
            console.log('An error has occured while fetching your books', error)
        });
    };

    const handleEditClick = (book) => {
        setBookToEdit(book);
        navigate(`edit-book/${book.id}:${'Tristan'}`);
    };

    const handleDeleteClick = (bookToDelete) => {
        axios.delete(`http://127.0.0.1:5000/book/delete/${bookToDelete}`
        ).then(res => {
            setAllBooks(allBooks.filter(book => {
                return book.id !== bookToDelete;
            }))
        }).catch(error => {
            console.log("An error occurred while deleting your book!", error)
        })
    }

    useEffect(() => {
        getAllBooks();
    },[]);

    return (
        <div className="home-page-container">
        <h1 className="home-title">All Books</h1>
        {allBooks.map(book => {
            return (
                    <Book
                    key={book.id}
                    book={book}
                    handleDeleteClick={handleDeleteClick}
                    handleEditClick={handleEditClick}/>
            )
        })}</div>
    );
}

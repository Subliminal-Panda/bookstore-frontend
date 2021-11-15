import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Book from '../book/book';
import AddBook from './add-book';

export default function Home() {
    const [allBooks, setAllBooks] = useState([]);
    const [bookToEdit, setBookToEdit] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)

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
        setEditMode(true);
    };

    const handleEditSubmit = () => {
        setEditMode(false);
        getAllBooks();
    }

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

    const renderBooks = () => {
        return allBooks.map(book => {
            return <Book key={book.id} book={book} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick}/>
        })
    }

    useEffect(() => {
        getAllBooks();
        if(Cookies.get('username')) {
            setLoggedIn(true);
        }
    },[]);

    return (
        <div className="home-page-container">
            <h1 className="home-title">All Books</h1>
            {loggedIn ? <h1>User: {Cookies.get('username')}</h1> : ''}
            {editMode ? <AddBook book={bookToEdit} edit={editMode} request={'update'} handleEditSubmit={handleEditSubmit}/> : renderBooks()}
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../book/book';

export default function Home() {
    const [allBooks, setAllBooks] = useState([])

    const getAllBooks = () => {
        axios.get('http://127.0.0.1:5000/book/get')
        .then(res => {
            setAllBooks(res.data)
        })
        .catch(error => {
            console.log('An error has occured while fetching your books', error)
        });
    }

    useEffect(() => {
        getAllBooks();
    },[]);

    return (
        <div>
        <h1>Home/All books</h1>
        {allBooks.map(book => {
            return (
                <Book book={book}/>
            )
        })}</div>
    );
}

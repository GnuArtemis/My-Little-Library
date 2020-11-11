import React, { useState } from 'react'
import axios from "axios";
import BookMedia from './BookMedia';

export default function Search() {
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({
        title: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${formObject.title}`).then(res=>{
            console.log(res.data.items)
            setBooks(res.data.items)
        })
    }

    function saveButtonClick(data){
        axios.post("/api/books",data)
        .then(response => {
            console.log(response)
        },err => console.log(err))
    }

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <div className="form-row align-items-center">
                    <div className="input-group mb-2">
                        <input
                            className="form-control"
                            name="title"
                            placeholder="Search for a book"
                            value={formObject.title}
                            onChange={handleInputChange} />
                        <div className="input-group-append">
                            <button className="input-group-text"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </form>

            {books.map(element => <BookMedia key={element.id} data={element.volumeInfo} saveButtonClick={saveButtonClick}/>)}
            
        </div>
    )
}

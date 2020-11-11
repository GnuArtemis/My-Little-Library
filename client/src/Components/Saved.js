import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookMedia from './BookMedia'

export default function Saved() {
    const [books, setBooks] = useState([])
    const [reset,setReset]=useState(true)
    function deleteButtonClick (id) {
        console.log(id)
        Axios.delete("/api/mybooks/"+id)
        .then((result => console.log(result)))
    }

    useEffect(() => {
        Axios.get("/api/mybooks")
        .then((result) => {
            setBooks(result.data);
            setReset(!reset)
        })
    },[reset])

    return (
        <div>
            {books.map(element => <BookMedia key={element._id} data={element} deleteButtonClick={deleteButtonClick}/>)}
        </div>
    )
}

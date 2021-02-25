import React from 'react'

export default class Library extends React.Component {
    state = {
        'books': [
            {
                'id': 101,
                'title': 'Dune',
                'author': 'Frank Herbert',
                'genre': 'science-fiction',
                'tags': ['futuristic', 'classic']
            },
            {
                'id': 102,
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'author': 'J.R.R Tolkien',
                'genre': 'fantasy',
                'tags': ['doorstopper', 'trilogy']
            }
        ],
        id: 0,
        title: "",
        author: "",
        genre: "",
        tags: [],
        // Setting up my flag variable
        editing: false
    }
 // Alternate way to do list rendering data 
displayBooks = () => {
    let bookList = [];
    for (let b of this.state.books) {
        bookList.push(<div>
            <ul>
                <li>Title: {b.title}</li>
                <li>Author: {b.author}</li>
                <li>Genre: {b.genre}</li>
                <li>Tags: {b.tags.join(", ")}</li>
            </ul>
            <button value={b.id} onClick={this.displayEditBook}>Edit</button>
            <button value={b.id} onClick={this.deleteBook}>Delete</button>
        </div>)
    }
    return bookList;
}

addBook = () => {
    let newBook = {
        id: Math.floor(Math.random() * 1000) + 1,
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        tags: this.state.tags

        // destructuring & syntactic sugar
        // const { title, author, genre , tags } = this.state;
        // let newBook = {
        //     id: Math.floor(Math.random() * 1000) + 1,
        //     title, author, genre, tags
        // }
    }
    // Clone the books array and push the newbook and add into state
    this.setState({
        books: [...this.state.books, newBook],
        id: 0,
        title: "",
        author: "",
        genre: "",
        tags: [],

    })
}

updateBook = () => {
    let updatedBook = {
        title: this.state.title,
        author: this.state.author,
        genre: this.state.genre,
        tags: this.state.tags,
        id: this.state.id
    }
    let index = this.state.books.findIndex((eachBooks) => eachBooks.id === this.state.id)

    let clone = [...this.state.books.slice(0, index),
        updatedBook, ...this.state.books.slice(index + 1)]
    //Reset the component and field  
    this.setState({
        books: clone,
        editing: false,
        id: 0,
        title: "",
        author: "",
        genre: "",
        tags: [],
    })
}

displayEditBook = (event) => {
    for (let i = 0; i < this.state.books.length; i++) {
        if (event.target.value == this.state.books[i].id) {
            this.setState({
                title: this.state.books[i].title,
                author: this.state.books[i].author,
                genre: this.state.books[i].genre,
                tags: this.state.books[i].tags,
                id: this.state.books[i].id,
                editing: true
            })
        }
    }
}

cancelEditBook = () => {
    this.setState({
        editing: false,
        id: 0,
        title: "",
        author: "",
        genre: "",
        tags: [],
    })
}

updateFormField = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

updateTags = (event) => {
    // if the tag is not selected, add it in
    if (this.state.tags.includes(event.target.value) === false) {
        this.setState({
            [event.target.name]: [...this.state.tags, event.target.value]
        })

        //Alternate
        // let clone = this.state.tags.slice();
        // clone.push(event.target.value)
        // this.setState({
        //     "tags": clone
        // })

    } else {
        this.setState({
            [event.target.name]: [...this.state.tags].filter(selected => selected !== event.target.value)
        })

        //Alternate
        // let clone = this.state.tags.slice();
        // let index = this.state.tags.indexOf(e.target.value);
        // clone.splice(index,1)
        // this is not a good idea because this does not change the array in an immutable manner
        // why? this can lead to potential side effects (will talk about it when project 3)
        // this.setState({
        //     tags: clone
        // })
    }
}

// Added in Delete for bonus 
deleteBook = (event) => {
    let index = this.state.books.findIndex(i => i.id == event.target.value)
    this.setState({
        books: [...this.state.books.slice(0, index), ...this.state.books.slice(index + 1)]
    })
}

render() {
    return <React.Fragment>
        <div className="container">
            <div className="col">

                <h3 style={{
                    display: this.state.editing === true ? "none" : "block"
                }}>Add Book</h3>
                <h3 style={{
                    display: this.state.editing === true ? "block" : "none"
                }}>Updating Book</h3>
                <div>
                    <label>Title :</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Author :</label>
                    <input type="text" name="author" value={this.state.author} onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Genre</label>
                    <input type="radio" name="genre" value="fantasy" onChange={this.updateFormField} checked={this.state.genre === "fantasy"} /><label>Fantasy</label>
                    <input type="radio" name="genre" value="science-fiction" onChange={this.updateFormField} checked={this.state.genre === "science-fiction"} /><label>Sci-Fi</label>
                    <input type="radio" name="genre" value="romance" onChange={this.updateFormField} checked={this.state.genre === "romance"} /><label>Romance</label>
                </div>
                <div>
                    <label>Tags</label>
                    <input type="checkbox" name="tags" value="classic" onChange={this.updateTags} checked={this.state.tags.includes("classic")} /><label>Classic</label>
                    <input type="checkbox" name="tags" value="doorstopper" onChange={this.updateTags} checked={this.state.tags.includes("doorstopper")} /><label>Doorstopper</label>
                    <input type="checkbox" name="tags" value="futuristic" onChange={this.updateTags} checked={this.state.tags.includes("futuristic")} /><label>Futuristic</label>
                    <input type="checkbox" name="tags" value="trilogy" onChange={this.updateTags} checked={this.state.tags.includes("trilogy")} /><label>Trilogy</label>
                </div>
                <button style={{
                    display: this.state.editing === true ? "none" : "block"
                }}
                    onClick={this.addBook} >Add Book</button>
                <button style={{
                    display: this.state.editing === true ? "block" : "none"
                }} onClick={this.updateBook}>Update book</button>
                <button style={{
                    display: this.state.editing === true ? "block" : "none"
                }} onClick={this.cancelEditBook}>Cancel Update</button>
            </div>
            {this.state.books.map(eachBook => (
                <React.Fragment>
                    <div key={eachBook.id}>
                        <p>Title: {eachBook.title}</p>
                        <p>Author: {eachBook.author}</p>
                        <p>Genre: {eachBook.genre}</p>
                        <p>Tags: {eachBook.tags.join(", ")}</p>
                        <button value={eachBook.id} onClick={this.displayEditBook}>Edit</button>
                        <button value={eachBook.id} onClick={this.deleteBook}>Delete</button>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </React.Fragment>
}
}
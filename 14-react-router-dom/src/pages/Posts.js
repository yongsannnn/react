import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Posts(props) {

    const [post, setPost] = useState({})
    const [postId, setPostId] = useState(0)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
            setPost(response.data)
        }
        fetch()
    }, [postId])

    // Second argument is empty array, it triggers only ONCE when the component is rendered. 
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
            setTasks(response.data)
        }
        fetch()
    }, [])
    return (
        <React.Fragment>
            <h1>Post</h1>
            <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)}></input>
            <div>
                <p>Post details</p>
                <ul>
                    <li>
                        {post.id}
                    </li>
                    <li>
                        {post.title}
                    </li>
                    <li>
                        {post.body}
                    </li>
                </ul>
            </div>
            <h2>Todos</h2>
            <ul>
                {
                    tasks.map(t => <li>{t.title}</li>)
                }
            </ul>
        </React.Fragment>
    )

}
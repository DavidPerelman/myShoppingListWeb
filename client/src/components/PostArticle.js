import React, { Component } from 'react'
import axios from 'axios';

class PostArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            content: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post('http://localhost:5000/articles', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        })

        return <PostArticle />
    }

    render() {
        const { title, description, content } = this.state
        return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <input type="text" name="title" value={title} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <input type="text" name="description" value={description}onChange={this.changeHandler} />
                        </div>
                        <div>
                            <input type="text" name="content" value={content}onChange={this.changeHandler} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
        )
    }
}

export default PostArticle;
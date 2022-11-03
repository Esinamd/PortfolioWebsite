import React, { Component } from "react";
import Ably from "./Ably";

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this)
    }

    addComment(e){
        // Prevent default form submit
        e.preventDefault()
        // get value of the comment box and make sure its not an empty string
        const comment = e.target.elements.comment.value.trim()
        const name = e.target.elements.name.value.trim()
        const timestamp = Date.now()

        //make sure name and comment boxes are filled
        if (name && comment) {
            const commentObject = { name, comment, timestamp }
            // Publish comment
            const channel = Ably.channels.get("comments")
            channel.publish("add_comment", commentObject, (err) => {
                if (err) {
                    console.log("Unable to publish message err = " + err.message)
                }
            })

            //clear input fields
            e.target.elements.name.value = ""
            e.target.elements.comment.value = ""
        }
    }

    render() {
        return (
            <div className="box">
                <h2>This is a live chat, see who else is around :)</h2>
                <form onSubmit={this.addComment}>
                    <div className="field">
                        <div className="control">
                            <input type="text" className="input" name="name" placeholder="Name..."/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea" name="comment" placeholder="Message..."></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button">Post</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentBox;

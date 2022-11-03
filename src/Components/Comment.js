import React, { Component } from "react";

class Comment extends Component {
    constructor(params) {
        super(params)
        this.messageDate = this.messageDateGet()
    }

    messageDateGet() {
        const date = new Date(this.props.comment.timestamp)
        // this.props.comment.timestamp
        const dateTimeFormatOptions = {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        }
        const localeString = date.toLocaleString(undefined, dateTimeFormatOptions)
        return localeString
    }

    render() {
        return (
            <div className="displayComment">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <h3 className="user-name">{this.props.comment.name} <span className="message-date">{this.messageDate}</span></h3>
                            <p>{this.props.comment.comment}</p>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Comment;

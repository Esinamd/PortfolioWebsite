import React, { Component } from "react";
import CommentBox from "./CommentBox";
import AllComments from "./AllComments";
import Ably from "./Ably";

class ShowComments extends Component {
    constructor(props) {
        super(props);
        this.handleAddComment = this.handleAddComment.bind(this)
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        const channel = Ably.channels.get("comments")

        channel.attach()
        channel.once("attached", () => {
            channel.history((err, page) => {
                //comments in reverse order
                const comments = Array.from(page.items, (item) => item.data)
                this.setState({ comments })
                channel.subscribe((msg) => {
                    this.handleAddComment(msg.data)
                })
            })
        })
    }

    handleAddComment(comment) {
        this.setState(prevState => {
            return {
                comments: [comment].concat(prevState.comments),
            }
        })
    }

    render() {
        return (
            <>
            <section className="">
                <div className="">
                    <CommentBox />
                    <div className="response">
                        <AllComments comments={this.state.comments} />
                    </div>

                </div>
            </section>
            </>
        )
    }

}

export default ShowComments;

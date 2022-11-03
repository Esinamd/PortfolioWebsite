import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { getFirebase } from "../firebase";
import {collection, doc, getDocs, getFirestore } from "firebase/firestore";
import MenuItems from "../Components/Navbar/MenuItems";
import Navbar from "../Components/Navbar/Navbar";
import "./posts.css";

const generateDate = () => {
    const now = new Date();
    const options = { month: "long", day: "numeric", year: "numeric"};

    const year = now.getFullYear();

    let month = now.getMonth();
    if (month < 10 ) {
        month = `0${month}`; //put 0 in front
    }

    let day = now.getDate();
    if (day < 10) {
        day = `0${day}`;
    }

    return {
        formatted: `${year}-${month}-${day}`,
        pretty: now.toLocaleDateString("en-UK", options) //displayed date
    };
};

const Post = ({ match, history }) => {
    const slug = match.params.slug;
    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState();

    const [currentComment, setCurrentComment] = useState([]);
    const [commentNumber, setCommentNumber] = useState();

    const [name, setName] = useState("");
    const [message, setmessage] = useState("");
    const [com, setComm] = useState("");

    
    if (loading && !currentPost) {         

        // const querySnap = await getDocs (collection(db, "posts"));
        // querySnap.forEach((doc) => {
            
        // })

        // getFirebase()
        //     .database()
        //     .ref()
        //     .child(`/posts/${slug}`)
        //     .once("value")
        //     .then(snapshot => {
        //         if (snapshot.val()) {
        //             setCurrentPost(snapshot.val());
        //         }
        //         setLoading(false);
        //     });
    }

    if (currentComment.length==0) {
        // getFirebase()
        //     .database()
        //     .ref()
        //     .child(`posts/${slug}/comments/created`)
        //     .set(true)
    }

    if (!currentComment.length) {
        // getFirebase()
        //     .database()
        //     .ref()
        //     .child(`/posts/${slug}/comments`)
        //     .once("value")
        //     .then(snapshot => {
        //         let coms = [];
        //         const snapshotVal = snapshot.val();
        //         for (let com in snapshotVal) {
        //             if (com != "created"){
        //             coms.push(snapshotVal[com]);
        //             }
        //         }
        //         if (coms.length!=0){
        //             const newestComs = coms.reverse();
        //             setCurrentComment(newestComs);
        //             setCommentNumber(coms.length);  
        //         } else {
        //             setCommentNumber(0);
        //         }
        //     });
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    const noPost = !currentPost;
    if (noPost) {
        return <Redirect to="/404" />;
    }

    const createComment = () => {
        const date = generateDate();
        const newComment = {
            com,
            date: date.pretty,
            message,
            name
        };

        // getFirebase()
        //     .database()
        //     .ref()
        //     .child(`posts/${slug}/comments/${com}`)
        //     .set(newComment)
        //     .then(() => window.location.reload());
    };

    return (
        <>
            <div className="head">
                <a href="/"><h1 className="name">Esinam Dake</h1></a>
                <div className="menu"><MenuItems pageWrapId = {'page-wrap'} outerContainerId={'outer-container'} /></div>
            </div>

            <div className="mainPost">
                <div>
                    <h2 style={{fontSize:"70px", marginTop:"90px"}} className="title">{currentPost.title}</h2>
                    <em >{currentPost.datePretty}</em>
                </div>
                <div className="postContent" style={{margin:"40px 50px 0 50px "}}>
                    <img src={currentPost.coverImage} alt={currentPost.coverImageAlt}></img>
                    <div dangerouslySetInnerHTML={{ __html: currentPost.content }}></div>
                </div>
                <br/>
                <br/>
                <br/>

                <div className="comments" style={{marginBottom:"150px"}}>

                    <div>
                        <h2>Share your thoughts!</h2>
                        <form onSubmit={(event => {
                            event.preventDefault();
                        })}>
                            <input
                                value={name}
                                placeholder="Name..."
                                onChange={({ target: {value } }) => {
                                    setName(value);
                                }} />
                            <textarea
                                value={message}
                                placeholder="Write your comment..."
                                onChange={({ target: { value } }) => {
                                    setmessage(value);
                                    setComm(`com${commentNumber}`)
                                }} />
                            <button style={{cursor:"pointer", border: "none"}} onClick={createComment} type="submit">Post</button>
                        </form>
                    </div>
                    <h2>{commentNumber === 1 ? "1 Comment" : `${commentNumber} comments`}</h2>
                    {currentComment.map(currentCom => (
                        <div key={currentCom.com} className="response" >
                            <div className="responseTitle" >
                                <h3>{currentCom.name}</h3> <h5 style={{textAlign:"left"}}> ・ {currentCom.date}</h5>
                            </div>
                            <p>{currentCom.message}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer">
                <a className="contact" href="/contact-me">Contact Me!</a>
                <div className="bottomNav"><Navbar /></div>
            </div>
        </>
        );
}
export default Post;

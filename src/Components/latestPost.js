import React, { useState } from "react";
// import { getFirebase } from "../firebase";
// import {app} from '../firebase'
import MenuItems from "./Navbar/MenuItems";
import Navbar from "./Navbar/Navbar";
import {Link} from "react-router-dom";
import './latestPost.css'

const Latest = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    // const db = getFirestore(app);


    if (loading && !post.length) {
        
    //     getFirebase()
    //         .database()
    //         .ref()
    //         .child(`/posts`)
    //         .once("value")
    //         .then(snapshot => {
    //             let latPosts = [];
    //             const snapshotVal = snapshot.val();
    //             for (let slug in snapshotVal) {
    //                 latPosts.push(snapshotVal[slug]);
    //             }

    //             const newestFirst = latPosts.reverse();
    //             setPost(newestFirst[0]);
    //             setLoading(false);
    //         });
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div className="pContainer">
                    <div key={post.slug} className="latestCard">
                        <Link to={`/${post.slug}`}>
                            <img src={post.coverImage} alt={post.coverImageAlt} />
                            <div className="card-content">
                                <h2>
                                    {post.title} &nbsp; <span>{post.datePretty}</span>
                                </h2>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: `${post.content.substring(0, 200)}...`
                                    }}
                                ></p>
                            </div>
                        </Link>
                    </div>
            </div>
        </>
    );

}
export default Latest;

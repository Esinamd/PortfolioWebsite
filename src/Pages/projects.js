import React, { useState, useEffect } from "react";
import app from '../firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import './projects.css'
import MenuItems from "../Components/Navbar/MenuItems";
import Navbar from "../Components/Navbar/Navbar";
import {Link} from "react-router-dom";


const  Projects = () => {
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);
    var allPosts =[]
    
    // const [slugs, setSlugs] = useState([]);

    const db = getFirestore(app);
    const storage = getStorage();


    useEffect(() => {
        const getAllPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "posts"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    setBlogPosts(doc.data())
                });    
        };
        getAllPosts().catch(console.error);
    },[])

    if (loading && !blogPosts.length) {
        


        // getFirebase()
        //     .database()
        //     .ref("/posts")
        //     .orderByChild("date")
        //     .once("value")
        //     .then(snapshot => {
        //         let posts = [];
        //         const snapshotVal = snapshot.val();
        //         for (let slug in snapshotVal) {
        //             posts.push(snapshotVal[slug]);
        //         }

        //         const newestFirst = posts.reverse();
        //         setBlogPosts(newestFirst);
        //     });
        setLoading(false);

    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div className="head">
                <a href="/"><h1 className="name">Esinam Dake</h1></a>
                <div className="menu"><MenuItems pageWrapId = {'page-wrap'} outerContainerId={'outer-container'} /></div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="mainP">
                <h1 className="titleProj">My Projects</h1>

                <div className="pContainer">
                    {Object.keys(blogPosts).map(key => {
                        return (
                            <div key={key}>
                                <h2>
                                    {key}: {blogPosts[key]}
                                </h2>
                                </div>
                        )

                    })
                    
                    // blogPosts.map(blogPost => (
                    //     <section key={blogPost.slug} className="card">
                    //         <Link to={`/${blogPost.slug}`}>
                    //             <img style={{height:"150px", marginTop:"20px"}} src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
                    //             <div className="card-content">
                    //                 <h2>{blogPost.title}</h2>
                    //                 <h4>{blogPost.datePretty}</h4>
                    //             </div>
                    //         </Link>
                    //     </section>
                    // ))
                    }
                </div>
            </div>

            <div className="footer">
                <a className="contact" href="/contact-me">Contact Me!</a>
                <div className="bottomNav"><Navbar /></div>
            </div>
        </>
    );
}
export default Projects;

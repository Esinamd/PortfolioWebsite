import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => (
    <>
        <h1>Hmmm... can't seem to find that page.</h1>
        <Link to="/">Take me home</Link>
    </>
);

export default Error404;

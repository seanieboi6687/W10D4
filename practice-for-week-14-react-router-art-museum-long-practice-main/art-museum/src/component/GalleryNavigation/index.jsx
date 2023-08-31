import React from "react";
import Gallery from "./Gallery/Gallery"; 
import { Route, Switch } from "react-router-dom";

const GalleryNavigation = props => {
    const arts = props.galleries.map((gallery) => {
        return <Gallery key={gallery.id} gallery={gallery} />
    })

    return (
        <nav>
            {arts}
        </nav>
    )
}

export default GalleryNavigation;
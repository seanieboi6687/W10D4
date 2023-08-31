import { Link, NavLink } from "react-router-dom";

function Gallery(props){
    return(
        <NavLink 
            to={`/galleries/${props.gallery.id}`}>
            <h1>{props.gallery.name}</h1>
        </NavLink>
    )
}

export default Gallery;
import React from 'react';
import {useParams} from 'react-router-dom'

function GalleryView (props) {
    let {galleryId} = useParams();
    let gallery = Object.values(props.galleries).find(gallery => gallery['gallerynumber'] === galleryId)
    console.log(gallery);
    // console.log(props)
    return (
        // <h1>Hello from Gallery View!</h1>
        <h2>{gallery.name}</h2>
    );
}

export default GalleryView;
import {useParams} from 'react-router-dom'

function GalleryView () {
    let {galleryId} = useParams();
    console.log(galleryId);
    return (
        <h1>Hello from Gallery View!</h1>
    );
}

export default GalleryView;
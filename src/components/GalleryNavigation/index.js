import {NavLink} from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation(props) {
    let {galleries} = props
    // console.log(galleries)
    let galleriesArr = []

    for (let i = 0; i < galleries.length; i++) {
        let link = `/galleries/${galleries[i].id}`
        galleriesArr.push( 
        <li key={galleries[i].id}><NavLink to={link}>{galleries[i].name}</NavLink></li>
        )
    }

    return (
        <nav>
            <NavLink to="/">
                Home Page
            </NavLink>
            <h1>Galleries</h1>
            <ul>{galleriesArr}</ul>
        </nav>
    )

}

export default GalleryNavigation;
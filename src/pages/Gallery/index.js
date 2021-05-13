import { useEffect, useState } from "react"
import { useParams } from "react-router";
import api from "../../api/api";
import usePopup from "../../hooks/usePopup";

export default function Gallery () {
    const [photos, setPhotos] = useState([]);
    const {id: galleryId} = useParams();
    const popup = usePopup();

    useEffect (() => {
        api.getAlbumPhotos(galleryId)
           .then( (res) => res.json())
           .then( (json) => {
                setPhotos(json)
                popup.initPopupPhotos(json);
           })
           .catch( (error) => {throw new Error(error)});
    }, []);

    

    return (
        <section>
            <div className="container gallery">
                {photos.map( (img) => {
                   return <img className="big__img" key={img.id} onClick={ (e) => popup.openPopup(img.id)} src={img.url}></img>
                })}
            </div>
            {popup.initPopup()}
        </section>
    )
} 


import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router";
import api from '../../api/api';

export default function Photographer () {
    const [userAlbums, setUserAlbums] = useState([]);
    const {id: userId, name} = useParams();

    useEffect( () => {
        api.getUserAlmubs(userId)
           .then( (res) => res.json())
           .then( (json) => setUserAlbums(json))
           .catch( (error) => {throw new Error(error)});
    }, []);

  

    return (
       <section>
           <h1 style={{padding: "50px 0 0 0"}}>{name}</h1>
           <div className="container user__albums">
               {userAlbums.map( (album) => {
                   return <Album 
                            key={album.id}
                            id={album.id}
                            title={album.title}
                            auth={name}
                          />
               })}
           </div>
       </section>
    )
}

function Album (props) {
    const [albumPhotos, setAlbumPhotos] = useState([]);

    const history = useHistory();

    useEffect (() => {
        api.getAlbumPhotos(props.id)
           .then( (res) => res.json())
           .then( (json) => setAlbumPhotos(json))
           .catch( (error) => {throw new Error(error)});
    }, []);

    function toGellery () {
        history.push(`/gallery/${props.auth}/${props.id}`)
    }

    return (
        <div className='user__album'>
            <img className="small__img" onClick={toGellery} src={albumPhotos[0] ? albumPhotos[0].thumbnailUrl : ''}></img> <br />
            <span>{props.title}</span> <br />
            <span>Photos in gallery {albumPhotos.length}</span>
        </div>
    )
}
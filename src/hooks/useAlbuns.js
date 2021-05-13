import { useState } from "react";

export default function userAlbums () {
    const [albums, setAlbums] = useState(new Map());

    function addNewAlbum (albumId, album) {
        setAlbums( (prev) => {
            prev.set(albumId, album);
            return prev;
        });
    }

    return [albums, addNewAlbum];
}
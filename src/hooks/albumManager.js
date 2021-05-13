class AlbumMeneger {
    constructor () {
        this.albums = new Map();
    }

    getAlbum (id) {
        return this.albums.get(id);
    }

    setAlbum (id, album) {
        this.albums.set(id, album);
    }
}

const albumManager = new AlbumMeneger();

export default albumManager;
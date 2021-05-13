
function getAlbums () {
   return fetch('https://jsonplaceholder.typicode.com/albums');
}

function getUsers () {
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getUserAlmubs(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
}

function getAlbumPhotos (albumId) {
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
}

module.exports = {
    getAlbums,
    getUsers,
    getUserAlmubs,
    getAlbumPhotos
};
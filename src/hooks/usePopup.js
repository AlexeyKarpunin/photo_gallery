import { useState } from "react";

export default function usePopa () {
    const [photos, setPhotos] = useState(new Map());
    const [popupStatus, setPopupStatus] = useState(false);
    const [openImg, setOpenImg] = useState({id: undefined, link: ""});

    function nextImg () {
        const nextImg = openImg.id + 1;
        if (photos.get(nextImg)) {
            setOpenImg( (prev) => { return {...prev, link: photos.get(nextImg).url, id: nextImg}});
        }
    }

    function prevImg () {
        const prevImg = openImg.id - 1;
        if (photos.get(prevImg)) {
            setOpenImg( (prev) => { return {...prev, link: photos.get(prevImg).url, id: prevImg}});
        }
    }

    function initPopup () {
        return (
            <div className={`popup ${popupStatus ? "popup_active" : ""}`}>
                <div className="popup__container">
                  <div onClick={prevImg} className="popup_btn popup_btn_next"></div>
                  <img className="popup__img" src={openImg.link}></img>
                  <div onClick={nextImg} className="popup_btn popup_btn_prev"></div>
                </div>
                <div onClick={closePopup} className="popup_close">+</div>
            </div>
        )
    }

    function initPopupPhotos (photos) {
        setPhotos(prev => {
            photos.forEach( photo => {
                prev.set(photo.id, photo);
            });
            return prev;
        });
    }

    function openPopup(id) {
        setOpenImg( (prev) => { return {...prev, link: photos.get(id).url, id}});
        setPopupStatus(true);
    }

    function closePopup () {
        setPopupStatus(false)
    }

    return {
        initPopup,
        openPopup,
        initPopupPhotos,
    };
}
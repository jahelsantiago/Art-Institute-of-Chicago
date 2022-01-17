import React, { useEffect, useRef, useState } from 'react';
import "./gallery.css"
import useImages from 'hooks/useImages';
import useNearScreen from 'hooks/useNearScreen';
import Card from 'components/cards/Card';
import useModal from 'hooks/useModal';
import ImagesModal from 'components/imagesModal/ImagesModal';



export default function Gallery() {
    const [imageArray, loadNextPage, loading] = useImages({limit: 10});
    const limit = useRef();
    const {isNearScreen, fromRef} =  useNearScreen({distance:"100px",externalRef:limit, once:false});
    const [Modal, toggle] = useModal()
    const [currArtworkID, setCurrArtworkID] = useState(0);

    useEffect(() => {
        if(isNearScreen && !loading){
            loadNextPage();
        }
    }, [isNearScreen, loadNextPage]);

    function showInformationModal(id){
        setCurrArtworkID(id);
        toggle()
    }


    return(
        <div className="gallery-container">
            <div className="gallery">
                {imageArray.map((image, idx) => <Card image={image} onClick = {()=>showInformationModal(idx)}/>)}
            </div>
            <div className="limit" ref={limit}></div>
                <Modal>
                    <ImagesModal artWork = {imageArray[currArtworkID]}/>
                </Modal>
        </div>
    )
}
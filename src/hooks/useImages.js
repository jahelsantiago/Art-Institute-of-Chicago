import {getImages} from 'services/artApi';
import { useEffect, useState } from "react"

const FIRSTPAGE = 1;
const SECONDPAGE = 2;

/**
 * Hook to get images from the API and a function to load the next page
 * @param {Number} limit results per page 
 * @returns 
 */
export default function useImages({limit = 10}) {

    const [imageArray, setImagesArray] = useState([]);
    const [page, setPage] = useState(SECONDPAGE);
    const [loading, setLoading] = useState(false);

    //funcition that appends the images of the page page to the imageArray
    function updateImages(page) {
        setLoading(true);
        getImages(page, "id,title,image_id,artist_display,publication_history", limit)
        .then(data => {
            setImagesArray(prev => [...prev, ...data]);
        })
        .finally(() => 
            setLoading(false)
        );
    }

    //function that load the next page to the array
    function loadNextPage() {
        updateImages(page);
        setPage(prev => prev + 1);
    }

    //Effect that loads the first page
    useEffect(() => {
        updateImages(FIRSTPAGE);
    } , [])

    return [imageArray, loadNextPage, loading];
}
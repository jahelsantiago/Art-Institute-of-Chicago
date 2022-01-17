const ENDPOINT = 'https://api.artic.edu/api/v1/artworks?';
const defaultFields = 'id,title,image_id';

export  async function getImages(page = 0, fields = defaultFields, limit = 10) {
    const {data, iiif_url} = await getArtworks(page, fields, limit)
    const images = [];
    data.forEach(artwork => {
        if(artwork.image_id !== null) {
            const imageUrl =  getImage(artwork.image_id, iiif_url);
            images.push( {imageUrl, ...artwork});
        }
    });
    return images;
}

export function getArtworks(page = 0, fields = defaultFields, limit = 10) {
    const query = `${ENDPOINT}page=${page}&limit=${limit}&fields=${fields}`;
    return fetch(query)
    .then(res => res.json()) 
    .then(data => {
         const ans =  {data: data.data, iiif_url: data.config.iiif_url};
         return ans;
    })
}

/**
 * 
 * @param {String} imageId id of the image given by the API
 * @param {String} iiif_url url of the iiif server
 * @returns 
 */
export function getImage(imageId, iiif_url) {
    return `${iiif_url}/${imageId}/full/843,/0/default.jpg`
}



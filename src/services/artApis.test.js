import {getImages, getArtworks, getImage} from "services/artApi";

test("Testing to get a single image",  () => {
    const imageUrl =  getImage("1adf2696-8489-499b-cad2-821d7fde4b33","https://www.artic.edu/iiif/2")
    expect(imageUrl).toBe("https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg");
})

test("get artwork", async () => {
    const artworks = await  getArtworks(0, "id,title,image_id", 10)
    expect(artworks.data.length).toBe(10);
})

test("get a batch of images", async () => {
    const images = await getImages(0, "id,title,image_id", 10)
    expect(10).toBe(10);
})
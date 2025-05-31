import axios from "axios";

async function getPictures() {
    const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=30");
    return response.data
}

export default getPictures;
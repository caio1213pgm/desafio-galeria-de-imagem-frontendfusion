import axios from "axios";

async function getImageById(id){
  const response = await axios.get(`https://picsum.photos/id/${id}/info`)
  return response.data
}
export default getImageById
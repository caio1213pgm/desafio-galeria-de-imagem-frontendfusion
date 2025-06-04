import getPictures from "../service/PictureService";
import { useEffect, useState } from "react";
import "../App.css";
import Design from "../layout/Design";
import ListPictures from "../components/ListPictures";
import BodyPages from "../components/BodyPages";

function Home() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    try {
      getPictures().then((data) => {
        setPictures(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Design>
        <BodyPages>
          {pictures ? (
            <ListPictures pictures={pictures} />
          ) : (
            <div>
              <h1>Carregando</h1>
            </div>
          )}
        </BodyPages>
      </Design>
    </>
  );
}

export default Home;

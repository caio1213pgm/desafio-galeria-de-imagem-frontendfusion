import getPictures from "./service/PictureService";
import { useEffect, useState } from "react";
import "./App.css";
import Design from "./layout/Design";
import ListPictures from "./components/ListPictures";

function Home() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      getPictures().then((data) => {
        console.log(data);
        setPictures(data);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Design>
        <div className="min-h-[calc(100vh-82px-82px)] bg-bgGray p-3 ">
          {loading ? (
            <div>
              <h1>Carregando</h1>
            </div>
          ) : (
            <ListPictures pictures={pictures} />
          )}
        </div>
      </Design>
    </>
  );
}

export default Home;

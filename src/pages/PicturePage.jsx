import { useEffect, useState } from "react";
import BodyPages from "../components/BodyPages";
import Design from "../layout/Design";
import getImageById from "../service/PictureIdService";
import { useParams } from "react-router";
import CardDetails from "../components/CardDetails";

function LoadingImage() {
  return (
    <div className="flex items-center justify-center ">
      <span className="flex items-center gap-2 bg-amber-700 text-3xl text-white absolute p-2 rounded">
        Carregando itens...
      </span>
    </div>
  );
}

function PicturePage() {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    getImageById(id).then((data) => {
      setImage(data);
    });
  });
  return (
    <Design>
      <BodyPages>
        {image ? (
          <div>
            <CardDetails
              author={image.author}
              image={image.download_url}
              width={image.width}
              height={image.height}
              id={image.id}
            />
          </div>
        ) : (
          <div className="pt-10">
              <LoadingImage />
          </div>
        )}
      </BodyPages>
    </Design>
  );
}

export default PicturePage;

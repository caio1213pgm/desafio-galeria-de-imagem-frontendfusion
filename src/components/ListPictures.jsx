import CardPicture from "./CardPicture";

/* eslint-disable react/prop-types */
function ListPictures(props) {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-5">
      {props.pictures.map((picture) => (
        <CardPicture
          key={picture.id}
          image={picture.download_url}
          autor={picture.author}
        />
      ))}
    </div>
  );
}
export default ListPictures;

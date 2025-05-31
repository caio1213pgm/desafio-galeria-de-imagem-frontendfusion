/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";
// Header e footer do projeto que vão ser reutilizados em todas as páginas e vão englobar a aplicação
function Design(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Design;

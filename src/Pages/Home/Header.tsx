import { Container } from "react-bootstrap";

import { splitTextIntoLines, structureData } from "../../Constant/data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import "./Style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

function Header() {
  const dataSlice: any = useSelector((state: RootState) => state.data.data);

  const title: any =
    dataSlice[1]?.title === undefined
      ? structureData[1].title
      : dataSlice[1].title;

  const chunks = splitTextIntoLines(title ?? "", 3);

  return (
    <section>
      <ToastContainer />
      <Container className="home-container text-center" id="home">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="intro-title">
              {dataSlice[1]?.subTitle[0]?.tilte}
              <br />
              {dataSlice[1]?.subTitle[1]?.title}
            </h1>

            {chunks.map((chunk, index) => (
              <p key={index} className="intro-desc mb-0 mb-sm-1 ">
                <span>{chunk}</span>
              </p>
            ))}
          </div>
          <div className="d-block d-sm-none text-center my-4"></div>
        </div>
      </Container>
    </section>
  );
}

export default Header;

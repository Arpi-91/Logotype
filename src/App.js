import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";

function App() {
  let myStates = useSelector((state) => state);

  const [datas, setDatas] = useState();
  useEffect(() => {
    const fetchData = async () => {
      return myStates;
      // return data
    };
    fetchData().then((data) => setDatas(data));
  }, [myStates]);
  console.log(datas);

  return (
    <div className="App">
      <Header />

      <div className="container">
        {datas &&
          datas.filteredDatas.map((elem) => {
            return (
              <div id={elem.id} className="container_item">
                <h3>{elem.categories}</h3>{" "}
                <img src={require(`${elem.src}`)} alt="photo" />
                <h1>{elem.title}</h1>
                <div className="veiw_section">
                  <span>{elem.author}</span>
                  <h5>{elem.data}</h5>
                  <h5>{elem.views}</h5>
                </div>
                <p>{elem.content}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;

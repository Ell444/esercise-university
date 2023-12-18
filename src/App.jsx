import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import UniversityList from "./components/UniversityList";
import SearchBar from "./components/SearchBar";

function App() {
  const [universities, setUniversities] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=Italy")
      .then((response) => response.json())
      .then((arr) => setUniversities(arr))
      .catch((err) => {
        console.log(err);
        setErrorMessage("Caricamento Pagina Non Riuscito");
      });
  }, []);
  const universityInfo = universities.map((elem) => {
    return {
      name: elem.name,
      url: elem.web_pages,
    };
  });
  return (
    <>
      {errorMessage !== undefined ? (
        <div>{errorMessage}</div>
      ) : (
        <div>
          <SearchBar
            objArr={universityInfo}
            upDateUniversityes={setUniversities}
          />
          <UniversityList objArray={universityInfo} />
        </div>
      )}
    </>
  );
}

export default App;

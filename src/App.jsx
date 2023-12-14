import { useEffect, useState } from 'react';
import './App.scss';
import UniversityList from './components/UniversityList';
import SearchBar from './components/SearchBar';



function App() {

  const [universities, setUniversities] = useState([]);
  const [errorMessage, setErrorMessage] = useState();


  useEffect(() => {
    fetch('http://universities.hipolabs.com/search?country=Italy')
      .then((response) => response.json())
      .then((objArray) => setUniversities(objArray))
      .catch((error) => {
        console.error(error);
        setErrorMessage(`An error occurred: &{error.message}`)
      });
  }, []);

  const universityInfo = universities.map((university) => {
    return {
      Name: university.name,
      Url: university.web_pages
    };
  });

  return (<>

    {errorMessage !== undefined ?
      <div>{errorMessage}</div>
      :
      <div>
        <SearchBar
          universityInfo={universityInfo}
          setUniversities={setUniversities}
        />
        <UniversityList universityInfo={universityInfo} />
      </div>

    }


  </>)
};

export default App;

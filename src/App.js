import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Casino from "./pages/Casino";
import Casino2 from "./pages/Casino2";
import Casino3 from "./pages/Casino3";
import StartFirebase from "./components/FirebaseConfig/index";
import { ref, set, get } from "firebase/database";

const history = createBrowserHistory();

function App() {

  const [data, setData] = useState(null); 
  const [totalBalance, setTotalBalance] = useState();
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state as true
  const [isLoading1, setIsLoading1] = useState(true);
  
  useEffect(() => {
    retrieveData();
  }, []);

  const [db, setDb] = useState(StartFirebase());


  const retrieveData = () => {
    const arrayRef = ref(db, "Customer");

    get(arrayRef)
      .then((snapshot) => {
        if (snapshot.exists()) {

          setTimeout(() => {
          const existingData = snapshot.val();
          const dataArray = Array.isArray(existingData) ? existingData : [];
          const lastIndex = dataArray.length - 1;
          const lastObject = dataArray[lastIndex];
          const value5 = lastObject.totalBalance;
            setTotalBalance(value5)
            setData(dataArray)
            setIsLoading(false);
            setIsLoading1(true);
            setTimeout(() => {
              setIsLoading1(false);
            }, 1000)
          }, 1000);
        } else {
          setTotalBalance(10000.00);
          setIsLoading(false);
          setIsLoading1(false);
        }
      })
      .catch((error) => {
        alert("There was an error. Details: " + error);
      });
  };


  return (
    <BrowserRouter>
      <Header totalBalance={totalBalance} />
      <Routes history={history}>
        <Route path="/" element={<Home />} />
        <Route path="/casino/category/new" element={<Casino />} />
        <Route path="/casino/category/new/Popular" element={<Casino2 />} />
        <Route
          path="/casino/category/new/bet"
          element={<Casino3 data={data} isLoading={isLoading} isLoading1={isLoading1} />}
        />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

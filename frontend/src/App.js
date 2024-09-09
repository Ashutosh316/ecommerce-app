import {BrowserRouter as Router } from "react-router-dom";
import Header from "./component/headers/header";
import Pages from "./component/mainpages/pages";
import { DataProvider } from "./globalstate";

function App() {
  return (
    <DataProvider>
    <Router>
    <div className="app">
      <Header/>
      <Pages/>
    </div>
    </Router>
    </DataProvider>
  );
}

export default App;

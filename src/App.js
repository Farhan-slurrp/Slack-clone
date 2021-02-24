import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

function App() {
  const [dark, setDark] = useState(true);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <div className="App">
      <Router>
        <Container>
          <Header dark={dark} toggleDark={toggleDark} />
          <Main>
            <Sidebar dark={dark} />
            <Switch>
              <Route path="/room">
                <Chat dark={dark} />
              </Route>
              <Route path="/">
                <Login dark={dark} />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;

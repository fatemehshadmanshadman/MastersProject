import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import TabCards from "components/learn/TabCards";
import Tarkib from "components/content/Tarkib";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/Header.js";
import Footer from "components/footers/Footer.js";
import All from "components/learn-tab/All";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

 function App() {
  return (
    <>
    <AnimationRevealPage>
      <Header />
      <Tarkib/>
      <TabCards/>    
      <Footer />    
  </AnimationRevealPage>
  <All/>
  </>
  );
}
export default App;

{/*<Router>
      <Switch>
        <Route path="/"><Main/></Route>
        <Route path="/components/footers/Footer"><Footer/></Route>
        </Switch>
  </Router>*/}
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';

const App = () => {


    return (
            <>
            <Navbar />
            <Switch>
                <Route exact path="/">
                  <Hero />
                  <Main />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/contact">
                  <ContactPage />
                </Route>
                <Route path="*">
                    {/* <NotMatch /> */}
                </Route>
            </Switch>
            <Footer />
        </>
        
    )
}


export default App
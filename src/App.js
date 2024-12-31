import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Style/Style.css';
import Header from "./Component/Header";
import HeroSection from "./Component/Hero";
import "./Style/Style.css";
import Features from "./Component/Features ";
import States from "./Component/States";
import Footer from "./Component/Footer";
import About from "./Component/About";
import ContactSection from "./Component/Contact";
import Product from "./Component/Product";

function App() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Features />
            <States />
            <About />
            <Product />
            <ContactSection />
            <Footer />
            
        </div>
    );
}

export default App;

import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="page-wrapper">
            <Header />
            <main>
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}

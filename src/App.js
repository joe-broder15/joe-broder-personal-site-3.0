import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="homepage-section">
                    <h1 id="title"> Joe Broder</h1>
                    <div className="homepage-links">
                        <a href="#">
                            <button>email</button>
                        </a>
                        <a href="#">
                            <button>github</button>
                        </a>
                        <a href="#">
                            <button>linkedin</button>
                        </a>
                        <a href="#">
                            <button>resume</button>
                        </a>
                        <a href="#">
                            <button>blog</button>
                        </a>
                    </div>
                </div>

                <div className="homepage-section">
                    <h2>About Me</h2>
                    <p>
                        My name is Joe, I'm a rising senior EECS (Electrical
                        Engineering and Computer Science) major at UC Berkeley
                        interested in security, cryptography, and software
                        engineering. I'm a full-stack blockchain, web, and
                        mobile developer with experience using Solidity,
                        Web3.js, MERN stack, Flask, Bootstrap, and SQL. Over the
                        past year I've been a software development consultant at
                        blockchain at berkeley where I build dApps and work on
                        large scale solutions for clients. My favorite quote is
                        "If I had more time I'd have written less code"
                    </p>
                </div>
                <div className="homepage-section">
                    <h2>Personal Projects</h2>
                    <p>
                        My name is Joe, I'm a rising senior EECS (Electrical
                        Engineering and Computer Science) major at UC Berkeley
                        interested in security, cryptography, and software
                        engineering. I'm a full-stack blockchain, web, and
                        mobile developer with experience using Solidity,
                        Web3.js, MERN stack, Flask, Bootstrap, and SQL. Over the
                        past year I've been a software development consultant at
                        blockchain at berkeley where I build dApps and work on
                        large scale solutions for clients. My favorite quote is
                        "If I had more time I'd have written less code"
                    </p>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);

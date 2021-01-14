import React from "react"

class Navbar extends React.Component {
    render () {

        return (
            <div>
                <a className="active" href="/">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
{/*
                <a href="/departments">Departments</a>
                <div class="dropdown">
                    <button class="dropbtn">Departments
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#EN">1</a>
                        <a href="#RU">2</a>
                        <a href="#UA">3</a>
                    </div>
                </div>
*/}
            </div>
        );
    }
}

export default Navbar
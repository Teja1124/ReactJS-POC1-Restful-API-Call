import React from 'react';

class Navigation extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-inverse navigation-bg">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img src={require('../assets/UDLogo.jpg')} className="verticalLine logo-image" alt="ud-logo"/>
                        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle togglebar" id="menuButton">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand logo-text" href={null}>Oasis</a>
                    </div>
                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">

                        </ul>
                        <ul className="nav navbar-nav navbar-right">

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;
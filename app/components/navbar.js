import React from 'react';

const Navbar = () => {
  return (
    <div>
    <div className="navbar-component">
      <div className="navbar area">
        <a href="#" className="brand">Brand</a>
        <nav role="navigation" id="navigation" className="list">
          <a href="#" className="item -link">Home</a>
          <a href="#" className="item -link">Articles</a>
          <a href="#" className="item -link">Projects</a>
          <a href="#" className="item -link">Resources</a>
          <a href="#" className="item -link">About me</a>
          <span className="item"><i className="fa fa-search"></i></span>
        </nav>
        <button data-collapse data-target="#navigation" className="toggle">
          <span className="icon"></span>
        </button>
      </div>
    </div>
    {/* {this.props.children} */}
    </div>
  )
}

export default Navbar;

import React, { Component } from 'react';
import impulse_logo from '../assets/impulse_center.png'

class Navbar1 extends Component {
    state = {  }
    render() { 
        return (
            <nav style={{backgroundColor:'#3D506B', height:'50px'}} className="navbar navbar-expand-sm">
                <a href='/' className="navbar-brand mx-auto" style={{float:'center'}}>
                    <img style={{height:'100px',width:'500px'}} src={impulse_logo} alt='impulse_logo' />
                </a>
            </nav>
         );
    }
}
 export default Navbar1;
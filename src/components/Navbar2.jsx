import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import impulse_logo from '../assets/impulse_left.png'
import exit from '../assets/exit1.png'
import setting from '../assets/pengaturan.png'

class Navbar2 extends Component {
    state = {  }
    render() { 
        return ( 
            <nav style={{backgroundColor:'#3D506B', height:'50px'}} className="navbar navbar-expand-sm">
                <Link to='/Menu' className='navbar-brand'>
                    <img style={{height:'120px',width:'300px'}} src={impulse_logo} alt='impulse_logo' />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active mr-2">
                            <h3 style={{color:'white'}}>Welcome, Praktikan</h3>
                        </li>
                        <li className='nav-item mr-3'>
                            <img style={{width:'60px',height:'35px'}} src={setting} alt='setting logo' />
                        </li>
                        <Link to='/'>
                            <li className="nav-item active">
                                <h3 style={{color:'white'}}>Exit</h3>
                            </li>
                        </Link>
                        <Link to='/'>
                            <li className='nav-item'>
                                <img style={{width:'60px',height:'35px'}} src={exit} alt='exit logo' />
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Navbar2;
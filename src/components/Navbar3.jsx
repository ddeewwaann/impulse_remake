import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const colornav={
    color :'white'
};

class Navbar3 extends Component {
    state = {  }
    render() { 
        return ( 
            <nav style={{backgroundColor:'#3D506B', height:'50px'}} className="navbar navbar-expand-sm mt-1">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to='/Praktikum'>
                            <li className="nav-item active mr-5">
                                <h3 style={colornav}>Mulai Praktikum</h3>
                            </li>
                        </Link>
                        <Link to='/UploadJawaban'>
                            <li className="nav-item mr-5">
                                <h3 style={colornav}>Unggah Jawaban</h3>
                            </li>
                        </Link>
                        <Link to='/Homepage'>
                            <li className="nav-item mr-5">
                                <h3 style={colornav}>Nilai</h3>
                            </li>
                        </Link>
                        <Link to='/Download'>
                            <li className="nav-item mr-5">
                                <h3 style={colornav}>Unduh</h3>
                            </li>
                        </Link>
                        <Link to='/InputAbsen'>
                            <li className="nav-item mr-5">
                                <h3 style={colornav}>Input Absen</h3>
                            </li>
                        </Link>
                        <Link to='/ManageAccount'>
                            <li className="nav-item mr-5">
                                <h3 style={colornav}>Kelola Akun</h3>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Navbar3;
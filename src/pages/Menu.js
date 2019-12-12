import React, { Component } from 'react';
import Navbar2 from '../components/Navbar2';
import {Link} from 'react-router-dom';
import praktikum from '../assets/1.png'
import upload from '../assets/2.png'
import nilai from '../assets/3.png'
import download from '../assets/4.png'
import akun from '../assets/7.png'
import absen from '../assets/8.png'

const sizeimg = {
    height : '200px',
    width : '220px'
};

class Menu extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <Navbar2 />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-3'></div>
                        <div className='col-2'>
                            <Link to='/Praktikum'> 
                                <div className="card">
                                    <img src={praktikum} style={sizeimg} className='card-img-top' alt='card-image' />
                                    <div className="card-body">
                                        <h5 style={{color:'black'}} className="card-text text-center">Mulai Praktikum</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-2'>
                            <Link to='/UploadJawaban'> 
                                <div className="card">
                                    <img src={upload} style={sizeimg} className='card-img-top' alt='card-image' />
                                    <div className="card-body">
                                        <h5 style={{color:'black'}} className="card-text text-center">Unggah</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-2'>
                            <Link to='/Homepage'> 
                                <div className="card">
                                    <img src={nilai} style={sizeimg} className='card-img-top' alt='card-image' />
                                    <div className="card-body">
                                        <h5 style={{color:'black'}} className="card-text text-center">Nilai</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <br></br>
                    <div className='row'>
                        <div className='col-3'></div>
                        <div className='col-2'>
                            <Link to='/Download'> 
                                <div className="card">
                                    <img src={download} style={sizeimg} className='card-img-top' alt='card-image' />
                                    <div className="card-body">
                                        <h5 style={{color:'black'}} className="card-text text-center">Unduh</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-2'>
                            <Link to='/ManageAccount'> 
                                <div className="card">
                                    <img src={akun} style={sizeimg} className='card-img-top' alt='card-image' />
                                    <div className="card-body">
                                        <h5 style={{color:'black'}} className="card-text text-center">Kelola Akun</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-2'>
                            <Link to='/InputAbsen'> 
                                <div className="card">
                                    <img src={absen} style={sizeimg} className='card-img-top' alt='card-image' />
                                    <div className="card-body">
                                        <h5 style={{color:'black'}} className="card-text text-center">Input Absen</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Menu;
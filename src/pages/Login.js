import React, { Component } from 'react';
import Navbar1 from '../components/Navbar1';
import logo from '../assets/logoif.png'
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

const textcolor ={
    color : '#3D506B'
};

const input ={
    width : '430px',
    height: '40px'
};

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <Navbar1 />
                <br></br>
                <div className='container-fluid'>
                    <img style={{height:'100px',width:'100px'}} className='text-center' src={logo} alt='logo' />
                    <h5 style={textcolor} className='text-center'>SELAMAT PAGI !!!</h5>
                    <p style={textcolor} className='text-center'>Selamat Datang di Website praktikum Laboratorium Informatika Telkom University</p>
                    <p style={{marginTop:'-20px',color:'#3D506B'}} className='text-center'>Website Ini Akan Digunakan untuk melaksanakan Praktikum</p>
                    <br></br>
                    <div style={{width:'500px',borderRadius:' 25px 25px 0 0'}} className='card mx-auto'>
                        <div style={{color:'white',backgroundColor:'#3D506B',borderRadius:'25px 25px 0 0'}} className='card-header'><h3>Silahkan Login Terlebih Dahulu</h3></div>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label><h5>NIM</h5></label>
                                    <input style={input} />
                                </div>
                                <div className='form-group'>
                                    <label><h5>Password</h5></label>
                                    <input type='password' style={input} />
                                </div>
                            </form>
                            <a href="/Menu" style={{float:'right',color:'#3D506B'}}>Forgot Password</a>
                            <br></br>
                            <br></br>
                            <Link to='/Menu'>
                                <button style={{width:'250px',color:'white',backgroundColor:'#3D506B',borderRadius:'10px'}} className='btn mx-auto'>Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Footer />
            </section>
                
         );
    }
}
 
export default Login;
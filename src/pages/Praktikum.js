import React, { Component } from 'react';
import Navbar2 from '../components/Navbar2';
import Navbar3 from '../components/Navbar3';
import Footer from '../components/Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Praktikum extends Component {
    state = { 
        show:false
    }
    state = { 
        show : false,
     }
    handleClose = () =>{
        this.setState({
            show:false, 
        });
    };

    handleShow = () =>{
        this.setState({
            show: true,
        });
    };
    render() { 
        return ( 
            <section>
                <Navbar2 />
                <Navbar3 />
                <br/>
                <br/>
                <br/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-8 mx-auto'>
                            <div className='card'>
                                <div style={{color:'white',backgroundColor:'#3D506B',borderRadius:'5px 5px 0 0'}} className='card-header col-12'>
                                    <h3>Mulai Praktikum</h3>
                                </div>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group text-left ml-4'>
                                            <label><p>Praktikum</p></label>
                                            <select className='form-control col-4'>
                                                <option>Pilih Praktikum</option>
                                                <option>Pemprograman Berorientasi Objek</option>
                                            </select>
                                        </div>
                                        <div className='form-group text-left ml-4'>
                                            <label><p>Asprak</p></label>
                                            <select className='form-control col-4'>
                                                <option>Pilih Asprak</option>
                                                <option>Esa Alfitrasalam</option>
                                            </select>
                                        </div>
                                        <div className='form-group text-left ml-4'>
                                            <label><p>Autentifikasi</p></label>
                                            <input type='text' className='form-control col-4' />
                                        </div>
                                    </form>
                                    <button onClick={this.handleShow} className='btn' style={{color:'white',backgroundColor:'#3D506B',width:'220px',borderRadius:'7px 7px 7px 7px'}} >MULAI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton style={{backgroundColor:'#3D506B',color:'white'}}>
                            <Modal.Title>Peringatan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Praktikum Telah Dimulai</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Tutup
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer />
            </section>
         );
    }
}
 
export default Praktikum;
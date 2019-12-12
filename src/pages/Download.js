import React, { Component } from 'react';
import Navbar2 from '../components/Navbar2';
import Navbar3 from '../components/Navbar3';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { throwStatement } from '@babel/types';
import Footer from '../components/Footer';

class Download extends Component {
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
                <br></br>
                <br></br>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-7 mx-auto'>
                            <div className='card'>
                                <div style={{color:'white',backgroundColor:'#3D506B',borderRadius:'5px 5px 0 0'}} className='card-header col-12'>
                                    <h3>Unduh</h3>
                                </div>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group'>
                                            <label><h5>Pilih Mata Kuliah</h5></label>
                                            <select className='form-control text-center'>
                                                <option>JARKOM</option>
                                                <option>APPL</option>
                                                <option>DAP</option>
                                                <option>PBO</option>
                                            </select>
                                        </div>
                                        <div className='form-group'>
                                            <label><h5>Pilih Modul</h5></label>
                                            <select className='form-control text-center'>
                                                <option>Modul 1</option>
                                                <option>Modul 2</option>
                                                <option>Modul 3</option>
                                                <option>Modul 4</option>
                                            </select>
                                        </div>
                                        <div className='form-group'>
                                            <label><h5>Jenis Tes</h5></label>
                                            <select className='form-control text-center'>
                                                <option>Jurnal</option>
                                                <option>Tes Akhir</option>
                                            </select>
                                        </div>
                                    </form>
                                    <button onClick={this.handleShow} className='btn btn-primary' style={{backgroundColor:'#3D506B',width:'200px'}}>Unduh</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton style={{backgroundColor:'#3D506B',color:'white'}}>
                            <Modal.Title>Peringatan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Soal Telah Ter Unduh</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Tutup
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Footer/>
            </section>
         );
    }
}
 
export default Download;
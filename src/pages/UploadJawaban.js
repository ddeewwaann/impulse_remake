import React, { Component } from 'react';
import Navbar2 from '../components/Navbar2';
import Navbar3 from '../components/Navbar3';
import Footer from '../components/Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class UploadJawaban extends Component {
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
                <Navbar2/>
                <Navbar3/>
                <br></br>
                <br></br>
                <br></br>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='card mx-auto col-8'>
                            <div className='row'>
                                <div style={{color:'white',backgroundColor:'#3D506B',borderRadius:'5px 5px 0 0'}} className='card-header col-12'>
                                    <h3>Form Unggah Jawaban</h3>
                                </div>
                                <div className='card-body col-12'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <form>
                                                <div className='form-group text-left ml-4'>
                                                    <label><p>Praktikum</p></label>
                                                    <select className='form-control col-10'>
                                                        <option>Pilih Praktikum</option>
                                                        <option>Pemprograman Berorientasi Objek</option>
                                                    </select>
                                                </div>
                                                <div className='form-group text-left ml-4'>
                                                <label><p>Jenis Upload</p></label>
                                                    <select className='form-control col-10'>
                                                        <option>Test Awal</option>
                                                        <option>Jurnal</option>
                                                        <option>Test Akhir</option>
                                                    </select>
                                                </div>
                                                <div className='form-group text-left ml-4'>
                                                    <label><p>Upload File</p></label>
                                                    <input type='file' className='form-control-file'></input>
                                                </div>
                                                <div className='form-group text-left ml-4'>
                                                    <label><p>Autentifikasi</p></label>
                                                    <input  className='form-control col-10' type='text'>
                                                    </input>
                                                </div>
                                            </form>
                                            <button onClick={this.handleShow} className='btn btn-primary' style={{backgroundColor:'#3D506B',width:'200px'}}>Unggah</button>
                                        </div>
                                        <div className='col-1'></div>
                                        <div className='col-4 mt-4' style={{color:'red'}}>
                                            <p>Keterangan Penguploadan</p>
                                            <p className='text-left'>- rar atau zip file</p>
                                            <p className='text-left'>- max upload 2mb</p>
                                            <p className='text-left'>- contoh file format sebagai berikut</p>
                                            <p className='text-left ml-3 mt-0'>ASD_13011xxxxx_JURNAL_MODX_ASPRAK</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton style={{backgroundColor:'#3D506B',color:'white'}}>
                            <Modal.Title>Peringatan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Jawaban Telah Ter Unggah</Modal.Body>
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
                <Footer />
            </section>
         );
    }
}
 
export default UploadJawaban;
import React, { Component } from 'react';
import Navbar2 from '../components/Navbar2';
import Navbar3 from '../components/Navbar3';
import logoorang from '../assets/orang.png'
import Footer from '../components/Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
class ManageAccount extends Component {
    state = { 
        show : false,
    };
    
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
                        <div className='col-2 ml-4'>
                            <div className='card'>
                                <img className='card-img-top' src={logoorang} alt='imglogo' />
                                <div className='card-body'>
                                    <h5 className='card-title text-center'>Dewan</h5>
                                    <h5 className='card-title text-center'>1301174134</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <h5 className='text-center'>Data Mahasiswa</h5>
                                            <form className='mt-4'>
                                                <div className='form-group text-left'>
                                                    <label><p>NIM</p></label>
                                                    <input type='text' className='form-control' value='13011XXXXX' />
                                                </div>
                                                <div className='form-group text-left'>
                                                    <label><p>Kelas</p></label>
                                                    <input type='text' className='form-control' value='IF-XX-XX' />
                                                </div>
                                            </form>
                                        </div>
                                        <div className='col-2'></div>
                                        <div className='col-6'>
                                            <h5 className='text-center'>Personal Data</h5>
                                            <form>
                                                <div className='form-group text-left'>
                                                    <label><p>Nama</p></label>
                                                    <input type='text' className='form-control col-9' value='Dewan' />
                                                </div>
                                                <div className='form-group text-left'>
                                                    <label><p>Agama</p></label>
                                                    <input type='text' className='form-control col-9' value='Islam' />
                                                </div>
                                                <div className='form-group text-left'>
                                                    <label><p>Asal</p></label>
                                                    <input type='text' className='form-control col-9' value='Bandoeng' />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <form>
                                                <div className='form-group text-left'>
                                                    <label><p>Pertanyaan Pemulihan</p></label>
                                                    <select className='form-control col-11'>
                                                            <option>Pilih Pertanyaan Pemulihan</option>
                                                    </select>
                                                </div>
                                                <div className='form-group text-left'>
                                                    <label><p>Jawaban</p></label>
                                                    <input type='text' className='form-control col-11' value='Kochenk Orenk' />
                                                </div>
                                            </form>
                                            <button onClick={this.handleShow} className='btn btn-sm mt-2' style={{backgroundColor:'#3D506B',color:'white',width:'255px'}}>Perbaharui</button>
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
                        <Modal.Body>Selamat Data Diri Telah Diperbaharui</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Tutup
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <br></br>
                <br></br>
                <Footer />
            </section>
         );
    }
}
 
export default ManageAccount;
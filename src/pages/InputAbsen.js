import React, { Component } from 'react';
import Navbar2 from '../components/Navbar2';
import Navbar3 from '../components/Navbar3';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';

class InputAbsen extends Component {
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
                        <div className='col-3 ml-3'>
                            <div className='card' style={{height:'550px'}}>
                                <div style={{color:'white',backgroundColor:'#3D506B',borderRadius:'5px 5px 0 0'}} className='card-header'>
                                    <h3>Absensi 13011XXXXX</h3>
                                </div>
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h5>Tanda Tangan</h5>
                                    </div>
                                    <div className='jumbotron jumbotron-fluid' style={{height:'300px'}}>
                                        <div className='container'>
                                            <div className="lead col-12" style={{marginTop:'190px'}}>
                                                <button className="btn" style={{border:'solid 1px',borderRadius:'10px 10px 10px 10px',width:'100px'}} role="button">Input</button>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <select className='form-control mt-3 text-center' style={{color:'white',backgroundColor:'#3D506B',textAlignLast:'center'}}>
                                                        <option>Pilih Modul</option>
                                                        <option>Modul 1</option>
                                                        <option>Modul 2</option>
                                                        <option>Modul 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <button onClick={this.handleShow} className='btn btn-sm mt-2' style={{backgroundColor:'#3D506B',color:'white',width:'255px'}}>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className='card'>
                                <div style={{color:'white',backgroundColor:'#3D506B',borderRadius:'5px 5px 0 0'}} className='card-header'>
                                    <h3>Riwayat Absensi 13011XXXXX</h3>
                                </div>
                                <div className='card-body'>
                                    <div className='container-fluid'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <select className='form-control mt-3 text-center' style={{color:'white',backgroundColor:'#3D506B',textAlignLast:'center'}}>
                                                    <option>JARKOM</option>
                                                    <option>APPL</option>
                                                    <option>DAP</option>
                                                    <option>PBO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <br>
                                        </br>
                                        <div className='row'>
                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">MODUL</th>
                                                        <th scope="col">SESI</th>
                                                        <th scope="col">KELAS</th>
                                                        <th scope="col">AKSI</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>9.30-12.30</td>
                                                        <td>IF-41-XX</td>
                                                        <td>Hadir</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>9.30-12.30</td>
                                                        <td>IF-41-XX</td>
                                                        <td>Hadir</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>9.30-12.30</td>
                                                        <td>IF-41-XX</td>
                                                        <td>Hadir</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>9.30-12.30</td>
                                                        <td>IF-41-XX</td>
                                                        <td>Alfa</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                        <Modal.Body>Selamat Absen Telah Terinput</Modal.Body>
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
                <Footer/>
            </section>
         );
    }
}
 
export default InputAbsen;
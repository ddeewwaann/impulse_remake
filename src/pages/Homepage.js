import React, { Component } from 'react';
import Navbar2 from '../components/Navbar2';
import Navbar3 from '../components/Navbar3';
//import * as CanvasJSReact from '../canva/canvasjs.react';

//var CanvasJSReact = require('../canva/canvasjs.react');
import { CanvasJS } from '../canva/canvasjs.react';
import { CanvasJSChart} from '../canva/canvasjs.react';
import Footer from '../components/Footer';

class Homepage extends Component {
    state = {  }
    render() { 
        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: ""
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				color : '#3D506B' ,
				dataPoints: [
					{ label: 'MODUL 1', y: 71 },
					{ label: 'MODUL 2', y: 51 },
					{ label: 'MODUL 3', y: 90 },
					{ label: 'MODUL 4', y: 81 },
					{ label: 'MODUL 5', y: 51 },
					{ label: 'MODUL 6', y: 51 },
					{ label: 'MODUL 7', y: 51 }

				]
			}]
		}
        return ( 
            <section>
                <Navbar2/>
                <Navbar3/>
                <br/>
                <div className='container-fluid'>
                    <h3 className='text-center' style={{color:'#3D506B'}}>Grafik Nilai</h3>
                    <div className='row'>
                        <div className='col-8 mx-auto'>
                            <div className='card'>
                                <div style={{color:'white',backgroundColor:'#3D506B',borderRadius:'5px 5px 0 0'}} className='card-header col-12'>
                                    <h4>Statistik Nilai 13011XXXX</h4>
                                </div>
                                <div className='card-body'>
                                <CanvasJSChart options = {options}/>
                                </div>
                            </div>
                        </div>
                    </div>
					<div className='row'>
						<div className='col-8 mx-auto'>
							<table className='table' style={{fontSize:'15px'}}>
								<thead style={{backgroundColor:'#3D506B',color:'white'}}>
									<tr>
										<th scope='col'>Asisten Praktikum 1</th>
										<th scope='col'>Asisten Praktikum 2</th>
										<th scope='col'>Tanggal</th>
										<th scope='col'>Modul Praktikum</th>
										<th scope='col' colSpan='4'>Nilai</th>
									</tr>
									<tr>
										<th scope='col' colSpan='4'></th>
										<th scope='col'>Tes Awal</th>
										<th scope='col'>Jurnal</th>
										<th scope='col'>Tes Akhir</th>
										<th scope='col'>Skill</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Dewan</td>
										<td>-</td>
										<td>DD/MM/YY</td>
										<td>MODUL1</td>
										<td>100</td>
										<td>100</td>
										<td>100</td>
										<td>100</td>
									</tr>
									<tr>
										<td>Temennya Dewan</td>
										<td>-</td>
										<td>DD/MM/YY</td>
										<td>MODUL1</td>
										<td>100</td>
										<td>100</td>
										<td>100</td>
										<td>100</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
                </div>
				<Footer />
            </section>
         );
    }
}
 
export default Homepage;
import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer style={{backgroundColor:'#3D506B',color:'white'}} className="page-footer font-small">
                <div className="footer-copyright text-center py-3">© 2013 Copyright:
                    <a href='/'> IMPULSE</a>
                </div>
            </footer>
         );
    }
}
 
export default Footer;
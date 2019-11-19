// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }


// function App() {
//   return (
//     <h1>Haii</h1>
//   ); 
// }

// export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, {Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className="wrapper">
        <div className="header"> 
          <div className="navbar"> 
            <div className="logo"> 
              <img className="imgfluid" src={require('../src/logo/babastudio-logo.png')} />
            </div>

            <div className="menu"> 
              <ul> 
                <li><a>Home</a></li>
                <li><a>Blogs</a></li>
                <li><a>Galery</a></li>
                <li><a>Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* end header*/}
        <div className="slider"> 
          <div className="slidercontent"> 
            <img className="imageslider" src={require('../src/images/banner-desktop.jpg')}/>
          </div>
        </div>
        {/* slider */}
        <h2 className="dataprestasi">Prestasi Murid Babastudio</h2>
        <div className="content"> 
          <div className="content-gambar"> 
            <div className="image"> 
              <img className="imagesliderr" src={require('../src/images/21cineplex.jpg')}/>
              <div className="contentimage"> 
                <h2 className="fontimage">www.cineplex.com</h2>
              </div>
            </div>

            <div className="image"> 
              <img className="imagesliderr" src={require('../src/images/bpn.jpg')}/>
              <div className="contentimage"> 
                <h2 className="fontimage">www.bpn.go.id</h2>
              </div>
            </div>

            <div className="image"> 
              <img className="imagesliderr" src={require('../src/images/republika.jpg')}/>
              <div className="contentimage"> 
                <h2 className="fontimage">www.republika.co.id</h2>
              </div>
            </div>
          </div>
          {/*end content gambar*/}

          <div className="content-gambar"> 
            <h2 className="dataprestasi">Tempat Kursus Babastudio</h2>
            <div className="content-yutube"> 
              <iframe width="560" height="315" src="https://www.youtube.com/embed/FwpClpkEElI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
            </div>
            <div className="content-map"> 
              <iframe width="560" height="315" src="https://goo.gl/maps/Du556djJWKZyL4p17" frameborder="0" width="550" height="300" frameborder="0" allowfullscreen=""> </iframe>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;


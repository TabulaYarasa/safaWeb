// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import HomePage from './HomePage';
// import AboutMe from './AboutMe';



// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<HomePage />}>

//           <Route  path="/aboutme" element={<AboutMe />} />

//         </Route>
//       </Routes>
//     </Router>
//   );
// }
import AboutMe from "./screens/AboutMe";
import HomePage from "./screens/HomePage";
import Yazilarim from "./screens/Yazilarim";
import Info from "./screens/Info";
import {Route, Routes} from "react-router-dom"

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/yazilarim" element={<Yazilarim />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

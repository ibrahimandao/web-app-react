import React  from 'react';
import './App.css';
import Etudiant from './components/Etudiant/Etudiant';
import {Route,Link,Routes,BrowserRouter as Router} from 'react-router-dom'
import Formation from './components/Formation/Formation';
import Formateur from './components/Formateur/Formateur';
import Module from './components/Module/Module';
import Planning from './components/Planning/Planning';
import AjoutEtudiant from './components/Etudiant/AjoutEtudiant';
import ModifierEtudiant from './components/Etudiant/ModifierEtudiant';
import ModifierFormation from './components/Formation/ModifierFormation';
import AjoutFormation from './components/Formation/AjoutFormation';
import ModifierFormateur from './components/Formateur/ModifierFormateur'
import AjoutFormateur from './components/Formateur/AjoutFormateur'

function App() {
  return (
    <div className='m-5'>
    <Router>
      <nav className="navbar navbar-expand navbar-brand">
        <ul className="navbar-nav">
          <li><Link  className="nav-link" to="/etudiant">Etudiant</Link></li>
          <li><Link  className="nav-link" to="/formation">Formation</Link></li>
          <li><Link  className="nav-link" to="/formateur">Formateur</Link></li>
          <li><Link  className="nav-link" to="/module">Module</Link></li>
          <li><Link  className="nav-link" to="/planning">Planning cours</Link></li>
        </ul>     
      </nav>
   
    <div className="container">        
          <Routes>
              <Route path="/etudiant" element={ <Etudiant />}/>
              <Route path="/formation" element={ <Formation />}/>
              <Route path="/formateur" element={ <Formateur />}/>
              <Route path="/module" element={ <Module />}/>
              <Route path="/planning" element={ <Planning />}/>

              <Route path="/AjoutEtudiant" element={ <AjoutEtudiant />}/>
              <Route path="/AjoutFormation" element={ <AjoutFormation />}/>
              <Route path="/AjoutFormateur" element={ <AjoutFormateur />}/>

              <Route path="/modifetudiant/:id" element={ <ModifierEtudiant />}/>
              <Route path="/modifformation/:id" element={ <ModifierFormation />} />
              <Route path="/modifformateur/:id" element={ <ModifierFormateur />} />
          </Routes>     
    </div>
    </Router>
    </div>
    
  );
}

export default App;

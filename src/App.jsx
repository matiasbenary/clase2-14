import "./App.css";
import reactLogo from "./assets/react.svg";
import Pepe from "./components/Button/Button";
import { Button1, Button2 as Chau } from "./components/Button2/Button2";
import { Button3, Button4 } from "./components/Button3/Button3";

function App() {
  const nombresGatos = [
    "Rodolfo",
    "Muzzarela",
    "Artilugia",
    "Wosito",
    "Calamardo",
  ];
  return (
    <>
      <h1>Hola</h1>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Hola como estas?</h1>

        {nombresGatos.map((nombre) => {
          return <Pepe pepe={nombre} bgColor="#3fe12a" color="#FFF"></Pepe>;
        })}

        {/* <Pepe pepe="aceptar" bgColor="#3fe12a" color="#FFF" /> */}
        <Pepe pepe="cancelar" bgColor="#ff0000" color="#FFF" />
        <Button1 />
        <Chau />
        <Button3 />
        <Button4></Button4>
        <div className="card">
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;

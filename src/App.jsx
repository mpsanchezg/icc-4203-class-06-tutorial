import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeQr from "./qr/HomeQr";

function App() {
  const [count, setCount] = useState(0);
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  useEffect(() => {
    const askCameraPermission = async () =>
      navigator.mediaDevices.getUserMedia({ video: true });

    askCameraPermission()
      .then((response) => {
        response?.getTracks().forEach((track) => {
          console.log("hola", track);
          track.stop();
        });
        setPermissionsGranted(true);
      })
      .catch((err) => {
        console.log(err);
        setPermissionsGranted(false)
      });
  }, [permissionsGranted, setPermissionsGranted]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <HomeQr cameraEnabled={permissionsGranted} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;

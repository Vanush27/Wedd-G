/** @format */

import { MainScreen } from "./modules/main-screen";

import AudioPlayer from "@components/audio/AudioPlayer";
import "./styles";

export const registerSW = async () => {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js"
    );

    return registration;
  }
};

function App() {
  return (
    <>
      <AudioPlayer />

      <MainScreen />
    </>
  );
}

export default App;

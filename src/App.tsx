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
      <AudioPlayer
        isInvitationOpen={true}
        onToggle={(state: boolean) => {
          console.log("Audio playing:", state);
        }}
      />

      <MainScreen />
    </>
  );
}

export default App;

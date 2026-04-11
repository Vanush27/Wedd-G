/** @format */

import { MainScreen } from "./modules/main-screen";

import AudioPlayer from "@components/audio/AudioPlayer";
import "./styles";

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

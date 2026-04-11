/** @format */

import { MainScreen } from "./modules/main-screen";

import AudioPlayer from "@components/audio/AudioPlayer";
import "./styles";

function App() {
  return (
    <>
      <AudioPlayer isInvitationOpen={true} />
      <MainScreen />
    </>
  );
}

export default App;

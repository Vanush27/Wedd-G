/** @format */

import { useEffect, useState } from "react";
import { MainScreen } from "./modules/main-screen";

import "./styles";
import AudioPlayer from "@components/audio/AudioPlayer";

function App() {
  const [isInvitationOpen, setInvitationOpen] = useState(true);

  useEffect(() => {
    const handleFirstScroll = () => {
      setInvitationOpen(true);

      // удаляем listener после первого срабатывания
      window.removeEventListener("scroll", handleFirstScroll);
    };

    window.addEventListener("scroll", handleFirstScroll);

    return () => {
      window.removeEventListener("scroll", handleFirstScroll);
    };
  }, []);

  return (
    <>
      <AudioPlayer isInvitationOpen={isInvitationOpen} />
      <MainScreen />
    </>
  );
}

export default App;

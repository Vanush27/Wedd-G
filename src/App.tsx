import { useCallback, useState } from "react";
import { MainScreen } from "./modules/main-screen";

import { WelcomeScreen } from "./modules/welcome-screen";
import { Vignette } from "../src/components";

import "./styles";

function App() {
  const [isInvitationOpen, setInvitationOpen] = useState(false);

  const [isLoadEnd, setIsLoadEnd] = useState(false);
  const onOpen = useCallback(() => setInvitationOpen(true), []);

  return (
    <>
      {isInvitationOpen ? (
        <div style={{ width: "100%" }}>
          {/* <AudioPlayer isInvitationOpen={isInvitationOpen} /> */}
          {isLoadEnd && <MainScreen />}
        </div>
      ) : (
        <>
          <Vignette onLoadEnd={() => setIsLoadEnd(true)} />
          <WelcomeScreen onOpen={onOpen} />
        </>
      )}
    </>
  );
}

export default App;

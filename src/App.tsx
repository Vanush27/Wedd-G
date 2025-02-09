import { useCallback, useState } from "react";
import { MainScreen } from "./modules/main-screen";

import { WelcomeScreen } from "./modules/welcome-screen";
import { AudioPlayer, Vignette } from "../src/components";

function App() {
  const [isInvitationOpen, setInvitationOpen] = useState(false);

  const [isLoadEnd, setIsLoadEnd] = useState(false);
  const onOpen = useCallback(() => setInvitationOpen(true), []);

  return (
    <>
      {isInvitationOpen ? (
        <div style={{ width: "100%" }}>
          <AudioPlayer isInvitationOpen={isInvitationOpen} />
          {isLoadEnd && <MainScreen />}
        </div>
      ) : (
        <>
          <Vignette onLoadEnd={() => setIsLoadEnd(true)} />
          <WelcomeScreen onOpen={onOpen} />
        </>
        // <FrontPageInvitation setInvitationOpen={setInvitationOpen} />
      )}

      {/* {!isLoadEnd && <Vignette onLoadEnd={() => setIsLoadEnd(true)} />} */}
      {/* {!isOpened && <WelcomeScreen onOpen={onOpen} />} */}
      {/* {isLoadEnd && <MainScreen isOpened={isOpened} />} */}
    </>
  );
}

export default App;

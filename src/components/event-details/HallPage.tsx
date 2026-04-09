/** @format */

import victoriaHall from "@assets/images/saxmosavanq.png";
import MapDetalis from "@ui-kit/MapDetalis/MapDetalis";

const HallPage = () => {
  return (
    <div>
      <MapDetalis
        url={"https://yandex.ru/map-widget/v1/-/CPfarEn-"}
        name={"Victoria Wedding Hall"}
        address={"ք.Գյումրի, Մովսես Խորենացի փող., 10/3"}
        time={"16:30"}
        img={victoriaHall}
      />
    </div>
  );
};

export default HallPage;

import React from "react";

import gayane_vanq from "@assets/images/Gayane_charch.jpg";
import MapDetalis from "@ui-kit/MapDetalis/MapDetalis";

const ChurchPage: React.FC = () => {
  return (
    <div>
      <MapDetalis
        url={"https://yandex.ru/map-widget/v1/-/CHqQyK6O"}
        name={"Սուրբ Գայանե եկեղեցի"}
        address={"Էջմիածին քաղաք"}
        time={"14:00"}
        img={gayane_vanq}
      />
    </div>
  );
};

export default ChurchPage;

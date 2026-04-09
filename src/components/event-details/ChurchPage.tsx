/** @format */

import React from "react";

import saxmosavanq from "@assets/icons/saxm.svg";
import MapDetalis from "@ui-kit/MapDetalis/MapDetalis";

const ChurchPage: React.FC = () => {
  return (
    <div>
      <MapDetalis
        url={"https://yandex.ru/map-widget/v1/-/CPq-YZ3f"}
        name={"Սաղմոսավանքի վանական համալիր"}
        address={"Սաղմոսավան գյուղ"}
        time={"13:20"}
        img={saxmosavanq}
      />
    </div>
  );
};

export default ChurchPage;

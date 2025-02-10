import lianna_restoran from "@assets/images/garden_hall.jpg";
import MapDetalis from "@ui-kit/MapDetalis/MapDetalis";

const HallPage = () => {
  return (
    <div>
      <MapDetalis
        url={"https://yandex.ru/map-widget/v1/-/CHqQyDka"}
        name={"Lianna Garden Hall"}
        address={"Արմավիրի մարզ, գ.Փարաքար Երիտասարդական փող., 34 շենք"}
        time={"17:30 - 00:00"}
        img={lianna_restoran}
      />
    </div>
  );
};

export default HallPage;

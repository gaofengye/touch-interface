import React, { FC, memo, useEffect } from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { SILVER_THEME } from "./constants";
import styles from "./styles.module.scss";

declare const window: any;

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

const GMap: FC = memo(() => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          zoom: 4,
          center: { lat: -25.363, lng: 131.044 },
          fullscreenControl: false,
          styles: SILVER_THEME,
        })
      );
    }
  }, [ref, map]);

  return <div ref={ref} id="map" className={styles.map} />;
});

const Map: FC<Props> = (props) => {
  const render = (status: Status) => {
    switch (status) {
      case Status.SUCCESS:
        return (
          <>
            <GMap />
            {React.Children.map(props.children, (child) => {
              if (React.isValidElement(child)) {
                // set the map prop on the child component
                // @ts-ignore
                return React.cloneElement(child, { map });
              }
            })}
          </>
        );

      default:
        return <></>;
    }
  };

  return (
    <Wrapper
      apiKey={"AIzaSyDtc6GOEgh9ewrPRuSKMzcNktoLQZoWQzo"}
      render={render}
    />
  );
};

export default memo(Map);

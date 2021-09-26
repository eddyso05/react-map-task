import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { useSelector, RootStateOrAny } from "react-redux";

import { geojson } from "../../utils/location";
import { Drivers } from "../../interface";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWRkeXNpb3cwNTMwIiwiYSI6ImNrdHpqbDZpbzM4NzYycHBpdGRwZDVjYWYifQ.IqQ3tyCdyxNhhDyKsn4wKw";

const Map = () => {
  const mapContainerRef = useRef(null);
  const long = useSelector((state: RootStateOrAny) => state.root.map.longitude);
  const lat = useSelector((state: RootStateOrAny) => state.root.map.latitude);
  const zoom = useSelector((state: RootStateOrAny) => state.root.map.zoom);
  const drivers = useSelector(
    (state: RootStateOrAny) => state.root.map.data.drivers
  );
  const theme = useSelector((state: RootStateOrAny) => state.root.map.theme);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current || "",
      style: `mapbox://styles/mapbox/${theme}`,
      center: [long, lat],
      zoom: zoom,
      minZoom: 10,
    });

    for (const marker of geojson.features) {
      // Create a DOM element for each marker.
      const el = document.createElement("div");
      el.className = "logo-marker";
      el.style.backgroundImage = `url(assets/logo-marker.png)`;

      // Add markers to the map.
      new mapboxgl.Marker(el)
        .setLngLat([marker.geometry.longitude, marker.geometry.latitude])
        .addTo(map);
    }

    if (drivers) {
      drivers.map((driver: Drivers) => {
        const el = document.createElement("div");
        el.className = "driver";
        el.style.backgroundImage = `url(assets/car.png)`;
        // Add markers to the map.
        new mapboxgl.Marker(el, {
          rotation: driver.location.bearing,
        })
          .setLngLat([driver.location.longitude, driver.location.latitude])
          .addTo(map);
        return true;
      });
    }
    return () => map.remove();
  }, [drivers, theme]);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div
        className="map-container"
        ref={mapContainerRef}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
    </div>
  );
};

export default Map;

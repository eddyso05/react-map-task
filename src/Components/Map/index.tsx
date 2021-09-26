import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { useSelector, RootStateOrAny } from "react-redux";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWRkeXNpb3cwNTMwIiwiYSI6ImNrdHpqbDZpbzM4NzYycHBpdGRwZDVjYWYifQ.IqQ3tyCdyxNhhDyKsn4wKw";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        iconSize: [60, 60],
      },
      geometry: {
        type: "Point",
        longtitude: 103.8522982,
        latitude: 1.285194,
      },
    },
    {
      type: "Feature",
      properties: {
        iconSize: [60, 60],
      },
      geometry: {
        type: "Point",
        longtitude: -0.0964509,
        latitude: 51.5049375,
      },
    },
  ],
};

const Map = () => {
  const mapContainerRef = useRef(null);
  const long = useSelector(
    (state: RootStateOrAny) => state.root.map.longtitude
  );
  const lat = useSelector((state: RootStateOrAny) => state.root.map.latitude);
  const zoom = useSelector((state: RootStateOrAny) => state.root.map.zoom);
  let map: any;
  // Initialize map when component mounts
  useEffect(() => {
    map = new mapboxgl.Map({
      container: mapContainerRef.current || "",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [long, lat],
      zoom: zoom,
    });

    for (const marker of geojson.features) {
      // Create a DOM element for each marker.
      const el = document.createElement("div");
      el.className = "logo-marker";
      el.style.backgroundImage = `url(assets/logo-marker.png)`;

      // Add markers to the map.
      new mapboxgl.Marker(el)
        .setLngLat([marker.geometry.longtitude, marker.geometry.latitude])
        .addTo(map);
    }

    // Clean up on unmount
    return () => map.remove();
  }, []);

  // useEffect(() => {
  //   map.flyTo({
  //     center: [long, lat],
  //     essential: true,
  //   });
  // }, [long, lat, map]);

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

import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import ReactDOM from "react-dom";
import Tooltip from "../Tooltip";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWRkeXNpb3cwNTMwIiwiYSI6ImNrdHpqbDZpbzM4NzYycHBpdGRwZDVjYWYifQ.IqQ3tyCdyxNhhDyKsn4wKw";

const Map = () => {
  const [lng, setLng] = useState(103.8522982);
  const [lat, setLat] = useState(1.285194);
  const [zoom, setZoom] = useState(15);
  const mapContainerRef = useRef(null);
  // const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current || "",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // change cursor to pointer when user hovers over a clickable feature
    map.on("mouseenter", (e) => {
      if (e.features.length) {
        map.getCanvas().style.cursor = "pointer";
      }
    });

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on("mouseleave", () => {
      map.getCanvas().style.cursor = "";
    });

    // add tooltip when users mouse move over a point
    map.on("mousemove", (e: any) => {
      const features = map.queryRenderedFeatures(e.point);
      if (features.length) {
        const feature = features[0];

        // Create tooltip node
        const tooltipNode = document.createElement("div");
        ReactDOM.render(<Tooltip feature={feature} />, tooltipNode);

        // Set tooltip on map
        // tooltipRef.current
        //   .setLngLat(e.lngLat)
        //   .setDOMContent(tooltipNode)
        //   .addTo(map);
      }
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

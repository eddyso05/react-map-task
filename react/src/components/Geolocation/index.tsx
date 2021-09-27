import { useEffect } from "react";

const Geolocation = () => {
  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos: any) {
      var crd = pos.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    if ("geolocation" in navigator) {
      console.log(
        navigator.geolocation.getCurrentPosition(success, error, options)
      );
    } else {
      console.log("Not Available");
    }
  }, []);
};

export default Geolocation;

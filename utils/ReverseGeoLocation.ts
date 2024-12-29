import axios from "axios";

export const ReverseGeocoding = async (latitude: number, longitude: number) => {
  const URI = `https://nominatim.openstreetmap.org/reverse`;
  const response = await axios.get<any>(URI, {
    params: {
      format: "json",
      lat: latitude,
      lon: longitude,
    },
  });
  const data = response.data;
  //return a string of the place name but not that long short name
  return (
    data.display_name.split(",")[0] +
    ", " +
    data.display_name.split(",")[1] +
    ", " +
    data.display_name.split(",")[2]
  );
};

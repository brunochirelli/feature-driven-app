const baseUrl = "https://swapi.dev/api/vehicles";

const getVehicle = async (id) => {
  const url = `${baseUrl}/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export { getVehicle };

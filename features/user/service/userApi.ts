const baseUrl = "https://swapi.dev/api/peoples";

const getUser = async (id) => {
  const url = `${baseUrl}/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export { getUser };

import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '9e2eba4ed5msh6ebff81f9e1ea2dp1b73f6jsna755fd913c82'
//   }

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "9e2eba4ed5msh6ebff81f9e1ea2dp1b73f6jsna755fd913c82",
    },
  });

  return data;
};

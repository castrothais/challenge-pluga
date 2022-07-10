import api from './axiosApi';

const getTools = async () => {
  try {
    const response = await api.get('/ferramentas_search.json');
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getTools;

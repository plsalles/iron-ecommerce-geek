import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000',
    });
  }

  listProducts = async () => {
    try {
      const { data } = await this.api.get('/api/public/products');
      
      return data;
    } catch (error) {
      console.log(error);

      return [];  
    }
  }
}

export default new ApiService();

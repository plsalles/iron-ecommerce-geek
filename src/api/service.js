import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000',
    });

    this.api.interceptors.request.use(config => {
      if(config.url.includes('public')) return config;

      return config;
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
  };

  subscribeUser = async values => {
    try {
      const { data } = await this.api.post('/api/public/auth/signup', values);
      
      return data;
    } catch (err) {
      return err.message;
    }
  };

  loginUser = async values => {
    try {
      const { data } = await this.api.post('/api/public/auth/login', values);
      
      return data;
    } catch (err) {
      return err.message;
    }
  };

  getUserInfo = async () => {
    try {
      const loggedInfo = JSON.parse(localStorage.getItem('logged-user-info'));
      const { type, token, refresh_token } = loggedInfo;

      const { data } = await this.api.get('/api/private/user', { headers: { Authorization: `${type} ${token}` } });
      console.log(data)
      return data.user || {};
    } catch (err) {
      if (err.message.includes('401')) {
        console.log('caiu no catch do serviço!!')
        localStorage.removeItem('logged-user-info');
        window.location = '/login';
      }
    }
  };
}

export default new ApiService();

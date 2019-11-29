import axios from 'axios';

export class ProductsRepository {
  
  url = "https://api.johnlawrimore.com/store/products";
  config = {
    headers: {
      Authorization: 'ethan'
    }
  };

  getProducts() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}`, this.config)
        .then(x => resolve(x.data))
        .catch(x => {
          alert(x);
          reject();
        });
    });
  }

  getProduct(productId) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/${productId}`, this.config)
        .then(x => resolve(x.data))
        .catch(x => {
          alert(x);
          reject();
        });
    });
  }

  addReview(productId, review) {
    return new Promise((resolve, reject) => {
      axios.post(`${this.url}/${productId}/reviews`, review, this.config)
        .then(x => resolve(x.data))
        .catch(x => {
          alert(x);
          reject();
        });
    });
  }

  
}
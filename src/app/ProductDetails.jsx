import React from 'react';
import { ProductsRepository } from '../api';
import { ReviewList } from './ReviewList';
import { ReviewForm } from './ReviewForm';


export class ProductDetails extends React.Component {

  productsRepository = new ProductsRepository();

  state = {
    product: {
      reviews: []
    }
  }

  render() {
    return (
      <>
        <div>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Tasty Snacks</a>
              </li>
              <li className="breadcrumb-item active">{this.state.product.name}</li>
            </ol>
          </nav>
          <div className="container p-5 bg-light">
            <div className="d-flex">
              <div className="mr-4">
                <img className="product-image" src={"http://johnlawrimore.com/smu/" + this.state.product.imageName}  />
              </div>
              <div>
                <h1 className="font-weight-light">{this.state.product.name}</h1>
                <span className="badge badge-primary badge-lg">
                  ${this.state.product.price}
                </span>
                <p className="text-muted mt-4">{this.state.product.description}</p>
              </div>
            </div>
          </div>
          <ReviewList reviews={ this.state.product.reviews }/>
          <ReviewForm productId={this.state.product.id} reviews={ this.state.product.reviews }/>
        </div>
      </>
    );
  }

  componentDidMount() {
    let productId = this.props.match.params.productId;
    if (productId) {
      this.productsRepository.getProduct(productId)
        .then(product => this.setState({product}));
    }
  }

}
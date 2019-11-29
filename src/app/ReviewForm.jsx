import React from 'react';
import { ProductsRepository } from '../api';
import { Redirect } from 'react-router-dom';

export class ReviewForm extends React.Component {
  
  productsRepository = new ProductsRepository();

  state = {
    rating: 0,
    userName: '',
    comment: '',
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
          pathname: this.state.redirect,
          state: {
              message: this.state.message
          }
      }} />
    }

    return (
      <>
        <div className="card">
          <div className="card-header bg-secondary text-white">Add Review</div>
          <div className="card-body">
            <form>
              <div className="d-flex">
                <div className="form-group user-name-container">
                  <label htmlFor="userName">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userName"
                    id="userName"
                    value={this.state.userName}
                    onChange={e => this.setState({ userName: e.target.value })}
                  />
                </div>
                <div className="form-group ml-4">
                  <label htmlFor="rating">Rating</label>
                  <div className="d-flex">
                    <select
                      className="form-control ratings-container"
                      name="rating"
                      value={this.state.rating}
                      onChange={e => this.setState({ rating: e.target.value })}
                    >
                      <option value="-1"></option>
                      <option value="1">1 star</option>
                      <option value="2">2 stars</option>
                      <option value="3">3 stars</option>
                      <option value="4">4 stars</option>
                      <option value="5">5 stars</option>
                    </select>
                    &nbsp;{" "}
                    {[1, 2, 3, 4, 5].map(n => (
                      <i
                        key={n}
                        className={
                          n > this.state.rating ? "empty-star" : "full-star"
                        }
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="review">Comment</label>
                <textarea
                  className="form-control"
                  name="review"
                  id="review"
                  cols="30"
                  rows="5"
                  value={this.state.comment}
                  onChange={e => this.setState({ comment: e.target.value })}
                ></textarea>
              </div>
            </form>
            <button className="btn btn-primary"
              onClick={ e => this.onSubmit() }>
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }

  onSubmit() {
    var onSaveComplete = () => {
      this.setState({ redirect: `/product/${this.props.productId}` })
    };

    this.setState({
      date: Date(),
      id: this.props.reviews.length,
      productId: this.props.productId
    })
    
    this.productsRepository
        .addReview(this.props.productId, this.state).then(onSaveComplete);
    }
}
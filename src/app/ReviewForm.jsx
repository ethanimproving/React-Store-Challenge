import React from 'react';
import { AccountsRepository } from '../api';

export class ReviewForm extends React.Component {

  render() {
    return (
      <>
        <div class="card">
          <div class="card-header bg-secondary text-white">Add Review</div>
          <div class="card-body">
            <form>
              <div class="d-flex">
                <div class="form-group user-name-container">
                  <label for="userName">Your Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="userName"
                    id="userName"
                  />
                </div>
                <div class="form-group ml-4">
                  <label for="rating">Rating</label>
                  <div class="d-flex">
                    <select
                      class="form-control ratings-container"
                      name="rating"
                    >
                      <option value="-1"></option>
                      <option value="1">1 star</option>
                      <option value="2">2 stars</option>
                      <option value="3">3 stars</option>
                      <option value="4">4 stars</option>
                      <option value="5">5 stars</option>
                    </select>
                    &nbsp; [[RATING]]
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="review">Comment</label>
                <textarea
                  class="form-control"
                  name="review"
                  id="review"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </form>
            <button class="btn btn-primary">Submit</button>
          </div>
        </div>
      </>
    );
  }
}
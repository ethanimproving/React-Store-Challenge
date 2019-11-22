import React from 'react';


export class ProductDetails extends React.Component {

  render() {
    return (
      <>
        <div>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Tasty Snacks</a>
              </li>
              <li class="breadcrumb-item active">[[PRODUCT_NAME]]</li>
            </ol>
          </nav>
          <div class="container p-5 bg-light">
            <div class="d-flex">
              <div class="mr-4">
                <img class="product-image" src="[[PRODUCT_IMAGE_URL]]" />
              </div>
              <div>
                <h1 class="font-weight-light">[[PRODUCT_NAME]]</h1>
                <span class="badge badge-primary badge-lg">
                  $[[PRODUCT_PRICE]]
                </span>
                <p class="text-muted mt-4">[[PRODUCT_DESCRIPTION]]</p>
              </div>
            </div>
          </div>
          [[REVIEW_LIST]] [[REVIEW_FORM]]
        </div>
      </>
    );
  }

}
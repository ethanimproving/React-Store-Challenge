import React from 'react';

export const ReviewList = props => (
         <>
           <div className="mt-3">
             <div className="d-flex">
               <h4>Product Reviews</h4>
               <h4 className="ml-2 text-muted">{props.reviews.length}</h4>
             </div>
             <div className="mb-4 p-3 bg-light text-muted">
               Be the first to add a review!
             </div>
             {props.reviews.map((review, i) => (
               <div key={i} className="card mb-3 bg-light">
                 <div className="card-header">
                   <span className="stars">
                    {
                      [1, 2, 3, 4, 5].map(n => (<i key={n} className={(n > review.rating ? 'empty-star' : 'full-star')}></i>))
                    }
                   </span>
                 </div>
                 <div className="card-body">
                   <div>
                     <div className="d-flex justify-content-between mb-2 text-muted">
                       <div>{review.userName}</div>
                       <div>{review.date}</div>
                     </div>
                     <div>"{review.comment}"</div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </>
       );
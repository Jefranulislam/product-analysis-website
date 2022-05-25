import React from 'react';
import useReview from '../../hooks/useReview';
import Singlereview from '../Signlereview/Singlereview';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className=''>
            <h2 className='text-center text-2xl bold text-sky-800 py-4'>What our Customers Say!</h2>
            <div className="flex gap-10">
                {reviews.map(review => <Singlereview
                    key={review.key}
                    review={review}
                ></Singlereview>)}
            </div>
        </div>
    );
};

export default Reviews;
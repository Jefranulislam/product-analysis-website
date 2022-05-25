import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Singlereview from '../Signlereview/Singlereview';


const Home = () => {
    const [reviews, setReviews] = useReview();
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex gap-y-8 p-8'>
                <div className="flex flex-1 flex-col items-center justify-center ">
                    <p>New</p>
                    <img className='h-6 w-24 items-center inline' src="https://www.apple.com/v/iphone/home/bh/images/overview/hero/iphone_se_logo__ii1n5sjcmci2_large.jpg" alt="" />
                    <h2 className='p-4 text-5xl text-center bold text-sky-500'>Love the power. <br />
                        Love the price.</h2>
                    <button className='px-4 py-2 bg-sky-500 text-white border rounded-2xl'>Buy</button>
                </div>
                <div className="flex flex-1 justify-center ">
                    <img className='w-72 cover ' src="https://www.apple.com/v/iphone/home/bh/images/overview/hero/iphone_se_hero__gd586pazxqqa_large.jpg" alt="" />
                </div>
            </div>
            <div>
                <h2 className='text-center text-3xl bold underline'>Review Section
                </h2>
                <div className="flex gap-5 justify-center">
                    {reviews.map(review => <Singlereview key={review.key}
                        review={review}
                    ></Singlereview>)}
                </div>
                <div className='text-center p-6'>
                    <button className='p-4 px-7 bg-sky-400 rounded-md text-white ' onChange={() => navigate('/reviews')}>Sell All Review </button>
                </div>
            </div>
        </div>

    );
};

export default Home;
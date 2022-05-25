import React from 'react';

const Singlereview = (props) => {
    const { profile_name, review_text, review_title, review_rating } = props.review;
    return (
        <div className='w-80'>
            <div className="rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800">

                <div className="w-full mb-10">
                    <div className="text-4xl text-indigo-500 text-left leading-tight h-3">“</div>
                    <p className="text-2xl text-gray-600 text-center px-5">
                        {review_title}
                    </p>
                    <p className='text-gray-400 text-center'>
                        {review_text}
                    </p>
                    <div className="text-4xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                </div>
                <div className=" w-full">
                    <p className="text-md text-indigo-500 font-bold text-center">
                        {profile_name}
                    </p>
                    <p className="text-xs text-gray-500 text-center">
                        {review_rating}
                    </p>
                </div>

            </div>
        </div>


    );
};

export default Singlereview;
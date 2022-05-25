import React from 'react';


const Home = () => {
    return (
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
    );
};

export default Home;
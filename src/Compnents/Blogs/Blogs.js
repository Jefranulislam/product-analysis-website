import React from 'react';

const Blogs = () => {
    return (
        <div className='justify-center'>
            <div className="p-10 w-4/6 m-5 border-0 rounded-lg bg-white shadow-lg">
                <h2 className='text-blue-500 text-xl' > What is Context API?</h2>
                <p>Thats one of the best concepts about React—you can create a bunch of components and have a fully maintainable and concise application, without having to create a super huge component to deal with your whole application.</p>
            </div>
            <div className="p-10 w-4/6 m-5 border-0 rounded-lg bg-white shadow-lg">
                <h2 className='text-blue-500 text-xl' > Inline vs Inline-Block Display</h2>
                <p>Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins  paddings are not respected, and with display: inline-block they are.

                    Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn’t sit next to other elements.</p>
            </div>

        </div>
    );
};

export default Blogs;
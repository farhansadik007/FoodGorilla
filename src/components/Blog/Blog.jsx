import React from 'react';

const Blog = () => {
    return (
        <div className='flex flex-col items-center text-center my-36'>
            <div className='w-9/12 mb-24'>
                <h2 className='text-4xl font-bold mb-8'>The differences between uncontrolled and controlled components</h2>
                <p className='text-2xl'>Controlled components are those who have their state and behavior controlled by the parent component. On the other hand, uncontrolled components are manage their state by own.</p>
            </div>
            <div className='w-9/12 mb-24'>
                <h2 className='text-4xl font-bold mb-8'>How to validate React props using PropTypes?</h2>
                <p className='text-2xl'>PropTypes ensures the passed value is of the correct datatypes. It helps us to validate the data receiving from props. <br /> By importing the PropTypes library we can validate React props.
                </p>
            </div>
            <div className='w-9/12 mb-24'>
                <h2 className='text-4xl font-bold mb-8'>The difference between nodejs and express js</h2>
                <p className='text-2xl'>
                    1. Node js is runtime environment on the other hand Express js is a web framework build on Node js. <br />
                    2.Node js can be used to build desktop applications, cmd-line tools, web apps but in Express js we can build web apps.
                </p>
            </div>
            <div className='w-9/12 mb-24'>
                <h2 className='text-4xl font-bold mb-8'>What is a custom hook, and why will you create a custom hook?</h2>
                <p className='text-2xl'>
                    custom hook is a reusable function that contains logic and state can be shared across multiple components in react app. It allows us to hide complex logic from components. It also helps us to improve code reusablility.
                </p>
            </div>
        </div>
    );
};

export default Blog;
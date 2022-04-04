import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='question-container'>
            <div>
                <h3>Q: What is context API?</h3>
                <p>The React Context API can be define as a way for a React app to effectively produce global variables that can be used by any other component within the app.This is the alternative to prop drilling which means we don't need pass props from grandprantsto parents to child component respectively.Context API is generally used when some data needs to be accessible by other components at different nesting levels.Context API is also known as an easier, lighter approach to state management using Redux. It  holds the data and be the parent of all the components that might need that data</p>
            </div>
            <div>
                <h3>Q: What is semantic tag?</h3>
                <p>
                    Semantic tags are those tags whose name can easily let you know which type of content take place in it.Semantic tag can easily represent their meanings to both the developer and the browser.All semantic tag in the code tells the developer and the browser what to do in each staep.Semantic tags are the new feature of HTML5. Semantic tags human-readable and easy to understand or grasp their meaning by humans since they are close to natural language.
                </p>
            </div>
            <div>
                <h3>Q:What is the difference among Inline,Block and Inline block elements?</h3>
                <p>
                    Inline elements occupy only enough width and allows other elements next to it which are inline but Block elements contains entire width available.Inline-block element acts like inline element but we can add padding and margins  on all four sides in this element.Inline elements can break among the lines but block element can  not break among the lines.The width of a inline element is small and several inline element can represent in a asingle line but width of block element is not so small like inline element.Inline elements stored inside block elements and do not need any particular space. On the otherhand block element use all the space in the parent on cotainer so there will not be any space left for other files.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
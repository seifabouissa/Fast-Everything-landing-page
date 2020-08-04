import React from 'react';
import Runner from '../img/Runner.png';
import Social from './Social';

const Content = () => {
    return(
        <>
        <div className="box-1 box">
        </div>

        <div className="box-2 box">
        </div>

        <div className="box-3 box">
        </div>

        <div className="title-1">Fast</div>

        <div className="title-2">Everything</div>

        <div className="runner">
            <img src={Runner} alt="Runner"/>
        </div>

        <div className="content">
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button>Shop Now</button>

            <Social/>
        </div>
        </>
    )
}


export default Content;

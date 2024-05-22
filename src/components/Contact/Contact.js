import React from "react";
import "./Contact.css";
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill}  from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
const Contact = () => {
  return (
    <section className="c-wrapper" id="contact">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className=" flexColStart c-left">
          <span className="orangeText">Contact Information</span>
          <span className="primaryText">Available for Opportunities</span>
          <span className="secondaryText">
            I'm actively seeking new opportunities and am prepared to contribute
            my skills and experience to your projects. Feel free to reach out if
            you're interested in discussing further.
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
             <div className='flexStart row'>
                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                            <MdCall size={25}/>
                        </div>
                        <div className="flexColStart detail">
                           <span className="primaryText">call</span>
                           <span className="secondaryText">7291994633</span>
                        </div>
                    </div>
                   <div className="flexCenter button">Call Now</div>
                </div>
                {/* second mode */}
                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart detail">
                           <span className="primaryText">chat</span>
                           <span className="secondaryText">7291994633</span>
                        </div>
                    </div>
                   <div className="flexCenter button">Chat Now</div>
                </div>
             </div>
             {/* second row */}
             <div className='flexStart row'>
                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart detail">
                           <span className="primaryText">Video Call</span>
                           <span className="secondaryText">7291994633</span>
                        </div>
                    </div>
                   <div className="flexCenter button"> Video Call Now</div>
                </div>
                {/* second mode */}
                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                            <HiChatBubbleBottomCenter size={25}/>
                        </div>
                        <div className="flexColStart detail">
                           <span className="primaryText">message</span>
                           <span className="secondaryText">7291994633</span>
                        </div>
                    </div>
                   <div className="flexCenter button">Chat Now</div>
                </div>
             </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact3.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

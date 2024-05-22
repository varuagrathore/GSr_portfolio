import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from '../../utils/accordion'

const Value = () => {
  const [className, setClassName] = useState(null); // useState call at the top level

  return (
    <section className="v-wrapper" id="about">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./gsr2.jpg" className="new" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">More About Me</span>
          <span className="primaryText">Always ready to explore some new insights in datasets</span>
          <span className="secondaryText">Passionate about discovering patterns and trends</span>

          <Accordion className='accordion' allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {
                data.map((item,i)=>{
                    return(
                      <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                               <AccordionItemHeading>
                                <AccordionItemButton className="flexCenter accordionButton">
                                  <AccordionItemState>
                                    {({expanded})=>
                                    expanded
                                    ?setClassName('expanded')
                                    :setClassName('collapsed')}
                                  </AccordionItemState>
                                <div className="flexCenter icon">{item.icon}</div>
                                <span className="primaryText">{item.heading}</span>
                                <div className=" flexCenter icon">
                                    <MdOutlineArrowDropDown size={20}/>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel >
                              <p className="secondaryText">{item.detail}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    );
                })
            }
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

// import Accordion from "react-bootstrap/Accordion";

// function AccordionMenu({ items }) {
//   return (
//     <Accordion defaultActiveKey="0">
//       {items.map((item, index) => (
//         <Accordion.Item
//           key={index}
//           eventKey={index.toString()}
//           className="mb-3 rounded-pill"
//         >
//           <Accordion.Header>{item.title}</Accordion.Header>
//           <Accordion.Body>{item.content}</Accordion.Body>
//         </Accordion.Item>
//       ))}
//     </Accordion>
//   );
// }

// export default AccordionMenu;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function AccordionMenu({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const isItemActive = (index) => index === activeIndex;

  return (
    <div className="custom-accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${isItemActive(index) ? 'active' : ''}`}
          style={{marginBottom: "20px", borderColor: "white"}}
        >
          <div
            className="accordion-header"
            onClick={() => {
              setActiveIndex(isItemActive(index) ? null : index);
            }}
            style={{ color: 'white' }}
          >
            <span>{item.title}</span>
            <span
              className={`accordion-icon ${isItemActive(index) ? 'rotate' : ''}`}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </div>
          <div
            className="accordion-content"
            style={{
              maxHeight: isItemActive(index) ? '1000px' : '0',
              transition: `max-height ${isItemActive(index) ? '0.3s' : '0.1s'} ease-in-out`,
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordionMenu;


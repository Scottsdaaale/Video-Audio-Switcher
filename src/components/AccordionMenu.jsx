
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function AccordionMenu({ items }) {
  return (
    <Accordion defaultActiveKey="0" >
      {items.map((item, index) => (
        <Card key={index} >
          <Accordion.Item eventKey={index.toString()} >
            <Accordion.Header >{item.title}</Accordion.Header>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Item>
        </Card>
      ))}
    </Accordion>
  );
}

export default AccordionMenu;




















































// import React, { useState } from 'react';

// const Accordion = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const handleSectionClick = (sectionName) => {
//     if (activeSection === sectionName) {
//       // Clicking the active section again will close it.
//       setActiveSection(null);
//     } else {
//       setActiveSection(sectionName);
//     }
//   };

//   return (
//     <div>
//       <div className="accordion-section">
//         <div
//           className={`accordion-title ${activeSection === 'videos' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('videos')}
//         >
//           Videos
//         </div>
//         {activeSection === 'videos' && (
//           <div className="accordion-content">
//             hello
//           </div>
//         )}
//       </div>

//       <div className="accordion-section">
//         <div
//           className={`accordion-title ${activeSection === 'background' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('background')}
//         >
//           Background
//         </div>
//         {activeSection === 'background' && (
//           <div className="accordion-content">
//             bass
//           </div>
//         )}
//       </div>

//       <div className="accordion-section">
//         <div
//           className={`accordion-title ${activeSection === 'playlists' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('playlists')}
//         >
//           Playlists
//         </div>
//         {activeSection === 'playlists' && (
//           <div className="accordion-content">
//             {/* Add content for the Playlists section here */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Accordion;
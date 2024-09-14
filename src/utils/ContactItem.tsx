import React from 'react';

interface ContactItemProps {
 icon: string;
 text: string;
 value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, value }) => {
 return (
  <div className="contact-item">
   <span className={`icon ${icon}`}></span>
   <span className="text">{text}</span>
   <span className="value">{value}</span>
  </div>
 );
};

export default ContactItem;
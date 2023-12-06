// import React from 'react';
// import LogoBullets from '../../../assets/images/LogoBullets.svg';

const ListComponent = ({ plist = [] }) => {
  return (
    <div>
      <ul className="font-inter text-sm leading-[3.3rem] text-white">
        {plist.map((index) => (
          <li key={index.id}>{index.element}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;

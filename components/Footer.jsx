import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [footer, setFooter] = useState('');

  return (
    <div className="grid gird-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How AirBnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>AirBnb Plus</p>
        <p>AirBnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">News</h5>
        <p>HELIX RE</p>
        <p>Mporium</p>
        <p>CAPS</p>
        <p>Silicon Valley</p>
        <p>Is Best Show</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Places</h5>
        <p>Amend</p>
        <p>React</p>
        <p>Holliday</p>
        <p>Chris</p>
        <p>Fiji</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Visitors</h5>
        <p>London</p>
        <p>Jackson Hole</p>
        <p>Terminator</p>
        <p>Chicago Cubs</p>
        <p>Help Center</p>
      </div>
    </div>
  );
};

export default Footer;

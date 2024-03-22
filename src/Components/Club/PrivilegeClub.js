import React from 'react';
import PrivilegeLevel from './PrivilegeLevel';
import privilegeClubData from './PrivilegeClubData';

const PrivilegeClub = () => {
  return (
    <div className="bg-indigo-100 py-8">
      <div className="container mx-auto font">
        <h2 className="flex justify-center text-pink-950 text-3xl font-bold  font4 mb-8">Welcome to Our Privilege Club</h2>
        <p className="mb-2 text-lg text-center font-semibold font">
          Discover our exclusive membership tiers, each crafted to cater to unique travel preferences and needs.
        </p>
        <p className="text-black  text-center text-lg font-semibold mb-6">
          As a member of our Privilege Club, you'll enjoy a range of benefits tailored to enhance your travel experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {privilegeClubData.map((level) => (
            <PrivilegeLevel key={level.id} level={level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivilegeClub;

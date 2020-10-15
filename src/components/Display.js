import './DisplayList.css';
import React from 'react';
import ArtCard from './ArtCard';

const Display = ({artList}) => {
  //loop over artlist
  const renderList= artList.map(art => {
    return (
      <ArtCard key={art.objectID} art={art} />
    );
  });
  return (
    <div className="display-list">
      {renderList}
    </div>
  );

};

export default Display;


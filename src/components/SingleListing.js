import React from 'react';

const SingleListing = (props) => {
  console.log('SINGLELISTINGPROPS', props.singleItemInfo)
  return (
    <div className="image">
      <div className="image"><img className='houses' src={props.singleItemInfo.image_url} /></div>
      <p>{props.singleItemInfo.location}</p>
    </div>
  )
}

export default SingleListing

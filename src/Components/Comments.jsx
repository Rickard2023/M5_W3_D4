import React from 'react'

export default function Comments(props) {

    let title = props.title;
    let asin = props.asin;
    let value = props.value;
    if(value !== false && value !== true)
        value = false;
    
  return (
    value && (
        <p>
            Area Commenti
        </p>
    )
  );
}

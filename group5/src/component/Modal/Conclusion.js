import React from 'react';

import ReactPlayer from "react-player"

function Conclusion() {
  return (
    <div className="wrapper">
        
        <div className="hr">
        <h1>Introduction</h1>
          
<hr/>

<p> 
In order for AI to benefit the common good,
at the very least its design and deployment 
should avoid harms to fundamental
human values.International human rights 
provides a robustand global formulation of
 those values
    
 </p>   
<hr />
</div>
<div className="video">
<ReactPlayer
        url="https://www.youtube.com/watch?v=ErIEjpvAgck"
        width='100%'
          height='150%'
      />
     </div>


    </div>
  );
}

export default Conclusion;

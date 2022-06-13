import React from "react";

function Quotes({ quotes }) {
    return (
      quotes && (
        <div className='Quotes'>
          <img src={quotes.image} alt={quotes.character} />
          <ul><li>Quote: {quotes.quote}</li>
            <li>Name: {quotes.character}</li></ul>
        </div>
      )
    );
  }
/*quote
character
image
characterDirection
*/

export default Quotes;
import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <div className='col-6 p-5'>
          <img src='media/images/largestBroker.svg' alt='Awards Image'/>
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1>Largest stock broker in India</h1>
          <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div className='row'>
            <div className='col-6 text-start'>
              <ul>
                  <li>
                    <p>Future and Options</p>
                  </li>
                  <li>
                    <p>Commodities</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
              </ul>
            </div>

            <div className='col-6 text-start'>
              <ul>
                 <li>
                  <p>Stocks & IPOs</p>
                 </li>
                 <li>
                   <p>Direct Mutual funds</p>
                 </li>
                 <li>
                   <p>Bonds and Government Securities</p>
                 </li>
              </ul>
              
             </div>
             <img src='media/images/presslogos.png' alt='Press Logos'style={{width: '90%'}}></img>
          </div>
         
        </div>
    </div>
    </div>
  );
}

export default Awards


import "../styles/ClubActivities.css"



import arrowLeft from '../images/arrow-left.png';

import arrowRight from '../images/arrow-right.png';


import logo from '../images/leo_omega_logo.png';



export default function ClubActivities() {



    return (<>

        {/* <div className="vl">



            TEST
            asdad


        </div> */}

        <div className="info-container">

            <div className="info-box"
            >
                <img src={logo} className="App-logo" alt="logo" 
                />
                 
                <div className="">  <h3> Activity Title  </h3> </div>

                <div>    Short description here.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                    
            </div>

            <img src={arrowLeft} className="lifeline-arrow" alt="logo" />
            <div 
            style={{width:"33.333%"}}
            ></div>


        </div>



        <div className="info-container">

            <div 
            style={{width:"33.333%"}}
            ></div>

            <img src={arrowRight} className="lifeline-arrow" alt="logo" />
            
            
            <div className="info-box"
            >
                <img src={logo} className="App-logo" alt="logo" 
                />
                 
                <div className="">  <h3> Activity Title  </h3> </div>

                <div>    Short description here.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                    
            </div>


        </div>

        
        <div className="info-container">

            <div className="info-box"
                >
                <img src={logo} className="App-logo" alt="logo" 
                />
                 
                <div className="">  <h3> Activity Title  </h3> </div>

                <div>    Short description here.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                    
            </div>

            <img src={arrowLeft} className="lifeline-arrow" alt="logo" />
            <div 
            style={{width:"33.3333%"}}
            ></div>


        </div>


        {/* <div className="info-container-centered">

            <img src={arrowLeft} className="" alt="logo" 
            />

            
<img src={arrowLeft} className="" alt="logo" 
            />

<img src={arrowRight} className="" alt="logo" 
            />

        </div> */}



        

    </>)


}




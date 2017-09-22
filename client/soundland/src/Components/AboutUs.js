import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

class About extends Component {

  render (){
    return(
      <div>
        <Header/>

        <div class="about">
          <h2>The SoundLand Team</h2>

            <div class="team">
              <h3>Gary Chin</h3>
              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmsAAAAJDExNzQ5NTZiLWM0NzItNGRiNy05N2VjLWNiZTRmMGRhODliNQ.jpg" alt="Gary Chin"/>
              <Link to={"https://github.com/Gnyc1001"}>Gary's GitHub Page</Link>
              <p>Born and raised in central NJ.  Graduated from Pace University with a BBA in Finance.</p>
            </div>

            <div class="team">
              <h3>Stephanie Fung</h3>
              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAinAAAAJDQ3ZDBiNDNkLTBkMGQtNDhmMC1iMWNhLTVkYTRhYzZhOTVmZg.jpg" alt="Stephanie Fung"/>
              <Link to={"https://github.com/stephdfung"}>Stephanie's GitHub Page</Link>
              <p></p>
            </div>

            </div>
            <div class="team">
              <h3>Issac Grunwald</h3>
              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAXZAAAAJDJjYTMwMzNlLTkxMmMtNDM1Ni05MTJlLTI5M2I1ZWM5M2ZlOQ.jpg" alt="Issac Grunwald"/>
              <Link to={"https://github.com/issacg1"}>Issac's GitHub Page</Link>
              <p></p>
            </div>

            <div class="team">
              <h3>Yarden Hochman</h3>
              <img src="https://media.licdn.com/media/p/6/005/02a/234/316175c.jpg" alt="Yarden Hochman"/>
              <Link to={"https://github.com/yardenhochman"}>Yarden's GitHub Page </Link>
              <p></p>
            </div>
        <Footer />
      </div>
    );
   }
}

export default About;
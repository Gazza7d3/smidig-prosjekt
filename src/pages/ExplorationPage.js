import CharityCard from "../Components/CharityCard";
import icon from "../images/icon.jpeg"
import icon2 from "../images/bk.webp"
import hero from "../images/Hero.png"
import styled from 'styled-components';






function ExplorationPage() {
    return (
      <body>
        <main>
        <img style={ExploarationStyles.hero} src={hero} />
        <h1 style={{display: "flex", justifyContent: "center"}}>Explore Charities</h1>
        </main>

      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "1120px"}}>
            <div style={{display: "flex", flex: 4, flexWrap: "wrap", justifyContent: "center"}}>
                <CharityCard {...myElement}/>
                <CharityCard {...myElement}/>
                <CharityCard {...myNewElement}/>
                <CharityCard {...myNewElement}/>
                <CharityCard {...myNewElement}/>
                <CharityCard {...myNewElement}/>
              </div>
            </div>
          </div>
      </body>
    );
  }

  export default ExplorationPage;


  /* Elements */
  const myElement = {
    title: "Education 4All",
    description: "Our donation goal of building 10 more schools in Africa has been achieved. Meloria Impact are grateful for all...",
    daysleft: 11,
    completeness: 3,
    image: icon
  };
  
  const mySmallElement = { 
    title: "Building a water well in Kajone’n",
    description: "Kajone’n in West Africa needs a new water well for its inhabitants",
    moneygoal: 20000,
    moneyraised: 3500,
    image: icon2
  };

  const myNewElement = {
    title: "EAll",
    description: "Our dschools in Africa has be Impact are grateful for all...",
    daysleft: 15,
    completeness: 7,
    image: icon2
  }

  /* Styling */

  export const ExploarationStyles = {
    hero: {
      width: "100%",
      height: "50%",

      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative"
    }
  }
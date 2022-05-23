import CharityCard from "./Components/CharityCard";
import SmallCharityCard from "./Components/SmallCharityCard";
import icon from "./images/icon.jpeg"
import icon2 from "./images/bk.webp"
import ProfileHeaderComponent from "./Components/ProfileHeaderComponent";
import { ActionButton, NavButton } from "./Components/ButtonComponents";
import { BadgeCard } from "./Components/BadgeCard";





function App() {
  return (
    <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
    <BadgeCard badgetitle={"Insert Badge Title"}
    text={"This is an example description of what the badge represent"} 
    badgedate={"12/07/21"} 
    badgegiver={"Redd Cross"}>
    </BadgeCard>
    </div>
  );
}

export default App;









/* Charity Card Info */


//<CharityCard {...myElement}/> 
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
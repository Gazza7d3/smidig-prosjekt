import CharityCard from "./Components/CharityCard";
import SmallCharityCard from "./Components/SmallCharityCard";
import icon from "./images/icon.jpeg"
import icon2 from "./images/bk.webp"
import ProfileHeaderComponent from "./Components/ProfileHeaderComponent";
import { SubscriptionPlan } from "./Components/SubscriptionPlan";





function App() {
  return (
    <div style={{display: "flex", flex: 2, justifyContent: "center"}}>
        <SubscriptionPlan {...monthlySubscriptionPlan}/>
        <SubscriptionPlan {...yearlySubscriptionPlan}/>
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

const monthlySubscriptionPlan = {
  price: "10.49",
  duration: "Monthly",
  firstdot: "Access to every organisation", 
  seconddot: "Donation limit uncapped", 
  thirddot: "Donation statistics", 
  fourthdot: "Badges", 
  fifthdot: "Premium support"
}

const yearlySubscriptionPlan = {
  price: "89.99",
  duration: "Annually",
  firstdot: "Access to every organisation", 
  seconddot: "Donation limit uncapped", 
  thirddot: "Donation statistics", 
  fourthdot: "Badges", 
  fifthdot: "Premium support"
}

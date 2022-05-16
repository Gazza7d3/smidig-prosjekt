import CharityCard from "./components/CharityCard";
import SmallCharityCard from "./components/SmallCharityCard";
import icon from "./images/icon.jpeg"
import icon2 from "./images/bk.webp"





function App() {
  return (
    <div>
      <SmallCharityCard {...mySmallElement}/>
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
import CharityCard from "./components/CharityCard";
import icon from "./images/icon.jpeg"



function App() {
  const myElement = {
    name: "Ford", 
    title: "Education 4All",
    description: "Our donation goal of building 10 more schools in Africa has been achieved. Meloria Impact are grateful for all...",
    daysleft: 11,
    completeness: 3,
    image: icon
  };
  //<CharityCard name={myElement.name} title="ho"/>
  
  return (
    <div>
      <CharityCard {...myElement}/> 
    </div>
  );
}

export default App;

import CharityCard from "./components/CharityCard";


function App() {
  const myElement = {name: "Ford", title: "A"};
  //<CharityCard name={myElement.name} title="ho"/>
  
  return (
    <div>
      <CharityCard {...myElement}/> 
    </div>
  );
}

export default App;

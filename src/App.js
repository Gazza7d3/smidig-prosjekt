import CharityCard from "./components/CharityCard";


function App() {
  const myElement = {name: "Ford", title: "A"};
  
  return (
    <div>
      <CharityCard info={myElement.name}/>
    </div>
  );
}

export default App;

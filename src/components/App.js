import Nav from "./Nav"
import Hero from "./Hero"
import Card from "./Card"
import data from  "./Data"

function App () { 
  const myData = data.map(element => <Card 
    key = {element.id}
    {...element}
    />)
  return (
    <div>
        <Nav/>
        <Hero/>
        <div className="card-container">
            {myData}
        </div>
    </div>
  )

}

export default App
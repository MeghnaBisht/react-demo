import Navbar from './components/Navbar';
import Info from './components/Info';

function App(){
  const names=["meghna","vivek","jungkook","suga"]
  let day="monday"
  let year = "1999"
  let month = "october"

  return (
    <div>
      <Navbar/>
      <ul className="list-group">
        {
          names.map((name)=>{
            return <li key={name} className="list-group-item">{name}</li>
          })
        }
    </ul>
    <Info days={day} month={month} year = {year}/>
    </div>
  )
}

export default App
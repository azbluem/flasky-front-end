import "./App.css";
import BreakfastList from "./components/BreakfastList";
import {useState} from 'react'

const BreakfastObj = [
  {
    id:"1",
    name:"Cheese",
    desc:"Not breakfast",
    prep:"1",
    rating:"2",
    eaten:false,
    upvotes:0
  },
  {
    id:"2",
    name:"Muffin",
    desc:"Not breakfast",
    prep:"1",
    rating:"2",
    eaten:false,
    upvotes:0
  },
  {
    id:"3",
    name:"Oats",
    desc:"Not breakfast",
    prep:"2",
    rating:"2",
    eaten:false,
    upvotes:0
  },
  {
    id:"4",
    name:"Cheese and pickle sandwich",
    desc:"Is lunch",
    prep:"5",
    rating:"2",
    eaten:false,
    upvotes:0
  },
  {
    id:"5",
    name:"Muffin",
    desc:"Not lunch",
    prep:"1",
    rating:"1",
    eaten:false,
    upvotes:0
  },
  {
    id:"6",
    name:"Fried Chicken",
    desc:"mmm",
    prep:"35",
    rating:"4.5",
    eaten:false,
    upvotes:0
  }
]


function App() {
  const breakfastCopy = BreakfastObj.map(breakfast=> {return {...breakfast}})
  const [brekList,setBrekList] = useState(breakfastCopy)
  const name = "Cheetahs";
  console.log('App.js after Cheetahs')
  //we need to make a new array each change
  const isEaten = (id) => {
    const newBrekList = []
    for (const brek of brekList) {
      if (brek.id !==id) { 
        newBrekList.push(brek)
        }
      else {
        const oppositeEaten = !brek.eaten
        const newBrek = {
          ...brek
        }
        newBrek.eaten = oppositeEaten
        newBrekList.push(newBrek)
      }}
      
      setBrekList(newBrekList);
    }
    const upvoteMeal = (id) => {
      const newBrekList = []
      for (const brek of brekList) {
        if (brek.id !==id) { 
          // console.log(brek,id)
          newBrekList.push(brek)
          }
        else {
          const newBrek = {
            ...brek,
            upvotes:brek.upvotes+1
          }
          newBrekList.push(newBrek)
        }}
        
        setBrekList(newBrekList);
      }
  

  // 

  const brekFunctions = [isEaten,upvoteMeal]

  return (
    <div>
      <h1>{name}' Mystery Breakfast App</h1>
      <p>Pick a food to eat, you'll find out what it is once you've eaten it!</p>
      <BreakfastList list={brekList} functions={brekFunctions}/>
    </div>
  );
}

export default App;

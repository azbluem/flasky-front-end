import "./App.css";
import BreakfastList from "./components/BreakfastList";
import {useState} from 'react'

function App() {
  const name = "Cheetahs";
  const BreakfastObj = [
    {
      id:"1",
      name:"Cheese",
      desc:"Not breakfast",
      prep:"1",
      rating:"2"
    },
    {
      id:"2",
      name:"Muffin",
      desc:"Not breakfast",
      prep:"1",
      rating:"2"
    },
    {
      id:"3",
      name:"Oats",
      desc:"Not breakfast",
      prep:"2",
      rating:"2"
    }
  ]
  console.log('App.js')
  const LunchObj = [
    {
      id:"4",
      name:"Cheese and pickle sandwich",
      desc:"Is lunch",
      prep:"5",
      rating:"2"
    },
    {
      id:"5",
      name:"Muffin",
      desc:"Not lunch",
      prep:"1",
      rating:"1"
    },
    {
      id:"6",
      name:"Fried Chicken",
      desc:"mmm",
      prep:"35",
      rating:"4.5"
    }
  ]

  const [eatStatus,updateEatStatus] = useState(false)
  const [upvotes,increaseUpvotes] = useState(0)
  const [upvotebgColor,changeUpvoteBGColor] = useState('orange')
  const isEaten = (id) => {
    return updateEatStatus(!eatStatus)
  }
  const eatDict = {
    false:'available',
    true:'eaten'
  }
  const upvoteButton = (id) => {
   return [increaseUpvotes(upvotes+1), upvoteColorSelector(id)]
  }
  const upvoteColorSelector = (id) => {
    let upvoteColor
    switch (true){
      case upvotes>9:
        upvoteColor="limegreen"
        break;
      case upvotes>4:
        upvoteColor="yellow"
        break;
      default:
        upvoteColor="orange"
    };
    return changeUpvoteBGColor(upvoteColor)
  }
  const brekFunctions = [eatStatus, isEaten, eatDict, upvotes, upvoteButton,upvoteColorSelector]

  return (
    <div>
      <h1>{name}' Mystery Breakfast App</h1>
      <p>Pick a food to eat, you'll find out what it is once you've eaten it!</p>
      <BreakfastList list={BreakfastObj} functions={brekFunctions}/>
      <BreakfastList list={LunchObj} functions={brekFunctions}/>
    </div>
  );
}

export default App;

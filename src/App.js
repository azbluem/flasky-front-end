import "./App.css";
import BreakfastList from "./components/BreakfastList";
import NewBrekForm from "./components/newBrekForm";
import {useState, useEffect} from 'react'
import axios from "axios";

/*const BreakfastObj = [
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
*/


function App() {
  const APIURL = 'http://127.0.0.1:5000/breakfast'
  const [brekList,setBrekList] = useState([])
  
  const fetchAllBreks = () => {
    axios.get(APIURL)
    .then((response) => {
    // console.log(response)
    const brekDBCopy = response.data.map((breakfast) => {
      return {
        "name":breakfast.name,
        "id":breakfast.id,
        "prep":breakfast.prep_time,
        "rating":breakfast.rating,
        desc:"Is this a breakfast?",
        eaten:false,
        "upvotes":breakfast.upvotes ? breakfast.upvotes : 0
      }}) 
      setBrekList(brekDBCopy);
    }).catch((error) => {console.log(error)})}
  
  useEffect (fetchAllBreks, [])
  // const breakfastCopy = BreakfastObj.map(breakfast=> {return {...breakfast}})
  
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
        const newBrek = {
          ...brek,
          eaten:!brek.eaten
        }
        newBrekList.push(newBrek)
      }}
      
      setBrekList(newBrekList);
    }
  const upvoteMeal = (id) => {
    const newBrekList = []
    // const upvoteObj = {'upvotes':3}
    axios.patch(`${APIURL}/${id}/upvote`)
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

    const deleteMeal = (id) => {
    axios.delete(`${APIURL}/${id}`)
    .then(()=>{})
    .catch((error)=> {console.log(error)})
    const newBrekList = []
    for (const brek of brekList) {
      if (brek.id !==id) { 
        // console.log(brek,id)
        newBrekList.push(brek)
        }}
      setBrekList(newBrekList);
    }
  
const submitNewBrek = (brek) => {
  axios.post(APIURL,brek)
  .then((response)=>{
    fetchAllBreks();
      /*
  without API call
  const newBreks = [...brekList]
  const newBrekJSON = {
    ...brek,
    "id":response.data.id
  }
  newBreks.push(newBrekJSON)
  setBrekList(newBreks)
  */
  })
  .catch((error)=>console.log(error))

}
  // 

  const brekFunctions = [isEaten,upvoteMeal,deleteMeal]

  return (
    <div>
      <h1>{name}' Mystery Breakfast App</h1>
      <NewBrekForm addBrekCallbackFunc={submitNewBrek}/>
      <p>Pick a food to eat, you'll find out what it is once you've eaten it!</p>
      <BreakfastList list={brekList} functions={brekFunctions}/>
      
    </div>
  );
}

export default App;

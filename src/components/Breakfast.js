import "./Breakfast.css";
import PropTypes from 'prop-types'
import { useState } from "react";

const Breakfast = ({id,name,desc,prep,rating,eaten,upvotes,functions}) => {
  // const name = name;
  // const description = desc;
  // const prepTime = prep;
  // const rating = rating;
  // console.log('Breakfast')
  const [isEaten,upvoteMeal] = [...functions]
  // const updateEatStatus = isEaten(id)
  // const [increaseUpvotes] = [upvoteButton]
  // const changeUpvoteBGColor= upvoteColorSelector(id)
  console.log('Breakfast')

  const eatDict = {
    false:'available',
    true:'eaten'
  }
  // const [eatStatus,updateEatStatus] = useState(false)
  // const [upvotes,increaseUpvotes] = useState(0)
  const [upvotebgColor,changeUpvoteBGColor] = useState('orange')
  
  // const isEaten = () => {
  //   updateEatStatus(!eatStatus)
  // }
  
  
  // const upvoteButton = (id) => {
  //  increaseUpvotes(upvotes+1)
  //  upvoteColorSelector(id)
  // }
  const upvoteButton = () => {
    upvoteColorSelector()
    upvoteMeal(id)
  }
  const upvoteColorSelector = () => {
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
    changeUpvoteBGColor(upvoteColor)
  }
  console.log(id,eaten)

  return (
    <div className={eatDict[eaten]}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <p className="emphasizedText">Prep time: {prep} minutes</p>
      <p className="emphasizedText">Rating: {rating} stars</p>
      <button onClick={() => isEaten(id)}>Eat Me!</button>
      <button onClick={upvoteButton}>Upvote meal</button>
      <p className={upvotebgColor}>{upvotes}</p>
    </div>
  );
};

Breakfast.propTypes = {
  name:PropTypes.string.isRequired,
  desc:PropTypes.string,
  prep:PropTypes.string,
  rating:PropTypes.string,
  upvotes:PropTypes.string
}

export default Breakfast;

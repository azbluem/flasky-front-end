import "./Breakfast.css";
import PropTypes from 'prop-types'
// import { useState } from "react";

const Breakfast = ({id,name,desc,prep,rating,functions}) => {
  // const name = name;
  // const description = desc;
  // const prepTime = prep;
  // const rating = rating;
  // console.log('Breakfast')
  const [eatStatus, isEaten, eatDict, upvotes, upvoteButton,upvoteColorSelector] = [...functions]
  const updateEatStatus = isEaten(id)
  const [increaseUpvotes] = [upvoteButton]
  const changeUpvoteBGColor= upvoteColorSelector(id)

  return (
    <div className={eatDict[eatStatus]}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <p className="emphasizedText">Prep time: {prep} minutes</p>
      <p className="emphasizedText">Rating: {rating} stars</p>
      <button onClick={updateEatStatus}>Eat Me!</button>
      <button onClick={increaseUpvotes}>Upvote meal</button>
      <p className={changeUpvoteBGColor}>{upvotes}</p>
    </div>
  );
};

Breakfast.propTypes = {
  name:PropTypes.string.isRequired,
  desc:PropTypes.string,
  prep:PropTypes.string,
  rating:PropTypes.string
}

export default Breakfast;

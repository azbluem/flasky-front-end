import Breakfast from "./Breakfast";
import PropTypes from 'prop-types'

const BreakfastList = ({list, functions}) => {
  const makeBrekky = list.map((breakfast) => {
    return (<li key={breakfast.id}><Breakfast id ={breakfast.id} name={breakfast.name} desc={breakfast.desc} prep={breakfast.prep} rating={breakfast.rating} eaten={breakfast.eaten} upvotes={breakfast.upvotes} functions={functions}/></li>)
  })
  console.log('BreakfastList')
  return (
    <ul>
      {makeBrekky}
    </ul>
  );
};

BreakfastList.propTypes = {
  list:PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BreakfastList;

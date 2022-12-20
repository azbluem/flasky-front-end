import { useState } from "react";

const NewBrekForm = () => {
    const [newBrekRating,setBrekRating] = useState(3)
    
    const ratingChange = (e) => {
        console.log('rating changed')
        setBrekRating(newBrekRating)
    }

    return (
        <form>
            <label htmlFor="rating">Breakfast Rating</label>
            {/* htmlFor is for id */}
            <input type='number' id='rating' name='Rating' value={newBrekRating} onChange={ratingChange}/>
        </form>
    )
};

export default NewBrekForm
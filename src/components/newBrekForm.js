import { useState } from "react";

const NewBrekForm = (props) => {

    const INITIAL_FORM_STATE = {
        name:"",
        rating:0,
        prep_time:0,
        upvotes:0
    }

    const [brekData,setBrek] = useState(INITIAL_FORM_STATE)
    
    const handleChange = (e) => {
        console.log('form changed')
        console.log(e.target.name)
        console.log(e.target.value)
        const newFormData = {
            ...brekData,
            [e.target.name]:e.target.value
        }
        setBrek(newFormData)
    }

    const submitForm = (e) => {
        console.log('hello word')
        e.preventDefault();
        props.addBrekCallbackFunc(brekData)
    }

    return (
        <section id='submissionForm' background-color="red">
        <form onSubmit={submitForm}>
        <label htmlFor="name">Breakfast Name</label>
            <input type='text' id='name' name='name' value={brekData.name} onChange={handleChange}/>
            <br></br>
            <label htmlFor="rating">Breakfast Rating</label>
            {/* htmlFor is for id */}
            <input type='number' id='rating' name='rating' value={brekData.rating} onChange={handleChange}/>
            <br></br>
            <label htmlFor="prep_time">Breakfast Prep Time</label>
            <input type='number' id='prep_time' name='prep_time' value={brekData.prep_time} onChange={handleChange}/>
            <br></br>
            <input type='submit' value='submit'/>
        </form></section>
    )
};

export default NewBrekForm
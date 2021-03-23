import React from 'react'

const Form = () => {
    return (
        <section>
            <form id="form1">
                <label id="titlelabel">Title</label>
                <input id="titleinput" placeholder="Enter title"type="Text"></input>
                <p id="textareatitle">Content</p>
                <textarea id="ta1"placeholder="Enter description"></textarea>
                <button type="button" class="button1" id ="contentbtn">Add</button>
            </form>
        </section>
    )
}

export default Form

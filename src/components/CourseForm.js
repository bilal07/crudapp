import React from 'react';

const CourseForm = (props) => {
    return(
        <form action="" onSubmit={props.addCourse}>
            <input type="text" onChange={props.updateCourse}/>
            <button type="submit">Add Course</button>
        </form>
    )
}

export default CourseForm;
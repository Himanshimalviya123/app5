const Student=(props)=>{
    return(
        <>
        <h1>welcome to student </h1>
        <p>name of the student:-{props.nm}</p>
        <p>name of the branch of student:-{props.branch}</p>
        <p>i live in {props.city}</p>
        </>
    )
}
export default Student;
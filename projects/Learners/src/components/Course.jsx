const Course = (course) => {

    return (
        <article className="border-2 border-indigo-950 rounded-lg overflow-hidden space-y-5 hover:scale-105 transition-all duration-200 cursor-pointer">
            <img src={course.image} alt={course.title} className="max-h-40 w-full"/>
            <div className="px-5 pb-3 space-y-2 text-xl">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl">{course.title}</h2>
                    <p className="font-bold text-xl">₹{course.price}</p>
                </div>
                <p>Instructor: <span className="font-bold">{course.instructor}</span></p>
                <p>{course.level}</p>
                <p>{course.learningHour}</p>
            </div>
        </article>
    )
}

export default Course;
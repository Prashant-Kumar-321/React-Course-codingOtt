import Course from "./Course";
import courses from "../assets/coursesData";

const Tutorials = () => {

    return (
        <section className="mt-5 flex flex-col gap-5 p-8">
            <h1 className="text-4xl text-center font-semibold bg-indigo-800 p-2 rounded-md text-white"> Top Curated Tutorials </h1>
            <div className="grid grid-cols-4 gap-5">
                {
                    courses.map((course, index) => (
                        <Course {...course} key={index}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Tutorials;

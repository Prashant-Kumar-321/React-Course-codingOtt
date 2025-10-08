const Home = () =>{
    return (
        <hero className="p-8 block ">
            <div className="p-5 grid grid-cols-12 gap-x-8 border-2 border-indigo-950 rounded-xl ">
                <div className="col-span-5 flex flex-col gap-5 justify-center items-center">
                    <h1 className="text-5xl font-bold"><span className="text-6xl text-indigo-950">Learners</span> is here</h1>
                    <h3 className="text-2xl">You can find anything you want to learn here</h3>
                    <h3 className="text-2xl">Give your skills wing to fly with <span className="text-3xl font-bold text-indigo-950">Learners</span></h3>
                </div>
                <div className="col-span-7">
                    <img src="/hero-image.jpg" alt="Library Book Reading" className="rounded-lg"/>
                </div>
            </div>
        </hero>
    )
}

export default Home;
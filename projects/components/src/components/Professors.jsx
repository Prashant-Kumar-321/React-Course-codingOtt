import React from "react";

const ChemistPeople = ()=>{
    const people = [
        {
          id: 0,
          name: "Creola Katherine Johnson",
          profession: "mathematician",
        },
        {
          id: 1,
          name: "Mario José Molina-Pasquel Henríquez",
          profession: "chemist",
        },
        {
          id: 2,
          name: "Mohammad Abdus Salam",
          profession: "physicist",
        },
        {
          id: 3,
          name: "Percy Lavon Julian",
          profession: "chemist",
        },
        {
          id: 4,
          name: "Subrahmanyan Chandrasekhar",
          profession: "astrophysicist",
        },
    ];

    // filter chemist people
    const chemist = people.filter(people=>people.profession==='chemist'); 

    const chemistCompoents = chemist.map((chemist, index)=>(
        <div key={chemist.id}>
            <h2>{chemist.name}</h2>
            <p>{chemist.profession}</p>
        </div>
    )); 

    console.log(chemistCompoents); 

    return <div>{chemistCompoents}</div>
    
}

const Professors = () => {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  return (
    <div>
        <h1>People</h1>
        <div>
            {/* {
                people.map((people)=>(
                    <div key={people.id}>
                        <h2>{people.name}</h2>
                        <p>{people.profession}</p>
                    </div>
                ))       
            } */}

            {
                <ChemistPeople />
            }
        </div>
    </div>
  )
};

export default Professors;

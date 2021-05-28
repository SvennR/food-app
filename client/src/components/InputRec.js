import React, { useState } from "react";

const InputRec = () => {

    const [name, setName] = useState("")
    const [lookup, setLookup] = useState("")

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { name, lookup };
            const response = await fetch("http://localhost:5000/addFish", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            })

            console.log(response);
        } catch (err) {
            console.error(err.message)
        }
    }

    return <div>
         <h1>hi there</h1>
         <form onSubmit={onSubmitForm}>
             <input 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)} />
             <input 
                type="text" 
                value={lookup} 
                onChange={e => setLookup(e.target.value)} />
             <button> Add </button> 
         </form>
         </div>
};

export default InputRec;
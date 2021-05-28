import React, { useState } from 'react';

function AddRecipes() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("")
    const [lookup, setLookup] = useState("")
    const [src, setSrc] = useState("")
    const [rating, setRating] = useState(0)
    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { name, lookup, src, rating };
            const response = await fetch("http://localhost:5000/add"+category, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            })
            alert("Retten '"+name+"' er nå lagret")
            window.location = "/";
        } catch (err) {
            alert("Noe gikk galt")
            console.error(err.message)
        }
    }
    

    return (
        <div className="grid-item2">  
            <h3 className="add-header">Legg til en oppskrift</h3>
            <form onSubmit={onSubmitForm}>
            <fieldset id="save-rec-field">
                <label>Velg kategori: </label>
                <input name="category" value="Fish" type="radio" onChange={e => setCategory(e.target.value)} ></input>
                <label>Fisk</label>
                <input name="category" value="Vegetarian" type="radio" onChange={e => setCategory(e.target.value)} ></input>
                <label>Vegetar</label>
                <input name="category" value="Meat" type="radio" onChange={e => setCategory(e.target.value)} ></input>
                <label>Køttrett</label>
                <br></br>
                <label>Navn på rett: </label>
                <input 
                    value={name} 
                    type="text" 
                    onChange={e => setName(e.target.value)}
                ></input>
                <br></br>
                <label>Adresse til oppskrift: </label>
                <textarea 
                    value={lookup}
                    type="text" 
                    onChange={e => setLookup(e.target.value)} 
                ></textarea>
                <br></br>
                <label>kilde: </label>
                <input 
                    value={src} 
                    type="text" 
                    onChange={e => setSrc(e.target.value)}
                ></input>
                <br></br>
                <label>rating: </label>
                <input 
                    value={rating} 
                    type="number" 
                    placeholder="1-6"
                    onChange={e => setRating(e.target.value)}
                ></input>
                <br></br>
                <button className="save-button">Lagre rett</button>
            </fieldset>
            </form>    
        </div> 
    )
}

export default AddRecipes

/*
                <br></br>
                <label>Navn på rett: </label>
                <input 
                    value={name} 
                    type="text" 
                    onChange={e => setName(e.target.value)}
                ></input>
                <br></br>
                <label>Adresse til oppskrift: </label>
                <textarea 
                    value={setLookup}
                    onChange={e => setLookup(e.target.value)} 
                ></textarea>
                <br></br>
*/
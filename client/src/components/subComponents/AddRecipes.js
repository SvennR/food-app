import React from 'react';

function AddRecipes() {
    return (
        <div className="grid-item2"> 
            <h3 className="add-header">Legg til en oppskrift</h3>
            <form action="" method="">
            <fieldset id="save-rec-field">
                <input name="category" value="1" type="radio" ></input>
                <label>Fisk</label>
                <input name="category" value="1" type="radio" ></input>
                <label>Vegetar</label>
                <input name="category" value="1" type="radio" ></input>
                <label>Diverse</label>
                <br></br>
                <label>Navn på rett: </label>
                <input name="name" placeholder="laks m/pasta og..." type="text" ></input>
                <br></br>
                <label>Adresse til oppskrift: </label>
                <textarea name="recipe" placeholder="lim inn adresse her, eller sidetall fra bok"></textarea>
                <br></br>
                <button className="save-button" type="submit">Lagre rett</button>
            </fieldset>
            </form>    
        </div> 
    )
}

export default AddRecipes
import React, { useState, useEffect } from 'react';

function RgButton() {

    var [countFish, setCountFish] = useState();
    const getFishCount = () => {
        fetch("http://localhost:5000/fishCount")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setCountFish(json);   
        });
    };
        
   var [countVegetarian, setCountVegetarian] = useState();
    const getVegetarianCount = () => {
        fetch("http://localhost:5000/vegetarianCount")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setCountVegetarian(json);   
        });
    };
        
   var [countMeat, setCountMeat] = useState();
    const getMeatCount = () => {
        fetch("http://localhost:5000/meatCount")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setCountMeat(json);   
        });
    };

   useEffect(() => {
    getVegetarianCount();
    getFishCount();
    getMeatCount();
   }, []); 

   
    return (
        <div>
        <table id="table1">
        <thead>
            <tr className="row">
                <th className="col1">Dag</th>
                <th className="col2">Rett</th>
                <th className="col3">Oppskrift</th>
            </tr>
        </thead>
        <tbody id="table-content"></tbody>
        </table>
        <div className="wrap">
            <button onClick={clickHandler} id="start-button" className="button">Random Dinner Roulette </button>
        </div>
        <br></br>
        <div id="div-button"></div>
        <br></br>
        </div>
    )

    
    function clickHandler() {
    
    // set random number based by how many rows exists in the table
   var randomOneFish = Math.floor(Math.random() * countFish.count);
   var randomTwoFish = Math.floor(Math.random() * countFish.count);
   while (randomOneFish===randomTwoFish) {
    randomTwoFish = Math.floor(Math.random() * countFish.count);
   }
   var randomOneVegetarian = Math.floor(Math.random() * countVegetarian.count);
   var randomOneMeat = Math.floor(Math.random() * countMeat.count);
   var randomTwoMeat = Math.floor(Math.random() * countMeat.count);
   var randomThreeMeat = Math.floor(Math.random() * countMeat.count);
   var randomFoureMeat = Math.floor(Math.random() * countMeat.count);

    
   const days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
    /* Retter jeg må legge inn
    const fish = ["Fiskepakke", "Kremet pasta med laks", "Pannestekt laks", "Torsk m/chorizosalsa", "Fiskesuppe", "Soya Laks", "Skrei m/ris", "torsk med grønnkål", "laks og grønnsaker", "laks med blomkålris", "laks med grønnkål", "laks med kremet spinat", "hjemmelaget fiskesuppe", "seibiff", "lakseburger", "currypanne med torsk", "kokt torsk"];
    const fishRes = ["side 38 ", "side 42 ", "side 53 ", "side 128", "side 133", "side 238", "https://www.godt.no/oppskrift/8448/dampet-soya-og-honningmarinert-skrei-med-kokosris", "https://www.matprat.no/oppskrifter/familien/lettsaltet-torsk-med-gronnkal-og-byggris/", "https://www.matprat.no/oppskrifter/familien/alt-i-ett-form-med-laks-og-gronnsaker/", 
                    "https://kiwi.no/oppskrifter/fisk/laks/laksefilet-med-blomkalris-og-urtedressing/", " https://kiwi.no/oppskrifter/fisk/laks/laks-med-ris-og-gronnkal/", "https://www.rema.no/oppskrifter/grillet-laks-med-kremet-spinat/REC-61663", "https://www.tine.no/oppskrifter/middag-og-hovedretter/supper/fiskesuppe", "https://www.roede.com/oppskrifter/seibiff-med-lok-og-potetmos", 
                    "https://www.godt.no/oppskrift/6775/hjemmelaget-lakseburger", " https://www.matprat.no/oppskrifter/sunn/kokos--og-currypanne-med-torsk/", "https://meny.no/oppskrifter/Fisk/Torsk/Kokt-torsk/"];


    const veggie = ["Spagetti m/spinat", "Pai m/spinat", "Pasta m/spinat", "Spagetti m/tomat", "Gulrotsuppe", "Minestronesuppe", 
                    "Pasta m/bluecheese", "Tomat -og gulrot suppe", "Vegetargryte", "linsecurry", "tomatsuppe"];
    const veggieRes = ["side 37 ", "side 75 ", "side 116", "side 156", "side 174", "side 192", "side 215", "side 228", "https://meny.no/oppskrifter/Vegetar/vegetargryte-med-kokosmelk/", "https://www.godt.no/oppskrift/8835/linsegryte-roed-linse-curry-med-kokos", "https://www.matprat.no/oppskrifter/familien/tomatsuppe-med-kokt-egg/"];


    const various = ["Linsesuppe m/kylling", "Svinefilet", "kylling nudelsuppe", "Kalkunbryst", "Kyllingsuppe indisk", "Taco grateng",
                    "Chili Kylling", "kyllinggryte", "Enchiladas", "Lasagne", "Pai", "Tikkamasala", "Chili Con Carne", "Pasta med salsiccia", "skinkegrateng", "kylling i kokos", "one-pot-pasta", "strimlet svin med søtpotet", "svinefilet i carbonarasaus", "koteletter med grønnsaker", "kylling med ris og brokkoli", "pastagrateng med kjøttdeig", 
                    "fylt kyllingfilet", "spagetti med kjøttboller", "burritos", "brun lapskaus", "PAD thai", "hamburger", "kjøttkaker", "finnbiff", "Mats Møller Dæhli", "nudler med chili-kjøttsaus", "pasta og kyllingsalat", "tex-mexsalat", "pastasalat med Chorizo", "biffwok", "gyros", "grillet svinefilet", "bakt potet"];            
    const varRes = ["side 40 ", "side 43 ", "side 54 ", "side 62", "side 68 ", "side 115", "side 118", "side 165", "side 181", "side 196", "side 218", "side 220", "side 236", "https://www.godt.no/oppskrift/8971/pasta-med-salsiccia-portobello-og-chili-la-funkygine", "https://www.lindastuhaug.no/2018/09/04/enkel-skinkegrateng-med-pasta-og-brokkoli/", "https://meny.no/oppskrifter/Kylling/Kylling-i-kokossaus/", 
                " https://www.godt.no/oppskrift/8186/one-pot-pasta-kremet-pasta-med-kylling-kantareller-og-spinat", "https://kiwi.no/oppskrifter/kjott/svin/strimlet-svin-med-ris-ovnsbakt-sotpotet-og-cashewdressing/", "https://kiwi.no/oppskrifter/kjott/svin/svinefilet-med-gronnkal-sopp-og-carbonarasaus/", "https://www.tine.no/oppskrifter/middag-og-hovedretter/kjott/koteletter-med-dampede-grønnsaker", "https://www.tine.no/oppskrifter/middag-og-hovedretter/kylling-og-fjarkre/kylling-ris-brokkoli-og-blomkål", 
                    "https://idamariesmat.no/oppskrift/pastagrateng-med-kjottdeig-og-blomkal/", "https://www.matprat.no/oppskrifter/gjester/fylt-kyllingfilet/", "https://www.tine.no/oppskrifter/middag-og-hovedretter/pasta-og-ris/spaghetti-med-kjøttboller", "https://trinesmatblogg.no/recipe/burritos-med-guacamole/", "https://www.nrk.no/mat/brun-lapskaus-1.14188817", "https://www.rema.no/oppskrifter/«pad-thai»-med-kylling/REC-65648", "https://www.rema.no/oppskrifter/hamburger/REC-61648/", 
                    "https://trinesmatblogg.no/recipe/mammas-kjottkaker-med-brun-saus-og-kalstuing/", "https://trinesmatblogg.no/recipe/finnbiff-med-bacon-rosenkal-og-sellerirotmos/", "https://www.godt.no/oppskrift/2081/mats-moeller-daehlis-favoritt-kyllingpasta-med-chorizo-og-brokkoli", "https://www.godt.no/oppskrift/7662/nudler-med-ingefaer-og-chili-kjoettsaus", "https://frutimian.no/2018/08/02/pasta-og-kyllingsalat-med-hvitloksbrod/", "https://frutimian.no/2018/01/26/tex-mexsalat/", 
                    "https://frutimian.no/2016/02/17/pastasalat-med-chorizo-og-tomat/", "https://www.tine.no/oppskrifter/middag-og-hovedretter/kjott/biff-og-grønnsakswok", "https://www.matprat.no/oppskrifter/kos/gyros/", "https://spar.no/Oppskrifter/grillet-ytrefilet-av-svin/", "https://coop.no/mega/hjemmerestauranten/bakt-potet-med-3-deilige-toppinger/?utm_source=facebook&utm_medium=content&utm_campaign=hjemmerestauranten"];
   */
    let m1;
    let m2;
    let m3;
    let count = 0; 
    let daysCount = 7;
    let menu = 3; 
    let fishDays = 2;
    let veggieDays = 1;
    let variousDays = 4;
    

    while(daysCount > 0) {
        const tr$count = document.createElement('tr');
        const dag$count = document.createElement('td');
        dag$count.innerHTML = days[count];
        const rett$count = document.createElement('td');
        const oppskrift$count = document.createElement('td');

        const randomMenu = Math.floor(Math.random() * menu) + 1;

        // picking a fish meal
        if(randomMenu === 1 && fishDays > 0) {
            if(fishDays===1) {
                fetch("http://localhost:5000/fish/"+randomOneFish)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    rett$count.innerHTML = json.name;  
                    oppskrift$count.innerHTML = json.lookup; 
                    console.log("fish1: "+randomOneFish)
                });
                tr$count.appendChild(dag$count);
                tr$count.appendChild(rett$count);
                tr$count.appendChild(oppskrift$count);
                const thbody$count = document.getElementById('table-content');
                thbody$count.appendChild(tr$count);
                fishDays--;
                count++;
                daysCount--;
                
            }
            else {
                fetch("http://localhost:5000/fish/"+randomTwoFish)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    rett$count.innerHTML = json.name;  
                    oppskrift$count.innerHTML = json.lookup; 
                    console.log("fish2: "+randomTwoFish)
                });
                tr$count.appendChild(dag$count);
                tr$count.appendChild(rett$count);
                tr$count.appendChild(oppskrift$count);
                const thbody$count = document.getElementById('table-content');
                thbody$count.appendChild(tr$count);
                fishDays--;
                count++;
                daysCount--;
            }

        }
        // picking a vegetarian meal
        else if(randomMenu === 2 && veggieDays > 0) {
            fetch("http://localhost:5000/vegetarian/"+randomOneVegetarian)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                rett$count.innerHTML = json.name;  
                oppskrift$count.innerHTML = json.lookup; 
                console.log("veggie1: "+randomOneVegetarian)
            });
            tr$count.appendChild(dag$count);
            tr$count.appendChild(rett$count);
            tr$count.appendChild(oppskrift$count);
            const thbody$count = document.getElementById('table-content');
            thbody$count.appendChild(tr$count);
            veggieDays--;
            count++;
            daysCount--;
        }
        // picking a various meal
        // TODO: optimize the while conditions
        else if(randomMenu === 3 && variousDays > 0) {
            if(variousDays===1) {
                while (randomFoureMeat===m1 || randomFoureMeat===m2 || randomFoureMeat===m3) {
                    randomFoureMeat = Math.floor(Math.random() * countMeat.count);
                }
                fetch("http://localhost:5000/meat/"+randomFoureMeat)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    rett$count.innerHTML = json.name;  
                    oppskrift$count.innerHTML = json.lookup; 
                });
                console.log("meat4: "+randomFoureMeat)
                tr$count.appendChild(dag$count);
                tr$count.appendChild(rett$count);
                tr$count.appendChild(oppskrift$count);
                const thbody$count = document.getElementById('table-content');
                thbody$count.appendChild(tr$count);
                variousDays--;
                count++;
                daysCount--;
            }
            else if(variousDays===2) {
                while (randomThreeMeat===m1 || randomThreeMeat===m2) {
                    randomThreeMeat = Math.floor(Math.random() * countMeat.count);
                }
                m3 = randomThreeMeat; 
                fetch("http://localhost:5000/meat/"+randomThreeMeat)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    rett$count.innerHTML = json.name;  
                    oppskrift$count.innerHTML = json.lookup; 
                });
                console.log("meat3: "+randomThreeMeat)
                tr$count.appendChild(dag$count);
                tr$count.appendChild(rett$count);
                tr$count.appendChild(oppskrift$count);
                const thbody$count = document.getElementById('table-content');
                thbody$count.appendChild(tr$count);
                variousDays--;
                count++;
                daysCount--;
            }
            else if(variousDays===3) {
                while (randomTwoMeat===m1) {
                    randomTwoMeat = Math.floor(Math.random() * countMeat.count);
                }
                m2 = randomTwoMeat;
                fetch("http://localhost:5000/meat/"+randomTwoMeat)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    rett$count.innerHTML = json.name;  
                    oppskrift$count.innerHTML = json.lookup; 
                });
                console.log("meat2: "+randomTwoMeat)
                tr$count.appendChild(dag$count);
                tr$count.appendChild(rett$count);
                tr$count.appendChild(oppskrift$count);
                const thbody$count = document.getElementById('table-content');
                thbody$count.appendChild(tr$count);
                variousDays--;
                count++;
                daysCount--;
            }
            else if(variousDays===4) {
                //while (variousNr==m2 || variousNr==m3 || variousNr==m4) {
                //    variousNr = Math.floor(Math.random() * countMeat.count);
                //}
                m1 = randomOneMeat;
                fetch("http://localhost:5000/meat/"+randomOneMeat)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    rett$count.innerHTML = json.name;  
                    oppskrift$count.innerHTML = json.lookup; 
                });
                console.log("meat1: "+randomOneMeat)
                tr$count.appendChild(dag$count);
                tr$count.appendChild(rett$count);
                tr$count.appendChild(oppskrift$count);
                const thbody$count = document.getElementById('table-content');
                thbody$count.appendChild(tr$count);
                variousDays--;
                count++;
                daysCount--;
            }
            
        }
        
    } // end of while loop
    if(daysCount===0){ 
        const save = document.createElement('button');
        save.innerHTML = "Send liste på mail";
        const wrapBtn = document.createElement('div')
        wrapBtn.className = 'wrap'
        save.className = 'button';
        document.getElementById('div-button').appendChild(save);
    }
    document.getElementById('table1').style.display = 'inline-block';
    //document.getElementById('wrap').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
    }

}

export default RgButton
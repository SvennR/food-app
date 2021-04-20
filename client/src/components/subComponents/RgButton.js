import React from 'react';

//import './rbButton.css'

function RgButton() {

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

    // Using JavaScript-DOM temporary, in this function, just for testing
    function clickHandler() {
        
    // Arrays
    const days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];

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




    let f1;
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
            let fishNr = Math.floor(Math.random() * fish.length);
            if(fishDays===1) {
                while (fishNr===f1) {
                    fishNr = Math.floor(Math.random() * fish.length);
                }
                //System.out.println(dayList[count]+": "+fish[fishNr]);
                rett$count.innerHTML = fish[fishNr];
                oppskrift$count.innerHTML = fishRes[fishNr];
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
                f1 = fishNr;
                //System.out.println(dayList[count]+": "+fish[fishNr]);
                rett$count.innerHTML = fish[fishNr];
                oppskrift$count.innerHTML = fishRes[fishNr];
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
            let veggieNr = Math.floor(Math.random() * veggie.length);
            //System.out.println(dayList[count]+": "+veggie[veggieNr]);
            rett$count.innerHTML = veggie[veggieNr];
            oppskrift$count.innerHTML = veggieRes[veggieNr];
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

            let variousNr = Math.floor(Math.random() * various.length);

            if(variousDays===1) {
                while (variousNr===m1 || variousNr===m2 || variousNr===m3) {
                    variousNr = Math.floor(Math.random() * various.length);
                }
                rett$count.innerHTML = various[variousNr];
                oppskrift$count.innerHTML = varRes[variousNr];
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
                while (variousNr===m1 || variousNr===m2) {
                    variousNr = Math.floor(Math.random() * various.length);
                }
                m3 = variousNr; 
                rett$count.innerHTML = various[variousNr];
                oppskrift$count.innerHTML = varRes[variousNr];
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
                while (variousNr===m1) {
                    variousNr = Math.floor(Math.random() * various.length);
                }
                m2 = variousNr;
                //System.out.println(dayList[count]+": "+various[variousNr]);
                rett$count.innerHTML = various[variousNr];
                oppskrift$count.innerHTML = varRes[variousNr];
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
                //    variousNr = Math.floor(Math.random() * various.length);
                //}
                m1 = variousNr;
                rett$count.innerHTML = various[variousNr];
                oppskrift$count.innerHTML = varRes[variousNr];
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
    if(daysCount===0){ // just make it visible maybe? need form to fill in e-mail
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
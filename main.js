
//Model
let wordChosen = [];
let numberOfWordChosen= 0;
//View
function updateView() {
    
    if(numberOfWordChosen === 25) {
        let text = `
        <p>Ved en ${wordChosen[0]}, ${wordChosen[1]} skog levde Glimrende Glimmerbart, en ${wordChosen[2]} gnom med ${wordChosen[3]} øyne. </p>
            <p>En ${wordChosen[4]} morgen bestemte han seg for å dra på en ${wordChosen[5]} reise gjennom skogen. </p>
            <p>Han pakket vesken sin med en ${wordChosen[6]} smultring, en ${wordChosen[7]} krystall, og en ${wordChosen[8]} kappe.</p> </br>
        
            <p>Underveis møtte Glimrende Glimmerbart ${wordChosen[9]} alver, han krysset ${wordChosen[10]} elver, og utforsket ${wordChosen[11]} huler.</p>
            <p>I den ene ${wordChosen[12]} hulen han utforsket møtte han et ${wordChosen[13]} troll, de delte ${wordChosen[14]} historier med hverandre. </p>
            <p>Til slutt, etter ${wordChosen[15]} måneder med eventyr, vendte han hjem med hjertet fullt av ${wordChosen[16]} minner og ${wordChosen[17]} skatter.</p></br>
        
            <p>Mens stjernene glitret ${wordChosen[18]} om natten, satt Glimrende Glimmerbart på den ${wordChosen[19]} trappen til det ${wordChosen[20]} huset sitt</p>
            <p>Smilende med ${wordChosen[21]} øyne, og visste at skogen alltid hadde ventet på en ${wordChosen[22]} gnom som ham. </p>
        
        <p> Og det var slutten på den ${wordChosen[23]} Glimrende Glimmerbart, sin ${wordChosen[24]} reise.</p></br>`;
        document.getElementById('history').innerHTML = text;
        
    } 
        


}
//Contoller

function wordClicked(words) {
    if(numberOfWordChosen< 25){
        wordChosen.push(words);
        numberOfWordChosen++;
        updateView();
    }
    
    
}


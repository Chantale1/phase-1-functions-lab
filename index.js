// Code your solution in this file!
function distanceFromHqInBlocks(numberBlocks) {
if (numberBlocks > 42) {
    return numberBlocks-42 ;
}
else {
    return 42 - numberBlocks
}
}
function distanceFromHqInFeet(numberBlocks) {
    distanceFromHqInBlocks(numberBlocks) ;
    return distanceFromHqInBlocks(numberBlocks) *264
    
}

function distanceTravelledInFeet(start,destination) {
    if (destination > start) {  
        return (destination - start) *264

    }
    else if (start > destination) {
return (start - destination) *264
    }
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start,destination)
    if (distance <= 400 ){
        return 0; 
    }
    else if (distance > 400 && distance <= 2000 ){
        return 2.56 ;
    }
    else if (distance > 2000 && distance < 2500 ) {
        return 25;
    }
    else {
        return 'cannot travel that far' ;
    }
}
    
    

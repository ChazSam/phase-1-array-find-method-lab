// code your solution here

// function superbowlWin(objects){
//  return objects.results === "W"
// }

//  const superbowlWin = record.find(({result}) => result === "W");
//     return record.year


function superbowlWin(record){
    const win = record.find(record => record.result === "W")
    if(win) {
        return win.year;
    }
}
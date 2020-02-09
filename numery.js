function numery(ciag) {

    if (ciag.length > 0) {

        var tab = [...ciag];
        var tabNum = [];
        let i = 0;
        while (i <= tab.length) {

            if (isNaN(tab[i])!=true) {
                tabNum.push(tab[i]);
            }

            i++;
        }
        var tabNumStr = tabNum.join("");
        console.log(tabNumStr);
        //console.log(tabNum);
    }
    else { console.log("brak wpisanycego ciagu znaków") }
}


numery("125dsa4812asddsa1414120das04");

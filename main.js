/*
PRINT COMMANDS (VOID function)
> Prints Main Menu.
*/
function main_gui() { 
    console.log('1 Medication Available In The Pharmacy' + "\n" + 
                "2 Medication Inventory" + "\n" + 
                "0 EXIT")

}

/* 
PRINT COMMANDS (VOID function)
> Prints Console UI for task 1.1
*/
function med_available_console_gui() { 
    console.log('1 Add Paracetamol and Ibuprofen' + "\n" + 
                "2 Add Amoxicillin" + "\n" + 
                "3 Add Codeine, Diclofenac, Simvastatin, Tramadol" + "\n" + 
                "4 List the names of the Medications in the formulary"  + "\n" + 
                "5 CLEAR formulary"  + "\n" +
                "0 BACK")



}

/* 
PRINT COMMANDS (VOID function)
> Prints Console UI for task 1.2
*/
function med_inv_console_gui() { 

    console.log('1 Add 100 packs of 50x500mg Paracetamol' + "\n" + 
                "2 Add 100 packs of 50x500mg Ibuprofen" + "\n" + 
                "3 Add 20 packs of 20x250mg Amoxicillin" + "\n" + 
                "4 Add 5 packs of 100x50mg Tramadol"  + "\n" + 
                "5 Add 20 packs of 10x30mg Codeine"  + "\n" + 
                "6 Add 10 packs of 10x10mg Simvastatin"  + "\n" + 
                "7 Add 5 packs of 50x3mg Warfarin"  + "\n" + 
                "8 List the name, strength, pack size and the total number of packs for all the medication in stock"  + "\n" + 
                "0 BACK")



}

/* 
ADD MEDICATION (LIST FUNCTION)
> Appends Formulary List
> Appends Inventory List and writes to file
*/
function add_med(nameOfMed, currentArray, medsMatrix) { 
 
    for (var i = 0; i < currentArray.length; i++) {
        for (var ii = 0; ii < nameOfMed.length; ii++) {
            if (nameOfMed[ii] == currentArray[i]) {
                console.log(nameOfMed[ii] + " is already in the formulary.")
                nameOfMed.splice(ii, 1);
            } 
        }
    }
    if (nameOfMed.length != 0) {
        currentArray.push.apply(currentArray, nameOfMed);
        console.log([nameOfMed] + " add to the formulary.")

        for (i in nameOfMed) {
            if (nameOfMed[i]  == "Paracetamol") {
                medsMatrix.push(["Paracetamol", "500mg", 50, 0])

            } else if (nameOfMed[i] == "Ibuprofen") {
                medsMatrix.push(["Ibuprofen", "500mg", 50, 0])

            } else if (nameOfMed[i]  == "Amoxicillin") {
                medsMatrix.push(["Amoxicillin", "250mg", 25, 0])
                
            } else if (nameOfMed[i]  == "Tramadol") {
                medsMatrix.push(["Tramadol", "50mg", 100, 0])
            
            } else if (nameOfMed[i]  == "Codeine") {
                medsMatrix.push(["Codeine", "30mg", 10, 0])
            
            } else if (nameOfMed[i]  == "Simvastatin") {
                medsMatrix.push(["Simvastatin", "10mg", 10, 0])
            
            } else if (nameOfMed[i]  == "Warfarin") {
                medsMatrix.push(["Warfarin", "3mg", 50, 0])
              
            } 

        }
        var fd = fs.openSync("meds_inv.txt", 'w');
        for (i in medsMatrix) { 
            fs.appendFileSync('meds_inv.txt', medsMatrix[i] + "\n");
        }
        fs.close(fd);
       
        //console.log(medsMatrix)
    }
    var current_meds = read_file(meds_file);
    var new_meds = remove_dup(currentArray, current_meds);
    if (new_meds.length == 0) {
        console.log("Formulary list unchanged.\n");
    } else {
        append_file(meds_file, new_meds); 
        
    }

    return currentArray;
}


/* 
READ FILE (LIST FUNCTION)
> Reads files and returns LIST
*/
function read_file(nameOfFile){
    const fs = require('fs');
    var array_of_meds = fs.readFileSync('./' + nameOfFile, {encoding:'utf8', flag:'r'}).split("\n");
    return array_of_meds;
}

/* 
APPEND FILE (LIST FUNCTION)
> Append file.
*/
function append_file(nameOfFile, data){

    const fs = require('fs');
    if (data.length == 0) {
        fs.openSync(nameOfFile, 'w');
    } else {
        for (i in data) {
            fs.appendFileSync( './' + nameOfFile, data[i] + "\n");
        }
    }

}
/* 
REMOVE DUPLICATION (LIST FUNCTION)
> Compares two lists. Removes element from list...
> if element is in both lists.
> Returns list of unique elements only.
*/
function remove_dup(listOne, listTwo) {

    for (var i = 0; i < listOne.length; i++) {
        for (var ii = 0; ii < listTwo.length; ii++) {
            if (listOne[i] == listTwo[ii]) {
                listOne.splice(i, 1)
            }
        }
    }
    return listOne;
}
/* 
ADD PACKS (VOID FUNCTION)
> Adds packs to Inventory List.
> Only adds packs that are present in the formulary.
> Saves resulting list to file. 
*/
function add_packs(listMeds, listInv, nameOfMed, value) {
    
    var flag = false;
    //console.log(listMeds);
    //console.log(listInv);
    for (i in listMeds) {
        for (ii in listInv) {
            if (listMeds[i] == listInv[ii][0] && listInv[ii][0] == nameOfMed) {
                listInv[ii][listInv[ii].length - 1] += value;
                console.log(value + " packs of " + nameOfMed + " has been added to inventory.");
                
                flag = true;
                break;

            } 
        }
    }
    var fd = fs.openSync("meds_inv.txt", 'w');
    for (i in listInv) { 
        fs.appendFileSync('./meds_inv.txt', listInv[i] + "\n");
    }
    fs.close(fd);

    if (flag == false) {
            console.log(nameOfMed + " does not exist in formulary.");
    }



}

/* 
READ MATRIX (LIST FUNCTION)
> Reads Inventory file into matrix
> Returns matrix with correct data type for each feature column.
*/
function read_matrix() {

    var array = fs.readFileSync('./' + "meds_inv.txt", {encoding:'utf8', flag:'r'}).split("\n");
    array.pop();
    var meds_matrix = [];
    if (array[0] != "") {
        for(i in array) {
            meds_matrix.push(array[i].split(","))
        }
        for (i in meds_matrix) {
            meds_matrix[i][meds_matrix[i].length - 1] = parseInt(meds_matrix[i][meds_matrix[i].length - 1]);
            meds_matrix[i][meds_matrix[i].length - 2] = parseInt(meds_matrix[i][meds_matrix[i].length - 2]);
        }
        delete array;
    } 
    return meds_matrix;
}

/* 
CHECK FILE (VOID FUNCTION)
> Checks if required files are present in CD.
> Generates blank files if they are missing required for program wo work.
*/
function check_file(nameOfFile, keyword) {

    if (fs.existsSync("./" + nameOfFile)) {
        console.log(keyword + " File Found.")
    } else {
        console.log(keyword + " File Generated.")
        var fd = fs.openSync(nameOfFile, 'w');
        fs.close(fd)
    }
}

  
const prompt = require('prompt-sync')();
const fs = require('fs');


const meds_file = "meds_available.txt"
const med_inv_file = "meds_inv.txt"

check_file(meds_file, "Formulary");
check_file(med_inv_file, "Inventory");

var meds_matrix = read_matrix();

var user_input_main = undefined;
while (user_input_main != 0) {

    main_gui()
    
    user_input_main = parseInt(prompt("Enter Command: > "), 10) 

    var meds_list = read_file(meds_file);
    if (user_input_main == 1) {
        // part one of kata challenege
        med_available_console_gui();
        
        var user_input_meds_available = undefined;
        while (user_input_meds_available != 0) {
            var user_input_meds_available = parseInt(prompt("Enter Command: > "), 10);
            if (user_input_meds_available == 1) {
                meds_list = add_med(["Paracetamol", "Ibuprofen"], meds_list, meds_matrix);
            } else if (user_input_meds_available == 2) {
                meds_list = add_med(["Amoxicillin"], meds_list, meds_matrix);
            } else if (user_input_meds_available == 3) {
                meds_list = add_med(["Codeine", "Diclofenac", "Simvastatin", "Tramadol"], meds_list, meds_matrix);
            } else if (user_input_meds_available == 4) {
                var list_array = read_file(meds_file);
                if (list_array == "") {
                    console.log("EMPTY")
                } else {
                    for (i in list_array) {
                        console.log(list_array[i]);
                    }
                }
            } else if (user_input_meds_available == 5) {
                var fd = fs.openSync(meds_file, 'w');
                fs.close(fd);
                var fd = fs.openSync(med_inv_file, 'w');
                fs.close(fd);
                
                meds_list = [];
                meds_matrix = [];
            }
        } 
            
        
    } else if (user_input_main == 2) {
        // part two of kata challenge
        med_inv_console_gui();

        var user_input_meds_inv = undefined;
        var meds_list = read_file(meds_file);

        while (user_input_meds_inv != 0) {

            var user_input_meds_inv = parseInt(prompt("Enter Command: > "), 10);
            if (user_input_meds_inv == 1) {
                new_matrix = add_packs(meds_list, meds_matrix,"Paracetamol", 50)
            } else if (user_input_meds_inv == 2) {
                new_matrix = add_packs(meds_list, meds_matrix, "Ibuprofen", 50)
            } else if (user_input_meds_inv == 3) {
                new_matrix = add_packs(meds_list, meds_matrix, "Amoxicillin", 20)
            } else if (user_input_meds_inv == 4) {
                new_matrix = add_packs(meds_list, meds_matrix, "Tramadol", 100)
            } else if (user_input_meds_inv == 5) {
                new_matrix = add_packs(meds_list, meds_matrix, "Codeine", 10)
            } else if (user_input_meds_inv == 6) {
                new_matrix = add_packs(meds_list, meds_matrix, "Simvastatin", 10)
            } else if (user_input_meds_inv == 7) {
                new_matrix = add_packs(meds_list, meds_matrix, "Warfarin", 5)
            } else if (user_input_meds_inv == 8) {
                if (meds_matrix.length == 0) {
                    console.log("Inventory is EMPTY.")
                } else {
                    for(i in meds_matrix) {
                        console.log(meds_matrix[i]);
                    }
                }

            
            } 
        
        }
    }

}

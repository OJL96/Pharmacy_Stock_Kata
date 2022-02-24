# _Pharmacy_Stock_Kata_

### Description  
This project was inspired by the Truepill technical test. A console-based interace has been developed to allow a user to add or remove medicaiton from their formulary. In addition, an inventory service has been intergrated to allow the user to add medication stock in the form of packs to each medication if its in the formilary. The medication name is the primary key therefore each medicaiton can only be added once. Additional features have been added including write/read from disk function so that the user can pick up from where they've left of instead of having to restart when the program is terminated.  

---
### Functionalities  
**Functional Requirements:**
> Add Paracetamol and Ibuprofen to formulary.

> Add Amoxicillin to formulary.

> Add Codeine, Diclofenac, Simvastatin, Tramadol to formulary.

> Clear formulary.

> List the names of the Medications in the formulary.

**Non-functional Requirements:**
> Clear all items in formulary and inventory.

> Inventory and formulary automatically saves to disk when changes have been made.

> No dependencies as they are generated on init if they do not exist.


---
### Installation  

Step 1. Download [Visual Code](https://code.visualstudio.com)  
Step 2. Download [nodejs](https://nodejs.org/en/download)  
Step 3. Check if nodejs and npm has been install correctly (version will change depending on when you install them).  
![image](https://user-images.githubusercontent.com/43963470/155549632-9a6af5c2-ed16-466e-ba89-b6fbbe1dc6ab.png)  
Step 4. Install extensions in Visual Code: Code Runner by Jun Han and JavaScript (ES6).  
Step 5. Run commands in new terminal via Visual Code:  
![image](https://user-images.githubusercontent.com/43963470/155550411-22d46559-3914-42c4-9a48-db77aea8f6d4.png)  
![image](https://user-images.githubusercontent.com/43963470/155550768-ec5844b0-3400-49b0-b62d-da32eccbe110.png)   
  
**Versions Used For Development:**  
npm -> v8.5.1  
nodejs -> v16.14.0  


---
### Roadmap / Improvements
> Allow user to explicitly specify which medication to add to the forumlary.

> Convert console-based UI to GUI.

> Integrate a login system with usernames and encrypted passwords.

> Allow user to explicitly specify the number of packs to add to inventory for each medication that is in the formulary.  

>  Allow user to explicitly specify which medication to remove from formulary instead of removing everything.  

---
### Usage  
Application is interactive so once all steps above is complete, simply run the application and navigate through the console UI to make changes to inventory and formulary.  
  
Main Menu  
![image](https://user-images.githubusercontent.com/43963470/155552249-48a1a060-2e2d-4003-9f12-87ec2897c95b.png)  
Formulary List Interactive Menu  
![image](https://user-images.githubusercontent.com/43963470/155552316-4bd6c9da-3fe1-4479-8b6a-c09cc8441e0b.png)  
Inventory List Interactive Menu  
![image](https://user-images.githubusercontent.com/43963470/155552393-3050dd98-27e8-4310-a0ce-d79fa770ac77.png)

---
### Bugs  
None to be found.


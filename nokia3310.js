const prompt = require('prompt-sync')()


class Nokia3310 {
    mainMenu() {
        console.log("Main Menu\n1. Phone book\n2. Message\n3. Chat\n4. Call register\n5. Tones\n6." +
            " Settings\n7. Call divert\n8. Game\n9. Calculator\n10. Reminder\n11. Clock\n12. Profiles\n13. SIM services");
        const input = prompt("Enter choice number: ")
        switch (parseInt(input)) {
            case 1:
                this.phoneBookMenu();
                break;
            case 2:
                this.messageMenu();
                break;
            case 3:
                this.chatMenu();
                break;
            case 4:
                this.callRegisterMenu();
                break;
            case 5:
                this.tonesMenu();
                break;
            case 6:
                this.settingsMenu();
                break;
            case 7:
                this.callDivertMenu();
                break;
            case 8:
                this.gameMenu();
                break;
            case 9:
                this.calculatorMenu();
                break;
            case 10:
                this.remindersMenu();
                break;
            case 11:
                this.clockMenu();
                break;
            case 12:
                this.profileMenu();
                break;
            case 13:
                this.simServicesMenu();
                break;
            default:
                console.log("Invalid choice number. Please try again");
                this.mainMenu();
        }
    }

    phoneBookMenu() {
        console.log("Phone Book Menu\n1. Search\n2. Service Nos\n3. Add Name\n4. Erase\n5. Edit\n6. " +
            "Assign Tone\n7. Send b' card\n8. Options\n9. Speed Dials\n10. Voice Tags");
        const input = prompt("Enter your choice number: ")
            switch (input) {
                case '1':
                    console.log("Search");
                    break;
                case '2':
                    console.log("Service Nos");
                    break;
                case '3':
                    console.log("Add Name");
                    break;
                case '4':
                    console.log("Erase");
                    break;
                case '5':
                    console.log("Edit");
                    break;
                case '6':
                    console.log("Assign Tone");
                    break;
                case '7':
                    console.log("Send b'Card");
                    break;
                case '8':
                    this.options()
                    break;
                case '9':
                    console.log("Speed Dials");
                    break;
                case '10':
                    console.log("Voice Tags");
                    break;
                default:
                    this.mainMenu();
            }
            this.mainMenu();
    }

    messageMenu() {
        console.log("Message Menu\n1. Write message\n2. Inbox\n3. Outbox\n4. Picture messages\n5. Templates\n6." +
            " Smileys\n7. Message settings\n8. Info service\n9. Voice mailbox number\n10. Service command editor");
        const input = prompt("Enter choice number: ")

        switch (parseInt(input)){
                case 1:
                    console.log("Write messages");
                    break;
                case 2:
                    console.log("Inbox");
                    break;
                case 3:
                    console.log("Outbox");
                    break;
                case 4:
                    console.log("Picture message");
                    break;
                case 5:
                    console.log("Template");
                    break;
                case 6:
                    console.log("Smiley");
                    break;
                case 7:
                    console.log("Message settings\n1. Set\n2. Common");
                    const input = prompt("Select between option 1 or 2: ")
                        switch (parseInt(input)) {
                            case 1:
                                this.set();
                                break;
                            case 2:
                                this.common();
                                break;
                        }
                    break;
                case 8:
                    console.log("Info service");
                    break;
                case 9:
                    console.log("Voice mailbox number");
                    break;
                case 10:
                    console.log("Service command editor");
                    break;
                default:
                    this.mainMenu();
            }
            this.mainMenu();
    }
    set() {
        console.log("Set\n1. Message centre number\n2. Message sent as\n3. Message validity");
        const input = prompt("Select from option 1 to 3: ")
        switch (input) {
            case 1:
                console.log("Message centre number");
                break;
            case 2:
                console.log("Message sent as");
                break;
            case 3:
                console.log("Message validity");
                break;
            default:
                this.mainMenu();
        }
        this.mainMenu();
    }
    common() {
        console.log("Common\n1. Delivery reports\n2. Reply via same centre\n3. Character support");
        const input = ("Select option from 1 to 3: ")
        switch (parseInt(input)) {
            case 1:
                console.log("Delivery reports");
                break;
            case 2:
                console.log("Reply via same centre");
                break;
            case 3:
                console.log("Character support");
                break;
            default:
                this.mainMenu();
        }
        this.mainMenu();
    }

    chatMenu() {
        console.log("chat");
        this.mainMenu();
    }

    callRegisterMenu() {
        console.log("CallRegisterMenu");
        console.log("1. Missed calls\n2. Received calls\n3.Dialled numbers\n4. Erase recent calls lists\n5. Show call duration\n6. Show call cost\n7. Call cost settings\n8. Prepaid credit");
        const input = prompt("Enter choice number: ")
            switch (parseInt(input)) {
                case 1:
                    console.log("Missed call");
                    break;
                case 2:
                    console.log("Received calls");
                    break;
                case 3:
                    console.log("Dialled number");
                    break;
                case 4:
                    console.log("Erase recent calls lists");
                    break;
                case 5:
                    this.showCallDuration();
                    break;
                case 6:
                    this.showCallCosts();
                    break;
                case 7:
                    this.callsCostSettings();
                    break;
                case 8:
                    console.log("Prepaid credit");
                    break;
                default:
                    this.mainMenu();
            }
            this.mainMenu();
    }

    callsCostSettings() {
        console.log("call cost settings\n 1.call cost limit\n 2.show cost in");
        const input2 =prompt("Select from option 1 to 2", )
        switch (parseInt(input2)){
            case 1:
                console.log("Call cost limit");
                break;
            case 2:
                console.log("Show cost in");
                break;
            default:
                this.mainMenu();
        }
    }

    showCallCosts() {
        console.log("Show call costs\n1. last call cost\n2. All costs' cost\n3. Clear counters");
        const input = prompt("Select from option 1 to 3", )
        switch (parseInt(input)){
            case 1:
                console.log("Last call cost");
                break;
            case 2:
                console.log("All costs' cost");
                break;
            case 3:
                console.log("Clear counters");
                break;
            default:
                this.mainMenu();
        }
    }

    showCallDuration() {
        console.log("Show call duration \n1. Last call duration\n2. All calls\n3. Received calls' duration\n4. dialled calls' duration\n5. Clear timers");
        const input1 = prompt("Select option from 1 to 5: ")
        switch (parseInt(input1)) {
            case 1:
                console.log("Last call duration");
                break;
            case 2:
                console.log("All calls costs");
                break;
            case 3:
                console.log("Received calls' duration");
                break;
            case 4:
                console.log("Dialled calls' duration");
                break;
            case 5:
                console.log("Clear timers");
                break;
            default:
                this.mainMenu();
        }
        this.mainMenu();

    }

    tonesMenu() {
        console.log("Tones");
        console.log("1. Ringing tones\n2. Ringing volume\n3. Incoming call alert\n4. Composer\n5. Messages alert tone\n6. Keypad tones\n7. Warning and game tone\n8. Vibrating\n9. Screen saver");
        const input = prompt("Enter choice number: ")
            switch (parseInt(input)) {
                case 1:
                    console.log("Ringing tones");
                    break;
                case 2:
                    console.log("Ringing volume");
                    break;
                case 3:
                    console.log("Incoming call alert");
                    break;
                case 4:
                    console.log("Composer");
                    break;
                case 5:
                    console.log("Messages alert tone");
                    break;
                case 6:
                    console.log("Keypad tones");
                    break;
                case 7:
                    console.log("Warning and game tones");
                    break;
                case 8:
                    console.log("Vibrating alert");
                    break;
                case 9:
                    console.log("Screen saver");
                    break;
                default:
                    this.mainMenu();
            }
    }

    settingsMenu() {
        console.log("Settings");
        console.log("1.Calls settings\n2. Phone Settings\n3. Security Settings\n4. Restore factory settings");
        const input = prompt("Enter choice number from 1 to 4: ")
            switch (parseInt(input)) {
                case 1:
                    this.callSettings();
                    break;
                case 2:
                    this.phoneSettings();
                break;
                case 3:
                    this.securitySettings()
                    break;
                case 4:
                    console.log("Restore factory settings: ");
                    break;
                default:
                    this.mainMenu();
            }
    }

    securitySettings() {
        console.log("security settings\n 1.pin code request\n 2.call baring service\n 3.fixed dialling\n 4.closed user group\n 5.phone security\n 6.change access codes");
        const input2 = prompt("select number from 1 to 6: ")
        switch (parseInt(input2)) {
            case 1:
                console.log("pin code request:");
                break;
            case 2:
                console.log("call baring service: ");
                break;
            case 3:
                console.log("fixed dialling: ");
                break;
            case 4:
                console.log("closed user group: ");
                break;
            case 5:
                console.log("phone security: ");
                break;
            default:
                this.mainMenu();
        }
    }

    phoneSettings() {
        console.log("phone settings\n 1.language\n 2.cell info display\n 3.welcome note\n 4.network selection\n 5. light\n 6.confirm sim service actions");
        const input = prompt("Select from option 1 to 6: ")
        switch (parseInt(input)) {
            case 1:
                console.log("language");
                break;
            case 2:
                console.log("cell info display");
                break;
            case 3:
                console.log("welcome note");
                break;
            case 4:
                console.log("network selection");
                break;
            case 5:
                console.log("light");
                break;
            case 6:
                console.log("confirm sim service actions");
                break;
            default:
                this.mainMenu();

        }
    }

    callSettings() {
        console.log("call settings\n 1.automatic redial\n 2.speed dialing\n 3.call waiting options\n 4.own number sending\n 5.phone line in use\n 6.automatic answer");
        const input1 = prompt("Enter choice number from 1 to 6: ")
        switch (parseInt(input1)) {
            case 1:
                console.log("automatic redial");
                break;
            case 2:
                console.log("speed dialing");
                break;
            case 3:
                console.log("call waiting options");
                break;
            case 4:
                console.log("own number sending");
                break;
            case 5:
                console.log("phone line in use");
                break;
            case 6:
                console.log("automatic answer");
                break;
            default:
                this.mainMenu();
        }
    }

    callDivertMenu() {
        console.log("Call divert");
        this.mainMenu();

    }
    gameMenu(){
        console.log("Game");
        this.mainMenu();
    }
    calculatorMenu(){
        console.log("Calculator");
        this.mainMenu();
    }
    remindersMenu(){
        console.log("Reminders");
        this.mainMenu();
    }
    clockMenu(){
        console.log("ClockMenu");
        console.log("1. Alarm clock\n2. Clock setting\n3. Date settings\n4. Stop watch\n5. count down timer\n6. Auto update of date and time");
        const input = prompt("Select number from 1 to 6")
            switch (parseInt(input)){
                case 1:
                    console.log("alarm: ");
                    break;
                case 2:
                    console.log("clock setting: ");
                    break;
                case 3:
                    console.log("date settings: ");
                    break;
                case 4:
                    console.log("stop watch: ");
                    break;
                case 5:
                    console.log("count down timer: ");
                    break;
                case 6:
                    console.log("auto update of date and time: ");
                    break;
                default:
                    this.mainMenu();
            }
            this.mainMenu();
    }

    profileMenu() {
        console.log("profile");
        this.mainMenu();
    }
    simServicesMenu(){
        console.log("sim services");
        this.mainMenu();
    }

    options() {
        console.log("Options\n1. Type of view\n2. Memory status");
        const input = prompt("Select number: ");
        switch (parseInt(input)){
            case 1:
                console.log("Type of view");
                break;
            case 2:
                console.log("Memory status");
                break;
            default:
                this.mainMenu();
        }
    }
}

const myNokia3310 = new Nokia3310();
myNokia3310.mainMenu();

import inquirer from "inquirer";
async function main() {
    let loggin_form = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your Name:",
        },
        {
            type: "password",
            name: "password",
            message: "Enter your password"
        }
    ]);
    function Facebook() {
        return new Promise((resolve, reject) => {
            if (loggin_form.name === "Muzaffar" && loggin_form.password === "sindhiboy") {
                console.log("please waiting....");
                setTimeout(() => {
                    resolve("You have successfully logged in");
                }, 1500);
            }
            else {
                console.log("please waiting....");
                setTimeout(() => {
                    reject("The username you enterd isn't connected to an account. Find your account and log in.");
                }, 1500);
            }
        });
    }
    async function account() {
        try {
            let id = await Facebook();
            console.log(id);
            console.log("Welcome to your Dashboard");
        }
        catch (incorrect) {
            console.log(incorrect);
        }
        finally {
            console.log("login attempt finished");
        }
    }
    account();
}
main();

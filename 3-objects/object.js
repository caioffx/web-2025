//dinamic colletion of key/values pairs
const user = new Object;
user.login = "caioffx"
user.password = "helloworld.c"
user.email = "caiofreitas@outmail.br"

console.log(user);

delete user.email;
user.email = "novoemail@outlink.ch";

console.log(user);

const newUser = {
    login: "",
    password: "",
    email: "",
    keyword: "",
    userOrigin: {
        country: "",
        state: "",
        city: "",
        userAddress: {
            district: "",
            street: "",
            numb: "",
        }
    }
}

console.log(newUser)
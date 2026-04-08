const user = {
    username: "hitesh",
    price: 999,

    welcomeMessege: function () {
        console.log(this.username, "welcome to website");
    }
};

// calling the function
user.welcomeMessege();
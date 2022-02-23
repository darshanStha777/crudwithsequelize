module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        createAt: false,
        updatedAt: false
    })
    return User
}

// mathi vako define paxeee "user" yo name gareko database ma table banai dinxa rw tyha user name aru aru aafai banai dinxa lagako anushar
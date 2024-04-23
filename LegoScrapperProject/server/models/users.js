module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Users;
}
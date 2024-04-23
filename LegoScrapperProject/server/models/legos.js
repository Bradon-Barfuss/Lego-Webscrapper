module.exports = (sequelize, DataTypes) => {
    const Legos = sequelize.define("Legos", {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name:{
            type: DataTypes.STRING
        },
        ProductCost:{
            type: DataTypes.DECIMAL(10, 2)
        },
        ItemNumber:{
            type: DataTypes.INTEGER
        },
        Pieces:{
            type: DataTypes.INTEGER
        },
        Description:{
            type: DataTypes.STRING
        },
        ImageURL:{
            type: DataTypes.STRING
        }
        
    });

    return Legos;
}
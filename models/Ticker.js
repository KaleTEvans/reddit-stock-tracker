const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ticker extends Model {}

// fields for mentioned ticker
Ticker.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reddit_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sentiment_score: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'ticker'
    }
);

module.exports =  Ticker;
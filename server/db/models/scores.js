const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Scores extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
      }
    }
    Scores.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
      score :{ 
        type: DataTypes.INTEGER,
      },
      username :{ 
        type: DataTypes.STRING,
      },
    }, {
      sequelize,
      modelName: 'Scores',
    });
    return Scores;
  };
  
  
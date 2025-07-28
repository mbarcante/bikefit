import { Sequelize } from "sequelize";

export const applyAssociations = (sequelize: Sequelize) => {
  const {
    User,
    Client,
    BikeFit,
    Bike,
    PostureEvaluation,
    Frame,
    Rim,
    BikeType,
    ArticularAngles,
  } = sequelize.models;

  if (User && Client) {
    User.hasMany(Client, { foreignKey: "UsuarioId", as: "clients" });
    Client.belongsTo(User, { foreignKey: "UsuarioId", as: "user" });
  }
  if (User && PostureEvaluation) {
    User.hasMany(PostureEvaluation, {
      foreignKey: "UsuarioId",
      sourceKey: "id",
      as: "postureEvaluations",
    });
    PostureEvaluation.belongsTo(User, {
      foreignKey: "UsuarioId",
      targetKey: "id",
      as: "user",
    });
  }
  if (User && Rim) {
    User.hasMany(Rim, { foreignKey: "UsuarioId", as: "rims" });
    Rim.belongsTo(User, {
      foreignKey: "UsuarioId",
      targetKey: "id",
      as: "users",
    });
  }
  if (User && Bike) {
    User.hasMany(Bike, { foreignKey: "UsuarioId", as: "bikes" });
    Bike.belongsTo(User, {
      foreignKey: "UsuarioId",
      targetKey: "id",
      as: "user",
    });
  }
  if (User && BikeType) {
    User.hasMany(BikeType, { foreignKey: "UsuarioId", as: "bikeTypes" });
    BikeType.belongsTo(User, {
      foreignKey: "UsuarioId",
      targetKey: "id",
      as: "user",
    });
  }
  if (User && BikeFit) {
    User.hasMany(BikeFit, { foreignKey: "UsuarioId", as: "bikeFits" });
    BikeFit.belongsTo(User, {
      foreignKey: "UsuarioId",
      targetKey: "id",
      as: "user",
    });
  }
  if (User && Frame) {
    User.hasMany(Frame, { foreignKey: "UsuarioId", as: "frames" });
    Frame.belongsTo(User, {
      foreignKey: "UsuarioId",
      targetKey: "id",
      as: "user",
    });
  }
  if (User && ArticularAngles) {
    User.hasMany(ArticularAngles, {
      foreignKey: "UsuarioId",
      as: "ArticularAngles",
    });
    ArticularAngles.belongsTo(User, {
      foreignKey: "UsuarioId",
      targetKey: "id",
      as: "user",
    });
  }
  if (Client && Bike) {
    Client.hasMany(Bike, { foreignKey: "ClienteId", as: "bikes" });
    Bike.belongsTo(Client, { foreignKey: "ClienteId", as: "cliente" });
  }
  if (Client && PostureEvaluation) {
    Client.hasMany(PostureEvaluation, {
      foreignKey: "ClienteId",
      sourceKey: "id",
      as: "postureEvaluations",
    });
    PostureEvaluation.belongsTo(Client, {
      foreignKey: "ClienteId",
      targetKey: "id",
      as: "client",
    });
  }

  if (BikeFit && PostureEvaluation) {
    BikeFit.belongsTo(PostureEvaluation, {
      foreignKey: "AvaliacaoPosturalId",
      as: "postureEvaluation",
    });
    PostureEvaluation.hasOne(BikeFit, {
      foreignKey: "AvaliacaoPosturalId",
      as: "bikeFit",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  }

  if (BikeFit && Bike) {
    BikeFit.belongsTo(Bike, { foreignKey: "BikeId", as: "bike" });
    Bike.hasOne(BikeFit, {
      foreignKey: "BikeId",
      as: "bikeFit",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  }
};

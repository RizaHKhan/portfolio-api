let historyCollection = require("../db").db().collection("history");

module.exports = {
  getHistoryItems: async (req, res) => {
    try {
      const history = await historyCollection.find({}).toArray();
      res.send(history);
    } catch (error) {
      console.log(error);
    }
  },
  addHistory: async (req, res) => {
    try {
      const history = await historyCollection.insert({}).toArray();
      res.send(history);
    } catch (error) {
      console.log(error);
    }
  },
  deleteHistory: async (req, res) => {
    try {
      const history = await historyCollection.find({}).toArray();
      res.send(history);
    } catch (error) {
      console.log(error);
    }
  },
};

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
  addHistoryItem: async (req, res) => {
    try {
      const history = await historyCollection.insert({}).toArray();
      res.send(history);
    } catch (error) {
      console.log(error);
    }
  },
  deleteHistoryItem: async (req, res) => {
    try {
      const history = await historyCollection.find({}).toArray();
      res.send(history);
    } catch (error) {
      console.log(error);
    }
  },
  updateHistoryItem: async (req, res) => {
    try {
      const history = await historyCollection.find({}).toArray();
      res.send(history);
    } catch (error) {
      console.log(error);
    }
  },
};

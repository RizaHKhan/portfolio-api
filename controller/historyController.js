let historyCollection = require("../db").db().collection("history");
const ObjectID = require("mongodb").ObjectID;

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
      const history = await historyCollection.insertOne(req.body);
      res.send(history.ops[0]);
    } catch (error) {
      res.send(500);
    }
  },
  deleteHistoryItem: async (req, res) => {
    try {
      await historyCollection.deleteOne({
        _id: new ObjectID(req.params.id),
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500)
    }
  },
  updateHistoryItem: async (req, res) => {
    const query = { _id: new ObjectID(req.params.id) };
    const values = {
      $set: {
        order: parseInt(req.body.order),
        color: req.body.color,
        year: req.body.year,
        title: req.body.title,
        description: req.body.description,
      },
    };

    try {
      const response = await historyCollection.updateOne(query, values);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
};

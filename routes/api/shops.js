const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Shop = require('../../models/Shop');

// @route   GET api/shops
// @desc    List all shops registered
// @access  Public
router.get('/',
  async (req, res, next) => {

  // List all shops from the DB or throw 'Server error'
  try {
    let docs = await Shop.find();
    if (docs.length !== 0) {
      res.status(200).json(docs);
    } else {
      res.status(404).json({
        message: 'No shop registered yet!'
      });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({
      message: 'Server error!',
      error: err
    });
  }
});

// @route   POST api/shops
// @desc    Create a shop
// @access  Public
router.post('/',
  async (req, res, next) => {
    const { data, evaluation } = req.body;
    const shop = new Shop({
      _id: new mongoose.Types.ObjectId(),
      data,
      evaluation
    });

    // Save shop into DB or throw 'Server error'
    try {
      await shop.save();
      res.status(201).json({
        message: 'Shop created!',
        shop
      });

    } catch(err) {
      console.log(err);
      res.status(500).json({
        message: 'Server error!',
        error: err
      });
    }
});

// @route   GET api/shops/:shopId
// @desc    Get shop info by shop ID
// @access  Public
router.get('/:shopId',
  async (req, res, next) => {
    const id = req.params.shopId;

    // Find shop in the DB or throw 'Server error'
    try {
      let doc = await Shop.findById(id);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: 'No valid entry found for the provided ID!'
        });
      }

    } catch(err) {
      console.log(err);
      res.status(500).json({
        message: 'Server error!',
        error: err
      });
    }
});

// @route   PUT api/shops/:shopId
// @desc    Update shop info by shop ID
// @access  Public
// @TODO    Refactor
router.put('/:shopId',
  async (req, res, next) => {
    const id = req.params.shopId;
    const { data, evaluation } = req.body;
    let originalDoc;
    let updatedData;
    let updatedEvaluation;

    // Find shop in the DB or throw 'Server error'
    try {
      originalDoc = await Shop.findById(id);
    } catch(err) {
      console.log(err);
      res.status(500).json({
        message: 'Server error!',
        error: err
      });
    }

    // Overwrite the original doc
    updatedData = (req.body.data) ? Object.assign(originalDoc.data, data) : originalDoc.data;

    const { comments } = originalDoc.evaluation;
    // Check if there is a new comment added
    if (req.body.evaluation.comments && req.body.evaluation.comments.length !== 0) {
      const newComment = req.body.evaluation.comments[0];
      let sum = 0;
      comments.push(newComment);
      comments.map(item => sum = sum + item.evaluationRating);
      const average = sum / comments.length;
      updatedData.numberOfVotes = comments.length;
      updatedData.summaryRating = average.toFixed(2);
    }

    updatedEvaluation = {
      comments
    };

    // Update shop in the DB or throw 'Server error'
    try {
      await Shop.update({ _id: id}, { $set: { data: updatedData, evaluation: updatedEvaluation } });
      res.status(200).json({
        message: 'Shop updated!',
        id
      });
    } catch(err) {
      console.log(err);
      res.status(500).json({
        message: 'Server error!',
        error: err
      });
    }
  });

// @route   DELETE api/shops/:shopId
// @desc    Delete shop by shop ID
// @access  Public
router.delete('/:shopId',
  async (req, res, next) => {
    const id = req.params.shopId;

    // Delete shop from the DB or throw 'Server error'
    try {
      await Shop.remove({ _id: id });
      res.status(200).json({
        message: 'Shop deleted!',
        id
      });
    } catch(err) {
      console.log(err);
      res.status(500).json({
        message: 'Server error!',
        error: err
      });
    }
});

module.exports = router;

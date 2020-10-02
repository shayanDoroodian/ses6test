const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// News model
const News = require("../../models/News");

// Validation
const validateNewsInput = require("../../validation/news");

// @route   GET api/news/test
// @desc    Tests posts route
// @access  Public
router.get("/test", (req, res) =>
    res.json({
        msg: "News Works",
    })
);

// @route   GET api/news
// @desc    Get news
// @access  Public
router.get("/", (req, res) => {
    News.find()
        .sort({
            date: -1,
        })
        .then((news) => res.json(news))
        .catch((err) =>
            res.status(404).json({
                nonewsfound: "No news found",
            })
        );
});

// @route   GET api/news/:id
// @desc    Get news by id
// @access  Public
router.get("/:id", (req, res) => {
    News.findById(req.params.id)
        .then((news) => res.json(news))
        .catch((err) =>
            res.status(404).json({
                nonewsfound: "No news with that ID",
            })
        );
});

// @route   POST api/news
// @desc    Create news
// @access  Private
router.post(
    "/",
    passport.authenticate("jwt", {
        session: false,
    }),
    (req, res) => {
        const {
            errors,
            isValid
        } = validateNewsInput(req.body);

        // Check validation
        if (!isValid) {
            // If any errors, send 400 with errors object
            return res.status(400).json(errors);
        }

        const newNews = new News({
            url: req.body.url,
            title: req.body.title,
            body: req.body.body,
            date: req.user.date,
            tags: req.user.tags,
            album: req.user.album,
        });

        newNews.save().then((news) => res.json(news));
    }
);

// @route   DELETE api/news/:id
// @desc    Delete news
// @access  Private
router.delete(
    "/:id",
    passport.authenticate("jwt", {
        session: false,
    }),
    (req, res) => {
        news.findById(req.params.id)
            .then((news) => {
                // Delete
                news.remove().then(() =>
                    res.json({
                        success: true,
                    })
                );
            })
            .catch((err) =>
                res.status(404).json({
                    newsnotfound: "No news found",
                })
            );
    });

module.exports = router;
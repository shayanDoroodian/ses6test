const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience');

// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');
const profile = require('../../validation/profile');


// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: "Profile Works"
}));

// @route   GET api/profile
// @desc    Get current Users profile
// @access  Private
router.get('/', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    const errors = {};

    Profile.findOne({
            user: req.user.id
        })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route   Get api/profile/all
// @desc    Get all profiles
// @access  Public
router.get('/all', (req, res) => {
    const errors = {};
    Profile.find()
        .populate('user', ['name', 'avatar'])
        .then(profiles => {
            if (!profiles) {
                errors.noprofile = 'there are no profiles'
                return res.status(404).json(errors);
            }

            res.json(profiles);
        })
        .catch(err => res.status(404).json({
            profile: 'There are no profiles'
        }));

});

// @route   Get api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public
router.get('/handle/:handle', (req, res) => {
    const errors = {};
    Profile.findOne({
            handle: req.params.handle
        })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user';
                res.status(404).json(errors);
            }

            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route   Get api/profile/user/:user_id
// @desc    Get profile by user ID 
// @access  Public
router.get('/user/:user_id', (req, res) => {
    const errors = {};
    Profile.findOne({
            user: req.params.user_id
        })
        .populate('user', ['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user';
                res.status(404).json(errors);
            }

            res.json(profile);
        })
        .catch(err => res.status(404).json({
            profile: 'There is no profile for this user'
        }));
});

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post('/', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    const {
        errors,
        isValid
    } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.bio) profileFields.bio = req.body.bio;

    Profile.findOne({
        user: req.user.id
    }).then(profile => {
        if (profile) {
            // Update
            Profile.findOneAndUpdate({
                    user: req.user.id
                }, {
                    $set: profileFields
                }, {
                    new: true
                })
                .then(profile => res.json(profile));
        } else {
            // Create

            // Check if handle exists
            Profile.findOne({
                    handle: profileFields.handle
                })
                .then(profile => {
                    if (profile) {
                        errors.handle = 'That handle already exists';
                        res.status(400).json(errors);
                    }

                    // Save Profile
                    new Profile(profileFields).save().then(profile => res.json(profile));
                });
        }
    });

});

// @route   Post api/profile/experience
// @desc    Add experience to profile
// @access  Private
router.post('/experience', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    const {
        errors,
        isValid
    } = validateExperienceInput(req.body);

    // Check Validation
    if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }
    Profile.findOne({
            user: req.user.id
        })
        .then(profile => {
            const newExp = {
                jobID: req.body.jobID,
                title: req.body.title,
                jobAddress: req.body.jobAddress,
                location: req.body.location
            }

            // Add to experience array
            profile.experience.unshift(newExp);

            profile.save().then(profile => res.json(profile));
        });

});


// @route   Delete api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Profile.findOne({
            user: req.user.id
        })
        .then(profile => {
            // Get remove index
            const removeIndex = profile.experience
                .map(item => item.id)
                .indexOf(req.params.exp_id);

            // Splice out of arry
            profile.experience.splice(removeIndex, 1);

            // Save 
            profile.save().then(profile => res.json(profile));
        })
        .catch(err => res.status(404).json(err));

});

// @route   Delete api/profile
// @desc    Delete user and profile
// @access  Private
router.delete('/', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Profile.findOneAndRemove({
            user: req.user.id
        })
        .then(() => {
            User.findOneAndRemove({
                    _id: req.user.id
                })
                .then(() => res.json({
                    success: true
                }));

        });


});

module.exports = router;
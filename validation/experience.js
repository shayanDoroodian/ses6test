const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Job title field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
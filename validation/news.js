const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateNewsInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'title field is required';
    }
    data.body = !isEmpty(data.body) ? data.body : '';

    if (Validator.isEmpty(data.body)) {
        errors.body = 'body field is required';
    }

    if (!Validator.isLength(data.body, {
        min: 8,
    })) {
        errors.body = 'body must be at least 8 characters';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
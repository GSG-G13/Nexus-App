const validator = (schema, data) => {
    const { error } = schema.validate(data);
    
    if (error) {
        return { isValid: false, error };
    }

    return { isValid: true };
};



module.exports = validator;
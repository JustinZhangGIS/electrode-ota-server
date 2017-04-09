import Boom from 'boom';

export const notFound = (check, message = `Not Found`)=> {
    if (!check) throw Boom.notFound(message);
    return check;
};

export const invalidRequest = (check, message = 'Invalid Request', data)=> {
    if (!check) throw Boom.expectationFailed(message, data);
    return check;
};

export const alreadyExists = (check, name, type = 'app')=> {
    if (!check) throw Boom.conflict(`An ${type} named '${name}' already exists.`);
    return check;
};
export const alreadyExistsMsg = (check, message)=> {
    if (!check) throw Boom.conflict(message);
    return check;
};

export const notAuthorized = (check, message, data)=> {
    if (!check) throw Boom.unauthorized(message);
    return check;
};

export const missingParameter = (check, param)=> {
    if (!check) throw Boom.expectationFailed(`Required param '${param}' is missing.`);
    return check;
};

export const promiseError = (cb, ...args) => new Promise(()=>cb(...args));
export default({
    notFound,
    invalidRequest,
    alreadyExists,
    notAuthorized,
    missingParameter,
    alreadyExistsMsg
});

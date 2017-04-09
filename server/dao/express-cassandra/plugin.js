"use strict";

import diregister from '../../diregister';
import Dao from './dao-express-cassandra';
/** Can not use server.expose because object properties are merged by do not include
 the class properties.  This is legal, ugly and works **/

module.exports.register = diregister({
    name: "ota!dao",
    multiple: false,
    connections: false,
    dependencies: ['ota!cassandra']
}, async (options, client) => {

    return new Dao({client})
});
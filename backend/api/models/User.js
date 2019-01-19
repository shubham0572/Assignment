/**
 * Amsuser.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    migrate : 'safe',
    tableName: 'users',

    attributes: {
        id:{
        	type: 'number',
            autoIncrement: true,
            unique: true,
            columnType: 'int',
            columnName: 'id',
        },
        name:{
        	type: 'string',
            required: true,
        },
        email:{
        	type: 'string',
            required: true,
        },
        passwd:{
        	type: 'string',
            required: true,
        },
    },

};


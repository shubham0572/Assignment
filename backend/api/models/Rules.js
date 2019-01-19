/**
 * Amsuser.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    migrate : 'safe',
    tableName: 'rules',

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
        company:{
        	type: 'string',
            required: true,
        },
        rule1:{
        	type: 'string',
            required: true,
        },
        formula:{
            type: 'string',
            required: true,
        },
        value:{
            type: 'string',
            required: true,
        },
    },

};


'use strict';

/**
 * california service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::california.california');

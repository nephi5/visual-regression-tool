import * as joi from '@hapi/joi';

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .allow(['development', 'production', 'test', 'provision'])
      .default('development'),
    SERVER_PORT: joi.number().default(4040),
    MONGOOSE_DEBUG: joi.boolean().when('NODE_ENV', {
      is: joi.string().equal('development'),
      then: joi.boolean().default(true),
      otherwise: joi.boolean().default(false)
    }),
    JWT_SECRET: joi
      .string()
      .required()
      .description('JWT Secret required to sign'),
    MONGO_HOST: joi
      .string()
      .required()
      .description('Mongo DB host url'),
    MONGO_PORT: joi.number().default(27017)
  })
  .unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  env: envVars.NODE_ENV,
  port: envVars.SERVER_PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  jwtSecret: envVars.JWT_SECRET,
  frontend: envVars.MEAN_FRONTEND || 'angular',
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT
  }
};

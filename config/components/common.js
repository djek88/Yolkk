import dotenv from 'dotenv';
import joi from 'joi';

dotenv.config();

const envVarsSchema = joi
  .object({
    NODE_ENV: joi.string().allow(['development', 'production', 'test']).required(),
  })
  .unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
};

export default config;

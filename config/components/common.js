import joi from 'joi';

const envVarsSchema = joi
  .object({
    NODE_ENV: joi.string().allow(['development', 'production', 'test']).required(),
  })
  .unknown()
  .required();

export default () => {
  const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return {
    env: envVars.NODE_ENV,
  };
};

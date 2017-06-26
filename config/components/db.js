import joi from 'joi';

const envVarsSchema = joi
  .object({
    DB_URI: joi.string(),
  })
  .unknown()
  .required();

export default () => {
  const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return {
    db: {
      uri: envVars.DB_URI,
    },
  };
};

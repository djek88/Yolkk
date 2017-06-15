import joi from 'joi';

const envVarsSchema = joi
  .object({
    SERVER_PORT: joi.number().integer().positive().required(),
  })
  .unknown()
  .required();

export default () => {
  const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return {
    server: {
      port: envVars.SERVER_PORT,
    },
  };
};

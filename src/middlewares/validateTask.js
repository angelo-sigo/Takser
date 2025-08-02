const Joi = require('joi');

// Define o esquema de uma tarefa
const taskSchema = Joi.object({
  title: Joi.string().min(3).required(),
  done: Joi.boolean().required()
});

function validateTask(req, res, next) {
  const { error } = taskSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: 'Dados inválidos',
      details: error.details.map((detail) => detail.message)
    });
  }

  next();
}

module.exports = validateTask;

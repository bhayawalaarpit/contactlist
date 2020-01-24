const mongoose = require('mongoose')

if (!global.UserModal) {
  const ContactSchema = new mongoose.Schema(
    {
      firstname: { type: String, required: true, min: 2, max: 70 },
      lastname: { type: String, min: 2, max: 70 },
      email: { type: String, required: true, min: 6, max: 255, unique: true },
      company: { type: String },
      title: { type: String },
      mobilenumber: { type: String, required: true },
      work: { type: String },
      // Aditional Fields
      nickname: { type: String },
      birthdate: { type: Date },
      website: { type: String },
      relation: { type: String },
      notes: { type: String }
    },
    {
      timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
      versionKey: false
    }
  )

  ContactSchema.index({
    name: 'text',
    email: 'text',
    title: 'text',
    mobilenumber: 'text'
  })

  global.ContactModal = mongoose.model('Contact', ContactSchema)
}
module.exports = global.ContactModal

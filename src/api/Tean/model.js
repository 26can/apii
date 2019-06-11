import mongoose, { Schema } from 'mongoose'

const teanSchema = new Schema({
  text: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

teanSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      text: this.text,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Tean', teanSchema)

export const schema = model.schema
export default model

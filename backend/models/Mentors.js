const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicture: { type: String },

  currentPosition: { type: String },
  company: { type: String },
  experienceYears: { type: Number },
  bio: { type: String },
  linkedin: { type: String },

  expertise: [{ type: String }],
  availableSlots: [{ type: String }], // Or a custom format for scheduling
  preferredMode: { type: String, enum: ['online', 'in-person', 'both'], default: 'online' },

  mentees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  sessions: [
    {
      date: Date,
      topic: String,
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
    }
  ],
  ratings: [
    {
      rating: Number,
      feedback: String,
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
    }
  ],
  maxMentees: { type: Number, default: 5 },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicture: { type: String },

  phone: { type: String },
  location: { type: String },

  institution: { type: String },
  course: { type: String },
  year: { type: String },
  grades: { type: [Number] },

  careerGoals: { type: String },
  interestedFields: [{ type: String }],
  resumeLink: { type: String },

  skills: [{ type: String }],
  certifications: [
    {
      title: String,
      issuer: String,
      link: String
    }
  ],

  mentorAssigned: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
  projects: [
    {
      title: String,
      description: String,
      link: String
    }
  ],
  progress: [{ type: String }],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student

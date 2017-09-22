import { isEmail } from 'validator';
import mongoose from '../../lib/mongoose';

const GENDER = ['MALE', 'FAMALE'];
const LIFESTYLE = ['ACTIVE', 'INACTIVE'];
const BLOOD_TYPE = ['FIRST', 'SECOND', 'THIRD'];

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      isAsync: false,
      validator: isEmail,
      message: '{VALUE} is not a valid email!',
    },
  },
  gender: {
    type: String,
    required: true,
    enum: GENDER,
  },
  height: {
    type: Number,
    required: true,
    min: 1,
  },
  weight: {
    type: Number,
    required: true,
    min: 1,
  },
  birthday: {
    type: Date,
    required: true,
  },
  lifestyle: {
    type: String,
    enum: LIFESTYLE,
    default: LIFESTYLE[0],
  },
  bloodType: {
    type: String,
    required: true,
    enum: BLOOD_TYPE,
  },
  illnessesPast: {
    type: [String],
    default: [],
  },
}, {
  minimize: false,
  timestamps: true,
});

const User = mongoose.model('User', Schema);
User.GENDER = GENDER; // try Schema.statics.GENDER = GENDER;
User.LIFESTYLE = LIFESTYLE;
User.BLOOD_TYPE = BLOOD_TYPE;

export default User;

// const newUser = new User({
//   firstName: ' test ',
//   lastName: ' another test   ',
//   email: '  TESessdfddsdfsdfst@tesste.test  ',
// });

// newUser.save().then((user) => {
//   console.log(user);
// }).catch((err) => {
//   console.log(err);
// });

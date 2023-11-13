import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
  userID: { type: String, unique: true, required: true, autoIndex: true },
  username: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
  country: String,
  language: String,
  currencyPreference: String,
  timezone: String,
  registrationDate: { type: Date, default: Date.now },
  lastLoginDate: Date,
  profilePicture: String,
  preferences: { type: Schema.Types.Mixed }, //To tell Mongoose that the value of a Mixed type has changed, you need to call doc.markModified(path), passing the path to the Mixed type you just changed.
  authenticationTokens: [{ type: String }],
  securityQuestions: [{ type: String }],
  securityAnswers: [{ type: String }],
  phoneNumber: String,
  address: String,
  socialMediaProfiles: [{ type: String }],
  notificationPreferences: { type: Schema.Types.Mixed },
  accountStatus: { type: String, default: "active" },
  rolesAndPermissions: { type: Schema.Types.Mixed },
  connectedAccounts: [{ type: String }],
  isAccountDeactivated: { type: Boolean, default: false },
});

const Transaction = model("Transaction", transactionSchema);

export default Transaction;

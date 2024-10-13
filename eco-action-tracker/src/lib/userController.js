import User from "@/app/models/User";
import jwt from "jsonwebtoken";

export const addReminderToUser = async (token, reminder) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decoded.id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { reminders: reminder } },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      throw new Error("User not found");
    }

    return updatedUser;
  } catch (error) {
    throw new Error(`Error updating user reminders: ${error.message}`);
  }
};

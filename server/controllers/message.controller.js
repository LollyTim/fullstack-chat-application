export const sendMessage = (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;

    const senderId = req.user_Id;
  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

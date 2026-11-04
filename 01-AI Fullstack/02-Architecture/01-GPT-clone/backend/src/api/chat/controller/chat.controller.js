export async function createConversationController(req, res) {
  try {
    const { message } = req.body;
    res.status(201).json({
      success: true,
      message: 'conversation created successfully',
      data: { message }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

export async function getConversationController(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: 'conversations retrieved successfully',
      data: []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
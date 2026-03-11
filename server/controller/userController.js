const register = async (req, res) => {
  try {
    res.status(200).json({ message: "Register endpoint" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const login = async (req, res) => {
  try {
    res.status(200).json({ message: "Login endpoint" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { register, login }

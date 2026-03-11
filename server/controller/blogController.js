const getAllBlogs = async (req, res) => {
  try {
    res.status(200).json({ message: "Get all blogs" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getBlogById = async (req, res) => {
  try {
    res.status(200).json({ message: "Get blog by ID" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createBlog = async (req, res) => {
  try {
    res.status(201).json({ message: "Blog created" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateBlog = async (req, res) => {
  try {
    res.status(200).json({ message: "Blog updated" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteBlog = async (req, res) => {
  try {
    res.status(200).json({ message: "Blog deleted" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const getBlogbyuserId= async (req, res) => {
  try {
    res.status(200).json({ message: "get Blog by user Id" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
module.exports = { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog ,getBlogbyuserId}

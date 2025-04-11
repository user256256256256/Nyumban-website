import express from "express"
import pool from "../database.js"

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const { email } = req.body

        if (!email) {
            return res.status(400).json({error: "Please fill in your Email Address!"})
        }

        const existingSubscriber = await pool.query(
            "SELECT * FROM subscribers WHERE email = $1", [email]
        )

        if (existingSubscriber.rows.length > 0) {
            return res.status(409).json({ error: "Your email is already subscribed!" });
        }

        await pool.query("INSERT INTO subscribers (email) VALUES ($1)", [email])
       
        console.log("Subscriber saved:", email)
        res.json({ message: "User subscribed successfully!" })

    } catch (err) {
        console.error(err)
        res.status(500).json({error: "Internal Server Error!"})
    }
})

export default router
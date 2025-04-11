const API_URL = "http://localhost:4000"

export const subscribeUser = async (email) => {
    try {
        const response = await fetch(`${API_URL}/api/subscribers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email })
        })

        return await response.json()
    } catch (error) {
        console.error("API Error:", error)
        throw error;
    }
}
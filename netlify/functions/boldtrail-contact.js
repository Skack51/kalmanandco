export const handler = async (event) => {
  try {
    // Netlify sends submissions wrapped inside "payload"
    const body = JSON.parse(event.body);

    // Some submissions come through event.body directly from the form
    const data = body?.payload?.data || body;

    const name = data.name || "";
    const email = data.email || "";
    const message = data.message || "";
    const phone = data.phone || ""; // optional if you add phone later

    // Send data to BoldTrail API
    const response = await fetch("https://api.boldtrail.io/leads/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.BOLDTRAIL_API_KEY}`
      },
      body: JSON.stringify({
        fullName: name,
        email: email,
        phone: phone,
        notes: message,
        source: "Kalman & Co. Website Contact Form"
      })
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("BoldTrail API error:", text);

      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Failed to send to BoldTrail",
          details: text
        })
      };
    }

    // Success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Lead successfully forwarded to BoldTrail"
      })
    };
  } catch (err) {
    console.error("Function error:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Serverless function crashed",
        details: err.message
      })
    };
  }
};

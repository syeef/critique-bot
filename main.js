require("dotenv").config()
const shuffle = require("lodash/shuffle")
const chunk = require("lodash/chunk")
const got = require("got")

const webhookUrl = process.env.WEBHOOK_URL

// Add more people here
const people = [
  // Sam Mason
  {
    id: "115239313547085426897"
  },
  // Susan Lin
  {
    id: "101959280054230313273"
  },
  // Nena Nguyen
  {
    id: "100583597779877243847"
  },
  // Bob Zavala
  {
    id: "115321138251685146859"
  },
  // Syeef Karim
  {
    id: "105542853933774162871"
  }
]

const mainMessage = `*It's critique time!*
Organize a session with your selected peers this week. Bring Work in Progress at any stage for critique. Refer back to our deck for best practices <https://docs.google.com/presentation/d/1Pc7K-buiXnT2pTzAEbzRTQRJapO97CLNWBBPldpt5KQ/edit?usp=sharing|here>\n
`

const genGroups = () => {
  const groups = chunk(shuffle(people), 3)
  return groups.map((group, i) => {
    return `*Group #${i + 1}*
${group.map(p => ` <users/${p.id}>`)}`
  })
}

const postMessage = async () => {
  try {
    await got(webhookUrl, {
      method: "POST",
      body: { text: `${mainMessage}${genGroups()}` },
      json: true
    })
    return Promise.resolve("Success")
  } catch (error) {
    return Promise.reject(`Something went wrong ${error}`)
  }
}

module.exports = async (req, res) => {
  try {
    await postMessage()
    return res.end("success")
  } catch (error) {
    res.statusCode = 400
    return res.end()
  }
}

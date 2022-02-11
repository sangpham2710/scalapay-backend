import fetch from 'node-fetch'

export default {
  callAPI: async (req, res) => {
    const url = 'https://staging.api.scalapay.com/v2/orders'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer qhtfs87hjnc12kkos',
      },
      body: JSON.stringify(req.body),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    res.status(200).json(data)
  },
}

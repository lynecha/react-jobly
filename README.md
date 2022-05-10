# react-jobly
A single page React frontend and a RESTful API backend with full CRUD capabilities to allow users to perform CRUD operations on the users, jobs, and companies routes depending on authorization level and respond back with JSON. Built using Node.js/Express/Postgres.

### Learnings
* Authentication and authorization through JWTs
* Recovering login status through data hydration
* Protect against SQL injection attacks by parameterizing database queries

_The backend code in this repository was provided by [Rithm School](https://www.rithmschool.com/). We built the backend as a separate exercise (code can be found [here](https://github.com/lynecha/express-jobly)). Pair programmed with [Andrew Kim](https://github.com/ghjkm319)_

## Getting Started

1. Clone this repo 
```
git clone https://github.com/lynecha/react-jobly.git
```
2. cd into the "backend" directory, install required packages, create and seed database, and start the server. (Make sure that you have postgreSQL installed)
```
cd backend
npm install
createdb jobly
psql jobly < data.sql
nodemon server.js 
```
This will start the server on port 3001

3. cd into the "frontend" directory, install required packages, then start the app
```
cd frontend
npm install
npm start
```

This will run your app on http://localhost:3000 


## App Information

### Routes
|Path | Component |
| :--- | :--- |
| / | Home  |
| /register  | Login  |
| /login  | Login  |
| /companies  | Companies  |
| /companies/:handle  | Company  |
| /jobs  | Jobs |
| /profile | Profile  |


### Component Architecture
```

https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Jobly%20Component%20Tree.drawio#R7V1bc%2BI2FP41zKQPZHwHHoFks82k7c5ku7vtS0dgAU5sy%2BtLEvLrK%2FmGLSmGJNiSw3Z2pvjYCPs7n85NR85An3tPVyEINn8gG7oDTbGfBvrFQNM0U9Xw%2F4hkm0nU8cTIJOvQsXPZTnDrPMNcqOTSxLFhVLswRsiNnaAuXCLfh8u4JgNhiB7rl62QW%2F%2FVAKwhI7hdApeVfnfseJNJx6ayk3%2BGznpT%2FLKq5Gc8UFycC6INsNFjRaRfDvR5iFCcffKe5tAl6BW4PE%2FVxdfb36%2B%2FTkbf3f%2B85z%2F%2F%2FXI9zAb79JqvlI8QQj9%2B89Df7q4mWrJaxVc%2F%2F5p70x8303U0zLUbxdsCL2hj%2BPJDFMYbtEY%2BcC930lmIEt%2BGZFQFH%2B2uuUEowEIVC%2B9gHG9zLoAkRli0iT03P3vg4%2BSPHaEkXMKG6%2FJniEG4ho3j5cQlT1jhRo7WFUQejMMtviCELoidhzqBQM7DdXndDmv8IYebDz18vvv2oIMwUK6eh1f25XZ2nwwNSwT2GPJw%2B4N8%2F9wsDv%2FJh0sPLp5qR9v8SJTOTFE6a7rtB%2BAm%2BS9Ng2CgWcDD6M%2F8RRSUUFXUulMa0cDjxonhbQBSfB6x1X3P5HiAYQyfGpHJzw6NwiLnlnyo6bngcWcXVSuXbao2sbjwPXjyzY8uYg5EmHbxlPgWLPCRD9%2FFb%2B6DmfqhBFelIrjBEHyJvAD45A5unChOHbUXYMwwTFLyXC1MRk5zQx2dmyzPNQ7PLbMlVE0G1RUKvSqWZxEE4XLzm5yYaubbMS2vPDqqYwbVa7TAgjkIbfl5qo%2FrmJrW%2BEBEj2CMG01RBdB5OvkdHL%2BXsM53sFouvqXZIsSf1uTT2Y3j39eRVxw%2FwvG%2FpLymbYUEOmAjjM8wRFiyADg%2FCuXn9VCrhxmGahxsK8Ztocq6tYK9EeZ3wV8fPCwAgfjMRes1tFP6YuoqiAizs2c%2BIrSuX5ANhW%2BtOpqk6hlR%2BuEFgTpHOeO2YsAiLD3JPKgwQNU4kR9QDgSFiXydqSJ0Jgp7Sy7shdRs%2BjZfhNV6%2BDoTkueKwl4XhT23ziYGe4nnCx8lYXUI7u3oxgedMPynlQt789eE2a8zYQ6m8bYrGQ7WSJwm7hhpJlUnv8YTLncJP%2BfsHVrwTwQhWjmYB3KmPHo949E46ajByXgmrWU8PTNuTU5%2Bf4FbkyoS05l5ssEjp4vIcpKXSdc7LFHx2Xsi7qEprdjLesnSDyFLzYKgl6tS8tKCWlZTz%2BwO61BzSSFgvDK%2BlYXcdUaVWt4Qb7e0E6kzNpUP96bu6kjU7OEG2eYvnR2gs7FUFo%2FNRLK04VBjV00y5LdzhlW3c9pYuJ3rVXzWQS%2BOPjlwImlyRW3WC6EDuQMbxsBxIznnhDUumz6aZkWRSBx7VvDLNUJybkk8SeHV98bOcnmS4rbrrmTQl040usPH0MwuO9EaY4XetqKZlsKAyivotdeL1ug6GKq6mKpnK8eNYQhtSTG13tyK1hacRkMr2nkWIFJA4keNB1SXb4ju4Ry5KNyFFlgTLiUCrrP28eESowqxfEaAc5bAneYnPMe2U3fAU0%2FdRbSloRHVqKaPdEZDvM7t1hq3DY1RUJ%2F8K%2FTtdmNOi3W4jUQ%2FnsfNv%2FoFOWn%2FZUEgwzifVP4b1%2BlkUjzJni8fY0eVVw5r0MNmcDDDpgwsn%2FUdpGSL%2B4PRzIbRMnSC2EF4Mk8HxI5ZPxOyaWsGInuF%2F%2B0EAw3%2FspIamOxSc4ZHGIwuBuYFOZd9Hl2cmPmxjLr5UUccB2F2meQarL%2Bt9irjyX1iKlKpFn3dYvs6u%2FUQbB3oOqsDnZ5yDNp9m2zE2q1y2NrCbRr1Y9kFiMGJ6cfUZZs8bOZ7yvrRFTr8Fa2fCaOfJIIkjlutyCb2rOlG8cA9EYI78JSGcD8ZveHfcoLoJXS7WKej%2FIZmsq593KVnL8KI%2FkNLW33NZFnbLbRsVt1TaC2atbpo1rL5MH4CJd2QeFKm2qBSBVMVHOqYbFJINDMvllJOSjuqdNrh7cwTUUc6Xj2oqR9s%2Fzavo7eC8ws36ohamxhrdG380BoQPZRJ980er%2BrDb1cfi2FM1yt7TTsH9u8wELaHrem2q%2BkNsZGakgRnZD0qknSlZKgXjeIi2tr4C9sn0iLVtAljP%2F3lamtjnd4NWju%2B3NRXJ7JRX0wn%2BpEpXGy8279DT67Xl3HeFvJF6l1ApkLzl11D7Zi%2FrB2gmzGkxZJ%2BIdCExZL3FolRa1iyFe2VA1371DoFhgYdoXBaBXhLdcdI8fiaYWvZc%2BRnWpiy%2FcBJRN5yQ7N%2Bg7xFEglkfLmWXb49j7NGwCs5HeO9KVxcNRZXPE4I105E2MnbpumSKIN7BtoOSenKfZz8L%2BMrUMJ58ZOcVoqO1Sec%2BqvBM%2FjlK2CPrzO2%2Fa6Hc8GkN9Qah1Vf25sK7HJM%2F2DVjLfVtFtDtdByr1Gll3bFo8prbewbqiOaqxobZHSLKhv%2B9e29ebS7MtQD8%2BvWYmqdjTD6BipdtOgU1MbdSBVQ8XMDj3Qc7vb3%2BMCTNI%2Bmm8WNg7vvj%2FB2R341je00Y6CTuCTK2wHXen%2Bywak6NdK1%2FQZlilZFdeb1LckvbGboaDmK07rVP%2F8%2BLDusXtm70pqDNz5E5lT%2BLRFZYOW0BK0Sf5k2y%2BftQMsQghg7o09JYKcfFC64H7ysplP1n%2FKNURXNjTiaM1rTnPZLc4fNOarur3IywG41x65%2B%2F32CerHoimp7Tb2kLlr%2BmabM0e%2F%2B2pV%2B%2BT8%3D


App
├── Navigation
└─┬ Routes
  ├─┬ Companies
  │ ├── CompanyCard
  │ └── Search
  ├─┬ Company
  │ └── JobCard
  ├── Home
  ├─┬ Jobs
  │ │ └── JobCard
  │ └── Search
  ├─┬ Login
  │ └── Alert
  ├── PrivateRoute
  └─┬ Profile
    └── Alert
```

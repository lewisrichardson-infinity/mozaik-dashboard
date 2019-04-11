import Promise from 'bluebird'

const client = mozaik => {
  let count = 0
  return {
    getStuff() {
      count++
      return Promise.resolve({ count })
    }
  }
}

export default client
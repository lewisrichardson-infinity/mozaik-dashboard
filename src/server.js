import Mozaik from 'mozaik'
import config from '../config'
import github from 'mozaik-ext-github/client'
import people from '../extensions/infinitypeople/client'
console.log(people)
const mozaik = new Mozaik(config)
mozaik.bus.registerApi('github', github)
mozaik.bus.registerApi('people', people)

mozaik.startServer();

import app from './app/index'

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

global.chai = chai
global.expect = chai.expect
global.should = chai.should()
global.chai.use(chaiAsPromised)

var context = require.context('./__tests__', true, /\.spec\.js$/)
context.keys().forEach(context)

import { recordSaga } from './recordSaga'
import { authenticateSaga } from './authSaga'
import { authenticate } from './actions'

jest.mok("./api", () => ({ serverLogin: jest.fn(() => true) }))

describe("authSaga", ()=>{
  describe("#AUTHENTICATE", () => {
    it("authenticates through api", async () => {
      const dispatced = await recordSaga(
        authenticateSaga,
        authenticate("testLogin", "testpassword")
      )
      expect(dispatced).toEqual([{
        type: "LOG_IN"
      }])
    })
  })
})
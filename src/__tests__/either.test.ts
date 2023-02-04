import { Either } from '../utils/either'

describe('Tests for Either monad', () => {
    it('Either should return right kind after error', async() => {
        const req = { status: 200 }
        const promise = new Promise<Either<string, string>>(function(resolve, reject) {
            if (req.status === 200) {
                resolve(Either.right('done'))
            }
            reject(Either.left('failed'))
        })
        const result = await promise
        expect(result.isRight()).toBe(true)
    })
})
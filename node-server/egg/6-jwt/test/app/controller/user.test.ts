import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/user.test.ts', () => {
  it('should POST /login', async () => {
    const result = await app.httpRequest().post('/login').expect(200);
    assert(result.text === 'hi, egg');
  });
});

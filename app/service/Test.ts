import { Service } from 'egg';
import { TestLOL } from '../../typings/lol';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    console.log(TestLOL);
    return `hi, ${name}`;
  }
}

import * as sk from './index'
import * as assert from 'assert';

describe('serialization', () => {
  it('serializes a full game', () => {
    const game = new sk.Game(1, 2, [
      new sk.Round(
        [ new sk.Card('y1'), new sk.Card('r14') ],
        [ new sk.Bid(1, 0), new sk.Bid(2, 1) ],
        [ 
          new sk.Trick([
            new sk.Play(0, 1, new sk.Card('y1')),
            new sk.Play(1, 2, new sk.Card('k1')),
          ]),
          new sk.Trick([
            new sk.Play(0, 1, new sk.Card('r14')),
            new sk.Play(1, 2, new sk.Card('m1')),
          ]),
        ]
      )
    ])
    assert(game.toString() === '1 2 2 y1 r14 1:0 2:1 0:1:y1 1:2:k1 0:1:r14 1:2:m1');
  })
})

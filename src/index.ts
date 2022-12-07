import * as assert from 'assert';

export type PlayerId = number
export type CardId = 
  'r1' | 'r2' | 'r3' | 'r4' | 'r5' | 'r6' | 'r7' | 'r8' | 'r9' | 'r10' | 'r11' | 'r12' | 'r13' | 'r14' | 
  'y1' | 'y2' | 'y3' | 'y4' | 'y5' | 'y6' | 'y7' | 'y8' | 'y9' | 'y10' | 'y11' | 'y12' | 'y13' | 'y14' | 
  'g1' | 'g2' | 'g3' | 'g4' | 'g5' | 'g6' | 'g7' | 'g8' | 'g9' | 'g10' | 'g11' | 'g12' | 'g13' | 'g14' | 
  'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7' | 'b8' | 'b9' | 'b10' | 'b11' | 'b12' | 'b13' | 'b14' | 
  'p1' | 'p2' | 'p3' | 'p4' | 'p5' |
  't1' | 
  'k1' |
  'm1' | 'm2' |
  'e1' | 'e2' | 'e3' | 'e4' | 'e5';

export class Game {
  readonly playerId: PlayerId
  readonly numPlayers: number
  readonly rounds: Round[]

  constructor (playerId: PlayerId, numPlayers: number, rounds: Round[]) {
    this.playerId = playerId
    this.numPlayers = numPlayers
    this.rounds = rounds
  }

  toString() {
    return [
      this.playerId,
      this.numPlayers,
      this.rounds.join(' ')
    ].join(' ')
  }
}

export class Round {
  readonly handCards: Card[]
  readonly bids: Bid[]
  readonly tricks: Trick[]

  constructor (handCards: Card[], bids: Bid[], tricks: Trick[]) {
    assert(handCards.length === tricks.length, 'Number of cards and tricks should be the same');
    this.handCards = handCards
    this.bids = bids
    this.tricks = tricks
  }

  toString() {
    return [
      this.handCards.length,
      this.handCards.join(' '),
      this.bids.join(' '),
      this.tricks.join(' '),
    ].join(' ')
  }
}

export class Trick {
  readonly plays: Play[]

  constructor (plays: Play[]) {
    assert(plays.every((play,i) => play.turn === i))
    this.plays = plays
  }

  toString() {
    return this.plays.join(' ')
  }
}

export class Play {
  readonly turn: number
  readonly player: PlayerId
  readonly card: Card

  constructor (turn: number, player: PlayerId, card: Card) {
    this.turn = turn
    this.player = player
    this.card = card
  }

  toString() {
    return [
      this.turn,
      this.player,
      this.card,
    ].join(':')
  }

  static fromString(str: string): Bid {
    let split = str.split(':')
    assert(split.length === 2, 'One colon expected')
    let player = parseInt(split[0])
    let amount = parseInt(split[1])
    assert(!isNaN(player), 'PlayerId should be a number')
    assert(!isNaN(amount), 'Bid Amount should be a number')
    return new Bid(player, amount)
  }
}

export class Bid {
  readonly player: PlayerId
  readonly amount: number

  constructor (player: PlayerId, amount: number) {
    this.player = player
    this.amount = amount
  }

  toString() {
    return [
      this.player,
      this.amount,
    ].join(':')
  }

  static fromString(str: string): Bid {
    let split = str.split(':')
    assert(split.length === 2, 'One colon expected')
    let player = parseInt(split[0])
    let amount = parseInt(split[1])
    assert(!isNaN(player), 'PlayerId should be a number')
    assert(!isNaN(amount), 'Bid Amount should be a number')
    return new Bid(player, amount)
  }
}

export class Card {
  readonly id: CardId

  static readonly AllCards: CardId[] = [
    'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 'r10', 'r11', 'r12', 'r13', 'r14', 
    'y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7', 'y8', 'y9', 'y10', 'y11', 'y12', 'y13', 'y14', 
    'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 'g11', 'g12', 'g13', 'g14', 
    'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'b14', 
    'p1', 'p2', 'p3', 'p4', 'p5',
    't1', 
    'k1',
    'm1', 'm2',
    'e1', 'e2', 'e3', 'e4', 'e5',
  ]

  static isCardId(str: string): str is CardId {
    return Card.AllCards.includes(str as CardId)
  }

  constructor (id: CardId) {
    this.id = id
  }

  toString() {
    return this.id
  }

  static fromString(str: string): Card {
    assert(Card.isCardId(str), str+' is a CardId');
    return new Card(str)
  }
}

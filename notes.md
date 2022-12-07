r14 - Parrots 1-14
y14 - Maps 1-14
g14 - Treasure Chests 1-14
b14 - Jolly Rodgers 1-14
p5  - Pirates 1-5
t1  - Tigress
k1  - Skull King
m2  - Mermaids 1-2
e5  - Escapes 5

game: '<num_players>'
round: '<num_cards> <...bids>'
trick: '<num_cards_left> <...your_cards_left> <starting_player_id> <...cards_played>'

## player transactions
- bid(player_id, hand_cards) => bid_amount
- play(num_players, hand_cards, played_cards) => card


Game {
  player_id
  num_players
  Round {
    num_cards
    hand_cards
    Bid {
      player
      amount
    }
    Trick {
      Play {
        player
        turn
        card
      }
    }
  }
}

```js
var game = {
  players:[1,2,3,4,5],
  rounds:[
    {
      round_id: 1,
      num_cards: 2,
      hands: [
        {
          player: 1,
          cards: ['y1','r14'],
        },
        {
          player: 2,
          cards: ['k1', 'm1'],
        },
      ],
      tricks: [
        {
          plays: [
            {
              
            }
          ]
        }
      ]
    }
  ]
}
```

CERE Games SDK integration guide
===

In order to integrate [CERE Games SDK](https://github.com/cere-io/cere-games-sdk/tree/master/packages/sdk) into a game, the game developer needs to follow these steps:
1. [Install the SDK package](https://github.com/cere-io/cere-games-sdk/tree/master/packages/sdk#installation)
```bash
npm install --save @cere/games-sdk
```
2. [Create](https://github.com/cere-io/cere-games-sdk/tree/master/packages/sdk#gamessdk) and [initialize](https://github.com/cere-io/cere-games-sdk/tree/master/packages/sdk#init) the SDK instance as soon as possible on on the game's page (eg. on page load)
```ts
const { GamesSDK } = require("@cere/games-sdk");

window.CereGamesSdk = new GamesSDK({
  gameId: 'tower-game',
  onReady: (sdk) => {
    // ...
  },
});

window.CereGamesSdk.init();

```
3. [Show the preloader modal](https://github.com/cere-io/cere-games-sdk/tree/master/packages/sdk#showpreloader) as soon as the SDK is ready
```ts
new GamesSDK({
  // ...
  onReady: (sdk) => {
    window.gamesSdkPreloader = sdk.showPreloader({
      onStart:() => {
        // Start the game
      }
    });
  },
});
```
4. Set the preloader ready as soon as all game assets are loaded and the game is ready to be played
```ts
window.gamesSdkPreloader.setReady();
```
5. [Save the player's score](https://github.com/cere-io/cere-games-sdk/tree/master/packages/sdk#savescore) when the game is over
```ts
window.CereGamesSdk.saveScore(score).then(() => {
  // The score is saved
});
```
6. [Show the leader board](https://github.com/cere-io/cere-games-sdk/tree/master/packages/sdk#showpreloader) right after the score is saved
```ts
window.CereGamesSdk.showLeaderboard({
  onPlayAgain: () => {
    // Restart the game
  }
});
```

## Helpful links
- [CERE Games SDK GitHub](https://github.com/cere-io/cere-games-sdk)
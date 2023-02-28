const { GamesSDK } = require("@cere/games-sdk");

window.CereGamesSdk = new GamesSDK({
  gameId: 'tower-game',
  onReady: (sdk) => {
    window.gamesSdkPreloader = sdk.showPreloader(() => {
      document.getElementById('start')?.click();
    });
  },
});

window.CereGamesSdk.init();

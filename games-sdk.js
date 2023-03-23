const { GamesSDK } = require("@cere/games-sdk");

window.CereGamesSdk = new GamesSDK({
  gameId: 'tower-game',
  env: 'dev',
  onWalletDisconnect: () => {
    window.location.reload();
  },

  onReady: (sdk) => {
    window.gamesSdkPreloader = sdk.showPreloader({
      onStart:() => {
        document.getElementById('start')?.click();
      }
    });
  },
});

window.CereGamesSdk.init();

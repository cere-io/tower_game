const { GamesSDK } = require("@cere/games-sdk");

window.CereGamesSdk = new GamesSDK({
  onReady: (sdk) => {
    window.gamesSdkPreloader = sdk.showPreloader(() => {
      document.getElementById('start').click();
    });
  },
});

window.CereGamesSdk.init();

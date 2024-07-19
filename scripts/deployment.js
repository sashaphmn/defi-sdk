const deploymentAddresses = {
  router: {
    10: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    56: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    100: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    137: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    250: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    324: '0xe4C82643A4F9Fd288322cc6fBd7C48AB068B38D3',
    1101: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    8453: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    42161: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    42220: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    43114: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    59144: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    81457: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    534352: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    7777777: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    666666666: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
    1313161554: '0xd7F1Dd5D49206349CaE8b585fcB0Ce3D96f1696F',
  },
  simpleCaller: {
    10: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    56: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    100: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    137: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    250: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    324: '0xB18Bb3d1775f9a1AdFF9Bc14CcCe1510A55148D9',
    1101: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    8453: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    42161: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    42220: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    43114: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    59144: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    81457: '0xe76BA87E04555e1a5afcCb0c8c5AC4d0b29e3dBE',
    534352: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    7777777: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    666666666: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
    1313161554: '0xC629Bf86f02ef13E8F1f5F75adE8a8165587998F',
  },
  uniswapV2Caller: {
    1101: '0xe76BA87E04555e1a5afcCb0c8c5AC4d0b29e3dBE',
    59144: '0xe76BA87E04555e1a5afcCb0c8c5AC4d0b29e3dBE',
    81457: '0xC0AC45d01a64660629506b5889722C6dA25F4084',
    534352: '0xe76BA87E04555e1a5afcCb0c8c5AC4d0b29e3dBE',
    7777777: '0xe76BA87E04555e1a5afcCb0c8c5AC4d0b29e3dBE',
    666666666: '0xe76BA87E04555e1a5afcCb0c8c5AC4d0b29e3dBE',
  },
  weth: {
    1101: '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9',
    59144: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
    81457: '0x4300000000000000000000000000000000000004',
    534352: '0x5300000000000000000000000000000000000004',
    7777777: '0x4200000000000000000000000000000000000006',
    666666666: '0xEb54dACB4C2ccb64F8074eceEa33b5eBb38E5387',
  },
  feeBeneficiaries: {
    10: '0x7d20Ab6D8aF50d87A5E8DeF46e48F4d7dC2Ea5c7',
    56: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54',
    100: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54',
    137: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54',
    250: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54', // fantom
    324: '0x5d4C06f4d54bD901b4377241DAB6447b8E19d75c',
    1101: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54',
    8453: '0x7d20Ab6D8aF50d87A5E8DeF46e48F4d7dC2Ea5c7',
    42161: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54',
    42220: '0x7d20ab6d8af50d87a5e8def46e48f4d7dc2ea5c7',
    43114: '0x7d20Ab6D8aF50d87A5E8DeF46e48F4d7dC2Ea5c7',
    59144: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54',
    81457: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54', // blast
    534352: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54',
    7777777: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54',
    666666666: '0xFEeAcCE884bc21B53DBe79Abc5279029f78D1B44',
    1313161554: '0x4a183b7ED67B9E14b3f45Abfb2Cf44ed22c29E54',
  },
};

export default deploymentAddresses;

import * as Font from 'expo-font';

export default useFonts = async () => {
  await Font.loadAsync({
    'Orkney-Bold': require('../../../assets/fonts/orkney-bold.otf'),
    'Orkney-Light': require('../../../assets/fonts/orkney-light.otf'),
    'Orkney-Medium': require('../../../assets/fonts/orkney-medium.otf'),
    Orkney: require('../../../assets/fonts/orkney-regular.otf'),
    'Perpetua-Bold': require('../../../assets/fonts/perpetua-bold.ttf'),
    Perpetua: require('../../../assets/fonts/perpetua-regular.ttf'),
  });
};

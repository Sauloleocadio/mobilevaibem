/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Linking} from 'react-native';
import {WebView} from 'react-native-webview';
import {ContainerMaps, SubmitButton} from './styles';

function Establishmentlocation({navigation}) {
  const [place, setPlace] = useState();

  useEffect(() => {
    function loadDataNavigation() {
      const placenav = navigation.getParam('place');
      setPlace(placenav);
    }

    loadDataNavigation();

    return () => {
      loadDataNavigation();
    };
  }, [navigation]);

  async function handleRouteLocation() {
    const openlink = `https://www.google.com.br/maps/place/${place}`;
    await Linking.openURL(openlink);
  }

  return (
    <ContainerMaps>
      <WebView
        source={{
          html: `<iframe src="https://maps.google.com/maps?q=${place}&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>`,
        }}
        style={{
          alignSelf: 'center',
          flex: 0,
          height: '100%',
          width: '100%',
          alignContent: 'center',
          textAlign: 'center',
        }}
      />
      <SubmitButton onPress={handleRouteLocation}>Ver rota</SubmitButton>
    </ContainerMaps>
  );
}

Establishmentlocation.navigationOptions = () => ({
  title: 'Localização',
});

export default Establishmentlocation;

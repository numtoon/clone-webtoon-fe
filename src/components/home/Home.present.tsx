import React from 'react';
import {HomeView, EmptyWrapper, HomeText} from './Home.styles';
import {ScrollView} from 'react-native';

const HomeUI = () => {
  return (
    <>
      <ScrollView>
        <HomeView>
          <HomeText>Hello Home</HomeText>
          <EmptyWrapper />
        </HomeView>
      </ScrollView>
    </>
  );
};

export default HomeUI;

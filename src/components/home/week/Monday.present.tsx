import React from 'react';
import {HomeView, EmptyWrapper, HomeText} from '../Home.styles';
import {ScrollView} from 'react-native';

const MondayUI = () => {
  return (
    <>
      <ScrollView>
        <HomeView>
          <HomeText>Hello Monday</HomeText>
          <EmptyWrapper />
        </HomeView>
      </ScrollView>
    </>
  );
};

export default MondayUI;

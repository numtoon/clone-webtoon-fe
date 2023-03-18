import React from 'react';
import {EmptyWrapper, MyText, MyView} from './My.styles';
import {ScrollView} from 'react-native';

const MyUI = () => {
  return (
    <>
      <ScrollView>
        <MyView>
          <MyText>Hello My</MyText>
          <EmptyWrapper />
        </MyView>
      </ScrollView>
    </>
  );
};

export default MyUI;

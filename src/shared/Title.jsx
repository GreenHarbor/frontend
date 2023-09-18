import React from 'react';
import { Text } from 'react-native';

const Title = ({ title }) => {
  return (
    <>
      {title.split(' ').length > 1 ? (
        <Text className="font-['Perpetua-Regular'] text-4xl text-black">
          {title.split(' ')[0]}{' '}
          <Text className="font-['Perpetua-Regular'] text-4xl text-primary-color">
            {title.split(' ')[1]}
          </Text>
        </Text>
      ) : (
        <Text className="text-2xl font-['Perpetua-Regular'] text-primary-color">
          {title}
        </Text>
      )}
    </>
  );
};

export default Title;

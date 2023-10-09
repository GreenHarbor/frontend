import React from 'react';
import { Text } from 'react-native';

const Title = ({ title, size }) => {
  return (
    <>
      {title.split(' ').length > 1 ? (
        <Text
          className={
            (size === 'small'
              ? 'text-xl font-["Orkney"]'
              : "text-4xl font-['Perpetua-Regular']") + ' text-black'
          }
        >
          {title.split(' ')[0]}{' '}
          <Text
            className={
              (size === 'small'
                ? 'text-xl font-["Orkney"]'
                : 'text-4xl font-["Perpetua-Regular"]') + ' text-primary-color'
            }
          >
            {title.split(' ')[1]}
          </Text>
        </Text>
      ) : (
        <Text
          className={
            (size === 'small'
              ? 'text-xl font-["Orkney"]'
              : 'text-4xl font-["Perpetua-Regular"]') + ' text-primary-color'
          }
        >
          {title}
        </Text>
      )}
    </>
  );
};

export default Title;

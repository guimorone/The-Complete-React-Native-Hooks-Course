import React, { useReducer } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;
const HEIGHT = 150;
const WIDTH = 150;

const reducer = (state, action) => {
  // state => { red: number, green: number, blue: number }
  // action => { type: 'changeRed' || 'changeGreen' || 'changeBlue', payload: COLOR_INCREMENT || -COLOR_INCREMENT }

  switch (action.type) {
    case 'changeRed':
      return state.red + action.payload <= 255 && state.red + action.payload >= 0
        ? { ...state, red: state.red + action.payload }
        : state;
    case 'changeGreen':
      return state.green + action.payload <= 255 && state.green + action.payload >= 0
        ? { ...state, green: state.green + action.payload }
        : state;
    case 'changeBlue':
      return state.blue + action.payload <= 255 && state.blue + action.payload >= 0
        ? { ...state, blue: state.blue + action.payload }
        : state;
    default:
      return state;
  }
};

const SquareScreen = () => {
  const initialState = { red: 0, green: 0, blue: 0 };
  // dispatch === runMyReducer

  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  const ColorCountArray = [
    {
      color: 'Red',
      onIncrease: () => dispatch({ type: 'changeRed', payload: COLOR_INCREMENT }),
      onDecrese: () => dispatch({ type: 'changeRed', payload: -COLOR_INCREMENT }),
    },
    {
      color: 'Green',
      onIncrease: () => dispatch({ type: 'changeGreen', payload: COLOR_INCREMENT }),
      onDecrese: () => dispatch({ type: 'changeGreen', payload: -COLOR_INCREMENT }),
    },
    {
      color: 'Blue',
      onIncrease: () => dispatch({ type: 'changeBlue', payload: COLOR_INCREMENT }),
      onDecrese: () => dispatch({ type: 'changeBlue', payload: -COLOR_INCREMENT }),
    },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={option => option.color}
        data={ColorCountArray}
        renderItem={({ item }) => (
          <ColorCounter onIncrease={item.onIncrease} onDecrease={item.onDecrese} color={item.color} />
        )}
      />
      <View style={{ height: HEIGHT, width: WIDTH, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;

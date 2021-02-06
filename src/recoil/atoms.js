import {atom} from 'recoil';

export const teamState = atom({
  key: 'teamState',
  default: [],
});

export const gameState = atom({
  key: 'gameState',
  default: [],
});

import {Set} from 'immutable';

const key_in = (keys) => {
  const key_set = Set(keys);
  return function (v, k) {
    return key_set.has(k);
  };
};

export const pick = (keys, data) => data.filter(key_in(keys));

export const omit = (keys, data) => data.filterNot(key_in(keys));

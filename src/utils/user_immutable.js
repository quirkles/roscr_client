import {capitalize} from './string';

export const get_full_name = user =>
  `${capitalize(user.get('firstname'))} ${capitalize(user.get('lastname'))}`;

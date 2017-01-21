import {capitalize} from './string';

export const get_full_name = user =>
  `${capitalize(user.get('firstname'))} ${capitalize(user.get('lastname'))}`;

export const get_display_name = user =>
  get_full_name(user).trim().length ?
    get_full_name(user) :
    user.get('email_address');

export const get_avatar_url = user => `https://api.adorable.io/avatars/285/${user.get('id')}@adorable.io.png`;

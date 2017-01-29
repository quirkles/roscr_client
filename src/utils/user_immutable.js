import {capitalize} from './string';

export const get_full_name = user =>
  `${capitalize(user.get('firstname'))} ${capitalize(user.get('lastname'))}`;

export const get_display_name = user =>
  get_full_name(user).trim().length ?
    get_full_name(user) :
    user.get('email_address');

export const get_trust_score_font_class = trust_score =>
  parseInt(trust_score, 10) < 75 ? 'red-500' :
  parseInt(trust_score, 10) < 85 ? 'yellow-500' :
  'green-500';

export const get_avatar_url = user => `https://api.adorable.io/avatars/285/${user.get('id')}@adorable.io.png`;

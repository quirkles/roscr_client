import {format} from 'date-fp';

const get_originator_name = originator =>
  originator.get('firstname') && originator.get('lastname') ?
    `${originator.get('firstname')} ${originator.get('lastname')}` :
    originator.get('email_address');

const get_item_text = item => {
  switch (item.get('activity_type')) {
    case 'CIRCLE_CREATED':
      return `Circle created by ${get_originator_name(item.get('originator'))}`;
    default:
      return 'Something Happened';
  }
};

export const parse_timeline_item = immutable_timeline_item => ({
  text: get_item_text(immutable_timeline_item),
  date: format('MMMM DD YYYY', new Date(immutable_timeline_item.get('date')))
});

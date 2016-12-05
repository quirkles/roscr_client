import {format} from 'date-fp';

const get_item_text = item => {
  switch (item.get('type')) {
    case 'CIRCLE_CREATED':
      return `Circle created by ${item.getIn(['originator', 'username'])}`;
    default:
      return 'Something Happened';
  }
};

export const parse_timeline_item = immutable_timeline_item => ({
  text: get_item_text(immutable_timeline_item),
  date: format('MMMM DD YYYY', new Date(immutable_timeline_item.get('created_at')))
});

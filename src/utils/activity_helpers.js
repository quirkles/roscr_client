export const get_activity_description_from_type = activity_type => {
  switch (activity_type) {
    case 'USER_CREATED':
      return 'User signed up to roscr!';
    default:
      return 'Action type not found.';
  }
}

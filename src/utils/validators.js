const email_regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export const has_min_length = length => value => value.length >= length ? null : `Minimum lenth is ${length} characters.`;

export const has_max_length = length => value => value.length <= length ? null : `Maximum lenth is ${length} characters.`;

export const is_required = value => value.length ? null : 'This field is required.';

export const is_valid_email = value => email_regex.test(value) ? null : 'Must be a valid email address.';

export const must_match = target_value => value => value === target_value ? null : 'Value does not match target.';

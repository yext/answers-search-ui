/**
 * A Matcher is a filtering operation for {@link Filter}s.
 */
const Matcher = {
  Equals: '$eq',
  NotEquals: '!$eq',
  LessThan: '$lt',
  LessThanOrEqualTo: '$le',
  GreaterThan: '$gt',
  GreaterThanOrEqualTo: '$ge',
  Near: '$near'
};
export default Matcher;

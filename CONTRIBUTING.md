# Contributing

- [Reporting a Bug](#reporting-a-bug)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)

# Reporting a Bug

- Confirm the bug was not already reported by searching for existing
  [issues](https://github.com/yext/answers/issues).

- If there's no existing issue, [create a new
  one](https://github.com/yext/answers/issues/new). Be sure to include a clear
description and a code sample or executable test case that demonstrates the
issue.

# Testing

Answers has a testing suite under the tests/ directory. Please include tests for
all new code.

- Run the existing test suite with `npm run test`

- Fix any fixable linter errors with `npm run fix`

- Add new tests to the tests/ directory mirroring the src/ directory

# Submitting Changes

Send a pull request with a clear list of what you've done with the `latest`
branch as the base. Include tests for the changes and link to any relevant
issues. Once the changes are approved, squash the commits and rebase & merge
onto `latest`. The changes will then be included in the next version of Answers.

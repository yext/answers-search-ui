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

- Build the bundles with `npm run build`

- Run the existing test suite with `npm run test`

- Fix any fixable linter errors with `npm run fix`

- Add new tests to the tests/ directory mirroring the src/ directory

# Submitting Changes

All enhancement and bug fix pull requests should have an associated issue.
Feature work is tracked outside of GitHub and may not have associated issues. If
you'd like to submit an enhancement or bug fix PR, please ensure a relevant
issue exists or create one.
- Send a pull request with a clear list of what you've done with the base set to the desired version.
- Include tests for the changes and link to all relevant issues.
- If changes are requested, respond to all comments (either by making the change and resolving, or discussing the change)
- Once all comments have been addressed, re-request a review from the reviewer. The PR will not be looked at until re-requested
- Once the changes are approved, `Squash & Merge` onto the version branch.

Your changes will then be included in that version of Answers when released.

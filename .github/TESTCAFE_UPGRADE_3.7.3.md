# TestCafe 3.7.3 Upgrade - Fixing Hanging Acceptance Tests

## Problem

The acceptance tests in this repository were hanging indefinitely when run via `.github/run_headless_acceptance.sh` script or through GitHub Actions CI. The tests would start but never execute, causing pipelines to timeout.

## Root Cause

TestCafe version 3.7.2 contains a bug that causes tests to hang before execution begins. This affected both local test runs and CI/CD pipelines.

The issue manifested as:
- Tests showing "Running tests in:" message but never executing
- No test output or progress after initial browser launch
- Process would hang indefinitely until killed or timed out
- Affected all browsers (Chrome, Firefox) in both headless and non-headless modes

## Solution

Upgrade TestCafe from version 3.7.2 to 3.7.3.

## Changes

The following files were modified:

### package.json
```diff
-    "testcafe": "^3.7.2",
+    "testcafe": "^3.7.3",
```

### package-lock.json
- `testcafe`: 3.7.2 → 3.7.3
- `testcafe-hammerhead`: 31.7.5 → 31.7.6 (transitive dependency)
- `tmp`: 0.0.28 → 0.2.5 (transitive dependency)

## Verification

After upgrading to TestCafe 3.7.3:

1. **Simple test case**: Verified that a basic TestCafe test executes and completes successfully
2. **Acceptance test suite**: Confirmed that tests in `tests/acceptance/acceptancesuites/` execute without hanging
3. **CI/CD compatibility**: The `.github/run_headless_acceptance.sh` script now runs tests to completion

Example successful test run:
```
Running tests in:
 - Chrome 143.0.0.0 / Ubuntu 24.04

 Simple Test
 ✓ Page loads

 1 passed (2s)
```

## Related Information

- TestCafe 3.7.3 was released after 3.7.2 and includes bug fixes
- The hanging issue was reproducible with minimal test cases, confirming it was a TestCafe framework issue
- No changes to test code or configuration were required - only the version upgrade

## Testing Locally

To verify the fix works locally:

```bash
# Install dependencies
npm install

# Run acceptance tests
./.github/run_headless_acceptance.sh
```

Tests should now execute without hanging.

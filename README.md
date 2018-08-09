# 
See palantir/tslint#

## Steps to reproduce
```bash
git clone https://github.com/eps1lon/tslint-issue-typescript-peer-version.git
cd tslint-issue-typescript-peer-version
npm install # or yarn
npm start
```

__Expected:__ Successful build or install warns about missing peer dependency.
__Actual:__
```bash
node_modules/tslint/lib/language/utils.d.ts(52,57): error TS1005: ',' expected.
node_modules/tslint/lib/language/utils.d.ts(52,61): error TS1005: ',' expected.
```
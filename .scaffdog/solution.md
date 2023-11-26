---
name: 'atcoder_problem'
root: './apps/atcoder/src'
output: '**/*'
ignore: []
questions:
  contest_name: 'Please enter contest name.'
  problem_id: 'Please enter problem id.'
---

# `{{inputs.contest_name}}/{{ inputs.problem_id }}/main.ts`

```typescript
import * as fs from 'fs';
const main = (input: string) => {
  console.log(input);
};
main(fs.readFileSync('/dev/stdin').toString());
```

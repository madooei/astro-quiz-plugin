---
title: Quiz
layout: ../layouts/Page.astro
setup: |
  import Quiz from '../components/Quiz.jsx'
  import Option from '../components/Option.jsx'
---

<Quiz client:visible>
What will be the output of the following code?

```java
int n = 10;
while (n-- >= 1) {
  System.out.print(n + " ");
}
```

<Option client:visible>`10 9 8 7 6 5 3 2 1`</Option>
<Option client:visible>`9 8 7 6 5 4 3 2 1`</Option>
<Option client:visible>`9 8 7 6 5 4 3 2 1 0`</Option>
<Option client:visible>`10 9 8 7 6 5 3 2 1 0`</Option>
<Option client:visible>Will not compile because of the syntax error in the condition!</Option>
</Quiz>
# Junior Javascript Developer Checklist

Achievement Based Learning

Collection of tests covering a small array of topics any junior javascript developer should have to know to get a job. Leverages Jest, Github Actions, ESLint, and TDD.

## How It Works

1. Fork the repof
2. Branch off master
3. Fix broken tests
4. Make a PR to your `master`
5. Pass the build
6. Apply to a job
7. Show them this repo
8. ...?
9. $$ Profit $$

**Example:**

```js
  it('Multiply two numbers', () => {
    const num1 = 2
    const num2 = 4

    // FIXME: multiply the two numbers

    expect(multiplied).toBe(8)
  })
```

Every test has similar parts:

1. The test description which is the task a junior developer is expected to be able to do
2. (Optional) Dummy data. You should not change any dummy data
3. One or more `FIXME`s where your code should go
4. One ore more `expect`s that should not be manipulated. They may contain undefined variables which should be defined with proper values to pass the test

## Tools

### [Jest](https://jestjs.io/)

Jest is the testing framework for these exercises. I wrote these tests in the spirt of Test Driven Development (TDD), which states: "Write the test first, watch it fail, then write code till it passes". You do not need to know the ins and outs of Jest, you just need to get familiar with:

- `describe`: A container for a group of tests
- `it`: A single test with a description
- `expects`: The "test" function which takes a value and can call various Jest test methods on it

### [ESLint](https://eslint.org/)

A linter is a tool that automatically tests your code for you against a list of expectations and rules, the perfect tool for a suite of tests for newbie developers. Almost every good project has a sound linter that helps maintain code style and quality. Most popular code editors like VSCode also know how to display linting errors in meainingful ways to developers so they can fix them.

### [Github](https://github.com/)

While being the most popular code repository service, it also provides a few important features I leverage for this project:

1. Fork network: able to see all the various users who have forked this repo and run through the tests
2. Workflow actions: able to run simple, free CI jobs such as testing PRs and preventing merges to master prematurely

## Updates

I will write more tests. Others may contribute new tests. You can stay in sync with those tests. Maybe you passed every test so far and new ones show up. Chase that 100% completion rate!

1. Git rebase from upstream
2. Merge conflicts on bug fixes (best to just use Incoming Changes)
3. Pass tests

## What's Different From Other Training Courses

Plenty of other online training resources exist with a similar, more advanced tooling: write some code, run some tests, tell the user if they pass or not.

However many of those systems hide their tests behind a paywall or complicate the experience. What I believe is lacking is a nice easy checklist for newcomers to have to go through and say, "Oh yeah, I've seen that and know what that is."

In addition I'm dismayed that the go-to for interview preparation is HackerRank which I think is not a good tool especially for Javascript developers. For the junior looking to break into website and web app development, the tests are not relevant and far more advanced than need be.

Finally, I am not as keen on the traditional coding challenges which leverage a lot of mathematics and logic. While these are certainly challenges we face as developers not every industry needs them. To be a junior developer of javascript one needs only be familiar enough with the syntax to troubleshoot bugs and write code that meets well defined expectations. While the community certainly doesn't need cookie-cutter developers, I am willing to take a stab at setting some expectations for beginners to work at.

All this said, these tests are somewhat basic. I don't claim to be an expert on either adult learning or TDD but I wrote a few of these for my wife who is learning how to be a developer and she found them helpful. Putting these out there so others may find them helpful as well.

## TODO

- [ ] On `npm install`, set git remote upstream
- [ ] On `npm install`, protect master branch in Github (some script that hits Github's API)
- [ ] Before tests run, check if there are new commits from upstream
- [ ] Write Github actions that run tests before branches can merge
- [ ] Create a test report that resembles a checklist that developers can save
- [ ] Add pre-commit hook to lint files
- [ ] Add React folder and tests
- [ ] Add Vue folder and tests

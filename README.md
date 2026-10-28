# 7-Eleven Australia Frontend Engineering Practical Exercises

Welcome. This is the practical part of the interview. It has three short tasks and should take about 20 minutes in total.

## How this works

- You can use your normal tools, including AI assistants. We are interested in how you work with them, not in whether you use them.
- Talk through your thinking as you go. Tell us what you are looking at, what you are trying, and why.
- It is fine to ask questions. If something is unclear, ask before you start.
- We care about your reasoning as much as the finished result. If you run out of time, explain what you would do next.
- The team's coding conventions are in `AGENTS.md`. They apply to all three tasks.

All the files for the tasks are in the `components/` folder.

---

## Task 1: Fix the bug (about 4 minutes)

A bug report has come in:

> The counter doesn't go up when I click the button.

The counter is in `components/debug.jsx`. Find the cause and fix it, then explain why it was broken.

---

## Task 2: Review AI-generated code (about 6 minutes)

An AI agent was asked to build a product list screen with an "add to cart" action. It produced `components/product-list.tsx`.

Review the file as if it was a pull request. Talk through:

- What you find.
- How serious each issue is.
- How you would fix it.

You do not need to rewrite the whole file. Focus on what you would raise in the review and what you would want changed before merging.

---

## Task 3: Build a To-Do list (about 10 minutes)

In `components/create.jsx`, build a simple To-Do list with these requirements:

- **Input field:** the user can type a task.
- **Add button:** clicking "Add" puts the task on the list shown on screen.
- **Task list:** the tasks are shown below the input field.
- **Delete button:** each task has a "Delete" button that removes it from the list.
- **Complete and incomplete:** clicking a task toggles it between complete and incomplete.

Keep it simple. A working, readable solution is better than a feature-rich one.

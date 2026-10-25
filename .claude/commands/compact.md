Summarize the current conversation into a concise context snapshot before clearing. Follow these steps:

1. Capture and output a snapshot covering:
   - **Goal:** what the user is trying to achieve
   - **Progress:** what has been completed so far
   - **Decisions made:** key architectural or design choices
   - **Pending:** what still needs to be done
   - **Important context:** any constraints, rules, or preferences established

2. Ask user: "Does this snapshot look accurate? (y/n)"

3. Only after confirmation → tell the user to run `/clear` to reset the context window.

Keep the snapshot under 20 lines. No code, no file contents — summary only.

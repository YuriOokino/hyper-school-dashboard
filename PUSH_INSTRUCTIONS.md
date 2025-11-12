# Git Push Instructions

## Quick Push Command

When pushing to GitHub from this project, you need to use the `all` permissions flag due to sandbox SSL certificate restrictions.

### Steps to Push Changes:

1. **Stage all changes:**
```bash
git add .
```

2. **Commit with message:**
```bash
git commit -m "Your commit message here"
```

3. **Push to main** (requires `all` permissions):
```bash
git push origin main
```

## Why the 'all' permissions flag is needed

The sandbox environment has SSL certificate verification issues that prevent normal git push operations. Using the `all` permissions flag runs the command outside the sandbox entirely, avoiding these restrictions.

## Common Errors and Solutions

### Error: "Could not resolve host: github.com"
- **Solution**: Add `network` permission or use `all` permissions

### Error: "error setting certificate verify locations"
- **Solution**: Use `all` permissions flag to bypass sandbox SSL restrictions

## Quick Reference

**Single command to stage, commit, and push:**
```bash
git add . && git commit -m "Your message" && git push origin main
```

Note: When using the terminal command tool, always request `required_permissions: ["all"]` for git push operations.


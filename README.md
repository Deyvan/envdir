# @deyvan/envdir
A utility that parses a specified directory and loads its contents into process.env. Perfect for use in Docker containers or environments where it's common to provide configuration via files (e.g., Docker Secrets, Kubernetes Secrets, or AWS ECS secrets).

# How it works
1. You provide a path to a directory (e.g., /run/secrets).
2. The package reads all files within that directory.
3. For each file, it creates an environment variable:
Filename (e.g., DATABASE_URL) becomes the variable name (process.env.DATABASE_URL).
File content (e.g., postgres://user:pass@host:5432/db) becomes the variable value.

# Example
Directory structure:
```
/run/secrets/
├── DATABASE_URL
├── API_KEY
└── REDIS_URL
```

After using the package:
```js
import loadEnvDir from '@deyvan/envdir'

loadEnvDir("/run/secrets") // loads ./env/ by default

console.log(process.env.DATABASE_URL) // "postgres://..."
console.log(process.env.API_KEY) // "your-super-secret-api-key"
console.log(process.env.REDIS_URL) // "redis://127.0.0.1:16379"
```


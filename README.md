# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### Config

The list of participants will be in `assets/names.ts`.

The certificate image should be in `assets/cert_base.webp`.

Update configuration as required in `assets/config.ts`

|            |                                 |
| ---------- | ------------------------------- |
| `x`        | Mid point in x axis             |
| `y`        | Base point in x axis            |
| `maxWidth` | Max width of the text in pixels |
| `content`  | Key to infer from `names.ts`    |

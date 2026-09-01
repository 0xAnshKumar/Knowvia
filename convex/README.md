# Knowvia backend

Convex powers Knowvia's document pipeline, retrieval layer, and streaming chat API.

## Layout

```
convex/
├── schema.ts, auth.ts, http.ts
├── documents/     records, processing, chunking, uploads, storage
├── chat/          helpers, data, stream, completion
├── evaluation/    runs, data, constants
└── ai/            OpenAI clients and model capability helpers
```

## Development

Push functions to your deployment:

```bash
npx convex dev
```

See the [Convex docs](https://docs.convex.dev/functions) for function patterns and deployment details.

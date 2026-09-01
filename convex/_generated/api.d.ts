/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as ai_modelCapabilities from "../ai/modelCapabilities.js";
import type * as ai_openAi from "../ai/openAi.js";
import type * as auth from "../auth.js";
import type * as chat_completion from "../chat/completion.js";
import type * as chat_data from "../chat/data.js";
import type * as chat_helpers from "../chat/helpers.js";
import type * as chat_stream from "../chat/stream.js";
import type * as documents_chunking from "../documents/chunking.js";
import type * as documents_processing from "../documents/processing.js";
import type * as documents_records from "../documents/records.js";
import type * as documents_storage from "../documents/storage.js";
import type * as documents_uploadTargets from "../documents/uploadTargets.js";
import type * as documents_uploads from "../documents/uploads.js";
import type * as evaluation_constants from "../evaluation/constants.js";
import type * as evaluation_data from "../evaluation/data.js";
import type * as evaluation_runs from "../evaluation/runs.js";
import type * as http from "../http.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  "ai/modelCapabilities": typeof ai_modelCapabilities;
  "ai/openAi": typeof ai_openAi;
  "chat/completion": typeof chat_completion;
  "chat/data": typeof chat_data;
  "chat/helpers": typeof chat_helpers;
  "chat/stream": typeof chat_stream;
  "documents/chunking": typeof documents_chunking;
  "documents/processing": typeof documents_processing;
  "documents/records": typeof documents_records;
  "documents/storage": typeof documents_storage;
  "documents/uploadTargets": typeof documents_uploadTargets;
  "documents/uploads": typeof documents_uploads;
  "evaluation/constants": typeof evaluation_constants;
  "evaluation/data": typeof evaluation_data;
  "evaluation/runs": typeof evaluation_runs;
  http: typeof http;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};

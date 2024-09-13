export const GRPC_STREAMING_LIMITS = {
  MAX_NUMBER_OF_LINES: 6,
  LINE_MAX_LENGTH: 300,
  LINE_DESIRED_LENGTH: 200,
};
export const PUNCTUATION_REGEX = /((?<!\d)[.:](?!\d))|[!?…\r\n]/m;
export const STREAM_SENTENCE_AGGREGATE_TIMEOUT = 150;

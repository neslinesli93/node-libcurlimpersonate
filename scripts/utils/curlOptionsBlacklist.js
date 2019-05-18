// This should be kept in sync with the options on src/Curl.cc curlOptionNotImplemented
const curlOptionsBlacklist = [
  // to be implemented
  'CURLOPT_STREAM_DEPENDS',
  'CURLOPT_STREAM_DEPENDS_E',
  'CURLOPT_STREAM_WEIGHT',
  'CURLOPT_INTERLEAVEDATA',
  'CURLOPT_INTERLEAVEFUNCTION',
  // maybe
  'CURLOPT_STDERR',
  // https://curl.haxx.se/libcurl/c/CURLOPT_CURLU.html
  // curl_url api is not going to be implemented since URLs can be easily parsed directly from Node.js
  'CURLOPT_CURLU',
  // callbacks
  'CURLOPT_CONV_FROM_NETWORK_FUNCTION',
  'CURLOPT_CONV_FROM_UTF8_FUNCTION',
  'CURLOPT_CONV_TO_NETWORK_FUNCTION',
  'CURLOPT_IOCTLDATA',
  'CURLOPT_IOCTLFUNCTION',
  'CURLOPT_OPENSOCKETDATA',
  'CURLOPT_OPENSOCKETFUNCTION',
  'CURLOPT_CLOSESOCKETDATA',
  'CURLOPT_CLOSESOCKETFUNCTION',
  'CURLOPT_RESOLVER_START_DATA',
  'CURLOPT_RESOLVER_START_FUNCTION',
  'CURLOPT_SSL_CTX_DATA',
  'CURLOPT_SSL_CTX_FUNCTION',
  'CURLOPT_SOCKOPTDATA',
  'CURLOPT_SOCKOPTFUNCTION',
  'CURLOPT_SSH_KEYFUNCTION',
  'CURLOPT_SSH_KEYDATA',
  // Not really necessary
  'CURLOPT_ERRORBUFFER',
  'CURLOPT_COPYPOSTFIELDS',
  'CURLOPT_PRIVATE',
  'CURLOPT_PROGRESSDATA',
  'CURLOPT_XFERINFODATA',
  'CURLOPT_DEBUGDATA',
  'CURLOPT_SEEKDATA',
  'CURLOPT_CHUNK_DATA',
  'CURLOPT_FNMATCH_DATA',
  // Options that are used internally
  'CURLOPT_WRITEDATA',
  'CURLOPT_HEADERDATA',
]

module.exports = {
  curlOptionsBlacklist,
}

'use strict';

var Zap = {
  //modify before poll and set the headers I know this API expects.
  lead_pre_poll: function(bundle) {
    //api key entered in zap
    var key = bundle.auth_fields.api_key;
    //set the Accept to wild
    bundle.request.headers.Accept = '*';
    //only return json
    bundle.request.headers.outputtype = 'json';
    //set API to 'accesskey' header
    bundle.request.headers.accesskey = key;

    return bundle.request;
  }
};

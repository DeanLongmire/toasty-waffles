import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  handleResponse(status, headers, payload, requestData) {
    return super.handleResponse(status, headers, payload, requestData);
  }
}

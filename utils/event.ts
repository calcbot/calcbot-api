export let event = {
    httpMethod: '',
    path: '',
    requestContext: {},
    body: null,
    queryStringParameters: null,
    headers: {},
    triggerSource: null,
    request: {},
    response: {},
    claims: {},
};

export const setEvent = (rawEvent) => {
    try {
        !rawEvent.path ? rawEvent.path = rawEvent.rawPath : null;
        rawEvent.body ? rawEvent.body = JSON.parse(rawEvent.body) : null;
        !rawEvent.httpMethod ? rawEvent.httpMethod = rawEvent.requestContext?.http?.method : null;
    }
    catch { }

    event = rawEvent;
    return event;
}
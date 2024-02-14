import { formatEmail, event } from "#src/utils";

export const customMessageUpdateUserAttribute = async () => {
    event.response.emailSubject = `Please confirm your new email address`;
    event.response.emailMessage = formatEmail(`Dear ${event.request.userAttributes['name']},<p>Please confirm your new email address by <a href="https://calc.bot/verify?type=email&code=${event.request.codeParameter}">clicking here</a>.<p>Thank you,<br/>Calc.bot<div style="display:none"><a>${event.request.codeParameter}</a><a>${event.request.codeParameter}</a></div>`);

    return event;
}
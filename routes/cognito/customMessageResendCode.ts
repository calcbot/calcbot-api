import { event, formatEmail } from "#src/utils";

export const customMessageResendCode = async () => {
    event.response.emailSubject = `Confirm your registration to Calc.bot`;
    event.response.emailMessage = formatEmail(`Dear ${event.request.userAttributes['name']},<p>Please confirm your registration by <a href="https://calc.bot/login?username=${event.userName}&code=${event.request.codeParameter}&email=${event.request.userAttributes.email}">clicking here</a>.<p>Thank you,<br/>Calc.bot<div style="display:none"><a>${event.request.codeParameter}</a><a>${event.request.codeParameter}</a></div>`);
    return event;
}
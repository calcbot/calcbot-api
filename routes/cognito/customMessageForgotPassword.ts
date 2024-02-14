import { event, formatEmail } from "#src/utils";

export const customMessageForgotPassword = async () => {
    event.response.emailSubject = `Please reset your password`;
    event.response.emailMessage = formatEmail(`Dear ${event.request.userAttributes['name']},<p>Please reset your password by <a href="https://calc.bot/reset?username=${event.userName}&code=${event.request.codeParameter}">clicking here</a>.<p>Thank you,<br/>Calc.bot<div style="display:none"><a>${event.request.codeParameter}</a><a>${event.request.codeParameter}</a></div>`);
    return event;
}
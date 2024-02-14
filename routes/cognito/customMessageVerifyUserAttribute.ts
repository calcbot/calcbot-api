import { event } from "#src/utils";

export const customMessageVerifyUserAttribute = async () => {
    event.response.smsMessage = `Calc.bot: Verify your phone number by visting "https://calc.bot/verify?type=phone_number&code=${event.request.codeParameter}"`;

    return event;
}
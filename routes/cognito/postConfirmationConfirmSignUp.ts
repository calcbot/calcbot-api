import { event, client } from "#src/utils";

export const postConfirmationConfirmSignUp = async () => {
    const userAttributes = event.request.userAttributes;
    await client.connect();
    await client.query(`
        INSERT INTO "users" ("id", "email", "name", "customer_id", "payment_method_id") VALUES ($1, $2, $3, $4, $5)
    `, [userAttributes.sub, userAttributes.email, userAttributes.name, userAttributes.profile, userAttributes.website]);
    await client.clean();
    return event;
}
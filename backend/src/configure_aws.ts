import {create_users_table } from "./users/users.ts"

export default function configure_aws() {
    // const AWS = require("aws-sdk");

    // AWS.config.update({
    //     region: "local",
    //     endpoint: "http://localhost:8000"
    // });

    create_users_table()
}
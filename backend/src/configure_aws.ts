import {create_users_table } from "./users/users.ts"

export default function configure_aws() {
    create_users_table()
}
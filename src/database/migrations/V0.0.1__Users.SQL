CREATE TABLE users (
    id BIGINT generated always as identity primary key,
    name text NOT null,
    mail text NOT null,
    password text NOT null,
    is_deleted boolean default false
);
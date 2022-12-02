CREATE TABLE tasks (
    id BIGINT generated always as identity primary key,
    'user_id' BIGINT references users,
    header text NOT null,
    description text,
    is_done boolean default false
);
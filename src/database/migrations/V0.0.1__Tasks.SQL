CREATE TABLE tasks (
    id BIGINT generated always as identity primary key,
    header text not null,
    is_done boolean default false
);
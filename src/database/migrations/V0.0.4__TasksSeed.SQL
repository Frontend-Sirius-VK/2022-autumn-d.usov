INSERT INTO tasks("user_id", header, description)
values (
        (
            SELECT users.id
            FROM users
            WHERE users.nickname = 'Zancivinne'
                AND users.mail = 'boehm.norag@yahoo.com'
        ),
        'вынести мусор',
        'сегодня'
    ),
    (
        (
            SELECT users.id
            FROM users
            WHERE users.nickname = 'Ephilawali'
                AND users.mail = 'wyman.aniya@yahoo.com'
        ),
        'дз',
        'выполнить дз по РПМ'
    ),
    (
        (
            SELECT users.id
            FROM users
            WHERE users.nickname = 'Quinan'
                AND users.mail = 'rbodeasdemalia@gmail.com'
        ),
        'купить в магазине',
        'молоко, хлеб, шоколадка'
    ),
    (
        (
            SELECT users.id
            FROM users
            WHERE users.nickname = 'Lassylil'
                AND users.mail = 'marcel.douglas@yahoo.com'
        ),
        'зал',
        'сегодня в 19:30'
    );
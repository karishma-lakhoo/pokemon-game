const collisions = [0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 7656, 0, 7656, 0, 0, 0, 0, 7656, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 0, 7656, 0, 0, 7656, 0, 0, 0, 0, 7656, 0, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 7656, 7656, 0, 0, 0, 0, 7656, 7656, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 7656, 7656, 7656, 0, 0, 7656, 0, 7656, 0, 7656, 7656, 0, 7656, 0, 0, 0,
    0, 0, 0, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 7656, 7656, 0, 0, 0,
    0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 7656, 7656, 0, 7656, 7656, 0, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 0, 0,
    0, 0, 0, 7656, 0, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 0, 0, 7656, 7656, 0, 7656, 0, 0, 7656, 0, 0, 7656, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 0,
    7656, 0, 0, 7656, 7656, 0, 0, 0, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 0, 0, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 7656, 0,
    0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 0, 0, 0, 0, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 7656, 0, 7656, 7656, 7656, 7656, 7656, 0, 0, 7656, 0,
    0, 0, 7656, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 7656, 0, 7656, 7656, 7656, 7656, 7656, 0, 0, 7656, 0,
    0, 0, 7656, 7656, 0, 0, 7656, 7656, 7656, 7656, 0, 0, 7656, 7656, 7656, 7656, 0, 0, 0, 7656, 7656, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 0, 7656, 0, 0, 7656, 0,
    7656, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 0, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 0, 7656, 0, 7656, 0, 0, 7656, 0,
    7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 0, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 0, 7656, 0, 7656, 0, 0, 7656, 0,
    7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 0, 7656, 0, 7656, 0, 0, 7656, 7656,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 0, 7656, 0, 7656, 0, 0, 7656, 7656,
    7656, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 7656, 0, 0, 7656, 7656,
    7656, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 7656, 0, 0, 7656, 7656,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 7656, 0, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 7656, 7656,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 0,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 0, 7656, 0,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 0, 0, 0, 7656, 7656, 7656, 7656, 7656,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 7656, 7656, 7656, 7656, 0, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656,
    7656, 0, 0, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 7656, 0, 0, 7656, 0, 0, 0, 7656, 0, 7656, 7656, 0, 0, 0, 7656, 7656, 0, 7656, 7656,
    7656, 0, 0, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 0, 0, 7656, 0, 0, 0, 7656, 0, 7656, 0, 0, 0, 0, 0, 7656, 0, 7656, 7656,
    7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 7656, 0, 0, 0, 7656, 0, 7656, 7656, 7656, 7656, 7656, 0, 7656, 0, 7656, 7656,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 7656, 0, 0, 7656, 0, 0, 0, 7656, 0, 7656, 0, 7656, 7656, 0, 0, 7656, 0, 7656, 7656,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 7656, 0, 0, 7656, 0, 0, 0, 7656, 0, 7656, 0, 0, 0, 0, 0, 7656, 0, 7656, 7656,
    7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 7656, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 7656, 7656,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 7656, 7656, 0, 7656, 7656, 0, 7656, 7656, 7656, 0, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656,
    7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 7656, 7656, 0, 7656, 7656, 0, 7656, 7656, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656,
    7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 0, 0, 7656, 7656, 0, 0, 7656, 7656,
    7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 7656, 7656, 0, 7656, 7656, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 7656, 7656, 0, 7656, 7656, 0, 7656, 7656, 7656, 0, 0, 0, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0,
    7656, 7656, 0, 0, 7656, 7656, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0,
    7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 0, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7656, 7656, 7656, 7656, 7656, 0, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 7656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
function createData(start, end, avalible) {
    return { start, end, avalible  };
}

export const mockAppointments = [
    createData(
        new Date(2021, 1, 1, 9, 0, 0),
        new Date(2021, 1, 1, 9, 15, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 9, 15, 0),
        new Date(2021, 1, 1, 9, 30, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 9, 30, 0),
        new Date(2021, 1, 1, 9, 45, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 9, 45, 0),
        new Date(2021, 1, 1, 10, 0, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 10, 0, 0),
        new Date(2021, 1, 1, 10, 15, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 10, 15, 0),
        new Date(2021, 1, 1, 10, 30, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 10, 30, 0),
        new Date(2021, 1, 1, 10, 45, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 10, 45, 0),
        new Date(2021, 1, 1, 11, 0, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 11, 0, 0),
        new Date(2021, 1, 1, 11, 15, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 11, 15, 0),
        new Date(2021, 1, 1, 11, 30, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 11, 30, 0),
        new Date(2021, 1, 1, 11, 45, 0),
        false
    ),
    createData(
        new Date(2021, 1, 1, 11, 45, 0),
        new Date(2021, 1, 1, 12, 0, 0),
        false
    )
]
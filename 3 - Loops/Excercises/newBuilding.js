function build(floors, apartments) {
    for (let f = floors; f > 0; f--) {
        let floor = ''

        for (let a = 0; a < apartments; a++) {
            let type;
            let isLastFloor = f === floors;

            if (isLastFloor) {
                type = 'L';
            } else if (f % 2 == 0) {
                type = 'O';
            } else {
                type = 'A';
            }
        console.log(floor.trim());
    }
}
build(6,4);
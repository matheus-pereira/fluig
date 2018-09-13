const faker = require('faker');

function randomIcons() {
    let icons = [];
    for (let i = 0; i < random.numeric(0, 3); i++) {
        icons.push(list([
            "ad ",
            "amazon-pay",
            "anchor",
            "android",
            "bell",
            "bolt",
            "bus",
            "certificate",
            "cloud",
            "star"
        ]));
    }
    return icons;
}

function captalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

api = [];
for (let i = 1; i <= 10; i++) {
    api.push({
        id: i,
        avatar: faker.image.avatar(),
        name: faker.name.findName(),
        segment: captalize(faker.company.bsNoun()),
        type: randomIcons()
    });
}

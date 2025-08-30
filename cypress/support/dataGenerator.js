import { faker } from '@faker-js/faker';

export function generateUserData() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        userName: faker.internet.username(),
        password: faker.internet.password({length: 4})
    }
}
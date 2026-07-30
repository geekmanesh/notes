type Person = {
    id: number,
    name: string,
    isDead: boolean
}

function printPersonDetail(person: Person): void {
    console.log(`ID: ${person.id}, Name: ${person.name}, Is Person Dead: ${person.isDead}`)
}

printPersonDetail({ id: 1, name: "Hamid", isDead: false })

type socialSecurityNumber = string | number;
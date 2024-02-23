interface Student{
    name: string;
    id: number
    grades: Grade[]
}

interface Grade {
    grade : number
}

interface Class{
    students: Student[]
}

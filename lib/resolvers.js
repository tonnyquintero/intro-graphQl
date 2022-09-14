'use strict'

const courses = [
    {
    _id: 'anyId',
    title: 'Mi String',
    teacher: 'My Teacher',
    description: 'My Description',
    topic: 'programing'
    },
    {
    _id: 'anyId2',
    title: 'Mi String 2',
    teacher: 'My Teacher 2',
    description: 'My Description 5',
    topic: 'programing'
    },
    {
     _id: 'anyId3',
    title: 'Mi String 3',
    teacher: 'My Teacher 3',
    description: 'My Description 3',
    topic: 'programing'
    },
    {
    _id: 'anyId4',
    title: 'Mi String 4',
    teacher: 'My Teacher 4',
    description: 'My Description 4',
    topic: 'programing'
    }
]

module.exports = {
    Query: {
        getCourses: () => {
            return courses
        },
        getCourse: (root, args) => {
            const course = courses.filter(course => course._id === args.id)
            return course.pop()
        }
    }
    
}
'use strict'

const connectDB = require('./db');
const { ObjectId } =require('mongodb')

module.exports = {
    getCourses: async () => {
       let db
       let courses = []

       try {
        db = await connectDB()
        courses = await db.collection('courses').find().toArray()
       } catch (error) {
        console.log(error)
       }
       return courses
    },
    getCourse: async (root, { id }) => {
        let db
       let course

       try {
        db = await connectDB()
        course = await db.collection('courses').findOne({ _id: ObjectId(id) })
       } catch (error) {
        console.log(error)
       }
       return course
    },


    getPeople: async () => {
        let db
        let students = []
 
        try {
         db = await connectDB()
         students = await db.collection('students').find().toArray()
        } catch (error) {
         console.log(error)
        }
        return students
     },
     getPerson: async (root, { id }) => {
         let db
        let student
 
        try {
         db = await connectDB()
         student = await db.collection('students').findOne({ _id: ObjectId(id) })
        } catch (error) {
         console.log(error)
        }
        return student
     },
     searchItems: async (root, { keyword }) => {
     let db
     let items
     let courses
     let people

     try {
      db = await connectDB()
      courses = await db.collection('courses').find({ $text: { $search: keyword } })
      .toArray()
      people = await db.collection('students').find({ $text: { $search: keyword } })
      .toArray()
      items = [...courses, ...people]
     } catch (error) {
      console.log(error)
     }
     return items
  }
   }
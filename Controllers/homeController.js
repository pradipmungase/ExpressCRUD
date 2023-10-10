import Student from "../Model/StudentModel.js";

class homeController{

    static getAllStudent = async (req , res) => {
        try {
            const data = await Student.find(); 
            res.render('home.ejs', { data: data }); 
        } catch (err) {
            console.error(err);
            res.status(500).send('something went wrong'); 
        }
    }

    static createStudent = async (req, res) => {
        try {
            const { firstName, lastName, age } = req.body; 
            const student = new Student({
                firstName,
                lastName,
                age
            });
            await student.save(); 
            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.status(500).send('something went wrong'); 
        }
    }

    static editStudent = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Student.findById(id); 
            res.render('edit.ejs', { data: data }); 
        } catch (err) {
            console.error(err);
            res.status(500).send('something went wrong'); 
        }
    }

    static updateStudent = async (req, res) => {
        try {
            const filter = { _id: req.body.id };
            const update = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age
            };
            await Student.updateOne(filter, update);
            res.redirect('/');
  
        } catch (err) {
            console.error(err);
            res.status(500).send('something went wrong'); 
        }
    }
    
    static deleteStudent = async (req, res) => {
        try {
            const filter = { _id: req.params.id };
            await Student.deleteOne(filter);
            res.redirect('/');
        } catch (err) {
            console.error(err);
            res.status(500).send('something went wrong'); 
        }
    }
}
export default homeController;
const router = require("express").Router();
const Book = require("../models/Book.js");

router.post("/api/books", (req, res) => {
    Book.create(req.body)
        .then(dbBooks => { res.send(dbBooks) })
        .catch(err => {
            res.status(400).json(err);
        });
})

router.get("/api/mybooks", (req, res) => {
    Book.find({})
        .then(dbBooks => res.json(dbBooks))
        .catch(err => {
            res.status(400).json(err);
        });
})

router.delete("/api/mybooks/:id", (req, res) =>{
    Book.findById({_id:req.params.id })
    .then(dbBooks => dbBooks.remove())
    .then(dbBooks => res.json(dbBooks))
    .catch(err => res.status(422).json(err));
})
// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


module.exports = router;

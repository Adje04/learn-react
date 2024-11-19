import nodemon from "nodemon";
import mongoose from "mongoose";
import "./article.js"
import { Article } from "./article.js";

(async () => {
    try {
        await mongoose.connect("mongodb://localhost/testMongoose");
        console.log("connexion réussie avec la bdd");

        /*     const article = new Article(
                 {
                     title: "Sport",
                     content: "football"
                 }
             );
            const result = await article.save()
             console.log(result); */

        /*const result = await Article.create(
            {
                title: "Sport mécanique",
                content: "Formule 1",
                isArchived: "yes",
                countRead: 10,
                categories: ["voyage", "découverte"],
                author: {
                    name: "Oda",
                    address: "Japan"
                },
            }
        ) */

        /*const result = await Article.insertMany([
           {
               title: "Sport mécanique",
               content: "raily"
           },
           {
               title: "Sport mécanique",
               content: "moto cross"
           },
       ]) */

        const result = await Article.countDocuments()
            console.log(`il y a ${result} articles `);

    } catch (error) {
        console.log(error.message);
    }

})();
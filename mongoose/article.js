import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
        validate: {
            validator: (v) => v.charAt(0) === v.charAt(0).toUpperCase(),
            message: (props) => "le premier caractère n'est pas en majuscule"
        }
    },

    content: String,

    isArchived: Boolean,

    countRead: {
        type: Number,
        min: 0
    },

    categories: {
        type: [String],
        enum: ["découverte", "voyage"]
    },

    author: {
        name: String,
        address: String
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },
});

//pour utiliser ce schema on doit le convertir en un model (classe qui permettra d'interagir avec la base de données)
// Ce sont les documents d'une collection qui constituent les instances de la classe (model)
export const Article = mongoose.model('Article', articleSchema);

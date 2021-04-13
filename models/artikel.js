const mongoose = require('mongoose');

const artikelSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    isiBerita: {
        type: String,
        default: true
    },
    image: {
        type: String,
        default: ''
    },
    isShowed: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

artikelSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

artikelSchema.set('toJSON', {
    virtuals: true,
});


exports.Artikel = mongoose.model('Artikel', artikelSchema);

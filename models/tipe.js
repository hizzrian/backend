const mongoose = require('mongoose');

const tipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

tipeSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

tipeSchema.set('toJSON', {
    virtuals: true,
});


exports.Tipe = mongoose.model('Tipe', tipeSchema);

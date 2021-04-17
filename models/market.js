const mongoose = require('mongoose');

const marketSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    marketName: {
        type: String,
        required: true,
    },
    product: [{
        type: String,
        required: false
    }],
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

marketSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

marketSchema.set('toJSON', {
    virtuals: true,
});


exports.Market = mongoose.model('Market', marketSchema);

const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const db = require('./db');
const Model = Sequelize.Model;
// const users = [
//     {
//         id: '1',
//         email: '1760131',
//         password: '$2b$10$SDLblW5wg5PqJAqq.vR.s.0aCJfHMwkjGc.o4MLnzeE2N3TlEGGDW',
//         displayName: 'Nguyen Van Nhat'
//     },
//     {
//         id: '1',
//         email: '1760057',
//         password: '$2b$10$sTrBCRx1QYd857GcTz.3supgeGZPIei1d2GinrSIQUGv05q.eTvfS',
//         displayName: 'Minh Hau Pham Thi'
//     },

// ]

class AccountInfo extends Model {
}

AccountInfo.init({
    //attributes
    STK: {
        //so tai khoan
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    balance: {
        //so du tai khoan
        type: Sequelize.STRING,
        allowNull: false,
    },
    currencyUnit: {
        // loai tien te
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    beginDate: {
        //ngay mo the
        type: Sequelize.DATE,
        allowNull: false,
    },
    endDate: {
        //ngay het han
        type: Sequelize.DATE,
        allowNull: false,
    },
    term: {
        // ki han
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    isActive: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    bankID: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    sequelize: db,
    modelName: 'accountinfor'
})




module.exports = User;


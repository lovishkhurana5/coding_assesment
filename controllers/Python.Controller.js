const db = require('../config/sequelize');
const pythonData = db.pythonData;

async function executePython() {
    const PythonShell = require('python-shell').PythonShell;

    PythonShell.run('main.py', null, function (err, results) {
        if (err)
            throw err;

        let data = JSON.parse(results)

        for (const key in data['word']) {
            console.log(data['word'][key]);
            pythonData.create(
                {
                    data: data['word'][key],
                });
        }
    });
}

exports.getPythonData = async (req, res) => {

    await executePython().then((result) => {
        
        return res.status(200).json(
            { "status": "success", "msg": "python script executed & data inserted into db named choudhary" }
        );
    }).catch((err) => { 
        return res.status(422).json(
            { "status": "failure", "msg": "python script execution failed", 'err': err }
        );
    })

}
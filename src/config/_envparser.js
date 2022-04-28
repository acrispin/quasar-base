/*
https://dev.to/jotcomponents/how-use-env-files-in-quasar-1k55
https://www.youtube.com/watch?v=SR_2vbTlF78
https://www.publish0x.com/bala/steps-to-use-env-files-in-your-quasar-framework-project-xvyyxvm
https://forum.quasar-framework.org/topic/6622/how-to-support-multiple-environments/8
https://github.com/quasarframework/quasar/discussions/10234
https://docs.npmjs.com/cli/v8/using-npm/scripts
*/
const dotenv = require("dotenv");

const files = {
    ...dotenv.config({ path: "./src/config/.env" }).parsed,
    ...dotenv.config({ path: "./src/config/.env.local" }).parsed,
    ...dotenv.config({ path: `./src/config/${process.env.ENVIRONMENT}.env` }).parsed,
    ...dotenv.config({ path: `./src/config/${process.env.ENVIRONMENT}.env.local` }).parsed
};

module.exports = function () {
    for (key in files) {
        if (typeof files[key] !== "string") {
            files[key] = JSON.stringify(files[key]);
        }
    }
    return files;
};

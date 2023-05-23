"use strict";
function createIntel(prosesor) {
    console.log(`
    -----------
     terimakasih ${prosesor.brand}, anda telah berhasil membuat prosesor dengan detail berikut:
    ----------
    nama base model: ${prosesor.baseModel}
    nama model: ${prosesor.baseModel}
    kecepatan clock: ${prosesor.clockSize}
    turbobosst enable? ${prosesor.turboBoost}
   total core : ${prosesor.coreTotal}
    `);
}
function createAMD(prosesor) {
    console.log(`
    -----------
     terimakasih ${prosesor.brand}, anda telah berhasil membuat prosesor dengan detail berikut:
    ----------
    nama base model: ${prosesor.baseModel}
    nama model: ${prosesor.baseModel}
    kecepatan clock: ${prosesor.clockSize}
    turbobosst enable? ${prosesor.precisionBoost}
    total core : ${prosesor.coreTotal}
   `);
}
const icorei5 = {
    brand: "intel core i 5",
    baseModel: "core i5",
    modelName: "15-113506",
    clockSize: 4,
    turboBoost: true,
    coreTotal: 2
};
const ryzen3 = {
    brand: "AMD",
    baseModel: "ryzen3",
    modelName: "r-64y",
    clockSize: 6,
    precisionBoost: true,
    coreTotal: "dual core"
};
createIntel(icorei5);
createAMD(ryzen3);

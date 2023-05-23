type CoreCount = 2 |4 | 8 | 12
type CoreName = "DualCore" | "QuadCore" | "OktaCore"
type Core = CoreCount | CoreName;
interface IProsessor {
  brand: string;
  baseModel:string;
  modelName:string;
  clockSize :number;
  coreTotal: Core;

}




interface Intel extends IProsessor{
turboBoost : boolean
}
interface AMD extends IProsessor{
precisionBoost : boolean
}


function createIntel (prosesor: Intel):void {
  console.log(
    `
    -----------
     terimakasih ${prosesor.brand}, anda telah berhasil membuat prosesor dengan detail berikut:
    ----------
    nama base model: ${prosesor.baseModel}
    nama model: ${prosesor.baseModel}
    kecepatan clock: ${prosesor.clockSize}
    turbobosst enable? ${prosesor.turboBoost}
   total core : ${prosesor.coreTotal}
    `
  );
}
function createAMD (prosesor: AMD):void {
  console.log(
    `
    -----------
     terimakasih ${prosesor.brand}, anda telah berhasil membuat prosesor dengan detail berikut:
    ----------
    nama base model: ${prosesor.baseModel}
    nama model: ${prosesor.baseModel}
    kecepatan clock: ${prosesor.clockSize}
    turbobosst enable? ${prosesor.precisionBoost}
    total core : ${prosesor.coreTotal}
   `
  );
}

const icorei5 :Intel = {
  brand: "intel core i 5",
  baseModel:"core i5",
  modelName:"15-113506",
  clockSize :4,
  turboBoost: true,
  coreTotal:2

}
const ryzen3 :AMD = {
  brand: "AMD",
  baseModel:"ryzen3",
  modelName:"r-64y",
  clockSize :6,
  precisionBoost: true,
  coreTotal:"DualCore"

}
createIntel(icorei5);
createAMD(ryzen3);
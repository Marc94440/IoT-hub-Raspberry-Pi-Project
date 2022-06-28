/*
* IoT Hub Raspberry Pi NodeJS - Microsoft Sample Code - Copyright (c) 2017 - Licensed MIT
*/
'use strict';
const rpio=require('rpio');

const pinIR=8//Initialise le pin
rpio.open(pinIR,rpio.INPUT);
const pinBuzzer=10//Initialise le pin
rpio.open(pinBuzzer,rpio.OUTPUT);
rpio.write(pinBuzzer,rpio.LOW);
const pinPWM=12;//initialise le pin

const valMax=1024;
const div=64;
const valeur=500;


rpio.open(pinPWM,rpio.PWM);
rpio.pwmSetClockDivider(div);//valeur (doit etre une puissance de 2) qui divise 19.2MHz ici on a 128 donc 150KHz
rpio.pwmSetRange(pinPWM,valMax);//Valeur max de la largeur de l'impulsion
rpio.pwmSetData(pinPWM,valeur);

function Sensor(/* options */) {
  // nothing todo
}

Sensor.prototype.init = function (callback) {
  // nothing todo
  callback();
}

Sensor.prototype.read = function (callback) {
  callback(null, {
    temperature: temp(20, 30),
    humidity: random(60, 80),
    infrared : rpio.read(pinIR),//entier entre 0 et 1
    weight: random(0,1)
  });
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}
function temp(min, max) {
  const temps=Math.random() * (max - min) + min;
  if(temps > 28) {
    rpio.sleep(1);//fréquence entre les bips
    rpio.write(pinBuzzer,rpio.HIGH);
    rpio.msleep(300);//durée du bip //msleep est en millisecond et sleep en second
    rpio.write(pinBuzzer,rpio.LOW);
  }
  return temps;
}
rpio.pwmSetData(pinPWM,0);

module.exports = Sensor;

# IoT-Hub-Raspberry-Pi-Project

### Introduction
<x>
<Node.js application for a Raspberry Pi to control an industry 4.0 factory mock-up using Microsoft's cloud (Azure IoT Hub). While making (photo maquette)>
<This project was presented to me as a 2 months internship at [Dynagile Consulting](https://en.dynagile.com/) to showcase client the usefulness of>
                                                                                                   
### Installation
<Branchement>  
                                                                                                   
On your Raspberry Pi or using SSH, first install the latest version of nodejs : 
```bash
curl -sL http://deb.nodesource.com/setup_18.x | sudo -E bash
sudo apt-get -y install nodejs                                                                                                   
```                                                                                                 
Then clone the repository in a folder named IoT_App in the Pi Desktop :
```bash
git clone https://github.com/Marc94440/IoT-Hub-Raspberry-Pi-Project Desktop/IoT_App                           
```
Now let's install all the necesarry packages : 
```bash
cd Desktop/IoT_App
npm install
npm install rpio --save 
```
To change the initialization variable :    
```bash
nano config.json       
```
<photo>
Run the application by typing the following command :
  
```bash
sudo node index1.js 'YOUR AZURE IOT HUB DEVICE CONNECTION STRING'  
```
  
### Credit
This code is based on a sample code from Azure. 

the original code is available here : https://github.com/Azure-Samples/azure-iot-samples-node/tree/master/iot-hub/Tutorials/RaspberryPiApp
And the step to step tutorial here : https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-raspberry-pi-kit-node-get-started

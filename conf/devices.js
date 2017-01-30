//whenever you need a sensor to have more configurations, i.e. properties inside dht11 or ma135 in this example.
//you should add them to the Sensor class in the arduino code and parse them in the init function of the class
module.exports = {
  "delay": 5000,
  //"host": "localhost",
  "port": 8086,
  "devices": {
    "esp-device-id1": {
      "dht11": {
        "pin": "D3",
        "location": "kitchen"
      },
      "dht22": {
        "pin": "A1",
        "location": "living room"
      }
    },
    "some-other-esp-id": {
      "mq135": {
        "pin": "A0",
        "location": "kitchen",
        "min-range": 0, //these two values are needed to map the voltages from 0 to  3.3 V on the Wemos due to the resistor divisor
        "max-range": 930
      }
    }
  }
};

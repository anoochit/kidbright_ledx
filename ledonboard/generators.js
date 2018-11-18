Blockly.JavaScript['LEDonboard.random-text'] = function (block) {
  return "DEV_IO.LEDonboard().random();\n";
};

Blockly.JavaScript['LEDonboard.led_bluetooth'] = function (block) {
  var dropdown_state = block.getFieldValue('STATE');
  return "gpio_set_level(BT_LED_GPIO, "+ dropdown_state +");\n";
};

Blockly.JavaScript['LEDonboard.led_wifi'] = function (block) {
  var dropdown_state = block.getFieldValue('STATE');
  return "gpio_set_level(WIFI_LED_GPIO, "+ dropdown_state +");\n";
};

Blockly.JavaScript['LEDonboard.led_ntp'] = function (block) {
  var dropdown_state = block.getFieldValue('STATE');
  return "gpio_set_level(NTP_LED_GPIO, "+ dropdown_state +");\n";
};

Blockly.JavaScript['LEDonboard.led_iot'] = function (block) {
  var dropdown_state = block.getFieldValue('STATE');
  return "gpio_set_level(IOT_LED_GPIO, "+ dropdown_state +");\n";
};

Blockly.JavaScript['LEDonboard.led_blink'] = function (block) {
  return "DEV_IO.LEDonboard().blink();\n";
};
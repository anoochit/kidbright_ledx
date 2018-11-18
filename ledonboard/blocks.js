Blockly.Blocks['LEDonboard.led_bluetooth'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LEDonboard_BT_BLINK_TITLE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEDonboard_LED_ON_TITLE, "0"], [Blockly.Msg.LEDonboard_LED_OFF_TITLE, "1"]]), "STATE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.LEDonboard_BT_BLINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LEDonboard_BT_BLINK_HELPURL);
    }
};

Blockly.Blocks['LEDonboard.led_wifi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LEDonboard_WIFI_BLINK_TITLE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEDonboard_LED_ON_TITLE, "0"], [Blockly.Msg.LEDonboard_LED_OFF_TITLE, "1"]]), "STATE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.LEDonboard_WIFI_BLINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LEDonboard_WIFI_BLINK_HELPURL);
    }
};

Blockly.Blocks['LEDonboard.led_ntp'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LEDonboard_NTP_BLINK_TITLE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEDonboard_LED_ON_TITLE, "0"], [Blockly.Msg.LEDonboard_LED_OFF_TITLE, "1"]]), "STATE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.LEDonboard_NTP_BLINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LEDonboard_NTP_BLINK_HELPURL);
    }
};

Blockly.Blocks['LEDonboard.led_iot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LEDonboard_IOT_BLINK_TITLE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEDonboard_LED_ON_TITLE, "0"], [Blockly.Msg.LEDonboard_LED_OFF_TITLE, "1"]]), "STATE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.LEDonboard_IOT_BLINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LEDonboard_IOT_BLINK_HELPURL);
    }
};

Blockly.Blocks['LEDonboard.led_blink'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LEDonboard_BLINK_LED_TITLE)
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.LEDonboard_BLINK_LED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LEDonboard_BLINK_LED_HELPURL);
    }
};
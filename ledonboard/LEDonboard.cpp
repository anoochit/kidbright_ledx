#include <stdio.h>
#include <string.h>
#include <math.h>
#include "esp_system.h"
#include "kidbright32.h"
#include "LEDonboard.h"


LEDonboard::LEDonboard() {
  polling_ms = LEDonboard_POLLING_MS;
}

void LEDonboard::init(void) {
  state = s_detect;
  initialized = true;
}

int LEDonboard::prop_count(void) {
  // not supported
  return 0;
}

bool LEDonboard::prop_name(int index, char *name) {
  // not supported
  return false;
}

bool LEDonboard::prop_unit(int index, char *unit) {
  // not supported
  return false;
}

bool LEDonboard::prop_attr(int index, char *attr) {
  // not supported
  return false;
}

bool LEDonboard::prop_read(int index, char *value) {
  // not supported
  return false;
}

bool LEDonboard::prop_write(int index, char *value) {
  // not supported
  return false;
}

void LEDonboard::process(Driver *drv) {
}

char* LEDonboard::random() {
    return "nat-random";
}

void LEDonboard::blink(void) {
    gpio_set_level(WIFI_LED_GPIO, 0);
    vTaskDelay(1000 / portTICK_RATE_MS);
    gpio_set_level(WIFI_LED_GPIO, 1);
    vTaskDelay(1000 / portTICK_RATE_MS);
}
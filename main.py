def on_button_pressed_a():
    for i in range(256):
        radio.set_group(0)
        i += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

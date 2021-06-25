def on_received_value(name, value):
    global 接続数, LEDX, LEDY, 無線グループ
    if 接続数 <= 25:
        if radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH) > 2:
            radio.set_group(無線グループ)
            接続数 += 1
            if not (接続数 % 5 == 0):
                LEDX = 接続数 % 5
            else:
                LEDX = 4
            if 接続数 < 6:
                LEDY = 0
            if 接続数 > 5 and 接続数 < 11:
                LEDY = 1
            if 接続数 > 10 and 接続数 < 16:
                LEDY = 2
            if 接続数 > 15 and 接続数 < 21:
                LEDY = 3
            if 接続数 > 20 and 接続数 < 26:
                LEDY = 4
            led.plot(LEDX, LEDY)
            if 接続数 / 10 == 0:
                無線グループ += 1
    else:
        pass
radio.on_received_value(on_received_value)

LEDY = 0
LEDX = 0
無線グループ = 0
接続数 = 0
radio.set_frequency_band(25)
接続数 = 0
無線グループ = 1
LEDX = 0
LEDY = 0
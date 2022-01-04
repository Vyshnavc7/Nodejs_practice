import RPi. GPIO as GPIO 2 import time

r1=8

r2=10

LED1-12

LED2=16

def setup():

GPIO setmode (GPIO. BOARD)

GPIO.setup(r1,GPIO. OUT) GPIO.setup(LED1, GPIO. OUT)

GPIO.setup(LED2, GPIO. OUT) GPIO.setup (r2, GPIO. OUT)

def Logic00():

GPIO.output (LED1, True) GPIO.output (LED2, True)

GPIO output (r1, True) GPIO output (r2. True)

def logic01(): GPIO output (LED1, True)

GPIO.output (LED2, False)

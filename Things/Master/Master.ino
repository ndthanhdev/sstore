/*
 Name:		Master.ino
 Created:	3/27/2017 8:46:06 PM
 Author:	duyth
*/

#include <EthernetUdp.h>
#include <EthernetServer.h>
#include <EthernetClient.h>
#include <Dns.h>
#include <Dhcp.h>
#include <SoftwareSerial.h>

#define BAUD (9600)

#define RX 8
#define TX 9

#define TOPIC_RECEIVE "s2d/2"
#define TOPIC_TRANSMIT "d2s"

#include <SPI.h>
#include <Ethernet.h>
#include <PubSubClient.h>

byte mac[] = { 0xDE, 0xED, 0xBA, 0xFE, 0xFE, 0xED };
IPAddress server(172, 16, 20, 35);

SoftwareSerial commandTransporter(RX, TX);

EthernetClient ethClient;
PubSubClient client(ethClient);



void setup() {

	Serial.begin(BAUD);
	Serial.println("initializing...");

	setupEthernetShield();

	commandTransporter.begin(BAUD);

	//client.setServer("test.mosquitto.org", 1883);
	client.setServer(server, 11883);

	client.setCallback(callback);



	// Allow the hardware to sort itself out
	delay(1500);
	Serial.println("initialized.");
}

void loop() {
	if (!client.connected()) {
		reconnect();
	}
	client.loop();
}


void callback(char* topic, byte* payload, unsigned int length) {
	String inString = String((char*)payload);
	Serial.print("Message arrived [");
	Serial.print(topic);
	Serial.print("] ");
	Serial.print(inString);

	Serial.print("->");

	String value = inString.substring(0,length); 
	Serial.println(value);
	commandTransporter.println(value.toInt());

	while (!commandTransporter.available()) {
		Serial.println("waiting...");
		delay(3000);
	}
	while (commandTransporter.available()) {
		int back = commandTransporter.read();		
	}
	publicOKToServer();
	
}

void reconnect() {
	// Loop until we're reconnected
	while (!client.connected()) {
		Serial.print("Attempting MQTT connection...");
		// Attempt to connect
		if (client.connect("arduinoClient")) {
			Serial.println("connected");
			// Once connected, publish an announcement...
			//client.publish("a", "hello server");
			// ... and resubscribe
			client.subscribe(TOPIC_RECEIVE);
		}
		else {
			Serial.print("failed, rc=");
			Serial.print(client.state());
			Serial.println(" try again in 5 seconds");
			// Wait 5 seconds before retrying
			delay(5000);
		}
	}
}

void publicOKToServer() {
	// Loop until we're reconnected
	while (!client.connected()) {
		Serial.print("Attempting MQTT connection...");
		// Attempt to connect
		if (client.connect("arduinoClient")) {
			Serial.println("connected");
		}
		else {
			Serial.print("failed, rc=");
			Serial.print(client.state());
			Serial.println(" try again in 5 seconds");
			// Wait 5 seconds before retrying
			delay(5000);
		}
	}
	// Once connected, publish an announcement...
	client.publish(TOPIC_TRANSMIT, "OK");
	Serial.println("OK");
}

void setupEthernetShield() {
	// start the Ethernet connection:
	if (Ethernet.begin(mac) == 0) {
		Serial.println("Failed to configure Ethernet using DHCP");
		// no point in carrying on, so do nothing forevermore:
		for (;;)
			;
	}
	// print your local IP address:
	Serial.println(Ethernet.localIP());
}